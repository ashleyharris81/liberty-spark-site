import { supabase } from "@/integrations/supabase/client";

export type ContactPayload = {
  type: "contact";
  firstName: string;
  lastName?: string;
  email: string;
  subject?: string;
  message: string;
  source?: string;
};

export type AccountPayload = {
  type: "account";
  companyName: string;
  email: string;
  details: Record<string, string>;
};

/** Sends a form submission to the backend. Throws on failure. */
export async function submitForm(payload: ContactPayload | AccountPayload) {
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
