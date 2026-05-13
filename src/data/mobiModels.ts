export interface SpecCategory {
  title: string;
  items: string[];
}

export interface MobiModel {
  slug: string;
  title: string;
  subtitle?: string;
  uid: string;
  isHybrid?: boolean;
  specSheet?: string;
  specs: SpecCategory[];
}

const TOWING: SpecCategory = {
  title: "Towing & Setup",
  items: [
    "Standard ball-socket type towbar",
    "Integrated rear lighting",
    "Anti-vandal lockable steel tow bar cover",
    "Hydraulic jack allows wheels to be retracted",
  ],
};

const GENERATOR: SpecCategory = {
  title: "Generator / Drying Room",
  items: [
    "7 kVA Generator",
    "Full-service intervals included",
    "Diesel container & funnel supplied",
    "Fully heated",
    "Clothes hooks",
  ],
};

const TOILET: SpecCategory = {
  title: "Toilet",
  items: [
    "x1 toilet cubicle with external access",
    "Hand washing",
    "No-mains required chemical toilet",
    "High security skylight provides natural light",
  ],
};

const TOILET_TWIN: SpecCategory = {
  ...TOILET,
  items: [
    "x2 toilet cubicle with external access",
    "Hand washing",
    "No-mains required chemical toilet",
    "High security skylight provides natural light",
  ],
};

const HYBRID_TOWING: SpecCategory = {
  title: "Towing & Setup",
  items: [
    "Standard ball-socket type towbar",
    "Integrated rear lighting",
    "Anti-vandal lockable steel tow bar cover",
    "Hydraulic jack allows wheels to be retracted",
    "Road towable",
  ],
};

const HYBRID_RUNNING: SpecCategory = {
  title: "Hybrid Running",
  items: [
    "600W roof-mounted solar panel",
    "6kVA generator",
    "50L fuel tank",
    "Diesel container & funnel supplied",
  ],
};

const HYBRID_DRY_ROOM: SpecCategory = {
  title: "Walk-in Dry Room",
  items: ["12v HVO heater", "Clothes hooks", "Cushioned bench seating"],
};

const HYBRID_KITCHEN: SpecCategory = {
  title: "Kitchen",
  items: [
    "Fitted kitchen - sink, cupboards & worktop",
    "Appliances - microwave & kettle",
    "Bin",
    "Notice board",
  ],
};

const HYBRID_OFFICE: SpecCategory = {
  title: "Office",
  items: [
    "Office desk",
    "x1 chair",
    "Notice board",
    "12v LED lighting",
    "Low energy plug sockets",
    "12v USB power outlets",
  ],
};

const HYBRID_TOILET_SINGLE: SpecCategory = {
  title: "Toilet",
  items: [
    "x1 toilet cubicle with external access",
    "Hand washing / drying station",
    "No-mains required water flush toilet",
    "Safety lock door",
  ],
};

const HYBRID_TOILET_TWIN: SpecCategory = {
  title: "Toilet",
  items: [
    "x2 toilet cubicle with external access",
    "Urinal",
    "Hand washing / drying station",
    "No-mains required water flush toilet",
    "Safety lock door",
  ],
};

const hybridCanteen = (seats: number): SpecCategory => ({
  title: "Canteen",
  items: [
    `Seating for up to ${seats}`,
    "Under-bench storage space",
    "12v LED lighting",
    "Low energy plug sockets",
    "12v USB power outlets",
    "12v HVO heater",
  ],
});

