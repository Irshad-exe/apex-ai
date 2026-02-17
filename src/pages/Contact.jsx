import React, { useState } from 'react';
import { Calendar, Mail, Clock, Send } from 'lucide-react';
import { contactContent } from '../mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {contactContent.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10">
              {contactContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendar Section */}
            <div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-3xl font-bold text-white">{contactContent.calendar.title}</h2>
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {contactContent.calendar.description}
                </p>
                
                {/* Calendar Placeholder */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-12 text-center">
                  <Calendar className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <p className="text-slate-300 text-lg font-semibold mb-2">
                    {contactContent.calendar.placeholder}
                  </p>
                  <p className="text-slate-500 text-sm">
                    Calendly or Cal.com integration
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <a href={`mailto:${contactContent.info.email}`} className="text-slate-300 hover:text-cyan-400 transition-colors">
                      {contactContent.info.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">{contactContent.info.response}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">{contactContent.info.availability}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Send className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-3xl font-bold text-white">{contactContent.alternative.title}</h2>
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {contactContent.alternative.description}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border-slate-700 text-white focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border-slate-700 text-white focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border-slate-700 text-white focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="Your SaaS Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Tell us about your technical stack and automation needs *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-slate-800/50 border-slate-700 text-white focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="We're a B2B SaaS with 50 employees. Our support team handles 500 tickets/week, 60% are repeat questions..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </Button>

                  <p className="text-sm text-slate-500 text-center">
                    We'll respond within 24 hours with initial technical thoughts
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
