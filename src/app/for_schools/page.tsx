import ForSchoolsHero from "@/components/forschools/For_SchoolsHero"
import WhatWeOfferToSchools from './../../components/forschools/WeOffer';
import SchoolBenefitsSection from "@/components/forschools/SchoolBenefitsSection";
import PartnerCTASection from "@/components/forschools/TestimonialsSection";

const For_Schools = () => {
    return (
        <div>
            <ForSchoolsHero />
            <WhatWeOfferToSchools />
            <SchoolBenefitsSection />
            <PartnerCTASection />
        </div>
    )
}
export default For_Schools