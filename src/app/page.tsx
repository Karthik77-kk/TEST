import {
  Navbar,
  Hero,
  DestinationGrid,
  ExperienceList,
  Tiers,
  Testimonials,
  ConciergeForm,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DestinationGrid />
        <ExperienceList />
        <Tiers />
        <Testimonials />
        <ConciergeForm />
      </main>
      <Footer />
    </>
  );
}
