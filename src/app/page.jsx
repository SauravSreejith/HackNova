import WhatIsHackNova from "@/components/hacksection/what-is-hacknova";
import FaqSection from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import Prize from "@/components/prizes/prize";
import Sponsors from "@/components/sponsorship/sponsors";
import Teams from "@/components/teams/teams";
import Timeline from "@/components/timeline/timeline";
export default function Page() {
  return (
    <main>
      <Hero />
      <WhatIsHackNova />
      <Timeline />
      <Prize />
      <Teams />
      <Sponsors />
      <FaqSection />
    </main>
  );
}
