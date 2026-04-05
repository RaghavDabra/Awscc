import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { WhatWeDo } from "./WhatWeDo";
import { ClubAims } from "./ClubAims";
import { Team } from "./Team";
import { Events } from "./Events";
import { JoinForm } from "./JoinForm";
import { Footer } from "./Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
      <ClubAims />
      <Team />
      <Events />
      <JoinForm />
      <Footer />
    </div>
  );
}
