
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, MessageSquare, Phone } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How can I request a vehicle service?",
      answer: "Simply log in to your account, select 'Request Service,' and fill in the details of your vehicle and the service required. Our user-friendly interface makes it easy to specify exactly what your vehicle needs."
    },
    {
      question: "How do I get an estimate for vehicle repairs?",
      answer: "You can request an estimate for any service through the 'Request Estimate' option in your dashboard. The estimate will include the cost of labor, parts, and taxes, giving you complete transparency before any work begins."
    },
    {
      question: "Can I track the status of my service request?",
      answer: "Yes, you can track the status of all your service requests in the 'Service History' section of your dashboard. You'll receive real-time updates on the progress of your vehicle's service."
    },
    {
      question: "How can I update my vehicle details?",
      answer: "Navigate to the 'My Vehicles' section in your dashboard, where you can add, edit, or remove vehicle information. Keep your vehicle records up-to-date for better service recommendations."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and bank transfers. All payments are processed securely through our encrypted payment system."
    },
    {
      question: "How long does a typical service take?",
      answer: "Service duration varies depending on the type of work needed. Routine maintenance typically takes 1-3 hours, while major repairs may take 1-3 days. We'll provide an estimated timeline with your service quote."
    },
    {
      question: "Do you provide warranty on your services?",
      answer: "Yes, we provide warranty on all our services and parts. The warranty period varies by service type - typically 6 months to 2 years depending on the work performed."
    },
    {
      question: "Can I cancel or reschedule my service appointment?",
      answer: "Yes, you can cancel or reschedule your appointment through your dashboard or by calling our customer service. We require at least 24 hours notice for changes to avoid cancellation fees."
    },
    {
      question: "Do you offer mobile service or pickup/delivery?",
      answer: "Yes, we offer mobile services for certain types of maintenance and can arrange vehicle pickup and delivery for major repairs. Contact us to check availability in your area."
    },
    {
      question: "How do I know if my vehicle needs immediate attention?",
      answer: "Warning signs include unusual noises, dashboard warning lights, fluid leaks, or changes in vehicle performance. If you're unsure, our diagnostic services can help identify any issues."
    }
  ];

  const categories = [
    {
      icon: <HelpCircle className="h-8 w-8 text-blue-600" />,
      title: "General Questions",
      count: "10+ answers",
      description: "Common questions about our platform and services"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: "Service Process",
      count: "8+ answers", 
      description: "How our service booking and management works"
    },
    {
      icon: <Phone className="h-8 w-8 text-orange-600" />,
      title: "Technical Support",
      count: "5+ answers",
      description: "Help with account and platform issues"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Frequently Asked <span className="text-orange-400">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Find answers to common questions about our vehicle service management platform
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the information you need quickly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover-scale text-center">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gray-50 rounded-full w-fit group-hover:bg-gray-100 transition-colors">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    {category.count}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions & Answers
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our services
            </p>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Support
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white bg-black text-white hover:bg-white hover:text-blue-900 px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call Us: +1 (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
