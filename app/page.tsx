"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import { useTerminalAnimation } from "@/hooks/useTerminalAnimation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Dynamically import SplashCursor with no SSR
const SplashCursor = dynamic(() => import("@/components/ui/SplashCursor"), { ssr: false })

import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Shield,
  Code,
  Server,
  Lock,
  Award,
  ExternalLink,
  Terminal,
  Blocks,
  Car,
  Lightbulb,
  Clock,
  Utensils,
  Leaf,
  ClipboardCopy,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")
  const [emailCopied, setEmailCopied] = useState(false)
  
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  // Terminal Effect - WITH COMMANDS IN BACKGROUND (infinite loop)
  useTerminalAnimation()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('sohammarathe3@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const openGmail = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sohammarathe3@gmail.com', '_blank')
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "achievements", "education", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulating form submission - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      // Reset form
      setFormData({ name: "", email: "", message: "" })
      setSubmitStatus("success")
      
      // Clear status after 3 seconds
      setTimeout(() => setSubmitStatus(""), 3000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus(""), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const skills = [
    {
      category: "Cybersecurity",
      icon: Shield,
      items: ["Cybersecurity", "Ethical Hacking"],
      color: "from-cyan-500 to-blue-600",
    },
    {
      category: "Machine Learning",
      icon: Code,
      items: ["Machine Learning", "AI & ML Models"],
      color: "from-blue-500 to-purple-600",
    },
    {
      category: "Programming",
      icon: Terminal,
      items: ["Python", "Java", "C"],
      color: "from-green-500 to-teal-600",
    },
    {
      category: "Reverse Engineering",
      icon: Lock,
      items: ["Reverse Engineering", "Binary Analysis"],
      color: "from-red-500 to-pink-600",
    },
    {
      category: "OSINT",
      icon: Code,
      items: ["OSINT", "Open Source Intel"],
      color: "from-yellow-500 to-orange-600",
    },
    {
      category: "Data Security",
      icon: Shield,
      items: ["Steganography", "Data Hiding"],
      color: "from-purple-500 to-indigo-600",
    },
    {
      category: "Web Security",
      icon: Terminal,
      items: ["Web Exploitation", "Penetration Testing"],
      color: "from-red-500 to-orange-600",
    },
    {
      category: "Web Fundamentals",
      icon: Code,
      items: ["HTML/CSS", "JavaScript"],
      color: "from-blue-500 to-cyan-600",
    },
    {
      category: "Frontend Development",
      icon: Code,
      items: ["React.js", "Frontend Framework"],
      color: "from-blue-500 to-purple-600",
    },
    {
      category: "Database",
      icon: Server,
      items: ["MongoDB", "Firebase"],
      color: "from-green-500 to-teal-600",
    },
  ]

  const achievements = [
    {
      title: "National OWASP CTF",
      description: "Ranked 48th out of 500 teams in Hacker's Gambit 2025, an OWASP National Level 48Hrs Capture The Flag competition",
      date: "October 2025",
      icon: Shield,
      certificate: "/certificate-1.jpg",
    },
    {
      title: "24-Hour Hackathon 2025",
      description: "Participated in PVGHackHub - National Level 24-Hour Hackathon organized by Pune Vidyarthi Griha's College of Engineering",
      date: "October 2025",
      icon: Award,
      certificate: "/certificate-2.jpg",
    },
    {
      title: "Ethical Hacking Training",
      description: "Completed 8-week comprehensive Ethical Hacking with AI training from Internshala Trainings covering Malware analysis, VAPT, OWASP Top 10, and Vulnerability Reporting.",
      date: "September 2025",
      icon: Shield,
      certificate: "/certificate-3.jpg",
    },
    {
      title: "Deloitte Cyber Job Simulation",
      description: "Completed practical tasks in Cyber Security through Deloitte's professional job simulation program",
      date: "July 2025",
      icon: Code,
      certificate: "/certificate-4.jpg",
    },
    {
      title: "Cyber Security Workshop",
      description: "Participated in 1-day Cyber Security Workshop by Encryptecl Cyberguard, an ISO/IEC 27001:2022 certified company",
      date: "November 2025",
      icon: Shield,
      certificate: "/certificate-5.jpg",
    },
    {
      title: "Java Spring Framework",
      description: "Completed online course on Introduction to Java Spring Framework from Simplilearn SkillUp, demonstrating commitment to deepening skills and advancing career.",
      date: "October 2025",
      icon: Code,
      certificate: "/certificate-6.jpg",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Engineering in Electronics and Computer Science",
      college: "Fr. Conceicao Rodrigues College of Engineering",
      duration: "2023 - 2027",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      college: "Nirmala Memorial Foundation College",
      duration: "2021 - 2023",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      college: "Thakur Vidya Mandir High School & Junior College",
      duration: "2009 - 2021",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth relative w-full">
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
      <div className="relative z-10 w-full">
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/70 border-b border-[#00ff41]/20"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.h1
                className="text-2xl font-bold neon-text"
                whileHover={{ scale: 1.05 }}
              >
                Soham Marathe
              </motion.h1>
              <div className="hidden md:flex gap-8">
                {["Home", "About", "Skills", "Projects", "Achievements", "Education", "Contact"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`hover:text-[#00ff41] transition-colors ${
                      activeSection === item.toLowerCase() ? "text-[#00ff41] font-semibold" : "text-white"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div style={{ opacity, scale }} className="text-center z-10 px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Hacker Style Name */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Glowing background effect */}
                <div className="absolute inset-0 flex justify-center">
                  <div className="w-96 h-40 bg-[#00ff41] rounded-full filter blur-3xl opacity-20"></div>
                </div>
                
                {/* Main Title */}
                <div className="relative z-10">
                  <div 
                    style={{
                      textShadow: `
                        0 0 10px rgba(0, 255, 65, 0.8),
                        0 0 20px rgba(0, 255, 65, 0.6),
                        0 0 30px rgba(0, 255, 65, 0.4),
                        0 0 40px rgba(0, 255, 65, 0.2)
                      `,
                      color: '#00ff41',
                      fontFamily: '"Courier New", monospace',
                      letterSpacing: '0.1em',
                    }}
                    className="text-6xl md:text-8xl font-black mb-2"
                  >
                    &gt; SOHAM
                    <br />
                    MARATHE
                  </div>
                  
                  {/* ASCII Art style decorator */}
                  <div className="flex justify-center gap-4 my-4">
                    <span className="text-[#00ff41] text-2xl">[</span>
                    <span className="text-[#00ff41] text-sm animate-pulse">●●●</span>
                    <span className="text-[#00ff41] text-2xl">]</span>
                  </div>
                </div>
              </motion.div>

              <motion.p
                className="text-2xl md:text-4xl text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Cybersecurity Enthusiast | Full Stack Developer | Innovator
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Building secure, efficient, and intelligent digital solutions
              </motion.p>
              <motion.div
                className="flex gap-6 justify-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.a
                  href="/Soham_Marathe_Resume.pdf"
                  download="Soham_Marathe_Resume.pdf"
                  className="px-8 py-3 bg-[#00ff41] text-black rounded-lg font-semibold glow-effect hover:bg-[#22ff44] transition-all inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Resume
                </motion.a>
                <motion.a
                  href="https://github.com/Soham792"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#00ff41]/50 rounded-lg hover:bg-[#00ff41]/10 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6 text-[#00ff41]" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/soham-marathe-896636323/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#00ff41]/50 rounded-lg hover:bg-[#00ff41]/10 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6 text-[#00ff41]" />
                </motion.a>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <motion.button
                      className="p-3 border border-[#00ff41]/50 rounded-lg hover:bg-[#00ff41]/10 transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-6 h-6 text-[#00ff41]" />
                    </motion.button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="bg-black border-[#00ff41]/50 text-[#00ff41] min-w-[200px]"
                    align="end"
                  >
                    <DropdownMenuItem
                      onClick={copyEmail}
                      className="cursor-pointer hover:bg-[#00ff41]/10 focus:bg-[#00ff41]/10"
                    >
                      <ClipboardCopy className="w-4 h-4 mr-2" />
                      {emailCopied ? 'Copied!' : 'Copy Email'}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-[#00ff41]/20" />
                    <DropdownMenuItem
                      onClick={openGmail}
                      className="cursor-pointer hover:bg-[#00ff41]/10 focus:bg-[#00ff41]/10"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open Gmail App
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute bottom-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-[#00ff41]" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 neon-text">About Me</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6 text-lg text-gray-300"
                >
                  <p>
                    Hi, I'm <span className="text-[#00ff41] font-semibold">Soham Marathe</span>, an Electronics & Computer Science Engineering student who is passionate about building innovative tech solutions. I love exploring new technologies, designing creative ideas, experimenting with concepts, and transforming them into meaningful real-world applications.
                  </p>
                  <p>
                    I believe in learning by doing, staying curious, and constantly pushing myself to improve. Along with tech, I also enjoy gaming, football, and developing myself in communication and soft skills.
                  </p>
                  <p>
                    My goal is to become a <span className="text-[#00ff41] font-semibold">future-ready engineer</span> who creates impact, contributes to innovation, and builds technology that makes life better and smarter.
                  </p>
                </motion.div>

                {/* Profile Photo */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center"
                >
                  <div className="cyber-border p-6 rounded-lg hover:scale-105 transition-transform">
                    <Image
                      src="/profilephoto.jpg"
                      alt="Soham Marathe"
                      width={300}
                      height={400}
                      className="rounded-lg object-cover w-full h-auto max-w-sm"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 neon-text">Skills</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skillSet, index) => (
                  <motion.div
                    key={skillSet.category}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="cyber-border p-6 rounded-lg hover:scale-105 transition-transform"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${skillSet.color}`}>
                        <skillSet.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#00ff41]">{skillSet.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {skillSet.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-[#00ff41]/10 border border-[#00ff41]/30 rounded-full text-sm text-white hover:bg-[#00ff41]/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 neon-text">Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* MERN SOCIAL MEDIA PROJECT */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0, duration: 0.5 }}
                  className="cyber-border p-6 rounded-lg hover:scale-105 transition-transform group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-[#00ff41]/10 group-hover:bg-[#00ff41]/20 transition-colors">
                      <Code className="w-6 h-6 text-[#00ff41]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#00ff41]">MERN Social Media</h3>
                  <p className="text-gray-300 mb-6">
                    Full-stack social platform with authentication, user posts, and real-time interactions.
                  </p>
                  <Link href="/mern-social-media">
                    <motion.button
                      className="inline-block px-6 py-3 bg-[#00ff41] text-black rounded-lg font-semibold hover:bg-[#22ff44] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      More Info
                    </motion.button>
                  </Link>
                </motion.div>

                {/* POMODOROOM PROJECT */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="cyber-border p-6 rounded-lg hover:scale-105 transition-transform group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-[#00ff41]/10 group-hover:bg-[#00ff41]/20 transition-colors">
                      <Clock className="w-6 h-6 text-[#00ff41]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#00ff41]">Pomodoroom</h3>
                  <p className="text-gray-300 mb-6">
                    A productivity website implementing the Pomodoro technique for effective time management.
                  </p>
                  <Link href="/pomodoroom">
                    <motion.button
                      className="inline-block px-6 py-3 bg-[#00ff41] text-black rounded-lg font-semibold hover:bg-[#22ff44] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      More Info
                    </motion.button>
                  </Link>
                </motion.div>

                {/* FIXLIT IOT PROJECT */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="cyber-border p-6 rounded-lg hover:scale-105 transition-transform group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-[#00ff41]/10 group-hover:bg-[#00ff41]/20 transition-colors">
                      <Lightbulb className="w-6 h-6 text-[#00ff41]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#00ff41]">Fixlit IoT</h3>
                  <p className="text-gray-300 mb-6">
                    Smart automation and monitoring IoT solution for homes and industries. Features intelligent device control, real-time monitoring, and seamless integration.
                  </p>
                  <Link href="/fixlit">
                    <motion.button
                      className="inline-block px-6 py-3 bg-[#00ff41] text-black rounded-lg font-semibold hover:bg-[#22ff44] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      More Info
                    </motion.button>
                  </Link>
                </motion.div>

                {/* CAR ACCIDENT PREVENTION PROJECT */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="cyber-border p-6 rounded-lg hover:scale-105 transition-transform group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-[#00ff41]/10 group-hover:bg-[#00ff41]/20 transition-colors">
                      <Car className="w-6 h-6 text-[#00ff41]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#00ff41]">Car Accident Prevention System</h3>
                  <p className="text-gray-300 mb-6">
                    IoT-based project preventing car collisions through sensors and real-time alerts. Features alcohol detection, vehicle immobilization, and cloud logging.
                  </p>
                  <Link href="/car-accident">
                    <motion.button
                      className="inline-block px-6 py-3 bg-[#00ff41] text-black rounded-lg font-semibold hover:bg-[#22ff44] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      More Info
                    </motion.button>
                  </Link>
                </motion.div>

                {/* ALUMNI PROJECT */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="cyber-border p-6 rounded-lg hover:scale-105 transition-transform group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-[#00ff41]/10 group-hover:bg-[#00ff41]/20 transition-colors">
                      <Blocks className="w-6 h-6 text-[#00ff41]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#00ff41]">Alumni Directory Platform</h3>
                  <p className="text-gray-300 mb-6">
                    A comprehensive alumni networking platform connecting Electronics Engineering Batch 1999 graduates. Features include profile management, event registration, and professional networking.
                  </p>
                  <Link href="/alumni">
                    <motion.button
                      className="inline-block px-6 py-3 bg-[#00ff41] text-black rounded-lg font-semibold hover:bg-[#22ff44] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      More Info
                    </motion.button>
                  </Link>
                </motion.div>

                {/* TIFFIN VENDOR MANAGEMENT PROJECT */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="cyber-border p-6 rounded-lg hover:scale-105 transition-transform group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-[#00ff41]/10 group-hover:bg-[#00ff41]/20 transition-colors">
                      <Utensils className="w-6 h-6 text-[#00ff41]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#00ff41]">Tiffin Vendor Management</h3>
                  <p className="text-gray-300 mb-6">
                    Platform connecting tiffin vendors and customers through a linked mobile app.
                  </p>
                  <Link href="/tiffin-vendor-management">
                    <motion.button
                      className="inline-block px-6 py-3 bg-[#00ff41] text-black rounded-lg font-semibold hover:bg-[#22ff44] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      More Info
                    </motion.button>
                  </Link>
                </motion.div>

                {/* WASTE CLASSIFICATION SYSTEM PROJECT */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="cyber-border p-6 rounded-lg hover:scale-105 transition-transform group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-[#00ff41]/10 group-hover:bg-[#00ff41]/20 transition-colors">
                      <Leaf className="w-6 h-6 text-[#00ff41]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#00ff41]">Waste Classification System</h3>
                  <p className="text-gray-300">
                    ML-based web app classifying waste as recyclable or non-recyclable using Python Django.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 neon-text">Achievements</h2>
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="cyber-border p-6 rounded-lg hover:scale-105 transition-transform"
                  >
                    <div className="grid md:grid-cols-3 gap-6 items-start">
                      {/* Text Content */}
                      <div className="md:col-span-2 flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#00ff41]/10 flex-shrink-0">
                          <achievement.icon className="w-6 h-6 text-[#00ff41]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2 flex-wrap">
                            <h3 className="text-xl font-bold text-[#00ff41]">{achievement.title}</h3>
                            <span className="text-sm text-gray-400">{achievement.date}</span>
                          </div>
                          <p className="text-gray-300">{achievement.description}</p>
                        </div>
                      </div>

                      {/* Certificate Image */}
                      {achievement.certificate && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                          className="md:col-span-1 flex justify-center"
                        >
                          <div className="cyber-border p-3 rounded-lg hover:scale-110 transition-transform cursor-pointer w-full md:w-auto">
                            <Image
                              src={achievement.certificate}
                              alt={achievement.title}
                              width={200}
                              height={150}
                              className="rounded-lg object-cover w-full h-auto max-w-xs"
                              priority={index < 2}
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 neon-text">Education</h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="cyber-border p-8 rounded-lg hover:scale-105 transition-transform"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-[#00ff41] mb-2">{edu.degree}</h3>
                        <p className="text-xl text-white">{edu.college}</p>
                      </div>
                      <span className="text-sm text-gray-400 whitespace-nowrap ml-4">{edu.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text text-center">Get In Touch</h2>
              <p className="text-center text-gray-300 mb-12 max-w-xl mx-auto">
                Send me a message
              </p>
              
              {/* Contact Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="cyber-border p-8 rounded-lg"
              >
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-3 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-3 bg-black border border-[#00ff41]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff41] focus:ring-1 focus:ring-[#00ff41] transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-3 font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-3 bg-black border border-[#00ff41]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff41] focus:ring-1 focus:ring-[#00ff41] transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-300 mb-3 font-semibold">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-6 py-3 bg-black border border-[#00ff41]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff41] focus:ring-1 focus:ring-[#00ff41] transition-all resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
                  >
                    ✗ Something went wrong. Please try again.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-[#00ff41] text-black rounded-lg font-semibold hover:bg-[#22ff44] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.form>

              {/* Alternative Contact Methods */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 flex gap-6 justify-center flex-wrap"
              >
                <motion.a
                  href="https://github.com/Soham792"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 cyber-border rounded-lg hover:bg-[#00ff41]/10 transition-all group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 text-[#00ff41] group-hover:scale-125 transition-transform" />
                  <span className="text-white">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/soham-marathe-896636323/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 cyber-border rounded-lg hover:bg-[#00ff41]/10 transition-all group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5 text-[#00ff41] group-hover:scale-125 transition-transform" />
                  <span className="text-white">LinkedIn</span>
                </motion.a>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <motion.button
                      className="flex items-center gap-3 px-6 py-3 cyber-border rounded-lg hover:bg-[#00ff41]/10 transition-all group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-5 h-5 text-[#00ff41] group-hover:scale-125 transition-transform" />
                      <span className="text-white">Email</span>
                    </motion.button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="bg-black border-[#00ff41]/50 text-[#00ff41] min-w-[200px]"
                    align="end"
                  >
                    <DropdownMenuItem
                      onClick={copyEmail}
                      className="cursor-pointer hover:bg-[#00ff41]/10 focus:bg-[#00ff41]/10"
                    >
                      <ClipboardCopy className="w-4 h-4 mr-2" />
                      {emailCopied ? 'Copied!' : 'Copy Email'}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-[#00ff41]/20" />
                    <DropdownMenuItem
                      onClick={openGmail}
                      className="cursor-pointer hover:bg-[#00ff41]/10 focus:bg-[#00ff41]/10"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open Gmail App
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-[#00ff41]/20">
          <div className="container mx-auto text-center text-gray-400">
            <p>&copy; 2025 Soham Marathe. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with Next.js, React, and Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
