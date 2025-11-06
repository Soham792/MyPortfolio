"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Lightbulb, Wifi, Zap, Activity, Home, Building } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

const SplashCursor = dynamic(() => import("@/components/ui/SplashCursor"), { ssr: false })

export default function FixlitPage() {
  const features = [
    {
      icon: Lightbulb,
      title: "Smart Control",
      description: "Intelligent device control with automation capabilities"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Live monitoring of all connected IoT devices and sensors"
    },
    {
      icon: Wifi,
      title: "Seamless Connectivity",
      description: "Reliable wireless communication for all smart devices"
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Optimize power consumption with intelligent scheduling"
    }
  ]

  const applications = [
    {
      icon: Home,
      title: "Smart Homes",
      description: "Automate lighting, temperature, security, and appliances"
    },
    {
      icon: Building,
      title: "Industrial Automation",
      description: "Monitor and control industrial equipment and processes"
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
                Fixlit IoT
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                Smart Automation and Monitoring IoT Solution
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Transforming homes and industries with intelligent automation, real-time monitoring, and seamless device integration
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

        {/* Video Demo Section */}
        <section className="py-20 px-6 bg-black/30">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-12 text-center" style={{
                textShadow: '0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.6)'
              }}>
                Project Demo
              </h2>

              <div className="border border-[#00ff41]/40 rounded-lg p-4 bg-black/70 backdrop-blur">
                <video 
                  controls 
                  className="w-full rounded-lg"
                  poster="/fixlit-poster.jpg"
                >
                  <source src="/fixlit.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Description */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8 text-center" style={{
                textShadow: '0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.6)'
              }}>
                About Fixlit IoT
              </h2>

              <div className="space-y-6 border border-[#00ff41]/40 rounded-lg p-8 bg-black/70 backdrop-blur text-gray-300">
                <p>
                  <span className="text-[#00ff41] font-bold">Fixlit IoT</span> is a comprehensive smart automation and monitoring solution designed to revolutionize how we interact with our environment, whether at home or in industrial settings.
                </p>

                <div>
                  <h3 className="text-2xl font-bold text-[#00ff41] mb-4">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><span className="text-[#00ff41] font-semibold">Smart Device Control:</span> Remotely control and automate lights, appliances, HVAC systems, and more</li>
                    <li><span className="text-[#00ff41] font-semibold">Real-time Monitoring:</span> Track device status, energy consumption, and environmental conditions</li>
                    <li><span className="text-[#00ff41] font-semibold">Automated Scheduling:</span> Create custom schedules and triggers for device automation</li>
                    <li><span className="text-[#00ff41] font-semibold">Mobile & Web Interface:</span> Control your devices from anywhere using intuitive dashboards</li>
                    <li><span className="text-[#00ff41] font-semibold">Energy Optimization:</span> Reduce power consumption with intelligent energy management</li>
                    <li><span className="text-[#00ff41] font-semibold">Security Integration:</span> Connect cameras, sensors, and alarms for enhanced security</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#00ff41] mb-4">Technology Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {['IoT Protocols', 'MQTT', 'ESP32/ESP8266', 'Sensors', 'Cloud Platform', 'Mobile Apps', 'Web Dashboard'].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-[#00ff41]/10 border border-[#00ff41]/30 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Applications Section */}
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
                Applications
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {applications.map((app, index) => (
                  <motion.div
                    key={app.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="border border-[#00ff41]/40 rounded-lg p-8 bg-black/70 backdrop-blur"
                  >
                    <app.icon className="w-12 h-12 text-[#00ff41] mb-4" />
                    <h3 className="text-2xl font-bold text-[#00ff41] mb-3">{app.title}</h3>
                    <p className="text-gray-300">{app.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <p className="text-gray-400 mb-6 italic">
                  "Making smart living accessible and efficient for everyone"
                </p>
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
