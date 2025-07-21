import ForSchoolsHero from "@/components/forschools/For_SchoolsHero"
import WhatWeOfferToSchools from './../../components/forschools/WeOffer';
import SchoolBenefitsSection from "@/components/forschools/SchoolBenefitsSection";
import PartnerCTASection from "@/components/forschools/TestimonialsSection";
import Partners from "@/components/Partners";

const For_Schools = () => {
    return (
        <div>
            <ForSchoolsHero />
            <WhatWeOfferToSchools />
            <SchoolBenefitsSection />
            <PartnerCTASection />
            <Partners />
        </div>
    )
}
export default For_Schools