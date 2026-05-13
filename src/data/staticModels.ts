export interface SpecCategory {
  title: string;
  items: string[];
}

export interface StaticModel {
  slug: string;
  title: string;
  subtitle?: string;
  uid: string;
  isHybrid?: boolean;
  specs: SpecCategory[];
}

const SOLAR_PANELS: SpecCategory = {
  title: "Solar Panels",
  items: ["315W Roof-mounted solar panels", "Fitted with a hybrid system"],
};

const ECO_ADVANTAGES: SpecCategory = {
  title: "Eco Advantages",
  items: [
    "PIR sensor activated lighting",
    "Webasto diesel heating",
    "100W solar panel",
    "12V Eco water supply system",
    "Efficient 3-way battery charging system",
  ],
};

const _models_unordered: StaticModel[] = [
  {
    slug: "25ft-solar-static",
    title: "25ft Solar Static",
    uid: "bc0d90221940958c3d321b50e9e36750",
    isHybrid: true,
    specs: [
      SOLAR_PANELS,
      { title: "Generator", items: ["7 KVA Generator", "Full service intervals included"] },
      {
        title: "Toilet",
        items: [
          "x1 toilet cubicle with external access",
          "No mains required chemical toilet",
          "Hand wash sink",
          "Hands-free low-power electric hand dryers",
        ],
      },
      {
        title: "Office",
        items: [
          "x2 office chairs",
          "x2 desks & shelving",
          "Whiteboard & notice board",
          "12v diesel heating system throughout",
          "6x 24V USB charging power outlets",
          "6x 500W 230V low power sockets",
        ],
      },
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen; sink, cupboards, worktop",
          "Appliances; microwave & kettle",
          "Fridge",
          "Notice board",
        ],
      },
      {
        title: "Dry Room",
        items: [
          "x1 cubicle with external access",
          "Bench seating with under storage sections",
          "12v diesel heating",
          "Clothes hooks",
        ],
      },
      {
        title: "Canteen",
        items: [
          "Seating for 15 people",
          "12v diesel heating system throughout",
          "Bench seating with under storage sections",
          "3x 24V USB charging power outlets",
          "3x 500W 230V low power sockets",
          "External LED PIR lighting",
        ],
      },
    ],
  },
  {
    slug: "26ft-junior-plus",
    title: "26ft Junior Plus",
    uid: "540d7c150e14b3f469a0cb973cb4b84b",
    specs: [
      {
        title: "Generator / Drying Room",
        items: [
          "15 KVA Generator",
          "Full-service intervals included",
          "800L bundled diesel tank for extended running periods",
        ],
      },
      {
        title: "Toilet",
        items: [
          "Toilet cubicle/s",
          "Hand washing / drying station",
          "No-mains required chemical toilet",
        ],
      },
      {
        title: "Drying Room",
        items: [
          "Fully heated",
          "Internal/external access dependant on model",
          "Bench seating",
          "Clothes hooks",
        ],
      },
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen; sink, cupboards & worktop",
          "Appliances; microwave, fridge & kettle",
          "Bin",
        ],
      },
      {
        title: "Canteen",
        items: [
          "Seating for up to model capacity",
          "Notice boards",
          "Coat hooks",
          "Fan heaters",
        ],
      },
      { title: "Office", items: ["x2 office chair", "Notice board", "Desks & shelving"] },
      ECO_ADVANTAGES,
    ],
  },
  {
    slug: "28ft-eco-hybrid",
    title: "28ft Eco Hybrid",
    uid: "1fd4831857cb674dbb1b19b27536690f",
    isHybrid: true,
    specs: [
      SOLAR_PANELS,
      { title: "Generator", items: ["11 KVA Generator", "Full service intervals included"] },
      {
        title: "Toilet",
        items: [
          "x2 toilet cubicle with external access",
          "No mains required chemical toilet",
          "Hand wash sink",
          "Hands-free low-power electric hand dryers",
        ],
      },
      {
        title: "Office",
        items: [
          "x2 office chairs",
          "x2 desks & shelving",
          "Whiteboard & notice board",
          "12v diesel heating system throughout",
          "2x 24V USB charging power outlets",
          "4x 500W 230V low power sockets",
        ],
      },
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen; sink, cupboards, worktop",
          "Appliances; microwave & kettle",
          "Fridge",
          "Notice board",
        ],
      },
      {
        title: "Dry Room",
        items: [
          "x1 cubicle with external access",
          "Bench seating with under storage sections",
          "Clothes hooks",
          "12v diesel heating",
        ],
      },
      {
        title: "Canteen",
        items: [
          "Seating for 16 people",
          "12v diesel heating system throughout",
          "Bench seating with under storage sections",
          "4x 500W 230V low power sockets",
          "External LED PIR lighting",
        ],
      },
    ],
  },
  {
    slug: "32ft-master",
    title: "32ft Master",
    uid: "dd7aef72afd940ffa72ca9a58fef1963",
    specs: [
      {
        title: "Generator / Drying Room",
        items: [
          "15 KVA Generator",
          "Full service intervals included",
          "800L bundled diesel tank for extended running periods",
        ],
      },
      {
        title: "Toilet",
        items: [
          "Toilet cubicle/s",
          "Hand washing / drying station",
          "No-mains required chemical toilet",
          "Fully flushing toilets (grand master only)",
        ],
      },
      {
        title: "Drying Room",
        items: [
          "Fully heated",
          "Internal/external access dependant on model",
          "Bench seating",
          "Clothes hooks",
        ],
      },
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen; sink, cupboards & worktop",
          "Appliances; microwave, fridge & kettle",
          "Bin",
        ],
      },
      {
        title: "Canteen",
        items: [
          "Seating for up to model capacity",
          "Notice boards",
          "Coat hooks",
          "Water cooler",
          "Fan heaters",
        ],
      },
      { title: "Office", items: ["x2 office chair", "Desks & shelving", "Notice board"] },
      ECO_ADVANTAGES,
    ],
  },
];

export const getStaticModel = (slug: string) =>
  staticModels.find((m) => m.slug === slug);
