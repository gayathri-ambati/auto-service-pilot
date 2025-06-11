import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import image from "../assets/vsms.jpg";
import { Truck } from "lucide-react";
import { 
  Wrench, 
  Shield, 
  Hammer, 
  Calculator, 
  FileText, 
  Droplets, 
  Car, 
  Cog, 
  Battery,
  Disc,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <Droplets className="h-12 w-12 text-blue-600" />,
      title: "Routine Maintenance Services",
      description: "Keep your vehicle running smoothly with regular maintenance",
      services: [
        "Oil Changes, Tire Rotations, and Brake Checks",
        "Air Filter Replacements, Fluid Checks, and Tire Balancing", 
        "Full Vehicle Inspections: Ensure your vehicle stays in top condition"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-red-500" />,
      title: "Insurance and Repair Services",
      description: "Comprehensive repair solutions for all vehicle types",
      services: [
        "Collision and Accident Repairs: Fix any damage quickly and efficiently",
        "Parts Replacement: Get genuine spare parts for engine, brakes, suspension",
        "General Repairs: From electrical systems to engine issues"
      ]
    },
    {
      icon: <Hammer className="h-12 w-12 text-orange-500" />,
      title: "DIY Requests",
      description: "Support for customers who prefer to handle repairs themselves",
      services: [
        "Spare Parts Orders: Get the right spare parts for your vehicle",
        "Self-Service Options: DIY kits and detailed instructions",
        "Expert Guidance: Professional advice for your DIY projects"
      ]
    },
    {
      icon: <Calculator className="h-12 w-12 text-green-500" />,
      title: "Service Estimations",
      description: "Transparent pricing with detailed cost breakdowns",
      services: [
        "Request a Detailed Estimate: Labor and parts costs included",
        "GST & Taxes Breakdown: Transparent pricing structure",
        "Approve or Reject Estimates: Review before service begins"
      ]
    },
    {
      icon: <FileText className="h-12 w-12 text-purple-500" />,
      title: "Billing and Invoices",
      description: "Professional invoicing and payment processing",
      services: [
        "Invoice Generation: Detailed invoices with all charges",
        "Downloadable PDFs: Access invoices anytime",
        "Payment Tracking: Monitor payment history easily"
      ]
    },
  {
  icon: <Truck className="h-12 w-12 text-indigo-600" />,
  title: "Fleet Management",
  description: "Manage multiple vehicles efficiently with smart tracking tools",
  services: [
    "Vehicle Tracking: Real-time GPS and diagnostics monitoring",
    "Maintenance Schedules: Auto-reminders for each vehicle",
    "Driver Logs & Reports: Monitor performance and fuel usage"
  ]
}


  ];

  const specialtyServices = [
    { icon: <Car className="h-8 w-8" />, name: "Engine Diagnostics", desc: "Advanced computer diagnostics" },
    { icon: <Disc className="h-8 w-8" />, name: "Brake Systems", desc: "Complete brake service and repair" },
    { icon: <Battery className="h-8 w-8" />, name: "Electrical Systems", desc: "Battery, alternator, and wiring" },
    { icon: <Cog className="h-8 w-8" />, name: "Transmission", desc: "Automatic and manual transmission service" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Explore Our Range of <span className="text-orange-400">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            We offer a wide range of services to meet all your vehicle maintenance needs
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Whether you're looking for routine maintenance, spare parts, or DIY services, our platform has you covered
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover-scale">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 mt-1">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialty Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert solutions for specific vehicle components and systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover-scale text-center">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 bg-blue-50 rounded-full w-fit group-hover:bg-blue-100 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Our Service Process Works
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Simple, transparent, and efficient - from request to completion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Request Service", desc: "Submit your service request online" },
              { step: "2", title: "Get Estimate", desc: "Receive detailed cost breakdown" },
              { step: "3", title: "Approve & Schedule", desc: "Confirm service and book appointment" },
              { step: "4", title: "Complete & Pay", desc: "Service completion and payment" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Service Your Vehicle?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get started with our professional vehicle service management platform today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact#contact-form">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
              Request Service Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
