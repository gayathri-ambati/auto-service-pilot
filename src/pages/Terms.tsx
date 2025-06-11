
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, Users, FileText, AlertTriangle, Scale } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Introduction",
      content: "These terms and conditions govern the use of our platform and services. By using our platform, you agree to these terms. Please read these terms carefully before using our services. If you do not agree with any part of these terms, you must not use our platform."
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "User Responsibilities",
      content: "As a user, you agree to provide accurate and truthful information when using our platform. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account."
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-600" />,
      title: "Service Requests",
      content: "You agree to pay for all requested services based on the estimates and invoices provided. Service requests are binding once approved. You may cancel a service request up to 24 hours before the scheduled service time without penalty. Cancellations made within 24 hours may incur a cancellation fee."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
      title: "Liabilities",
      content: "We are not liable for any damage caused due to incorrect vehicle information provided by the user. Our liability is limited to the cost of services provided. We are not responsible for any consequential or indirect damages arising from the use of our services."
    },
    {
      icon: <Scale className="h-6 w-6 text-purple-600" />,
      title: "Dispute Resolution",
      content: "Any disputes arising from these terms or our services shall be resolved through binding arbitration. The arbitration shall be conducted in accordance with the rules of the American Arbitration Association. The decision of the arbitrator shall be final and binding."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Terms and <span className="text-orange-400">Conditions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            For Using Mechanicsince1999 Services
          </p>
          <p className="text-lg text-gray-400 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Overview</CardTitle>
              <CardDescription className="text-center text-lg">
                Important information about using our vehicle service management platform
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using the Mechanicsince1999 platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These terms apply to all users of the platform, including customers, service providers, and visitors.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    {section.icon}
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Terms */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-xl">Additional Terms and Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64 w-full rounded border p-4">
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Account Security</h4>
                    <p>Users are responsible for maintaining the security of their account credentials. We recommend using strong passwords and enabling two-factor authentication where available.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Payment Terms</h4>
                    <p>All payments are due upon completion of services unless other arrangements have been made in advance. We accept major credit cards and bank transfers.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Service Quality</h4>
                    <p>We strive to provide high-quality services. If you are not satisfied with a service, please contact our customer support within 48 hours of service completion.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Platform Availability</h4>
                    <p>While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. Scheduled maintenance will be announced in advance when possible.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Data Backup</h4>
                    <p>We regularly backup user data, but users are encouraged to maintain their own records of important vehicle service information.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Third-Party Services</h4>
                    <p>Our platform may integrate with third-party services. We are not responsible for the availability or performance of these external services.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Intellectual Property</h4>
                    <p>All content, trademarks, and intellectual property on our platform are owned by Mechanicsince1999 or our licensors and are protected by applicable laws.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Termination</h4>
                    <p>We reserve the right to terminate or suspend accounts that violate these terms or engage in fraudulent activity.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Changes to Terms</h4>
                    <p>We may update these terms from time to time. Users will be notified of significant changes via email or platform notifications.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Contact Information</h4>
                    <p>For questions about these terms, please contact our legal team at legal@mechanicsince1999.com or call +1 (555) 123-4567.</p>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Acceptance */}
          <Card className="mt-8 bg-blue-50">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Acceptance of Terms
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  By continuing to use our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with these terms, please discontinue use of our services immediately.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Terms;
