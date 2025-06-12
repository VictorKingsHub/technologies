import AboutHero from "@/components/about/AboutHero";
import MissionVisionSection from "@/components/about/MissionVision";
import OurTeamSection from "@/components/about/OurTeamSection";
import Services from "@/components/Services";

const About = () => {
  return (
    <div>
      <AboutHero />
      <Services />
      <MissionVisionSection />
      <OurTeamSection />
    </div>
  );
};
export default About;
