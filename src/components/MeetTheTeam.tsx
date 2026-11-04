import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { teamRows, type TeamMember } from "@/data/team";

const MemberCard = ({ member, onOpen }: { member: TeamMember; onOpen: (m: TeamMember) => void }) => {
  const hasBio = !!member.bio?.length;

  return (
    <button
      type="button"
      onClick={() => hasBio && onOpen(member)}
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
          <p className="mt-2 text-xs font-heading uppercase tracking-wider text-muted-foreground group-hover:text-secondary transition-colors">
            Read more +
          </p>
        )}
      </div>
    </button>
  );
};

const MeetTheTeam = () => {
  const [active, setActive] = useState<TeamMember | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-4 text-center">
          Meet the <span className="text-secondary">Team</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Click a team member to read more.</p>
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
                    <MemberCard member={m} onOpen={setActive} />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => { console.log("dialog onOpenChange", open); if (!open) setActive(null); }}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-tl-xl rounded-br-3xl border-2 border-secondary">
          {active && (
            <div className="grid md:grid-cols-[18rem_1fr] max-h-[85vh]">
              {active.photo ? (
                <div className="bg-muted max-h-56 md:max-h-none overflow-hidden">
                  <img
                    src={active.photo}
                    alt={`${active.name}, ${active.role}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : null}
              <div className="p-6 md:p-8 overflow-y-auto">
                <DialogHeader className="text-left mb-4">
                  <DialogTitle className="font-heading font-bold uppercase tracking-wide text-foreground text-xl">
                    {active.name}
                  </DialogTitle>
                  <p className="text-secondary">{active.role}</p>
                </DialogHeader>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  {active.bio!.map((p, i) => (
                    <p key={i}>
                      {i === 0 ? `\u201C${p}` : p}
                      {i === active.bio!.length - 1 ? `\u201D` : ""}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MeetTheTeam;
