
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Heart, Zap, Eye } from "lucide-react";
import mission from "../assets/man-touching-mission.avif";
import vision from "../assets/vision-direction-future.avif";
const About = () => {
  const values = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "Reliability",
      description: "We are committed to offering reliable services and ensuring your vehicle is in good hands.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Customer-Centricity",
      description: "Our platform is designed with the customer in mind, providing you with easy access to all vehicle management services.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Efficiency",
      description: "We aim to streamline the service process, so you can get your vehicle serviced without any hassle.",
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-500" />,
      title: "Transparency",
      description: "From estimates to invoices, we ensure all costs are transparent and clear.",
    },
  ];

  const reasons = [
    "Comprehensive Platform: Manage everything related to vehicle servicing in one place.",
    "Transparent Pricing: Get detailed service estimates and accurate invoices with no hidden fees.",
    "Ease of Access: Manage your account and vehicle details, book services, and other services all on the go.",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            About <span className="text-orange-400">Mechanic since 1999</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            A leading platform that simplifies vehicle service management with innovative solutions
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Company Overview
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Mechanicsince1999 is a leading platform that simplifies vehicle service management. We offer a range of features designed to streamline the entire service process, from service request submission to payment processing.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our goal is to provide vehicle owners and service providers with a seamless experience that saves time, reduces effort, and enhances transparency.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">15K+</div>
                    <div className="text-sm text-gray-600">Satisfied Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">50K+</div>
                    <div className="text-sm text-gray-600">Services Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-500 mb-2">99%</div>
                    <div className="text-sm text-gray-600">Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* <section className="py-20 bg-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-blue-700 leading-relaxed mb-4">
          Our mission is to be the go-to solution for vehicle owners and service providers by offering a comprehensive platform that makes managing vehicle services easier, faster, and more efficient.
        </p>
        <p className="text-lg text-blue-700 leading-relaxed">
          We strive to eliminate the hassle of traditional servicing and empower users with transparent, tech-enabled service delivery and real-time support.
        </p>
      </div>

   
      <div className="relative">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" // Use any appropriate mission-related image
            alt="Our Mission"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</section> */}

      {/* Mission Statement */}
       <section className="w-full">
  {/* Mission Section */}
  <div className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white py-28 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Text Content */}
      <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
        <div className="inline-flex items-center justify-center lg:justify-start gap-4">
          <Target className="h-14 w-14 text-green-400" />
          <h2 className="text-4xl font-bold text-green-400 uppercase tracking-wider">
          Our Mission
        </h2>
        </div>
        <h2 className="text-5xl font-bold leading-tight">
          Driving <span className="text-green-400">Innovation</span> in Vehicle Care
        </h2>
        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
          We're transforming vehicle service management through technology that connects owners with trusted providers,
          creating seamless experiences from booking to maintenance.
        </p>
        <div className="pt-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/30">
            Learn About Our Approach
          </button>
        </div>
      </div>
      {/* Image */}
      <div className="order-1 lg:order-2 relative">
        <img
          src={mission}
          alt="Mission Illustration"
          className="rounded-xl shadow-2xl w-full object-cover border-4 border-slate-700/50 hover:border-teal-400/30 transition-all duration-500"
        />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-500/10 rounded-xl border border-teal-400/20 -z-10"></div>
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-500/10 rounded-xl border border-indigo-400/20 -z-10"></div>
      </div>
    </div>
  </div>

  {/* Vision Section */}
  <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-28 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Image */}
      <div className="relative">
        <img
          src={vision}
          alt="Vision Illustration"
          className="rounded-xl shadow-2xl w-full object-cover border-4 border-slate-200 hover:border-indigo-300 transition-all duration-500"
        />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500/5 rounded-xl border border-indigo-400/10 -z-10"></div>
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500/5 rounded-xl border border-teal-400/10 -z-10"></div>
      </div>
      {/* Text Content */}
      <div className="text-center lg:text-left space-y-8">
        <div className="inline-flex items-center justify-center lg:justify-start gap-4">
          <Eye className="h-14 w-14 text-blue-600" />
          <h2 className="text-4xl font-bold  uppercase tracking-wider text-blue-600">
          Future Focus
        </h2>
        </div>
        <h2 className="text-5xl font-bold leading-tight text-slate-800">
          Shaping the <span className="text-blue-600">Future</span> of Mobility Services
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          Our vision is an ecosystem where technology eliminates friction in vehicle ownership, with predictive maintenance,
          transparent pricing, and on-demand services available at your fingertips.
        </p>
        <ul className="space-y-3 text-left pl-8">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-slate-700">AI-powered service recommendations</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-slate-700">Blockchain-based service history</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-slate-700">Seamless integration with smart vehicles</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Our Vision */}
{/* <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
   
      <div className="relative">
        <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-2xl">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png" // Replace with a relevant vision image
            alt="Our Vision"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>

      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Vision
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          To revolutionize the vehicle service industry by building the most customer-focused, tech-enabled service management ecosystem.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          We envision a world where vehicle owners enjoy effortless access to transparent, efficient, and reliable services through a single digital platform.
        </p>
      </div>
    </div>
  </div>
</section> */}


      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover-scale">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit group-hover:bg-gray-100 transition-colors">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Why Vehicle Owners Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Streamlined service booking process</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Real-time service tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Transparent pricing and billing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Comprehensive vehicle management</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
