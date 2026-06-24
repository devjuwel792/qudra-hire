"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";

export default function ContactUsSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FDFBF7]">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <span className=" font-semibold tracking-wider text-[#FF5C35] uppercase">
            We're Here To Help
          </span>
          <h2 className="font-serif text-5xl font-bold tracking-tight text-[#0B2545]">
            Contact US<span className="text-[#FF5C35]">.</span>
          </h2>
          <p className=" text-[#4A5D73] leading-relaxed max-w-lg mx-auto">
            Have a question, need assistance, or just want to say hello?
            we'd love to hear from you.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Contact Info */}
          <div className="lg:w-[35%] flex flex-col space-y-0">
            {/* EMAIL US */}
            <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#FF5C35]">
                <Mail className="h-5 w-5" />
              </div>
              <div className="pt-1">
                <h4 className=" font-bold text-[#0B2545] tracking-wider uppercase mb-1">
                  EMAIL US
                </h4>
                <a
                  href="mailto:Hello@preped.com"
                  className=" text-[#4A5D73] hover:text-[#FF5C35] block"
                >
                  Hello@preped.com
                </a>
                <span className=" text-gray-500 mt-1 block">
                  We reply within 24 hours
                </span>
              </div>
            </div>

            {/* CALL US */}
            <div className="flex items-start gap-4 py-6 border-b border-gray-200">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#FF5C35]">
                <Phone className="h-5 w-5" />
              </div>
              <div className="pt-1">
                <h4 className=" font-bold text-[#0B2545] tracking-wider uppercase mb-1">
                  CALL US
                </h4>
                <a
                  href="tel:8881237733"
                  className=" text-[#4A5D73] hover:text-[#FF5C35] block"
                >
                  (888) 123-7733
                </a>
                <span className=" text-gray-500 mt-1 block uppercase">
                  ON - FRI, 9 AM - 5 PM EST
                </span>
              </div>
            </div>

            {/* OUR OFFICE */}
            <div className="flex items-start gap-4 py-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#FF5C35]">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="pt-1">
                <h4 className=" font-bold text-[#0B2545] tracking-wider uppercase mb-1">
                  OUR OFFICE
                </h4>
                <p className=" text-[#4A5D73]">
                  123 school lane, suite 100
                </p>
                <p className=" text-gray-500 mt-1 uppercase">
                  Orlando, fl 32801
                </p>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="mt-4 bg-[#FFF0E8] p-6 rounded-lg text-center">
              <h4 className="text-xl font-serif font-semibold text-[#0B2545] mb-2">Need Help?</h4>
              <p className=" text-gray-600 mb-4 leading-relaxed px-2">
                Find answers to common questions, shipping details, returns, and more in our comprehensive faq section.
              </p>
              <a href="#" className=" font-semibold text-[#FF5C35] hover:text-orange-600 flex items-center justify-center gap-1 transition-colors">
                Explore FAQs <span className="text-lg leading-none">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:w-[65%]">
            <Card className="border-gray-200 bg-white shadow-sm p-8 sm:p-12 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl font-semibold text-[#0B2545] mb-2">Send Us A Message</h3>
                <p className=" text-gray-500">Fill out the form below and we'll get back to you<br />as soon as possible.</p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for your message! Our team will get back to you within 24 hours.");
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    required
                    placeholder="Full Name"
                    className="border-gray-200 focus:border-[#FF5C35] bg-white h-12  placeholder:text-gray-400 rounded-lg shadow-none"
                  />
                  <Input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="border-gray-200 focus:border-[#FF5C35] bg-white h-12  placeholder:text-gray-400 rounded-lg shadow-none"
                  />
                </div>

                <div className="relative">
                  <select
                    className="w-full appearance-none border border-gray-200 focus:border-[#FF5C35] bg-white h-12  text-gray-500 rounded-lg px-3 focus:outline-none focus:ring-1 focus:ring-[#FF5C35] shadow-none"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="billing">Billing</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>

                <div className="relative">
                  <textarea
                    rows={6}
                    required
                    placeholder="Your Message"
                    className="w-full rounded-lg border border-gray-200 focus:border-[#FF5C35] bg-white p-4  placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF5C35] shadow-none resize-none"
                  />
                  <span className="absolute bottom-4 right-4 text-[10px] text-gray-400">200 Words</span>
                </div>

                <div className="pt-2 text-center">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto min-w-[240px] bg-[#0B2545] hover:bg-[#134074] text-white h-12 px-8 rounded-lg font-medium shadow-none transition-colors"
                  >
                    Send Message <span className="ml-2 font-normal">&rarr;</span>
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

