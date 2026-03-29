import ForSchoolsHero from "@/components/forschools/For_SchoolsHero"
import WhatWeOfferToSchools from './../../components/forschools/WeOffer';
import SchoolBenefitsSection from "@/components/forschools/SchoolBenefitsSection";
import PartnerCTASection from "@/components/forschools/TestimonialsSection";
import Partners from "@/components/Partners";
import WhatsAppButton from "@/components/forschools/WhatsAppButton";
import ProgramsSection from "@/components/forschools/ProgramsSection";
import HowItWorksSection from "@/components/forschools/HowItWorksSection";
import ProofSection from "@/components/forschools/ProofSection";
import CTASection from "@/components/forschools/CTASection";

const For_Schools = () => {
    return (
        <div>
            <ForSchoolsHero />
    
            <WhatWeOfferToSchools />

            <SchoolBenefitsSection />
            <ProgramsSection />
            <HowItWorksSection />
            <ProofSection />
            <PartnerCTASection />
            <CTASection />
            <Partners />
            <WhatsAppButton />
        </div>
    )
}
export default For_Schools