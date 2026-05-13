export interface SpecCategory {
  title: string;
  items: string[];
}

export interface SolarProduct {
  slug: string;
  title: string;
  uid: string;
  category: "mobile" | "loo";
  specSheet?: string;
  specs: SpecCategory[];
}

// ---------- Solar Mobile Welfare specs ----------
const TOWING: SpecCategory = {
  title: "Towing & Setup",
  items: [
    "Standard ball-socket type towbar",
    "Integrated rear lighting",
    "Hydraulic system allows wheels to be retracted",
  ],
};

const DRY_ROOM: SpecCategory = {
  title: "Dry Room",
  items: ["24V air-blown diesel heater", "Coat hooks", "Bench seating", "Fully heated"],
};

const BATTERY: SpecCategory = {
  title: "Battery",
  items: [
    "Lithium-ion battery",
    "Back-up generator",
    "SOLARTracK™ remote energy, battery, tank & fault monitoring system",
  ],
};

const TOILET_SINGLE: SpecCategory = {
  title: "Toilet",
  items: [
    "1x toilet cubicle with external access",
    "Freshwater microflush toilet",
    "Hand wash sink",
    "Hands-free low-power electric hand dryers",
  ],
};

const TOILET_DOUBLE: SpecCategory = {
  title: "Toilet",
  items: [
    "2x toilet cubicle with external access",
    "Freshwater microflush toilet",
    "Hand wash sink",
    "Hands-free low-power electric hand dryers",
  ],
};

const RAIN_HARVESTING: SpecCategory = {
  title: "Rain Harvesting",
  items: ["WM PRO™ - rainwater harvesting & greywater recycling system"],
};

const SOLAR_PANELS: SpecCategory = {
  title: "Solar Panels",
  items: ["315W Roof-mounted solar panels"],
};

const TELEMETRY: SpecCategory = {
  title: "Telemetry",
  items: [
    "Customer friendly digital device tracking location, battery, energy, fuel, waste & water",
  ],
};

const KITCHEN_BASE: SpecCategory = {
  title: "Kitchen",
  items: [
    "Fitted kitchen with sink, cupboards & worktop",
    "Appliances - microwave & kettle",
    "Notice board",
  ],
};

const KITCHEN_PLUS: SpecCategory = {
  title: "Kitchen",
  items: [
    "Fitted kitchen with sink, cupboards & worktop",
    "Appliances - microwave & kettle",
    "Fridge",
    "Notice board",
  ],
};

const CANTEEN_12: SpecCategory = {
  title: "Canteen",
  items: [
    "Seating for up to 7 people",
    "Under-bench storage space",
    "4x 24V USB charging power outlets",
    "24V air-blown diesel heater",
    "Internal and external PIR-sensor 24V LED floodlights",
  ],
};

const CANTEEN_20: SpecCategory = {
  title: "Canteen",
  items: [
    "Seating for up to 12 people",
    "Under-bench storage space",
    "4x 24V USB charging power outlets",
    "4x 500W 230V low power sockets",
    "24V air-blown diesel heater",
    "Internal and external PIR-sensor 24V LED floodlights",
  ],
};

const OFFICE_20: SpecCategory = {
  title: "Office",
  items: [
    "1x Office Chair",
    "Fitted desk & work surface",
    "Whiteboard & notice board",
    "24V air blown diesel heater",
    "4x 24V USB-C charging power outlets",
    "2x 500W 230V low power sockets",
  ],
};

// ---------- Solar Loo specs ----------
const POWER_SINGLE: SpecCategory = {
  title: "Power",
  items: [
    "3 x 150W Solar panels with inverter",
    "3 x 150AH Deep cycle batteries",
    "240v Backup battery",
    "Integrated diesel/electric power",
  ],
};

const POWER_TWIN: SpecCategory = {
  title: "Power",
  items: [
    "3 x 185W Solar panels with inverter",
    "3 x 150AH Deep cycle batteries",
    "240v Backup battery",
    "Integrated diesel/electric power",
  ],
};

const LOO_EXTERIOR: SpecCategory = {
  title: "Exterior",
  items: [
    "Secure locking system",
    "Suitable for any location",
    "PIR LED outdoor lighting",
    "Waste tank indicator",
  ],
};

