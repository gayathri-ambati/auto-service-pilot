
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import WhatApp from "@/components/WhatApp";
import { Shield, Eye, Lock, Users, Database, Settings } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: "Information We Collect",
      items: [
        "Personal details like name, contact information, and vehicle details",
        "Service and transaction history to improve our platform",
        "Payment information (via a secure payment processor)",
        "Technical data such as IP address, browser type, and usage patterns"
      ]
    },
    {
      icon: <Eye className="h-6 w-6 text-green-600" />,
      title: "How We Use Your Information",
      items: [
        "To process service requests and generate invoices",
        "To send you notifications about your service requests, invoices, and payments",
        "To improve our platform and services based on usage patterns",
        "To provide customer support and respond to inquiries"
      ]
    },
    {
      icon: <Lock className="h-6 w-6 text-orange-600" />,
      title: "Data Protection",
      items: [
        "We use secure encryption technologies to protect your data",
        "All payment processing is handled through PCI-compliant processors",
        "Your data will not be shared with third parties without your consent, except for service providers who help us fulfill services",
        "We implement industry-standard security measures to safeguard your information"
      ]
    },
    {
      icon: <Settings className="h-6 w-6 text-purple-600" />,
      title: "Your Rights",
      items: [
        "You have the right to access your personal information at any time",
        "You can modify or update your personal information through your account settings",
        "You have the right to delete your personal information, subject to legal requirements",
        "You can opt out of non-essential communications at any time"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <WhatApp />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Privacy <span className="text-orange-400">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            How we protect and handle your personal information
          </p>
          <p className="text-lg text-gray-400 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center space-x-3">
                <Shield className="h-8 w-8 text-blue-600" />
                <span>Our Privacy Commitment</span>
              </CardTitle>
              <CardDescription className="text-center text-lg">
                At Mechanicsince1999, we value your privacy and are committed to protecting your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-gray-700 leading-relaxed">
                  This privacy policy outlines how we collect, use, and protect your personal information when you use our vehicle service management platform. We are committed to ensuring that your privacy is protected and that you have control over your personal data.
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
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
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

          {/* Additional Privacy Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-xl">Additional Privacy Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64 w-full rounded border p-4">
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Data Retention</h4>
                    <p>We retain your personal information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Cookies and Tracking</h4>
                    <p>We use cookies and similar technologies to enhance your experience on our platform. You can control cookie settings through your browser preferences. Essential cookies are necessary for the platform to function properly.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Third-Party Integrations</h4>
                    <p>Our platform may integrate with third-party services for payment processing, analytics, and other functionalities. These third parties have their own privacy policies and we encourage you to review them.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Data Sharing</h4>
                    <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this privacy policy. We may share information with trusted third parties who assist us in operating our platform and serving our users.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Security Measures</h4>
                    <p>We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">International Data Transfers</h4>
                    <p>Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Children's Privacy</h4>
                    <p>Our platform is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware of such data collection, we will take steps to delete the information.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Changes to Privacy Policy</h4>
                    <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "last updated" date.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Contact for Privacy Concerns</h4>
                    <p>If you have any questions about this privacy policy or our privacy practices, please contact our privacy team at privacy@mechanicsince1999.com or call +1 (555) 123-4567.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Compliance</h4>
                    <p>We strive to comply with applicable data protection laws including GDPR, CCPA, and other relevant privacy regulations. Users in different jurisdictions may have additional rights under local laws.</p>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Data Subject Rights */}
          <Card className="mt-8 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-green-600" />
                <span>Your Data Rights</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Access & Portability</h4>
                  <p className="text-sm text-gray-700">Request a copy of your personal data in a portable format</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Rectification</h4>
                  <p className="text-sm text-gray-700">Correct inaccurate or incomplete personal information</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Erasure</h4>
                  <p className="text-sm text-gray-700">Request deletion of your personal data under certain conditions</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Restriction</h4>
                  <p className="text-sm text-gray-700">Limit how we process your personal information</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Privacy Team */}
          <Card className="mt-8 bg-blue-50">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Questions About Your Privacy?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this privacy policy or how we handle your personal information, please don't hesitate to contact our privacy team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="text-sm text-gray-600">
                    <strong>Email:</strong> privacy@mechanicsince1999.com
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
