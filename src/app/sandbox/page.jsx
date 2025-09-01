import WhatIsHacknova from "@/components/hacksection/what-is-hacknova";
import FaqSection from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import Prize from "@/components/prizes/prize";
import Sponsors from "@/components/sponsorship/sponsors";
import Teams from "@/components/teams/teams";
import Statistics from "@/components/statistics/statistics";
import Timeline from "@/components/timeline/timeline";
import Badge from "@/components/Badge/badge";
export default function Page() {
  return (
    <main>
      <Hero />
      <WhatIsHacknova />
      <Statistics />
      <Timeline />
      <Prize />
      <Teams />
      <Sponsors />
      <Badge />
      <FaqSection />
    </main>
  );
}
