import StickyBar from "@/components/StickyBar";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import Cause from "@/components/Cause";
import Method from "@/components/Method";
import Doctor from "@/components/Doctor";
import Transformation from "@/components/Transformation";

import Guarantee from "@/components/Guarantee";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <StickyBar />
      <Hero />
      <Pain />
      <Cause />
      <Method />
      <Doctor />
      <Transformation />

      <Guarantee />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}
