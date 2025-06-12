'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqSection = () => {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-center mb-10 text-lg">
          Find answers to some of the questions people often ask us.
        </p>

        <Accordion type="multiple" className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg md:text-xl font-medium">
              What services does Taughtlevel Technologies offer?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-muted-foreground">
              We offer website development, coding and robotics classes, tech training, UI/UX design,
              graphics design, and more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg md:text-xl font-medium">
              Do you work with schools and institutions?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-muted-foreground">
              Absolutely! We partner with schools to offer practical coding and robotics as
              extracurricular programs or core tech curriculum.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg md:text-xl font-medium">
              How can I contact Taughtlevel Technologies?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-muted-foreground">
              You can reach us via our contact form, email, or phone. We’re always open to your
              questions and collaboration ideas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg md:text-xl font-medium">
              Can individuals enroll for your training?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-muted-foreground">
              Yes. We offer training for individuals — both online and in-person — depending on your
              interest and location.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
