import newsAcquisan from "@/assets/news-acquisan.jpg";
import newsCustomerFeedback from "@/assets/news-customer-feedback.png";
import newsDoncaster from "@/assets/news-doncaster.png";
import newsKeepmoat from "@/assets/news-keepmoat.png";
import newsNewYear from "@/assets/news-new-year.jpg";
import newsProductFocus from "@/assets/news-product-focus.jpg";
import newsSolarUpgrade from "@/assets/news-solar-upgrade.jpg";
import newsFunFact from "@/assets/news-fun-fact.jpg";
import newsAjc from "@/assets/news-ajc.jpeg";
import newsMnd from "@/assets/news-mnd.png";
import newsInnovationDay from "@/assets/news-innovation-day.jpg";
import newsCustomerFeedbackTeam from "@/assets/news-customer-feedback-team.jpg.asset.json";
import newsSalesSuites from "@/assets/news-sales-suites.jpg.asset.json";
import newsGoSolar from "@/assets/news-go-solar.jpg.asset.json";
import newsHeatwave from "@/assets/news-heatwave.jpg.asset.json";
import newsMndaCause from "@/assets/news-mnda-cause.jpg.asset.json";
import newsRainwater from "@/assets/news-rainwater-harvesting.jpg.asset.json";


export type NewsArticle = {
  slug: string;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  body: string;
};

