"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Users, Calendar, MapPin, Award } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

const SplashCursor = dynamic(() => import("@/components/ui/SplashCursor"), { ssr: false })

export default function AlumniPage() {
  const features = [
    {
      icon: Users,
      title: "Featured Alumni",
      description: "Connect with distinguished alumni from Electronics Engineering Batch 1999"
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Register for alumni reunions, tech summits, and networking events"
    },
    {
      icon: MapPin,
      title: "Global Network",
      description: "Alumni across the world from Mumbai to California to Missouri"
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Showcase skills, achievements, and career progression"
    }
  ]

  return (
    <div className="min-h-screen bg-[#001a00] text-white">
      <SplashCursor />
      {/* Green Hacker Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-[#001a00] to-black opacity-90 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/70 border-b border-[#00ff41]/20">
          <div className="container mx-auto px-6 py-4">
            <Link href="/" className="inline-flex items-center gap-2 text-[#00ff41] hover:text-[#22ff44] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Portfolio</span>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{
                textShadow: '0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.6), 0 0 30px rgba(0, 255, 65, 0.4)'
              }}>
                Alumni Directory Platform
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Fr.Conceicao Rodrigues College of Engineering - Electronics Engineering Batch of 1999
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                A comprehensive networking platform connecting pioneers in technology for over two decades
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-6 rounded-lg border border-[#00ff41]/40 bg-black/70 backdrop-blur hover:bg-[#00ff41]/10 transition-all"
                >
                  <feature.icon className="w-8 h-8 text-[#00ff41] mb-4" />
                  <h3 className="text-lg font-bold text-[#00ff41] mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="py-20 px-6 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-12 text-center" style={{
                textShadow: '0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.6)'
              }}>
                Platform Screenshots
              </h2>

              <div className="space-y-12">
                {/* Homepage */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="border border-[#00ff41]/40 rounded-lg p-6 bg-black/70 backdrop-blur"
                >
                  <h3 className="text-2xl font-bold text-[#00ff41] mb-4">Homepage - Featured Alumni</h3>
                  <p className="text-gray-300 mb-6">
                    The landing page showcases featured alumni with search functionality and quick access to profiles. Users can search alumni by name and view highlighted members of the batch.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-[#00ff41]/20">
                    <img 
                      src="/alumni-homepage.jpg" 
                      alt="Alumni Homepage" 
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>

                {/* Profile 1 - Shailesh */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="border border-[#00ff41]/40 rounded-lg p-6 bg-black/70 backdrop-blur"
                >
                  <h3 className="text-2xl font-bold text-[#00ff41] mb-4">Alumni Profile - Shailesh Chaphekar</h3>
                  <p className="text-gray-300 mb-6">
                    Detailed profile showcasing professional experience, skills, and contact information. Shailesh Chaphekar serves as Managing Director: Data AI at Accenture with expertise in Data Products, Architecture, and Global Delivery.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-[#00ff41]/20">
                    <img 
                      src="/shailesh-profile.jpg" 
                      alt="Shailesh Chaphekar Profile" 
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>

                {/* Profile 2 - Sachin */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="border border-[#00ff41]/40 rounded-lg p-6 bg-black/70 backdrop-blur"
                >
                  <h3 className="text-2xl font-bold text-[#00ff41] mb-4">Alumni Profile - Sachin Sood</h3>
                  <p className="text-gray-300 mb-6">
                    IT Manager at United Healthcare with extensive experience in software development. Skills include C#, Microsoft SQL Server, Java, .NET, SQL, AJAX, and JavaScript.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-[#00ff41]/20">
                    <img 
                      src="/sachin-profile.jpg" 
                      alt="Sachin Sood Profile" 
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>

                {/* Profile 3 - Leena */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="border border-[#00ff41]/40 rounded-lg p-6 bg-black/70 backdrop-blur"
                >
                  <h3 className="text-2xl font-bold text-[#00ff41] mb-4">Alumni Profile - Leena Waghmare</h3>
                  <p className="text-gray-300 mb-6">
                    IT Risk and Compliance professional at Gilead Sciences with expertise in IT Audit, Management, Information Technology, Internal Controls, and Internal Audit.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-[#00ff41]/20">
                    <img 
                      src="/leena-profile.jpg" 
                      alt="Leena Waghmare Profile" 
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>

                {/* Events */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="border border-[#00ff41]/40 rounded-lg p-6 bg-black/70 backdrop-blur"
                >
                  <h3 className="text-2xl font-bold text-[#00ff41] mb-4">Upcoming Events</h3>
                  <p className="text-gray-300 mb-6">
                    Event management system featuring Alumni Reunion in Mumbai (120 attending) and Tech Innovation Summit (250 attending). Users can register for events with a simple form.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-[#00ff41]/20">
                    <img 
                      src="/events-page.jpg" 
                      alt="Events Page" 
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>

                {/* Registration */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="border border-[#00ff41]/40 rounded-lg p-6 bg-black/70 backdrop-blur"
                >
                  <h3 className="text-2xl font-bold text-[#00ff41] mb-4">Event Registration Form</h3>
                  <p className="text-gray-300 mb-6">
                    Simple and intuitive registration form for alumni events. Captures full name, email address, phone number, and additional comments for seamless event participation.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-[#00ff41]/20">
                    <img 
                      src="/registration-form.jpg" 
                      alt="Registration Form" 
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>

                {/* Back to Portfolio Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center pt-8"
                >
                  <Link href="/">
                    <motion.button
                      className="px-8 py-3 bg-[#00ff41] text-black rounded-lg font-semibold hover:bg-[#22ff44] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Back to Portfolio
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-[#00ff41]/20">
          <div className="container mx-auto text-center text-gray-400">
            <p>&copy; 2025 Soham Marathe. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
