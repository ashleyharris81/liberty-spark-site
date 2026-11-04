import alex from "@/assets/team/alex-jones.jpg.asset.json";
import ross from "@/assets/team/ross-finnegan.jpg.asset.json";
import hannahW from "@/assets/team/hannah-waud.jpg.asset.json";
import farren from "@/assets/team/farren-buss.jpg.asset.json";
import abbie from "@/assets/team/abbie-dobson.jpg.asset.json";
import hannahH from "@/assets/team/hannah-hornsby.jpg.asset.json";
import marie from "@/assets/team/marie-brown.jpg.asset.json";
import kate from "@/assets/team/kate-fowler.jpg.asset.json";
import rhoda from "@/assets/team/rhoda-oppong.jpg.asset.json";
import jess from "@/assets/team/jess-worner.jpg.asset.json";
import dawn from "@/assets/team/dawn-bruce.jpg.asset.json";
import abi from "@/assets/team/abi-roberts.jpg.asset.json";
import vanessa from "@/assets/team/vanessa-dickinson.jpg.asset.json";
import khloe from "@/assets/team/khloe-wooldridge.jpg.asset.json";
import karen from "@/assets/team/karen-beevers.jpg.asset.json";
import megan from "@/assets/team/megan-evans.jpg.asset.json";
import dan from "@/assets/team/dan-fenwick.jpg.asset.json";
import carol from "@/assets/team/carol-black.jpg.asset.json";
import marissa from "@/assets/team/marissa-barley.jpg.asset.json";
import samuel from "@/assets/team/samuel-piggott.jpg.asset.json";

export interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  bio?: string[];
}

