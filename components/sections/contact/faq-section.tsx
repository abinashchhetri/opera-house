import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How long does it take to complete a typical installation?",
      answer:
        "Installation time varies depending on the project size and complexity. A typical residential window installation takes 1-2 days, while larger commercial projects may take 1-2 weeks. We provide detailed timelines during the consultation phase.",
    },
    {
      question: "Do you provide free quotes and consultations?",
      answer:
        "Yes, we offer completely free on-site consultations and detailed quotes. Our experts will assess your requirements, take measurements, and provide comprehensive pricing with no hidden costs.",
    },
    {
      question: "What warranty do you offer on your products and installation?",
      answer:
        "We provide a comprehensive 10-year warranty on UPVC products, 5-year warranty on aluminum products, and 2-year warranty on installation workmanship. All warranties are backed by our commitment to quality service.",
    },
    {
      question: "Can you customize products according to specific requirements?",
      answer:
        "We specialize in custom solutions tailored to your exact specifications. Whether it's unique sizes, colors, or special features, our team can create products that perfectly match your needs.",
    },
    {
      question: "What areas do you serve for installation services?",
      answer:
        "We primarily serve Pokhara Metropolitan City and the entire Kaski District. For larger projects, we also provide services to surrounding areas and can discuss nationwide projects on a case-by-case basis.",
    },
    {
      question: "Do you offer maintenance services after installation?",
      answer:
        "Yes, we provide comprehensive maintenance services including regular inspections, cleaning, hardware adjustments, and repairs. We also offer annual maintenance contracts for commercial clients.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including cash, bank transfers, and installment plans for larger projects. We typically require 30% advance payment with the balance due upon completion.",
    },
    {
      question: "How do I know which type of product is best for my project?",
      answer:
        "Our expert consultants will assess your specific needs, budget, and preferences to recommend the most suitable products. We consider factors like location, usage, aesthetic preferences, and long-term maintenance requirements.",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our products, services, and processes. Can't find what you're looking
            for? Contact us directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/10">
            <CardHeader>
              <CardTitle className="text-center text-xl">Common Questions & Answers</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
