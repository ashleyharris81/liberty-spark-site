import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import heroImg from "@/assets/case-study-znd-exterior-1.jpg.asset.json";
import exterior2 from "@/assets/case-study-znd-exterior-2.jpg.asset.json";
import officeImg from "@/assets/case-study-znd-office.jpg.asset.json";
import canteenImg from "@/assets/case-study-znd-canteen.jpg.asset.json";
import meetingImg from "@/assets/case-study-znd-meeting.jpg.asset.json";
import beforeImg from "@/assets/case-study-znd-before.jpg.asset.json";
import zndLogo from "@/assets/case-study-znd-logo.png.asset.json";

const stats = [
  { label: "Building size", value: "30m x 9.6m" },
  { label: "Configuration", value: "10 Bay, Two-Storey" },
  { label: "Separate offices", value: "8" },
  { label: "Extras", value: "Meeting room, canteen & reception" },
];

const Section = ({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mx-auto max-w-3xl px-4 py-10">
    <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-secondary">
      {kicker}
    </p>
    <h2 className="mt-2 font-heading text-3xl font-bold uppercase text-primary">
      {title}
    </h2>
    <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/80">
      {children}
    </div>
  </section>
);

const CaseStudyZnd = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <header className="relative overflow-hidden">
      <img
        src={heroImg.url}
        alt="The finished modular office building at the ZND UK factory"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))] via-[hsl(var(--navy))]/60 to-[hsl(var(--navy))]/10" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-12 pt-64 md:flex-row md:items-end md:justify-between md:pb-14 md:pt-[420px]">
        <div>
          <Link
            to="/case-studies"
            className="font-heading text-sm font-bold uppercase tracking-wider text-secondary hover:text-white"
          >
            ← Back to case studies
          </Link>
          <h1 className="mt-3 font-heading text-4xl font-bold uppercase text-white md:text-5xl">
            ZND Temporary Fence Solutions
          </h1>
          <p className="mt-2 max-w-2xl text-lg text-white/80">
            New office facilities for the staff at ZND UK
          </p>
        </div>

        {/* Project facts panel */}
        <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-[hsl(var(--navy))]/70 p-6 backdrop-blur-sm md:w-auto">
          <img
            src={zndLogo.url}
            alt="ZND Temporary Fence Solutions logo"
            className="w-36 rounded-lg bg-white p-2"
          />
          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-heading text-[11px] font-bold uppercase tracking-wider text-secondary">
                  {s.label}
                </dt>
                <dd className="mt-1 font-heading text-sm font-bold text-white">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </header>

    <main className="pb-16">
      <Section kicker="Overview" title="The Project">
        <p>
          The project for the global company ZND was one we were really excited
          to sink our teeth into. ZND are the largest manufacturer of temporary
          fence solutions and operate worldwide. In June 2025 ZND reached out to
          us as they required office facilities for one of their UK based
          factories. Their current offices were a 5 minute drive from the
          factory base, however this was becoming increasingly impractical and
          too much time was being wasted travelling back and forth.
        </p>
      </Section>

      {/* Before */}
      <div className="mx-auto max-w-3xl px-4">
        <figure>
          <img
            src={beforeImg.url}
            alt="The ZND UK factory yard before the new office building"
            className="w-full rounded-2xl object-cover shadow-md"
          />
          <figcaption className="mt-2 font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Before
          </figcaption>
        </figure>
      </div>

      <Section kicker="The Brief" title="What They Needed">
        <p>
          The initial brief given from ZND was to manufacture a two-storey
          office accommodation with an integral staircase, fitted out with
          offices and toilets for all the staff. Our modular team were straight
          on with the brief and after a detailed discussion with the MD at ZND
          UK we agreed upon a solution that suited both the space, their budget
          and the practical requirements for the build. After generating
          detailed CAD layout drawings, ensuring all aspects of the design and
          build comply with building regulations, we were good to go.
        </p>
      </Section>

      <Section kicker="The Solution" title="A 10 Bay Modular Building">
        <p>
          The final design ZND chose was a 30m x 9.6m 10 Bay Modular Building,
          which was inclusive of 8 separate offices, a large meeting room with a
          media wall, a canteen area with tea, coffee and lunch facilities, male
          and female toilets with disabled access and a spacious welcome
          reception space.
        </p>
        <p>
          The entire build was manufactured to a high specification with luxury
          fittings, an upgraded fitted kitchen and air conditioning throughout.
          The main take away from the brief was to create a practical,
          comfortable and premium work environment for all their staff.
        </p>
      </Section>

      {/* After gallery */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <p className="mb-6 text-center font-heading text-sm font-bold uppercase tracking-[0.25em] text-secondary">
          After
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <img
            src={exterior2.url}
            alt="Exterior of the completed two-storey modular office at ZND UK"
            className="w-full rounded-2xl object-cover shadow-md"
          />
          <img
            src={officeImg.url}
            alt="Open-plan office space with desks and workstations"
            className="w-full rounded-2xl object-cover shadow-md"
          />
          <img
            src={canteenImg.url}
            alt="Canteen and breakout area with kitchen facilities"
            className="w-full rounded-2xl object-cover shadow-md"
          />
          <img
            src={meetingImg.url}
            alt="Large meeting room with media wall"
            className="w-full rounded-2xl object-cover shadow-md"
          />
        </div>
      </section>

      <Section kicker="In Conclusion" title="Delivered">
        <p>
          We are confident our team on the modular division have delivered on
          this project. More importantly the MD and staff at ZND UK were
          impressed with their new office facilities and praised their new
          accommodation for its functionality and stylish features. This project
          was a pleasure throughout.
        </p>
      </Section>

      <section className="bg-[hsl(var(--navy))]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase text-white">
            Need space like this for your team?
          </h2>
          <p className="max-w-xl text-lg text-white/80">
            Talk to our modular buildings team about a bespoke solution for your
            site.
          </p>
          <Link
            to="/contact"
            className="rounded-full bg-secondary px-8 py-3 font-heading text-sm font-bold uppercase tracking-wider text-[hsl(var(--navy))] transition-opacity hover:opacity-90"
          >
            Email the team
          </Link>
        </div>
      </section>
    </main>

    <Contact />
    <Footer />
  </div>
);

export default CaseStudyZnd;
