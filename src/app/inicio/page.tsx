import { HeroSection } from "@/components/sections/inicio/heroSection";
import ProvaSocialSection from "@/components/sections/inicio/provaSocialSection";
import { RendimentosSection } from "@/components/sections/inicio/rendimentosSection";
import { SobreSection } from "@/components/sections/inicio/sobreSection";

export default function Inicio() {
  return (
    <>
      <HeroSection />
      <RendimentosSection />
      <SobreSection />
      <ProvaSocialSection />
    </>
  );
}
