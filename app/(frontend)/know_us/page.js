import UHC from "@/components/ui/know_us/UHC";
import mist_forest_img from "@/public/images/mist_forest1.png"
import Image from "next/image";
import Team from "@/components/ui/know_us/Team";
import ForestBackground from "@/components/ui/know_us/ForestBackground";
import TeamSectionAnimation from "@/components/gsapanimations/TeamSectionAnimation";
import { getUHCTeam, getNonUHCTeams } from "@/lib/cmsdata";

export default async function KnowUs() {
  const uhcTeam = await getUHCTeam();
  const nonUHCTeams = await getNonUHCTeams();

  return (
    <main className="relative min-h-screen">
      {/* Forest background - Fixed position */}
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        <div className="absolute inset-0">
          <Image
            src={mist_forest_img}
            alt=""
            fill
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
            priority
            quality={90}
          />
        </div>
      </div>

      {/* Animated forest particles and effects */}
      <ForestBackground />

      {/* UHC Section - 3 members */}
      <TeamSectionAnimation sectionId="uhc">
        <UHC team={uhcTeam} />
      </TeamSectionAnimation>

      {/* Elegant Divider */}
      <div className="relative py-16">
        <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary-lighter/30 to-primary-lighter/30" />
          <div className="w-2 h-2 rounded-full bg-secondary/60" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary-lighter/30 to-primary-lighter/30" />
        </div>
      </div>

      {/* Reordered sections: WebOps, then LHC */}
      <div className="space-y-20 pb-32">
        {nonUHCTeams
          .sort((a, b) => {
            // WebOps first, then LHC
            if (a.name.toLowerCase().includes('webops')) return -1;
            if (b.name.toLowerCase().includes('webops')) return 1;
            return 0;
          })
          .map((team, index) => (
            <TeamSectionAnimation key={team._id} sectionId={`team-${index}`}>
              <Team team={team} />
            </TeamSectionAnimation>
          ))}
      </div>

      {/* Footer Section */}
      <div className="relative pb-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-lighter/40 to-transparent mx-auto mb-8" />
          <p className="text-neutral-light/70 text-sm tracking-wide">
            Building the future together
          </p>
        </div>
      </div>
    </main>
  );
}
