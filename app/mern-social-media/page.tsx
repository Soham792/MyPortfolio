"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import dynamic from "next/dynamic"
import { useTerminalAnimation } from "@/hooks/useTerminalAnimation"

const SplashCursor = dynamic(() => import("@/components/ui/SplashCursor"), { ssr: false })

export default function MernSocialMedia() {
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
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6">MERN Social Media</h1>
            <p className="text-xl text-gray-300 mb-4">
              Full-stack social platform with authentication, user posts, and real-time interactions.
            </p>
          </motion.div>

          {/* Large Images Gallery Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cyber-border p-8 rounded-lg mb-12"
          >
            <h2 className="text-3xl font-bold text-[#00ff41] mb-8">Platform Showcase</h2>
            
            {/* Image 1: Login Interface - Full Width */}
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="cyber-border p-3 rounded-lg overflow-hidden"
              >
                <img 
                  src="/vibe-1.jpg" 
                  alt="VibeTribe Login Interface" 
                  className="w-full h-auto object-contain rounded hover:scale-105 transition-transform duration-300 cursor-pointer" 
                />
                <p className="text-gray-300 mt-3 text-center text-sm font-semibold">Login Interface</p>
              </motion.div>
            </div>

            {/* Images 2-5: Feed, Messages, Discover, Profile - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="cyber-border p-3 rounded-lg overflow-hidden"
              >
                <img 
                  src="/vibe-2.jpg" 
                  alt="VibeTribe Feed" 
                  className="w-full h-auto object-contain rounded hover:scale-105 transition-transform duration-300 cursor-pointer" 
                />
                <p className="text-gray-300 mt-3 text-center text-sm font-semibold">Feed & Posts</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="cyber-border p-3 rounded-lg overflow-hidden"
              >
                <img 
                  src="/vibe-3.jpg" 
                  alt="VibeTribe Messages" 
                  className="w-full h-auto object-contain rounded hover:scale-105 transition-transform duration-300 cursor-pointer" 
                />
                <p className="text-gray-300 mt-3 text-center text-sm font-semibold">Messaging</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="cyber-border p-3 rounded-lg overflow-hidden"
              >
                <img 
                  src="/vibe-4.jpg" 
                  alt="VibeTribe Discover" 
                  className="w-full h-auto object-contain rounded hover:scale-105 transition-transform duration-300 cursor-pointer" 
                />
                <p className="text-gray-300 mt-3 text-center text-sm font-semibold">Manage Account</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="cyber-border p-3 rounded-lg overflow-hidden"
              >
                <img 
                  src="/vibe-5.jpg" 
                  alt="VibeTribe Profile" 
                  className="w-full h-auto object-contain rounded hover:scale-105 transition-transform duration-300 cursor-pointer" 
                />
                <p className="text-gray-300 mt-3 text-center text-sm font-semibold">Manage Account Settings</p>
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
                VibeTribe is a comprehensive full-stack social media application designed to bring people together in a vibrant, interactive community. The platform enables users to connect with others, share their moments, express themselves creatively, and build meaningful relationships. With a modern interface and powerful features, VibeTribe creates an engaging environment where users can discover new people, maintain conversations, and stay connected with their network in real-time.
              </p>
            </div>

            <div className="cyber-border p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#00ff41] mb-6">Core Features</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#00ff41] flex items-center gap-2">
                    <span className="text-green-400 text-2xl">✓</span> User Authentication
                  </h3>
                  <p className="text-gray-300 text-base">Secure login with JWT tokens and OAuth integration for seamless access</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#00ff41] flex items-center gap-2">
                    <span className="text-green-400 text-2xl">✓</span> Create & Share Posts
                  </h3>
                  <p className="text-gray-300 text-base">Users can publish, edit, and delete posts with rich content support</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#00ff41] flex items-center gap-2">
                    <span className="text-green-400 text-2xl">✓</span> Real-Time Messaging
                  </h3>
                  <p className="text-gray-300 text-base">Direct messaging system with instant notifications for conversations</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#00ff41] flex items-center gap-2">
                    <span className="text-green-400 text-2xl">✓</span> Connection Management
                  </h3>
                  <p className="text-gray-300 text-base">Follow/unfollow users and manage your personal network easily</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#00ff41] flex items-center gap-2">
                    <span className="text-green-400 text-2xl">✓</span> Discovery Page
                  </h3>
                  <p className="text-gray-300 text-base">Find and connect with new people based on shared interests</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#00ff41] flex items-center gap-2">
                    <span className="text-green-400 text-2xl">✓</span> User Profiles
                  </h3>
                  <p className="text-gray-300 text-base">Customizable profiles with bio, pictures, and activity history</p>
                </div>
              </div>
            </div>

            <div className="cyber-border p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#00ff41] mb-6">User Experience</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p className="leading-relaxed">
                  The platform features an intuitive dashboard where users can view their feed, manage messages, explore connections, and discover new users. The Feed displays posts from connections in real-time, the Messages section enables seamless one-on-one conversations, and the Connections page shows your follower list and recommendations.
                </p>
                <p className="leading-relaxed">
                  Each user has a customizable profile page displaying their bio, profile picture, post history, follower count, and following count. The responsive design ensures a smooth experience across devices, from mobile phones to desktop computers. Smooth animations and intuitive navigation make the platform easy to use for all types of users.
                </p>
              </div>
            </div>

            <div className="cyber-border p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#00ff41] mb-6">Community Features</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p className="leading-relaxed">
                  Users can interact with posts by liking and commenting, creating meaningful discussions around shared interests. The real-time notification system keeps users informed about new messages, connection requests, and interactions on their posts. A sophisticated recommendation engine suggests new people to follow based on mutual connections and shared interests.
                </p>
                <p className="leading-relaxed">
                  VibeTribe fosters a safe and welcoming community where users feel comfortable expressing themselves. The platform emphasizes genuine connections and meaningful interactions rather than passive scrolling, encouraging users to engage authentically with their network.
                </p>
              </div>
            </div>

            <div className="cyber-border p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#00ff41] mb-6">Why VibeTribe?</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="text-[#00ff41] font-bold text-2xl">→</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00ff41] mb-2">Connect & Build Tribes</h3>
                    <p className="text-gray-300 text-base">Find like-minded people and build your unique community of shared interests and passions</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#00ff41] font-bold text-2xl">→</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00ff41] mb-2">Express Yourself</h3>
                    <p className="text-gray-300 text-base">Share your story and express yourself freely in your own way without restrictions</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#00ff41] font-bold text-2xl">→</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00ff41] mb-2">Discover Communities</h3>
                    <p className="text-gray-300 text-base">Find new interests and expand your horizons by exploring different communities</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#00ff41] font-bold text-2xl">→</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00ff41] mb-2">Real-Time Conversations</h3>
                    <p className="text-gray-300 text-base">Stay connected with people you care about with instant messaging and notifications</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#00ff41] font-bold text-2xl">→</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00ff41] mb-2">Beautiful Interface</h3>
                    <p className="text-gray-300 text-base">Enjoy an intuitive design optimized for engagement and ease of use</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Footer Spacing */}
          <div className="mt-16"></div>
        </div>
      </div>
    </div>
  )
}