export const solarMobileProducts: SolarProduct[] = [
  {
    slug: "12ft-ultimate-eco",
    title: "12ft Ultimate Eco",
    category: "mobile",
    specSheet: "/downloads/12ft_ultimate_eco.pdf",
    uid: "e167fa58628c9062d8051429040b06f9",
    specs: [CANTEEN_12, TOWING, DRY_ROOM, BATTERY, TOILET_SINGLE, RAIN_HARVESTING, KITCHEN_BASE, SOLAR_PANELS, TELEMETRY],
  },
  {
    slug: "12ft-ultimate-eco-plus",
    title: "12ft Ultimate Eco Plus",
    category: "mobile",
    specSheet: "/downloads/12ft_ultimate_eco_plus.pdf",
    uid: "cc2bc1dcb70121e85dc49d711dffd3c0",
    specs: [CANTEEN_12, TOWING, DRY_ROOM, BATTERY, TOILET_SINGLE, RAIN_HARVESTING, KITCHEN_PLUS, SOLAR_PANELS, TELEMETRY],
  },
  {
    slug: "20ft-ultimate-eco",
    title: "20ft Ultimate Eco",
    category: "mobile",
    specSheet: "/downloads/20ft_ultimate_eco.pdf",
    uid: "c508c767438ac222f1cac1294fbfcde1",
    specs: [CANTEEN_20, TOWING, DRY_ROOM, BATTERY, TOILET_SINGLE, RAIN_HARVESTING, OFFICE_20, KITCHEN_BASE, SOLAR_PANELS, TELEMETRY],
  },
  {
    slug: "20ft-ultimate-eco-plus",
    title: "20ft Ultimate Eco Plus",
    category: "mobile",
    specSheet: "/downloads/20ft_ultimate_eco_plus.pdf",
    uid: "750f03c60dde24f7d87081424513b5f4",
    specs: [CANTEEN_20, TOWING, DRY_ROOM, BATTERY, TOILET_SINGLE, RAIN_HARVESTING, OFFICE_20, KITCHEN_PLUS, SOLAR_PANELS, TELEMETRY],
  },
  {
    slug: "24ft-ultimate-eco-plus",
    title: "24ft Ultimate Eco Plus",
    category: "mobile",
    specSheet: "/downloads/24ft_ultimate_eco_plus.pdf",
    uid: "a1c53ee2fffe88785f5e3f8798030aa6",
    specs: [CANTEEN_20, TOWING, DRY_ROOM, BATTERY, TOILET_DOUBLE, RAIN_HARVESTING, OFFICE_20, KITCHEN_PLUS, SOLAR_PANELS, TELEMETRY],
  },
];

export const solarLooProducts: SolarProduct[] = [
  {
    slug: "single-solar-loo",
    title: "Single Solar Loo",
    category: "loo",
    specSheet: "/downloads/solar_loo_single.pdf",
    uid: "72c99cace1b5f8642fab7ab476c7c65c",
    specs: [
      {
        title: "Specifications",
        items: [
          "Size (mm): 2670 L x 1780 W x 2625 H",
          "500L Waste tank",
          "Drop through toilet",
          "Stainless steel sink",
          "400L Fresh water tank",
          "53L Diesel tank",
        ],
      },
      {
        title: "Interior",
        items: [
          "Single toilet interior",
          "Quality fittings",
          "12v Diesel Webasto water heating system",
          "On demand hot water",
          "Hot & cold freshwater taps",
          "Feminine hygiene bins",
          "Unisex facility",
        ],
      },
      POWER_SINGLE,
      LOO_EXTERIOR,
    ],
  },
  {
    slug: "twin-solar-loo",
    title: "Twin Solar Loo",
    category: "loo",
    specSheet: "/downloads/solar_loo_twin.pdf",
    uid: "8ab52ab4ab0dbb598cf1c432526e5b39",
    specs: [
      {
        title: "Specifications",
        items: [
          "Size (mm): 2670 L x 2560 W x 2625 H",
          "800L Waste tank",
          "Drop through toilet",
          "Stainless steel sink",
          "400L Fresh water tank",
          "53L Diesel tank",
        ],
      },
      {
        title: "Interior",
        items: [
          "Two single toilets with external access",
          "Quality fittings",
          "12v Diesel Webasto water heating system",
          "On demand hot water",
          "Hot & cold freshwater taps",
          "Feminine hygiene bins",
          "Unisex facility",
        ],
      },
      POWER_TWIN,
      LOO_EXTERIOR,
    ],
  },
];

export const allSolarProducts: SolarProduct[] = [...solarMobileProducts, ...solarLooProducts];

export const getSolarProduct = (slug: string) =>
  allSolarProducts.find((p) => p.slug === slug);
