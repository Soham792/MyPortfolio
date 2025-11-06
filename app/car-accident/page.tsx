"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Car, Shield, Bell, Cloud, Wifi, Cpu } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

const SplashCursor = dynamic(() => import("@/components/ui/SplashCursor"), { ssr: false })

export default function CarAccidentPage() {
  const features = [
    {
      icon: Shield,
      title: "Alcohol Detection",
      description: "MQ-3 sensor continuously monitors alcohol levels near the driver"
    },
    {
      icon: Car,
      title: "Vehicle Immobilization",
      description: "Automatic motor speed reduction to simulate safe braking when alcohol detected"
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Instant email notifications sent to traffic authorities"
    },
    {
      icon: Cloud,
      title: "Cloud Logging",
      description: "Incident data logged to ThingSpeak with vehicle and owner details"
    }
  ]

  const hardware = [
    { component: "ESP32 Dev Board", description: "Wi-Fi-enabled microcontroller" },
    { component: "MQ-3 Sensor", description: "Alcohol gas sensor (analog + digital)" },
    { component: "L293D Driver", description: "Motor control" },
    { component: "DC Motor", description: "Vehicle movement simulation" },
    { component: "Push Button", description: "Manual motor ON/OFF switch" },
    { component: "12V Power Supply", description: "Powers motor & ESP32" }
  ]

  const technologies = [
    { icon: Cpu, name: "ESP32" },
    { icon: Shield, name: "MQ-3 Alcohol Sensor" },
    { icon: Bell, name: "SMTP Email" },
    { icon: Cloud, name: "ThingSpeak API" },
    { icon: Wifi, name: "IoT Connectivity" }
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
                Car Accident Prevention System
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                Alcohol Detection and Vehicle Immobilization with Real-time Alert and Cloud Database Logging 🚗🛑
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                IoT-based system preventing drunk driving by detecting alcohol levels, automatically immobilizing the vehicle, and sending real-time alerts
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

        {/* Hardware Components */}
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
                🔧 Hardware Components
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {hardware.map((item, index) => (
                  <motion.div
                    key={item.component}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="border border-[#00ff41]/40 rounded-lg p-6 bg-black/70 backdrop-blur"
                  >
                    <h3 className="text-xl font-bold text-[#00ff41] mb-2">{item.component}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Working Principle */}
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
                📡 Working Principle
              </h2>

              <div className="space-y-6 border border-[#00ff41]/40 rounded-lg p-8 bg-black/70 backdrop-blur">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <span className="text-[#00ff41] font-bold text-xl">1.</span>
                  <p className="text-gray-300">User starts the vehicle using a push button</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-4"
                >
                  <span className="text-[#00ff41] font-bold text-xl">2.</span>
                  <p className="text-gray-300">MQ-3 sensor continuously monitors alcohol levels</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4"
                >
                  <span className="text-[#00ff41] font-bold text-xl">3.</span>
                  <div>
                    <p className="text-gray-300 mb-3">If alcohol is detected:</p>
                    <ul className="list-disc list-inside space-y-2 ml-6 text-gray-400">
                      <li>Motor speed reduces gradually to simulate safe braking</li>
                      <li>An alert email is sent to traffic authorities</li>
                      <li>Incident is logged to ThingSpeak with timestamp, vehicle registration, owner name, license number, system ID and IMEI</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-4"
                >
                  <span className="text-[#00ff41] font-bold text-xl">4.</span>
                  <p className="text-gray-300">If no alcohol is detected, motor runs normally</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Images */}
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
                Project Prototype & Output
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="border border-[#00ff41]/40 rounded-lg p-4 bg-black/70 backdrop-blur"
                >
                  <h3 className="text-xl font-bold text-[#00ff41] mb-4">Hardware Setup</h3>
                  <img 
                    src="/car-accident-hardware.jpg" 
                    alt="Hardware Setup" 
                    className="w-full rounded-lg"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="border border-[#00ff41]/40 rounded-lg p-4 bg-black/70 backdrop-blur"
                >
                  <h3 className="text-xl font-bold text-[#00ff41] mb-4">Serial Monitor Output</h3>
                  <img 
                    src="/car-accident-serial.jpg" 
                    alt="Serial Monitor" 
                    className="w-full rounded-lg"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="border border-[#00ff41]/40 rounded-lg p-4 bg-black/70 backdrop-blur"
                >
                  <h3 className="text-xl font-bold text-[#00ff41] mb-4">Email Alert</h3>
                  <img 
                    src="/car-accident-email.jpg" 
                    alt="Email Alert" 
                    className="w-full rounded-lg"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="border border-[#00ff41]/40 rounded-lg p-4 bg-black/70 backdrop-blur"
                >
                  <h3 className="text-xl font-bold text-[#00ff41] mb-4">Serial Output - Analog Values</h3>
                  <img 
                    src="/car-accident-analog.jpg" 
                    alt="Analog Values" 
                    className="w-full rounded-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technologies Used */}
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
                💻 Technologies Used
              </h2>

              <div className="flex flex-wrap justify-center gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 px-6 py-3 bg-[#00ff41]/10 border border-[#00ff41]/30 rounded-full hover:bg-[#00ff41]/20 transition-colors"
                  >
                    <tech.icon className="w-5 h-5 text-[#00ff41]" />
                    <span className="text-white font-medium">{tech.name}</span>
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
                  "Ensuring Safe Roads with Smart Technology!"
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
            <p className="mt-2 text-sm">This project is for academic/research purposes</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
