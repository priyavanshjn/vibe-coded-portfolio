"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code,
  Database,
  Users,
  MessageCircle,
  Terminal,
  GitBranch,
  Cpu,
  Menu,
  X,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    programming: [
      { name: "Python", level: 85 },
      { name: "C/C++", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "HTML/CSS", level: 80 },
    ],
    tools: [
      { name: "Git", icon: GitBranch },
      { name: "Linux", icon: Terminal },
      { name: "VS Code", icon: Code },
      { name: "Docker", icon: Database },
    ],
    soft: [
      { name: "Teamwork", icon: Users },
      { name: "Communication", icon: MessageCircle },
      { name: "Problem Solving", icon: Cpu },
      { name: "Leadership", icon: Users },
    ],
  }

  const projects = [
    {
      title: "Smart Calculator",
      description: "A scientific calculator with advanced mathematical functions built using Python and Tkinter.",
      technologies: ["Python", "Tkinter", "Math"],
      github: "#",
      demo: "#",
    },
    {
      title: "Personal Finance Tracker",
      description: "Web application to track expenses and income with data visualization features.",
      technologies: ["JavaScript", "HTML/CSS", "Chart.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Arduino Weather Station",
      description: "IoT project that monitors temperature, humidity, and displays data on LCD screen.",
      technologies: ["C++", "Arduino", "Sensors"],
      github: "#",
      demo: null,
    },
    {
      title: "Student Grade Manager",
      description: "Console application to manage student records and calculate GPAs efficiently.",
      technologies: ["C++", "File I/O", "Data Structures"],
      github: "#",
      demo: null,
    },
    {
      title: "Basic Chatbot",
      description: "Simple rule-based chatbot that can answer frequently asked questions.",
      technologies: ["Python", "NLTK", "JSON"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio website showcasing projects and skills.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AS</span>
              </div>
              <span className="font-bold text-xl text-slate-800">Alex Smith</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === section ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {section === "about" ? "About Me" : section}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
              <div className="flex flex-col space-y-3">
                {["home", "about", "skills", "projects", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize font-medium text-left transition-colors ${
                      activeSection === section ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    {section === "about" ? "About Me" : section}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">Alex Smith</h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light">
              Aspiring Engineer | Problem Solver | Innovator
            </p>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              First-year Engineering student passionate about technology, innovation, and creating solutions that make a
              difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <div className="w-64 h-64 mx-auto md:mx-0 mb-8 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=256&width=256"
                    alt="Alex Smith"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  I'm a first-year Engineering student with a passion for technology and problem-solving. Currently
                  exploring various fields of engineering while building a strong foundation in programming and
                  mathematical concepts.
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  My goal is to leverage technology to create innovative solutions that address real-world challenges. I
                  enjoy working on projects that combine creativity with technical skills.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  When I'm not coding or studying, you can find me participating in hackathons, contributing to
                  open-source projects, or exploring the latest tech trends.
                </p>
                <Button className="bg-slate-700 hover:bg-slate-800 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Skills & Technologies</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Programming Languages */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-800">
                    <Code className="mr-2 h-5 w-5 text-blue-600" />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.programming.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                          <span className="text-sm text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tools & Technologies */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-800">
                    <Database className="mr-2 h-5 w-5 text-blue-600" />
                    Tools & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.tools.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center p-3 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <skill.icon className="h-8 w-8 text-blue-600 mb-2" />
                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Soft Skills */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-800">
                    <Users className="mr-2 h-5 w-5 text-blue-600" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.soft.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center p-3 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <skill.icon className="h-8 w-8 text-blue-600 mb-2" />
                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Featured Projects</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-slate-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      {project.demo && (
                        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Let's Connect</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  I'm always interested in new opportunities, collaborations, and conversations about technology. Feel
                  free to reach out if you'd like to connect!
                </p>

                <div className="flex space-x-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-300">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-300">
                    <Mail className="mr-2 h-5 w-5" />
                    Email
                  </Button>
                </div>
              </div>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-slate-800">Send a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Your Name" className="border-slate-300 focus:border-blue-500" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email" className="border-slate-300 focus:border-blue-500" />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        className="border-slate-300 focus:border-blue-500"
                      />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-slate-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AS</span>
              </div>
              <span className="font-bold text-xl">Alex Smith</span>
            </div>

            <div className="flex justify-center space-x-6 mb-8">
              <button className="hover:text-blue-400 transition-colors">Home</button>
              <button className="hover:text-blue-400 transition-colors">About</button>
              <button className="hover:text-blue-400 transition-colors">Skills</button>
              <button className="hover:text-blue-400 transition-colors">Projects</button>
              <button className="hover:text-blue-400 transition-colors">Contact</button>
            </div>

            <div className="flex justify-center space-x-4 mb-8">
              <Button size="sm" variant="ghost" className="text-white hover:text-blue-400 hover:bg-slate-700">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-blue-400 hover:bg-slate-700">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-blue-400 hover:bg-slate-700">
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            <div className="border-t border-slate-700 pt-8">
              <p className="text-slate-400">
                © 2024 Alex Smith. All rights reserved. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
