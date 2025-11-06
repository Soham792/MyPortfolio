"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import dynamic from "next/dynamic"
import { useTerminalAnimation } from "@/hooks/useTerminalAnimation"

const SplashCursor = dynamic(() => import("@/components/ui/SplashCursor"), { ssr: false })

export default function TiffinVendorManagement() {
  useTerminalAnimation()
  
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <SplashCursor />

      {/* GREEN HACKER Terminal Background */}
      <div className="hacker-bg">
        <div className="terminal-lines"></div>
      </div>

      {/* CRT Screen Effect */}
      <div className="crt-effect" />
      
      {/* Cyber Grid Background */}
      <div className="cyber-grid" />

      {/* Content */}
      <div className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <Link href="/#projects">
            <motion.button
              className="flex items-center gap-2 mb-8 px-6 py-3 border border-[#00ff41]/50 rounded-lg hover:bg-[#00ff41]/10 transition-all text-[#00ff41]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </motion.button>
          </Link>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6">Tiffin Vendor Management</h1>
            <p className="text-xl text-gray-300 mb-4">
              Platform connecting tiffin vendors and customers through a linked mobile app.
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cyber-border p-8 rounded-lg mb-12"
          >
            <h2 className="text-3xl font-bold text-[#00ff41] mb-6">Demo Video</h2>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden cyber-border bg-black">
              <video
                width="100%"
                height="100%"
                controls
                controlsList="nodownload"
                className="w-full h-full"
              >
                <source src="/nourishnet.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Images Gallery Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="cyber-border p-8 rounded-lg mb-12"
          >
            <h2 className="text-3xl font-bold text-[#00ff41] mb-8">Platform Showcase</h2>
            
            {/* Images in 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="cyber-border p-3 rounded-lg overflow-hidden"
              >
                <img 
                  src="/vendor-1.jpg" 
                  alt="Tiffin Vendor Management - Vendor Interface" 
                  className="w-full h-auto object-contain rounded hover:scale-105 transition-transform duration-300 cursor-pointer" 
                />
                <p className="text-gray-300 mt-3 text-center text-sm font-semibold">Vendor Interface</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="cyber-border p-3 rounded-lg overflow-hidden"
              >
                <img 
                  src="/vendor-2.jpg" 
                  alt="Tiffin Vendor Management - Customer Interface" 
                  className="w-full h-auto object-contain rounded hover:scale-105 transition-transform duration-300 cursor-pointer" 
                />
                <p className="text-gray-300 mt-3 text-center text-sm font-semibold">Customer Interface</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="cyber-border p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#00ff41] mb-6">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                The Tiffin Vendor Management platform is an innovative solution designed to bridge the gap between local tiffin vendors and hungry customers. This comprehensive mobile application ecosystem simplifies the process of ordering home-cooked meals, supporting vendors in managing their operations efficiently while providing customers with a seamless ordering experience. The platform leverages modern technology to create a trusted marketplace where quality food meets convenience.
              </p>
            </div>

            <div className="cyber-border p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#00ff41] mb-6">Core Features</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#00ff41] flex items-center gap-2">
                    <span className="text-green-400 text-2xl">✓</span> Vendor Management
                  </h3>
                  <p className="text-gray-300 text-base">Complete control panel for vendors to manage menu items, pricing, and daily availability</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#00ff41] flex items-center gap-2">
                    <span className="text-green-400 text-2xl">✓</span> Customer App
                  </h3>
                  <p className="text-gray-300 text-base">User-friendly interface for customers to browse, order, and track their tiffin deliveries</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#00ff41] flex items-center gap-2">
                    <span className="text-green-400 text-2xl">✓</span> Order Management
                  </h3>
                  <p className="text-gray-300 text-base">Real-time order tracking and management system for both vendors and customers</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#00ff41] flex items-center gap-2">
                    <span className="text-green-400 text-2xl">✓</span> Payment Integration
                  </h3>
                  <p className="text-gray-300 text-base">Secure payment processing with multiple payment methods for convenient transactions</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#00ff41] flex items-center gap-2">
                    <span className="text-green-400 text-2xl">✓</span> Ratings & Reviews
                  </h3>
                  <p className="text-gray-300 text-base">Customer feedback system to maintain quality and build trust in the community</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#00ff41] flex items-center gap-2">
                    <span className="text-green-400 text-2xl">✓</span> Location Based
                  </h3>
                  <p className="text-gray-300 text-base">GPS-enabled ordering to find nearby tiffin vendors and track deliveries in real-time</p>
                </div>
              </div>
            </div>

            <div className="cyber-border p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#00ff41] mb-6">How It Works</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p className="leading-relaxed">
                  <span className="text-[#00ff41] font-semibold">For Vendors:</span> Tiffin vendors register on the platform, create their menu, set daily availability, and manage incoming orders through an intuitive dashboard. They can update their menu items in real-time, manage pricing, and track order fulfillment status. The system helps them optimize their daily operations and reach more customers.
                </p>
                <p className="leading-relaxed">
                  <span className="text-[#00ff41] font-semibold">For Customers:</span> Users browse available tiffin vendors near them, view their menus and ratings, place orders for their preferred meals, and track deliveries in real-time. Customers can save favorite vendors, manage their orders, and leave reviews based on their experience. The app makes ordering fresh home-cooked meals convenient and reliable.
                </p>
              </div>
            </div>

            <div className="cyber-border p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#00ff41] mb-6">Why Tiffin Vendor Management?</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="text-[#00ff41] font-bold text-2xl">→</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00ff41] mb-2">Support Local Vendors</h3>
                    <p className="text-gray-300 text-base">Help small tiffin vendors reach a wider customer base and grow their business sustainably</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#00ff41] font-bold text-2xl">→</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00ff41] mb-2">Fresh & Homemade Meals</h3>
                    <p className="text-gray-300 text-base">Access authentic, fresh, and homemade food prepared with love and quality ingredients</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#00ff41] font-bold text-2xl">→</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00ff41] mb-2">Affordable & Convenient</h3>
                    <p className="text-gray-300 text-base">Enjoy budget-friendly, home-cooked meals with the convenience of online ordering</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#00ff41] font-bold text-2xl">→</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00ff41] mb-2">Community Building</h3>
                    <p className="text-gray-300 text-base">Create a trusted marketplace where vendors and customers form long-term relationships</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#00ff41] font-bold text-2xl">→</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00ff41] mb-2">Easy Operations</h3>
                    <p className="text-gray-300 text-base">Simplify daily operations for vendors with automated order management and delivery tracking</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="cyber-border p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#00ff41] mb-6">Impact & Benefits</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p className="leading-relaxed">
                  This platform transforms the traditional tiffin delivery industry by digitizing the process, making it accessible to more people, and ensuring quality and reliability. It creates economic opportunities for small vendors while providing customers with better meal options and transparency. The system promotes a healthy local economy where traditional businesses thrive through modern technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Footer Spacing */}
          <div className="mt-16"></div>
        </div>
      </div>
    </div>
  )
}
