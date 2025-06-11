
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Wrench, FileText, CreditCard, Users, Clock, Shield, Star } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Easy Service Requests",
      description: "Customers can request vehicle services with just a few clicks.",
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Complete Vehicle Management",
      description: "Keep track of vehicle details, service history, and upcoming repairs.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "Transparent Estimation & Billing",
      description: "Get accurate service estimates and generate invoices.",
    },
  ];

  const customerServices = [
    "Track Service Requests: View and manage all your service requests",
    "Manage Vehicles: Keep your vehicle records up-to-date and request services when needed",
    "Invoices & Payments: View invoices, make payments, and track your payment history",
    "DIY Services: Request spare parts or services for do-it-yourself repairs",
  ];

  const stats = [
    { number: "15K+", label: "Happy Customers" },
    { number: "25+", label: "Years Experience" },
    { number: "50K+", label: "Services Completed" },
    { number: "99%", label: "Customer Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to{" "}
                <span className="text-orange-400">Mechanic since1999</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light">
                Your Trusted Vehicle Service Management Platform
              </p>
              <p className="text-lg text-blue-200 leading-relaxed max-w-2xl">
                We provide a comprehensive platform for all your vehicle service needs. Whether you're a vehicle owner looking to manage your services or a technician, we ensure a seamless experience. Our user-friendly system allows you to track service requests, manage vehicles, receive estimates, and generate invoices – all from one central hub.
              </p>
          
<div className="flex flex-col sm:flex-row gap-4">
  <Link to="/contact#contact-form">
    <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
      Get Started Today
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  </Link>
  <Link to="/services">
    <Button size="lg" variant="outline" className="border-white bg-black text-blue hover:bg-white hover:text-blue-900 px-8 py-3">
      Explore Our Services
    </Button>
  </Link>
</div>


            </div>
            <div className="relative animate-fade-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4">
                      <div className="text-3xl font-bold text-orange-400">{stat.number}</div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the powerful features that make vehicle service management effortless
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover-scale">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit group-hover:bg-blue-100 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Customer-Specific Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform is designed with you in mind. Access all the tools you need to manage your vehicle services efficiently.
              </p>
              <div className="space-y-4">
                {customerServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{service}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Portal</h3>
                  <p className="text-sm text-gray-600">Manage all your services in one place</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow mt-8">
                  <Clock className="h-12 w-12 text-orange-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Real-time Updates</h3>
                  <p className="text-sm text-gray-600">Track your service progress live</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow -mt-4">
                  <Shield className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                  <p className="text-sm text-gray-600">Your data is safe with us</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow mt-4">
                  <Star className="h-12 w-12 text-yellow-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Service</h3>
                  <p className="text-sm text-gray-600">Premium service quality guaranteed</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us with their vehicle service needs. 
            Experience the difference of professional service management.
          </p>
          
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link to="/contact#contact-form">
    <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
      Get Started Today
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  </Link>
  <Link to="/services">
    <Button size="lg" variant="outline" className="border-white bg-black text-white hover:bg-white hover:text-blue-900 px-8 py-3">
      Explore Our Services
    </Button>
  </Link>
</div>
        </div>
      </section>
    </div>
    
  );
};

export default Index;
