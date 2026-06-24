"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <main className="flex-1 w-full bg-[#FDFBF7] py-12 min-h-screen flex items-center justify-center">
            <div className="container mx-auto max-w-6xl px-6 sm:px-8">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 min-h-[800px]">

                    {/* Left Side - Image & Copy */}
                    <div className="bg-[#F4F6FB] p-12 sm:flex flex-col justify-between hidden md:flex">
                        <div className="flex-1 flex items-center justify-center pt-10">
                            <img src="/images/home/product-bundle.png" alt="PrepED Kit" className="w-[90%] h-auto object-contain drop-shadow-xl" />
                        </div>
                        <div className="mt-16">
                            <h2 className="text-[2.5rem] leading-tight font-serif font-bold text-[#0B2545] mb-4">
                                Join The Prep<span className="text-[#FF5C35]">ED</span><br />Family
                            </h2>
                            <div className="w-12 h-[2px] bg-[#FF5C35] mb-6"></div>
                            <p className="text-[#4A5D73]  leading-relaxed max-w-sm">
                                Sign up to enjoy a faster checkout experience and stay updated on our latest offers. Select 85 more words to run humanizer.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0B2545] mb-4 leading-tight">
                            Create<br />Your Account
                        </h1>
                        <p className=" text-gray-500 mb-10">
                            Already have an account? <Link href="/login" className="font-bold text-[#FF5C35] hover:underline">Sign In</Link>
                        </p>

                        <form className="space-y-5 mb-8" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block  font-bold text-[#0B2545] mb-2">Full Name</label>
                                <Input
                                    placeholder="Enter your full name"
                                    className="h-12 bg-[#F4F6FB]/50 border-gray-200 focus:border-[#FF5C35] "
                                />
                            </div>

                            <div>
                                <label className="block  font-bold text-[#0B2545] mb-2">Email Address</label>
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="h-12 bg-[#F4F6FB]/50 border-gray-200 focus:border-[#FF5C35] "
                                />
                            </div>

                            <div className="relative">
                                <label className="block  font-bold text-[#0B2545] mb-2">Password</label>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create Password"
                                    className="h-12 bg-[#F4F6FB]/50 border-gray-200 focus:border-[#FF5C35]  pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-10 text-gray-400 hover:text-[#0B2545] transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>

                            <div className="relative">
                                <label className="block  font-bold text-[#0B2545] mb-2">Confirm Password</label>
                                <Input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    className="h-12 bg-[#F4F6FB]/50 border-gray-200 focus:border-[#FF5C35]  pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-10 text-gray-400 hover:text-[#0B2545] transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>

                            <div className="pt-2">
                                <Button className="w-full bg-[#0B2545] hover:bg-[#134074] text-white h-12 rounded-lg font-medium shadow-sm">
                                    Create Account
                                </Button>
                            </div>
                        </form>

                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="flex-1 h-[1px] bg-gray-200"></div>
                            <span className=" font-medium text-gray-400">Or</span>
                            <div className="flex-1 h-[1px] bg-gray-200"></div>
                        </div>

                        <div className="mb-8 text-center">
                            <Button variant="outline" className="w-full h-12 border-gray-300 text-[#0B2545] hover:bg-gray-50 font-medium mb-2">
                                Continue as Guest
                            </Button>
                            <p className=" text-gray-400">You can checkout without creating an account.</p>
                        </div>

                        {/* Banner */}
                        <div className="bg-[#FFF0E8]/50 border border-[#FF5C35]/30 rounded-xl p-4 flex items-center gap-4 mb-8">
                            <div className="text-[#FF5C35] shrink-0">
                                <Gift className="w-8 h-8" />
                            </div>
                            <p className="text-[#0B2545]  font-medium leading-snug">
                                Create an account and get <span className="font-bold text-[#FF5C35]">10% off</span> your first order!
                            </p>
                        </div>

                        <p className=" text-gray-400 text-left max-w-xs leading-relaxed">
                            By creating an account, you agree to our Terms of Service and <Link href="/privacy" className="text-[#FF5C35] font-semibold hover:underline">Privacy Policy.</Link>
                        </p>

                    </div>
                </div>
            </div>
        </main>
    );
}
