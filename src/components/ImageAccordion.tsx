import { useState } from "react";
import { Link } from "react-router-dom";

interface AccordionItem {
  title: string;
  image: string;
  link: string;
}

const items: AccordionItem[] = [
  {
    title: "Mobile & Static Welfare",
    image: "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_1188.jpg",
    link: "/welfare",
  },
  {
    title: "Solar Welfare",
    image: "https://libertyguard.co.uk/wp-content/uploads/2025/09/MJP_0029-scaled.jpg",
    link: "/solar",
  },
  {
    title: "Portable Accommodation",
    image: "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_0595.jpeg",
    link: "/portable-buildings",
  },
  {
    title: "Marketing Suite",
    image: "https://libertyguard.co.uk/wp-content/uploads/2025/09/IMG_2374.jpeg",
    link: "/marketing-suites",
  },
  {
    title: "Solar Loo",
    image: "https://libertyguard.co.uk/wp-content/uploads/2025/07/MK2_2812-scaled.jpg",
    link: "/solar-loos",
  },
];

const ImageAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="pt-6 pb-16 bg-white">
      <div className="w-full px-3 md:px-4">
        {/* Mobile: stacked cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              onClick={() => window.scrollTo(0, 0)}
              className="group relative overflow-hidden rounded-xl h-56 block"
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/30 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                <h3 className="font-heading text-xl font-black text-primary-foreground uppercase tracking-tight">
                  {item.title}
                </h3>
                <span className="mt-3 bg-white text-primary font-heading font-bold text-[11px] uppercase tracking-wider px-5 py-2 rounded-md">
                  Take a Look
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: horizontal image accordion */}
        <div className="hidden md:flex gap-2 h-[520px] w-full">
          {items.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={item.title}
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                className="relative overflow-hidden rounded-xl cursor-pointer transition-[flex-grow] duration-700 ease-in-out"
                style={{ flexGrow: isActive ? 5 : 1, flexBasis: 0 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    isActive ? "bg-primary/45" : "bg-primary/65"
                  }`}
                />
                <Link
                  to={item.link}
                  onClick={() => window.scrollTo(0, 0)}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
                >
                  <h3
                    className={`font-heading font-black text-primary-foreground uppercase tracking-tight transition-all duration-500 text-center ${
                      isActive ? "text-2xl lg:text-4xl opacity-100" : "text-sm opacity-0"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <span
                    className={`mt-5 bg-white text-primary font-heading font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md transition-all duration-300 ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    Take a Look
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImageAccordion;
