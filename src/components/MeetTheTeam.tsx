import { useState } from "react";
import { teamRows, type TeamMember } from "@/data/team";

const MemberCard = ({ member }: { member: TeamMember }) => {
  const [open, setOpen] = useState(false);
  const hasBio = !!member.bio?.length;

  return (
    <button
      type="button"
      onClick={() => hasBio && setOpen((o) => !o)}
      aria-expanded={hasBio ? open : undefined}
      className={`group relative w-full h-full text-left rounded-tl-xl rounded-br-3xl border-2 border-secondary bg-card overflow-hidden transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${hasBio ? "cursor-pointer" : "cursor-default"}`}
    >
      {member.photo ? (
        <div className="aspect-square overflow-hidden rounded-br-3xl m-2 bg-muted">
          <img
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        </div>
      ) : null}
      <div className="px-4 pb-4 pt-2">
        <p className="font-heading font-bold text-foreground uppercase tracking-wide text-sm">{member.name}</p>
        <p className="text-secondary text-sm">{member.role}</p>
        {hasBio && (
          <p className="mt-2 text-xs font-heading uppercase tracking-wider text-muted-foreground group-hover:opacity-0 transition-opacity">
            Read more +
          </p>
        )}
      </div>

      {hasBio && (
        <div
          className={`absolute inset-0 bg-primary/95 p-5 overflow-y-auto transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        >
          <p className="font-heading font-bold text-primary-foreground uppercase tracking-wide text-sm">{member.name}</p>
          <p className="text-secondary text-sm mb-3">{member.role}</p>
          <div className="space-y-2 text-primary-foreground/90 text-sm leading-relaxed">
            {member.bio!.map((p, i) => (
              <p key={i}>{i === 0 ? `"${p}` : p}{i === member.bio!.length - 1 ? `"` : ""}</p>
            ))}
          </div>
        </div>
      )}
    </button>
  );
};

const MeetTheTeam = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-4 text-center">
        Meet the <span className="text-secondary">Team</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12">Hover over or tap a team member to read more.</p>
      <div className="space-y-6">
        {teamRows.map((row, i) => {
          const withPhotos = row.some((m) => m.photo);
          return (
            <div
              key={i}
              className={`grid gap-6 grid-cols-2 ${withPhotos ? "md:grid-cols-4" : "md:grid-cols-3 lg:grid-cols-6"}`}
            >
              {row.map((m) => (
                <div key={m.name} className={withPhotos ? "min-h-[22rem]" : "min-h-[9rem]"}>
                  <MemberCard member={m} />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default MeetTheTeam;