export const mobiModels: MobiModel[] = [
  {
    slug: "12ft-mobi",
    title: "12ft Mobi",
    uid: "8b316178f0d091f7689dfb8b562f36ef",
    specs: [
      GENERATOR,
      TOILET,
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen - sink, cupboards & worktop",
          "Appliances - microwave & kettle",
          "25L freshwater tank",
          "Water cooler",
          "Bin",
          "Notice board",
        ],
      },
      {
        title: "Canteen",
        items: ["Seating for up to 7", "Under-bench storage space", "Plinth heater"],
      },
      TOWING,
    ],
  },
  {
    slug: "16ft-mobi",
    title: "16ft Mobi",
    uid: "7d97dd84f8d1b4f437a9cdce22ec9a8f",
    specs: [
      GENERATOR,
      TOILET,
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen - sink, cupboards & worktop",
          "Appliances - microwave & kettle",
          "25L freshwater tank",
          "Bin",
          "Notice board",
        ],
      },
      {
        title: "Canteen",
        items: ["Seating for up to 12", "Under-bench storage space", "Plinth heater"],
      },
      {
        title: "Additional Seating",
        items: ["Extra seating for 7 people", "Use as extra canteen area", "Use as work area"],
      },
      TOWING,
    ],
  },
  {
    slug: "16ft-mobi-plus",
    title: "16ft Mobi Plus",
    uid: "55a655e74c625fa98b5dfaad02950ee6",
    specs: [
      GENERATOR,
      TOILET,
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen - sink, cupboards & worktop",
          "Appliances - microwave & kettle",
          "25L freshwater tank",
          "Bin",
          "Notice board",
        ],
      },
      {
        title: "Canteen",
        items: ["Seating for up to 10", "Under-bench storage space", "Plinth heater"],
      },
      {
        title: "Office",
        items: ["Large desk", "x1 office chair", "Additional canteen bench seating", "Notice board"],
      },
      TOWING,
    ],
  },
  {
    slug: "20ft-mobi",
    title: "20ft Mobi",
    uid: "f6e58c215f145a61fe3d48394d98ecf8",
    specs: [
      GENERATOR,
      TOILET,
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen - sink, cupboards & worktop",
          "Appliances - microwave & kettle",
          "25L freshwater tank",
          "Water cooler",
          "Bin",
        ],
      },
      {
        title: "Canteen",
        items: ["Seating for up to 17", "Under-bench storage space", "Plinth heater"],
      },
      TOWING,
    ],
  },
  {
    slug: "20ft-mobi-plus",
    title: "20ft Mobi Plus",
    uid: "78d0d5aae467fa6a150c2a1f558eb220",
    specs: [
      GENERATOR,
      TOILET,
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen - sink, cupboards & worktop",
          "Appliances - microwave & kettle",
          "25L freshwater tank",
          "Bin",
        ],
      },
      {
        title: "Office",
        items: ["Large desk", "x1 office chair", "Notice board"],
      },
      {
        title: "Canteen",
        items: ["Seating up to 13", "Under-bench storage space", "Plinth heater"],
      },
      TOWING,
    ],
  },
  {
    slug: "24ft-mobi",
    title: "24ft Mobi",
    uid: "718203c553ab7aac3268319b9aae8427",
    specs: [
      GENERATOR,
      TOILET,
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen - sink, cupboards & worktop",
          "Appliances - microwave & kettle",
          "25L freshwater tank",
          "Bin",
          "Notice board",
        ],
      },
      {
        title: "Office",
        items: ["x2 office chairs", "x2 desks", "Notice board"],
      },
      {
        title: "Canteen",
        items: ["Seating up to 15 people", "Under-bench storage space", "Plinth heater"],
      },
      TOWING,
    ],
  },
  {
    slug: "24ft-mobi-twin-toilet",
    title: "24ft Mobi Twin Toilet",
    uid: "4246e01f4aa1f753693be5f0cd6bd673",
    specs: [
      GENERATOR,
      TOILET_TWIN,
      {
        title: "Kitchen",
        items: [
          "Fitted kitchen - sink, cupboards & worktop",
          "Appliances - microwave & kettle",
          "25L freshwater tank",
          "Bin",
          "Notice board",
        ],
      },
      {
        title: "Office",
        items: ["x1 office chair", "x1 desk & shelving", "Notice board"],
      },
      {
        title: "Canteen",
        items: ["Seating up to 13 people", "Under-bench storage space", "Plinth heater"],
      },
      {
        title: "Drying Room",
        items: ["Fully heated - plinth & wall heaters", "Bench & clothes hooks"],
      },
      TOWING,
    ],
  },
  {
    slug: "12ft-hybrid-mobi",
    title: "12ft Hybrid Mobi",
    subtitle: "7 Person",
    uid: "926eed1261b29291590f8366862e09d4",
    isHybrid: true,
    specs: [
      hybridCanteen(7),
      HYBRID_KITCHEN,
      HYBRID_RUNNING,
      HYBRID_DRY_ROOM,
      HYBRID_TOILET_SINGLE,
      HYBRID_TOWING,
    ],
  },
  {
    slug: "16ft-hybrid-mobi",
    title: "16ft Hybrid Mobi",
    subtitle: "10 Person",
    uid: "3c7277a73a0a7a47c4a6cffb8d599f41",
    isHybrid: true,
    specs: [
      hybridCanteen(10),
      HYBRID_KITCHEN,
      HYBRID_RUNNING,
      HYBRID_DRY_ROOM,
      HYBRID_OFFICE,
      HYBRID_TOILET_SINGLE,
      HYBRID_TOWING,
    ],
  },
  {
    slug: "24ft-hybrid-mobi-twin-toilet",
    title: "24ft Hybrid Mobi Twin Toilet",
    subtitle: "14 Person",
    uid: "c81707904798153c440f08d063fa3017",
    isHybrid: true,
    specs: [
      hybridCanteen(14),
      HYBRID_RUNNING,
      HYBRID_DRY_ROOM,
      HYBRID_OFFICE,
      HYBRID_TOILET_TWIN,
      HYBRID_TOWING,
    ],
  },
];

export const getMobiModel = (slug: string) =>
  mobiModels.find((m) => m.slug === slug);