const rawArticles: NewsArticle[] = [
  {
    slug: "customer-feedback",
    image: newsCustomerFeedbackTeam.url,
    date: "September 2026",
    title: "Customer Feedback",
    excerpt:
      "At Liberty our customers are our top priority - and when we receive encouraging feedback, we're ecstatic. Here's one we received just before Christmas.",
    body: "At Liberty our customers are our top priority, that's why we pride ourselves on our friendly and approachable sales team, who are on hand to answer any of those technical questions you may have, provide a quote and calculate a sustainability plan, for all our customers striving towards their net zero goals. We also offer a dedicated after care department that deals with any welfare issues you may have, any transport queries, ETAs or potential breakdown complications. Our after-care team give a one-to-one service for any emergency issues, which gives all of our customers much needed peace of mind.\n\nAt Liberty we thrive on positive customer experience and when we receive encouraging feedback, we're ecstatic! Here's one we received just before Christmas:\n\n\u201cI would just like to compliment all at Liberty Guard to the way they perform as well as the standard of the welfare units we get. If we have faults or queries with the units, the backup service we receive is excellent as well as the helpfulness of your on and off hire departments when we require timed deliveries and collections.\u201d",
  },
  {
    slug: "sales-suites-made-for-you",
    image: newsSalesSuites.url,
    date: "September 2026",
    title: "Sales Suites Made For You",
    excerpt:
      "Our bespoke sales suites are designed to deliver an immediate and lasting \u201cwow\u201d factor from the very moment you arrive.",
    body: "Our bespoke sales suites are designed to deliver an immediate and lasting \u201cwow\u201d factor from the very moment you arrive. Every element is carefully considered to create a powerful first impression, setting the tone for an exceptional customer journey. Manufactured to a high specification, our sales suites reflect quality, craftsmanship, and attention to detail throughout, ensuring that luxury is not only seen, but felt. As soon as you step inside, the standard of finish is instantly evident.\n\nFrom the materials selected to the way each space flows, everything is designed to feel refined, comfortable, and welcoming. Thoughtful layouts maximise both functionality and visual impact, allowing visitors to move naturally through the space while engaging fully with your brand and your homes. Stylish finishes, contemporary design features, and subtle details combine to create an environment that feels both impressive and inviting. We understand that no two brands are the same, which is why we provide a bespoke service - we work closely with you to tailor the build to suit your identity, values, and target audience. Whether your brand is modern and minimalist, classic and elegant, or bold and distinctive, we ensure the final space reflects your vision with clarity and confidence. The result is a sales suite that feels unique, purposeful, and perfectly aligned with your development.\n\nOur aim is to create more than just a place to meet customers, we aim to create an experience. A space where potential buyers can truly connect with your homes, imagine their future, and feel confident in their decision. Carefully curated interiors, intelligent use of space, and premium detailing all work together to elevate the experience and leave a lasting impression long after the visit ends. Every aspect of the suite is designed to support your sales journey, from showcasing floorplans and finishes to providing comfortable, well-considered areas for conversations and consultations. The atmosphere is warm and professional, striking the perfect balance between luxury and approachability.\n\nUltimately, our bespoke sales suites are built to help you stand out. They provide the perfect setting to present your homes at their very best, reinforce your brand, and create memorable experiences that resonate with customers. With quality at the forefront and individuality at the heart of the design, each sales suite becomes a powerful tool that enhances engagement, builds trust, and supports successful sales outcomes.",
  },
  {
    slug: "go-solar-without-compromise",
    image: newsGoSolar.url,
    date: "September 2026",
    title: "Go Solar Without Compromise",
    excerpt:
      "The 24ft Ultimate Eco+ Twin Toilet: solar power, rainwater harvesting and telemetry in a towable welfare unit for up to 12 people.",
    body: "24ft ULTIMATE ECO+ TWIN TOILET - Towable Welfare Unit\n\nPersons: 12\nCanteen: cushioned bench seating & table\nKitchenette: hot & cold sink, worktop, cupboards, microwave, kettle\nOffice: 1 office desk & chair\nToilet: 2 toilets with hot & cold sink\nDry Room: low energy heating, bench seating & coat hooks\nSolar Power: wall & roof mounted solar panels\nBack-up Generator: self-contained 2.3kva back-up generator\nSave Water: rainwater harvesting & greywater recycling system\nTelemetry: user friendly digital device tracking location, battery, energy, fuel, waste & water\n\nSolar powered welfare units offer many benefits for both the user and the environment. For our customers our solar range provides reliable, self-sufficient facilities with reduced fuel costs, lower maintenance requirements, and quieter operation, creating a more comfortable and efficient site experience, with self-contained power that supports lighting, heating and charging without constant generator use.\n\nRegarding environmental benefits, Liberty solar welfare units significantly reduce carbon emissions, fuel consumption and noise pollution. By harnessing renewable energy, they help minimise a site's environmental impact while supporting sustainability targets and greener working practices, making them a smart, responsible and sustainable choice for modern construction sites.",
  },
  {
    slug: "heatwave-solar-welfare",
    image: newsHeatwave.url,
    date: "September 2026",
    title: "Heatwave! Our Solar Welfare Is In Its Element",
    excerpt:
      "While the majority of us have been searching for shade and reaching for the ice cream, Liberty solar welfare cabins have been making the most of every ray of sunshine.",
    body: "With this recent scorching weather in the UK, it's certainly got everyone talking! While the majority of us have been searching for shade and reaching for the ice cream, Liberty solar welfare cabins have been making the most of every ray of sunshine. These longer, brighter days have created perfect conditions for our solar panels, allowing them to maximise on the sustainable energy absorbed from the sun.\n\nEvery product in our solar range is installed with solar panels on the roof or on the side of the cabin. The panels work by capturing natural daylight, storing this energy in the lithium batteries and then converting it into electricity, to be used when it's needed. This energy is used throughout the cabin supplying power to the lights, plug sockets, USB charging points, microwave, kettle and on demand hot water, successfully using solar energy instead of the traditional diesel methods.\n\nThe more days of sunshine we get, the more energy the panels can produce, creating less reliance on fuel-powered generators and giving a huge reduction in fuel consumption. This not only helps keep running costs down, but it also means less fuel is used, less servicing is needed and fewer carbon emissions are being released into the atmosphere.\n\nAt Liberty we feel it's a win-win situation. By using the sun's natural energy, we're helping our customers reduce their environmental impact while still providing practical, secure, fully functional welfare facilities. We're all responsible in getting closer to that net zero goal - and if this sunshine keeps on coming, our solar cabins will be more than happy.",
  },
  {
    slug: "mnd-association-a-worthy-cause",
    image: newsMndaCause.url,
    date: "September 2026",
    title: "MND Association - Why It's Such A Worthy Cause To Support",
    excerpt:
      "The MND Association is a charity very close to our hearts. The continuous work they do is incredible and they genuinely change people's lives.",
    body: "At Liberty we have been supporting the MND Association for many years now. They are a charity that are very close to our hearts, the continuous work they do is incredible and they actually change people's lives. Truly a worthy cause to support.\n\nSo, who are they? What's their vision for the charity and what do they stand for? Here's what they have to say:\n\nOur vision\n\nOur vision is a world free from MND. It's a vision which unites our whole community - including people with MND, their families and carers, researchers, volunteers, campaigners, fundraisers, donors and supporters.\n\nOur values\n\nOur values are rooted in what our community told us they need, and they will drive everything we do. By living them every day we're stronger, more effective and truly focused on delivering our very best for the MND community.\n\nWe're one strong team. We work together as one MND Association - a community of people with MND, staff, volunteers, partners. We share a common vision and direction. We value diversity. We support each other. We are collaborative and work in partnership with external organisations and with professionals, scientists and others to further our impact.\n\nWe make every day count. Time is precious. We make the most of it to help people with MND. We are proactive, responsive and efficient. We listen to what people need and support them in doing what's important. We deliver at pace, but take the time needed to do things thoroughly. Every day we create impact for people with MND.\n\nWe think big. We are the UK's leading MND charity. People look to us for expertise and inspiration. We support new approaches, new treatments and new understanding. We are bold and ambitious - we think big and make ideas happen. We go beyond what's expected to find new and better ways of doing things. We help set standards, influence care and drive change to shape a better future for people with MND.\n\nWe are determined. People with MND are at the heart of all we do. We work with determination and a drive to make a difference. We have compassion and treat people with dignity and kindness. Every interaction is a chance to show that people affected by MND are heard and valued.",
  },
  {
    slug: "yes-our-cabins-harvest-rainwater",
    image: newsRainwater.url,
    date: "September 2026",
    title: "Yes, Our Cabins Harvest Rainwater",
    excerpt:
      "Our Ultimate Eco range collects, stores and reuses natural rainfall - reducing reliance on mains water and cutting site water consumption.",
    body: "At Liberty, producing site welfare that is sustainable and environmentally responsible is at the heart and soul of everything we do. One of the key ways we reduce our environmental impact is with our Ultimate Eco range, which contains rainwater harvesting systems designed to collect, store and reuse natural rainfall.\n\nRainwater harvesting is a simple yet highly effective method of conserving water resources. The rainwater is collected from the cabin roof, filtered, cleaned and directed into a storage tank. This water is then used in the cabin for hand washing and then recycled further for the toilet flush. By choosing to use recycled rainwater for our cabins, we can significantly reduce reliance on mains water supplies, helping to minimise overall water consumption on site and aiding global water conservation.\n\nIt's no secret that the water resources on our planet are quickly depleting and it's imperative that we all play our part in improving our water usage, reducing unnecessary waste and recycling water wherever possible. Our commitment to sustainable welfare solutions means that every opportunity is taken to improve efficiency and reduce waste. Rainwater harvesting plays a huge role, which in turn complements other environmentally friendly features incorporated within our welfare cabins. By investing in practical, reliable and proven technologies, we help our customers operate a more sustainable site, without compromising on performance.\n\nBy opting for Liberty welfare cabins with integrated rainwater harvesting systems, our customers can feel reassured they're contributing to water conservation, reducing their environmental impact and supporting a more sustainable future for the construction industry.",
  },

  {
    slug: "innovation-day",
    image: newsInnovationDay,
    date: "September 2026",
    title: "Innovation Day",
    excerpt:
      "It was a real pleasure over the summer to host this innovation day for some of our suppliers — a hands-on showcase of our complete product range, with on-site brewery and homemade pizzas thrown in.",
    body: "It was a real pleasure over the summer to host this innovation day for some of our suppliers. This event was an excellent opportunity for us to showcase our complete product range and get to know our trusted suppliers a little better — we feel the personal approach is always the better option when we're talking welfare. Plus, I think the on-site brewery and homemade pizzas make it much easier to get to know everyone.\n\nAnother great prospect with this style of event is our suppliers get to experience a hands-on approach with each product: they can test, trial and use the product just as their customer would. We feel this is the best way to understand each individual product and grasp all the practical features. This hands-on approach is particularly helpful with our solar range too, as it's much easier to learn about the energy saving benefits and rainwater harvesting features first hand.\n\nIt's safe to say, the whole day was a great success and we're truly eager to book in the next one.",
  },
  {
    slug: "new-product-range",
    image: newsSolarUpgrade,
    date: "June 2026",
    title: "New Product Range!",
    excerpt:
      "Our new range is here, and we couldn't be more excited! We've named this range SOLAR UPGRADE to distinguish from our original kit.",
    body: "Our new range is here, and we couldn't be more excited! We've named this range SOLAR UPGRADE to distinguish it from our original kit.\n\nEvery unit in the range has been specified with larger solar arrays, higher-capacity battery storage and smarter power management, so sites run cleaner and quieter for longer between top-ups. The result is lower fuel use, fewer generator hours and a noticeably better welfare environment for the teams using them.\n\nSpeak to our team to check availability and to arrange a look around a unit at your nearest depot.",
  },
  {
    slug: "fun-fact",
    image: newsFunFact,
    date: "June 2026",
    title: "Fun Fact",
    excerpt:
      "Welfare isn't an optional extra, they're not just handy to have around or just look nice, they're actually a necessity. Welfare facilities are an essential part of every site.",
    body: "Welfare isn't an optional extra. They're not just handy to have around or nice to look at - they're actually a necessity. Welfare facilities are an essential part of every site.\n\nUnder UK site regulations, workers must have access to washing facilities, drinking water, somewhere to change and store clothing, and a warm, dry space to rest and eat. Getting welfare right isn't just compliance, it protects your people and keeps productivity up in poor weather.\n\nOur mobile and static units cover every size of site, from a two-person job to a large multi-phase development.",
  },
  {
    slug: "new-partnership-with-ajc",
    image: newsAjc,
    date: "June 2026",
    title: "New Partnership with AJC",
    excerpt:
      "We're pleased to announce another exciting partnership - our brand-new Eco Smart Mobi from AJC Easy Cabin, renowned for their welfare expertise.",
    body: "We're pleased to announce another exciting partnership - our brand-new Eco Smart Mobi from AJC EasyCabin, renowned for their welfare expertise.\n\nThe Eco Smart Mobi brings solar-first power generation, remote monitoring and a well-thought-out internal layout into a towable footprint, making it ideal for sites where space and access are tight.\n\nUnits are joining the fleet now and are available to hire nationwide.",
  },
  {
    slug: "unit-rebrand-with-mnd-association",
    image: newsMnd,
    date: "May 2026",
    title: "Unit Rebrand with Motor Neurone Disease (MND) Association",
    excerpt:
      "Keeping in line with MNDA's brand refresh we have given our favourite 12ft Mobi a complete overhaul, with a full respray, new signs and brand-new livery.",
    body: "Keeping in line with MNDA's brand refresh, we have given our favourite 12ft Mobi a complete overhaul: a full respray, new signage and brand-new livery.\n\nThe unit travels the country on live sites, so it carries the MND Association's message everywhere it goes. We're proud to continue supporting the charity and the vital work it does for people living with motor neurone disease.\n\nIf you'd like the rebranded unit on your site, get in touch with our team.",
  },
  {
    slug: "doncaster-knights-partnership",
    image: newsDoncaster,
    date: "October 2025",
    title: "Doncaster Knights Partnership",
    excerpt:
      "We're proud to support Doncaster Knights with our 12ft Ultimate Eco Plus solar welfare unit, providing sustainable on-site facilities for their training ground.",
    body: "We're proud to support Doncaster Knights with our 12ft Ultimate Eco Plus solar welfare unit, providing sustainable on-site facilities for their training ground.\n\nThe unit delivers washing facilities, a drying area and a warm rest space powered predominantly by solar, which means no generator noise during training sessions and minimal running costs for the club.\n\nIt's a great example of solar welfare working just as well outside of construction as it does on site.",
  },
  {
    slug: "keepmoat-homes-continued-partnership",
    image: newsKeepmoat,
    date: "September 2025",
    title: "Keepmoat Homes Continued Partnership",
    excerpt:
      "Liberty renews its long-standing partnership with Keepmoat Homes, supplying marketing suites and welfare units across multiple new developments.",
    body: "Liberty renews its long-standing partnership with Keepmoat Homes, supplying marketing suites and welfare units across multiple new developments.\n\nThe agreement covers bespoke marketing suites for new sales outlets alongside mobile and static welfare across live build phases, all delivered, installed and serviced by our own teams.\n\nWe're delighted to continue supporting Keepmoat's programme nationwide.",
  },
  {
    slug: "product-focus-24ft-ultimate-eco-plus",
    image: newsProductFocus,
    date: "August 2025",
    title: "Product Focus: 24ft Ultimate Eco Plus",
    excerpt:
      "Our flagship solar welfare unit features twin toilets, full office facilities, and our SOLARTracK monitoring system - a complete sustainable site solution.",
    body: "Our flagship solar welfare unit features twin toilets, full office facilities, and our SOLARTracK monitoring system - a complete sustainable site solution.\n\nInside you'll find a generous canteen area, a separate office, a drying room and twin toilets, so larger teams can share one unit comfortably. Power comes from a large roof-mounted solar array with battery storage, with the back-up generator only stepping in when it's genuinely needed.\n\nSOLARTracK reports run hours, fuel use and solar yield so you can evidence carbon savings on your project.",
  },
  {
    slug: "acquisan-acquisition",
    image: newsAcquisan,
    date: "November 2025",
    title: "Acquisan Acquisition",
    excerpt:
      "Liberty expands its capabilities through the acquisition of Acquisan, strengthening our nationwide service offering.",
    body: "Liberty expands its capabilities through the acquisition of Acquisan, strengthening our nationwide service offering.\n\nThe acquisition adds servicing capacity, additional stock and experienced people to the business, allowing us to improve response times and widen the range of welfare and portable accommodation we can supply.\n\nCustomers of both businesses continue to be looked after by the same familiar teams.",
  },
  {
    slug: "customer-feedback-highlights",
    image: newsCustomerFeedback,
    date: "June 2025",
    title: "Customer Feedback Highlights",
    excerpt:
      "Our customers share their experience with Liberty's welfare solutions - read what makes our service stand out.",
    body: "Our customers share their experience with Liberty's welfare solutions - read what makes our service stand out.\n\nThe themes that come up again and again are straightforward: units turn up clean and on time, servicing happens when it's promised, and there's always someone who answers the phone and sorts the problem.\n\nThank you to everyone who took the time to give us feedback - it shapes how we specify and service the fleet.",
  },
  {
    slug: "a-new-year-a-greener-fleet",
    image: newsNewYear,
    date: "January 2025",
    title: "A New Year, A Greener Fleet",
    excerpt:
      "Liberty kicks off the year with a major investment in expanding its solar welfare fleet, doubling down on our sustainability commitment.",
    body: "Liberty kicks off the year with a major investment in expanding its solar welfare fleet, doubling down on our sustainability commitment.\n\nThe investment adds further solar mobile and solar static units across our depot network, replacing older diesel-dependent kit and cutting fuel deliveries, emissions and noise on the sites we supply.\n\nTalk to us about switching your next project over to solar welfare.",
  },
];

const parseDate = (date: string) => {
  const parsed = Date.parse(`1 ${date}`);
  return Number.isNaN(parsed) ? 0 : parsed;
};

// Newest first
export const articles: NewsArticle[] = [...rawArticles].sort(
  (a, b) => parseDate(b.date) - parseDate(a.date)
);

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);
