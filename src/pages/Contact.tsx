import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import WhatApp from "@/components/WhatApp";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const Contacts = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Name, email, and message are required');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      const response = await axios.post(`${API_BASE_URL}/contacts`, formData);
      
      setFormData({ name: '', phone: '', email: '', message: '' });
      setSubmitSuccess(true);
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Failed to send message. Please try again later.';
      setSubmitError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone",
      content: "‪+91 7709697786‬",
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      content: "vijay@mechanicsince1999.com",
      description: "Send us your questions"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Address",
      content: "38/52 N.C.C. Malwani, Malad Gate No.6, Malad West, Malad, Mumbai, PO: Kharodi, DIST: Mumbai, Maharashtra - 400095",
      description: "Visit our service center"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Business Hours",
      content: "24*7 / 365 days",
      description: "We're here when you need us"
    }
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact-form") {
      const el = document.getElementById("contact-form");
      if (el) {
        setTimeout(() => {
          const yOffset = -230; // Adjust this based on your header height
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }, 70); // slight delay to ensure smooth transition
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <WhatApp />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Get in Touch with <span className="text-orange-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            For Any Questions or Concerns
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-center">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 bg-blue-50 rounded-full w-fit group-hover:bg-blue-100 transition-colors">
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900 mb-2">{info.content}</p>
                  <CardDescription className="text-gray-600">
                    {info.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have a question about our services? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <div id="contact-form">
                <Card className="max-w-[800px] mx-auto">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {submitSuccess && (
                        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                          Message sent successfully!
                        </div>
                      )}
                      {submitError && (
                        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
                          {submitError}
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your phone number"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          disabled={isSubmitting}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          disabled={isSubmitting}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        variant="default"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Visit Our Location
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Stop by our service center for in-person consultations and immediate assistance.
              </p>

              {/* Map Placeholder */}
              <Card className="mb-8">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <p className="text-gray-600">Interactive Map</p>
                      <p className="text-sm text-gray-500">38/52 N.C.C. Malwani, Malad Gate No.6, Malad West, Malad, Mumbai, PO: Kharodi, DIST: Mumbai, Maharashtra - 400095</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold">24*7 / 365 days</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>We're here when you need us</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Emergency Vehicle Service
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Need immediate assistance? Our emergency service team is available 24/7 for urgent vehicle issues.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100 px-8 py-3">
            <Phone className="mr-2 h-5 w-5" />
            Call Emergency Line: +91 7709697786
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contacts;