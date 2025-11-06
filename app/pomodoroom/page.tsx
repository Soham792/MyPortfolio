"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import dynamic from "next/dynamic"
import { useTerminalAnimation } from "@/hooks/useTerminalAnimation"

const SplashCursor = dynamic(() => import("@/components/ui/SplashCursor"), { ssr: false })

export default function PomodoRoom() {
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
        <div className="container mx-auto max-w-4xl">
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
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6">Pomodoroom</h1>
            <p className="text-xl text-gray-300 mb-4">
              A productivity website implementing the Pomodoro technique for effective time management.
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
            <div className="relative w-full aspect-video rounded-lg overflow-hidden cyber-border">
              <video
                width="100%"
                height="100%"
                controls
                controlsList="nodownload"
                className="w-full h-full"
                poster="/pomodo-thumbnail.jpg"
              >
                <source src="/pomodo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="cyber-border p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#00ff41] mb-6">About Pomodoroom</h2>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-[#00ff41] mb-3">Project Overview</h3>
                <p>
                  Pomodoroom is a modern productivity web application built on the Pomodoro Technique, a proven time management methodology that breaks work into focused 25-minute intervals (pomodoros) separated by short breaks. This application provides an intuitive interface for users to manage their tasks, track their productivity, and maintain focus during work sessions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00ff41] mb-3">Key Features</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><span className="text-[#00ff41] font-semibold">Timer Management</span> - Customizable Pomodoro intervals with break periods</li>
                  <li><span className="text-[#00ff41] font-semibold">Task Tracking</span> - Add, edit, and manage tasks with ease</li>
                  <li><span className="text-[#00ff41] font-semibold">Session Statistics</span> - Track completed pomodoros and productivity metrics</li>
                  <li><span className="text-[#00ff41] font-semibold">Audio Notifications</span> - Get alerted when timers complete</li>
                  <li><span className="text-[#00ff41] font-semibold">Dark Mode UI</span> - Eye-friendly interface for extended use</li>
                  <li><span className="text-[#00ff41] font-semibold">Responsive Design</span> - Works seamlessly on desktop and mobile devices</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00ff41] mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-[#00ff41]/10 border border-[#00ff41]/30 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00ff41] mb-3">How It Works</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Create a task or select an existing one from your task list</li>
                  <li>Start a focused 25-minute work session (Pomodoro)</li>
                  <li>Work without distractions until the timer completes</li>
                  <li>Take a 5-minute break when the session ends</li>
                  <li>After 4 pomodoros, take a longer 15-30 minute break</li>
                  <li>Track your progress and maintain consistent productivity</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00ff41] mb-3">Benefits</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Improved focus and concentration during work intervals</li>
                  <li>Reduced procrastination through structured time management</li>
                  <li>Better understanding of how long tasks actually take</li>
                  <li>Regular breaks help maintain mental freshness</li>
                  <li>Increased productivity and task completion rate</li>
                  <li>Greater awareness of time spent on different activities</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
