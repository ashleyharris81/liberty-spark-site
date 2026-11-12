import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

export type ContactPayload = {
  type: "contact";
  firstName: string;
  lastName?: string;
  email: string;
  subject?: string;
  message: string;
  source?: string;
  turnstileToken: string;
};

export type AccountPayload = {
  type: "account";
  companyName: string;
  email: string;
  details: Record<string, string>;
};

/** Sends a form submission to the backend. Throws on failure. */
export async function submitForm(payload: ContactPayload | AccountPayload) {
  if (payload.type === "contact") {
    z.object({
      firstName: z.string().trim().min(1).max(100),
      lastName: z.string().trim().max(100).optional(),
      email: z.string().trim().email().max(255),
      subject: z.string().trim().max(200).optional(),
      message: z.string().trim().min(1).max(2000),
      source: z.string().max(100).optional(),
      turnstileToken: z.string().min(1).max(2048),
    }).parse(payload);
  }
  const { data, error } = await supabase.functions.invoke("submit-form", { body: payload });

  if (error) {
    let details = error.message;
    try {
      const context = (error as { context?: Response }).context;
      if (context && typeof context.text === "function") details = await context.text();
    } catch {
      // keep the original message
    }
    console.error("submit-form failed:", details);
    throw new Error("Submission failed");
  }

  return data;
}
