import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import DepotFinder from "@/pages/DepotFinder";

vi.mock("@/components/Navbar", () => ({ default: () => null }));
vi.mock("@/components/Footer", () => ({ default: () => null }));
vi.mock("@/integrations/supabase/client", () => ({
  supabase: { functions: { invoke: vi.fn(async () => ({
    data: {
      origin: { postcode: "DN8 5SX", lat: 53.56, lng: -0.87 },
      results: [{ code: "5400", name: "Sandtoft", roadMiles: 2, driveMinutes: 5,
        straightMiles: 1, polyline: "route" }],
    },
    error: null,
  })) } },
}));

const mapsCreated = vi.fn();
const fitBounds = vi.fn();
const detachMarker = vi.fn();
const detachPolyline = vi.fn();
const closeInfo = vi.fn();
const clearListeners = vi.fn();

beforeEach(() => {
  vi.clearAllMocks();
  vi.stubGlobal("google", { maps: {
    Map: function () { mapsCreated(); return { fitBounds }; },
    LatLngBounds: function () { return { extend: vi.fn() }; },
    InfoWindow: function () { return { close: closeInfo, setContent: vi.fn(), open: vi.fn() }; },
    Marker: function () { return { addListener: vi.fn(), setMap: detachMarker }; },
    Polyline: function () { return { setMap: detachPolyline }; },
    geometry: { encoding: { decodePath: () => [] } },
    SymbolPath: { CIRCLE: "circle" },
    event: { clearInstanceListeners: clearListeners },
  } });
});

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

async function search() {
  const view = render(<HelmetProvider><DepotFinder /></HelmetProvider>);
  const input = screen.getByRole("textbox", { name: "Site postcode" });
  fireEvent.change(input, { target: { value: "DN8 5SX" } });
  fireEvent.click(screen.getByRole("button", { name: "Find depots" }));
  await waitFor(() => expect(mapsCreated).toHaveBeenCalledTimes(1));
  return { ...view, input };
}

describe("depot finder map lifecycle", () => {
  it("keeps the result map and viewport while the postcode is edited", async () => {
    const { input } = await search();
    fireEvent.change(input, { target: { value: "OX17" } });
    fireEvent.change(input, { target: { value: "OX17 3AS" } });
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(mapsCreated).toHaveBeenCalledTimes(1);
    expect(fitBounds).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByRole("button", { name: "Find depots" }));
    await waitFor(() => expect(mapsCreated).toHaveBeenCalledTimes(2));
  });

  it("detaches markers, routes and listeners when the result map unmounts", async () => {
    const { unmount } = await search();
    unmount();
    expect(detachMarker).toHaveBeenCalledTimes(2);
    expect(detachMarker).toHaveBeenCalledWith(null);
    expect(detachPolyline).toHaveBeenCalledWith(null);
    expect(closeInfo).toHaveBeenCalledTimes(1);
    expect(clearListeners).toHaveBeenCalledTimes(4);
  });
});