/** Rows follow the client's About Us mockup. */
export const teamRows: TeamMember[][] = [
  [
    {
      name: "Alex Jones",
      role: "Group Managing Director",
      photo: alex.url,
      bio: [
        "I oversee the strategic direction at Liberty, we have ambitious growth plans over the next 5 years that will see our hire fleet, internal team members and depot network expand in size. We also have exciting plans to bring in new technologies into the business that will improve customer service.",
        "Back in 2018, we supplied a prestigious Joint Venture of two tier 1 contractors with over 30 welfare units across a stretch of the M5, Birmingham. At the time, it was the largest scaffolding site in Europe. Overall, the supply of welfare was a huge success, and we managed to secure another location with the same customer.",
        "No day is the same, no matter what the challenge is thrown at us, our team strive for a solution, we are customer first, always. Also it helps that we have a brewery and bar on site!",
      ],
    },
    { name: "Ross Finnegan", role: "Director", photo: ross.url },
  ],
  [
    {
      name: "Hannah Waud",
      role: "Regional Sales Manager",
      photo: hannahW.url,
      bio: [
        "There is never a dull day working at Liberty. The hire industry tends to be a chaotic environment to work in but the office banter, team player attitude of my colleagues and variety of customers we deal with always leaves me smiling at the end of the day.",
      ],
    },
    {
      name: "Farren Buss",
      role: "Regional Sales Manager",
      photo: farren.url,
      bio: [
        "As Regional Sales Manager, my role is to build strong relationships with customers, develop new business opportunities and ensure we provide the right welfare and accommodation solutions for every project.",
        "What I enjoy most is the buzz of taking a project from that first enquiry all the way through to delivery, and working collaboratively with customers and colleagues to turn a challenging requirement into a successful outcome.",
        "The people make Liberty special. Having come from a larger corporate business, moving to a family-run company has been a real breath of fresh air. Everyone is approachable, supportive and willing to help.",
      ],
    },
    {
      name: "Abbie Dobson",
      role: "Sales Executive",
      photo: abbie.url,
      bio: [
        "My job role mainly consists of meeting new and existing customers, which is always a pleasure. I also follow the hiring process from start to finish to reduce any potential issues.",
        "My favourite recent project was for a well-known house builder who purchased a large office unit - it was fun to work out their ideal set up and layout plan with them.",
        "I enjoy working at Liberty as we're like a family and no one day is a dull day.",
      ],
    },
    {
      name: "Hannah Hornsby",
      role: "Group Marketing Executive",
      photo: hannahH.url,
      bio: [
        "As Group Marketing Executive I handle all aspects of the company's marketing - designing product brochures, launching new product ranges, managing social media, creating advertising and video content, managing the website, writing engaging copy and ensuring a strong brand identity throughout.",
        "I love the family feel we have here at Liberty. We have separate teams but there's no division - we all get along, have a laugh and a giggle, which really makes my working day brighter.",
      ],
    },
  ],
  [
    {
      name: "Marie Brown",
      role: "Head of Customer Relations",
      photo: marie.url,
      bio: [
        "I joined in April 2026 and my role encompasses overall responsibility for the Hire Coordinators, Customer Service, Toilet Services and the Field Engineers.",
        "I've enjoyed recruiting new team members to strengthen our team as we go on our journey of growth, and improving our ways of working with a customer-centric approach.",
        "The people who work here are a dedicated team who work together to offer solutions and that personal touch.",
      ],
    },
  ],
  [
    {
      name: "Kate Fowler",
      role: "Off Hire Supervisor",
      photo: kate.url,
      bio: [
        "I've worked at Liberty for 8 years, overseeing the smooth coordination of cabin hire and off-hire arrangements. I manage customer requests to ensure cabins are booked, scheduled and off-hired efficiently, from initial booking through to completion. I enjoy that no day is the same, the many great characters within our departments, and plenty of laughs.",
      ],
    },
    {
      name: "Rhoda Oppong",
      role: "Hire Desk Coordinator",
      bio: [
        "My role involves helping coordinate the transport of welfare units when they are coming off hire, making sure everything is organised and runs smoothly. I enjoy the variety of the role and the friendly, welcoming environment - there's a real sense of teamwork and helping each other out.",
      ],
    },
    {
      name: "Jess Worner",
      role: "On Hires Supervisor",
      bio: [
        "I oversee the day-to-day coordination of deliveries for our mobile and static welfare units, as well as marketing suites, working closely with customers to ensure a smooth and efficient service.",
        "The best part about working at Liberty is definitely the people. Everyone is supportive, approachable, and always willing to help.",
      ],
    },
    {
      name: "Dawn Bruce",
      role: "Hire Desk Coordinator",
      bio: [
        "It is great to have joined a company that really cares about excellent customer service and equally values its staff highly. We are a friendly and supportive team, plus the Friday bacon sandwiches are a bonus!",
      ],
    },
    {
      name: "Abi Roberts",
      role: "Office Junior/Administrator",
      bio: [
        "I work in the transport team, helping with ETAs for deliveries and collections, and the POCs and PODs. I enjoy working with other people in the office.",
      ],
    },
  ],
  [
    {
      name: "Vanessa Dickinson",
      role: "Aftersales Coordinator",
      bio: [
        "No two days are ever the same - each day is a learning day. I enjoy chatting to customers and site personnel, and knowing I make a small difference in getting their faults rectified. My colleagues are a pleasure to work with and always on hand to support.",
      ],
    },
    {
      name: "Khloe Wooldridge",
      role: "Hire Fleet Service Assistant",
      bio: [
        "I'm part of the waste management team, supporting customers and external tankers by phone and email, raising purchase orders and invoices, and keeping legal certificates up to date. I love building relationships with our customers and helping their day run smoother behind the scenes.",
      ],
    },
    {
      name: "Karen Beevers",
      role: "Hire Fleet Services Assistant",
      bio: [
        "I set up new toilet services for units, deal with customer service queries by phone and email, and liaise with external tanker companies. I enjoy our friendly team who make everyone feel welcome.",
      ],
    },
    {
      name: "Megan Evans",
      role: "Operations Assistant",
      bio: [
        "I support a wide range of administrative and operational tasks, from updating service records across our welfare fleet to coordinating MOTs, servicing and vehicle repairs, and liaising with suppliers.",
        "I particularly enjoy the family feel of the company - a great mix of personalities makes every day different, fun and never quite predictable!",
      ],
    },
  ],
  [
    {
      name: "Dan Fenwick",
      role: "Group Finance Manager",
      bio: [
        "Responsible for the day to day running of the finance department, as well as being the unofficial first line response to IT issues. A project I enjoyed, as stressful as it was, was changing audit companies and getting the first year audit over the line. No two days are ever the same.",
      ],
    },
    {
      name: "Carol Black",
      role: "Accounts Assistant",
      bio: [
        "Purchase ledger, payroll, supplier payments and guardian of the petty cash tin - people only speak to me when they want money! What I enjoy most: my wonderful managers (do I get a pay rise now?)",
      ],
    },
    {
      name: "Marissa Barley",
      role: "Accounts Assistant",
      bio: [
        "Credit control - generally I'm the annoying one! My favourite task is allocating payments when people pay on time, and I enjoy not working weekends so I can do my wedding photography.",
      ],
    },
    {
      name: "Samuel Piggott",
      role: "Accounts Assistant",
      bio: [
        "I process supplier invoices and raise purchase orders. I enjoy using my accounts knowledge to calculate how much money I've lost watching Chelsea lose each season.",
      ],
    },
  ],
];
