import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function FaqSections() {
    return (
        < section className="py-20 md:py-28 bg-white border-t border-orange-100/20" >
            <div className="container mx-auto max-w-3xl px-6 sm:px-8">

                <div className="text-center space-y-4 mb-16">
                    <span className=" font-bold tracking-widest text-[#FF5C35] uppercase">Have Questions?</span>
                    <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0B2545] sm:text-4xl">
                        Everything You Need To Know
                    </h2>
                </div>

                <Accordion className="w-full space-y-4">

                    <AccordionItem value="item-1" className="border border-orange-100/50 rounded-2xl bg-[#FDFBF7] px-6 py-2">
                        <AccordionTrigger className="font-serif font-bold text-[#0B2545] hover:text-[#FF5C35] hover:no-underline  sm:text-base text-left">
                            How do you know what is on my school&apos;s supply list?
                        </AccordionTrigger>
                        <AccordionContent className=" sm: text-[#4A5D73] leading-relaxed">
                            We work directly with school administrations and PTA groups, and monitor school district portals continuously. Our database of teacher lists is updated and verified by human coordinators before the season begins.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-orange-100/50 rounded-2xl bg-[#FDFBF7] px-6 py-2">
                        <AccordionTrigger className="font-serif font-bold text-[#0B2545] hover:text-[#FF5C35] hover:no-underline  sm:text-base text-left">
                            Can I remove items from the box if I already have them?
                        </AccordionTrigger>
                        <AccordionContent className=" sm: text-[#4A5D73] leading-relaxed">
                            Absolutely! Our box builder is fully interactive. You can check and uncheck individual items and watch the bundle price update in real-time. If you already have safety scissors or a plastic ruler, you can skip them and save.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-orange-100/50 rounded-2xl bg-[#FDFBF7] px-6 py-2">
                        <AccordionTrigger className="font-serif font-bold text-[#0B2545] hover:text-[#FF5C35] hover:no-underline  sm:text-base text-left">
                            Are the products high quality?
                        </AccordionTrigger>
                        <AccordionContent className=" sm: text-[#4A5D73] leading-relaxed">
                            Yes. We do not use cheap off-brand supplies. We source standard teacher-preferred brands such as Crayola markers, Elmer&apos;s glue, Ticonderoga pencils, and Fiskars kids scissors to ensure they stand up to the school year.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border border-orange-100/50 rounded-2xl bg-[#FDFBF7] px-6 py-2">
                        <AccordionTrigger className="font-serif font-bold text-[#0B2545] hover:text-[#FF5C35] hover:no-underline  sm:text-base text-left">
                            What if the teacher changes the list after I order?
                        </AccordionTrigger>
                        <AccordionContent className=" sm: text-[#4A5D73] leading-relaxed">
                            No worries! We offer free list protection. If your school adjustments are made after checkout, let us know and we will mail the missing elements to you for free, or coordinate a return.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border border-orange-100/50 rounded-2xl bg-[#FDFBF7] px-6 py-2">
                        <AccordionTrigger className="font-serif font-bold text-[#0B2545] hover:text-[#FF5C35] hover:no-underline  sm:text-base text-left">
                            How long does shipping take?
                        </AccordionTrigger>
                        <AccordionContent className=" sm: text-[#4A5D73] leading-relaxed">
                            Orders typically ship within 24-48 hours. Standard shipping takes 3-5 days. We schedule all deliveries so that they arrive at least 7-10 days before your district&apos;s first day of classes.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>

            </div>
        </section >
    )
}