import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sprout, 
  Heart, 
  Users, 
  TreePine, 
  BookOpen, 
  Shield, 
  Globe, 
  Mail, 
  Menu, 
  X,
  ChevronRight,
  Leaf,
  HandHeart,
  GraduationCap,
  TreeDeciduous
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@assets/generated_images/seedling_sprouting_in_sunlight.png";
import childrenImage from "@assets/generated_images/children_learning_under_tree.png";
import treePlantingImage from "@assets/generated_images/community_tree_planting_event.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programmes", href: "#programmes" },
    { name: "Get Involved", href: "#involved" },
    { name: "Contact", href: "#contact" },
  ];

  const programmes = [
    {
      icon: GraduationCap,
      title: "Supporting Students",
      description: "We provide financial and material support to students struggling to afford school, including fees, supplies, and necessary materials."
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "We organize meetings and events to encourage students to excel, emphasizing education's importance for future success."
    },
    {
      icon: Shield,
      title: "Protecting Girls",
      description: "We work to protect girls from gender-based violence, FGM, early marriage, and provide menstrual hygiene education."
    },
    {
      icon: Globe,
      title: "Education Advocacy",
      description: "We advocate for every child's right to education, training leaders and adolescents on their rights and protections."
    },
    {
      icon: TreeDeciduous,
      title: "Environmental Conservation",
      description: "We advocate for environmental conservation through training, events, and forest rehabilitation projects."
    },
    {
      icon: HandHeart,
      title: "Youth Training",
      description: "We offer livelihood skills training for youth who have discontinued schooling, focusing on sustainable income generation."
    }
  ];

  const values = [
    { icon: Heart, title: "Compassion", description: "Fostering empathy and understanding" },
    { icon: Shield, title: "Integrity", description: "Upholding honesty and transparency" },
    { icon: Users, title: "Collaboration", description: "Working together towards common goals" },
    { icon: Leaf, title: "Sustainability", description: "Ensuring lasting positive impact" }
  ];

  const involvementOptions = [
    {
      title: "Sponsor a Student",
      description: "Help a victim of violence or poverty get the education and support they need to thrive.",
      action: "Sponsor Now"
    },
    {
      title: "Sponsor a Tree",
      description: "Help us restore our environment by sponsoring a tree or contributing to forest rehabilitation.",
      action: "Plant Hope"
    },
    {
      title: "Volunteer",
      description: "Join our team to organize events, fundraise, and provide direct support to communities.",
      action: "Join Us"
    },
    {
      title: "Partner With Us",
      description: "Organizations and institutions can collaborate on projects or share resources.",
      action: "Partner"
    }
  ];

  return (
    <div className="min-h-screen bg-background" id="home">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" className="flex items-center gap-2" data-testid="link-logo">
              <Sprout className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                Be a Seedling
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`link-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/90" data-testid="button-donate-nav">
                Donate
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full bg-primary" data-testid="button-donate-mobile">
                Donate
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="A seedling sprouting in warm sunlight"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-primary-foreground/80 text-sm md:text-base font-medium tracking-wide uppercase mb-4"
            >
              Non-Profit Organization
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Planting Hope,{" "}
              <span className="text-green-400">Growing Dreams</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            >
              Be a Seedling empowers underprivileged communities through education 
              and environmental conservation, fostering equity and advocating for a better world.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8"
                data-testid="button-get-involved"
              >
                Get Involved
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 md:py-32 bg-card grain" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Welcome
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Growing Opportunities for Underprivileged Individuals
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Be a Seedling is a non-profit organization that provides community-based 
                  programming, education, capacity building, environmental conservation and 
                  advocacy for underprivileged individuals and communities.
                </p>
                <p>
                  We believe that everyone deserves the opportunity to reach their full 
                  potential, regardless of their circumstances. We are committed to making 
                  a difference in the lives of those who are most in need.
                </p>
                <p className="font-medium text-foreground">
                  Together, we can make a difference.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={childrenImage}
                  alt="Children learning together"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <p className="font-serif text-3xl font-bold">1000+</p>
                <p className="text-sm opacity-90">Lives Impacted</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div variants={fadeUp}>
              <Card className="h-full bg-primary text-primary-foreground border-0 overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="opacity-90 leading-relaxed">
                    Be a Seedling empowers underprivileged communities through education 
                    and environmental conservation, fostering equity and advocating for a better world.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <Card className="h-full bg-secondary text-secondary-foreground border-0 overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="opacity-90 leading-relaxed">
                    We envision a future where all individuals have equal access to education, 
                    resources, and a healthy environment, enabling them to thrive and contribute 
                    positively to society.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h3 variants={fadeUp} className="font-serif text-2xl md:text-3xl font-bold text-center mb-12">
              Our Values
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div key={value.title} variants={fadeUp}>
                  <Card className="h-full text-center bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                      </div>
                      <h4 className="font-serif text-xl font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="py-20 md:py-32 bg-card grain" id="programmes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              What We Do
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Our Programmes
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Changing lives one child at a time through comprehensive support, 
              education, and environmental stewardship.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {programmes.map((programme, index) => (
              <motion.div key={programme.title} variants={fadeUp}>
                <Card className="h-full bg-background hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <programme.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3">{programme.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{programme.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 md:py-32 bg-background" id="involved">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <motion.div variants={fadeUp} className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={treePlantingImage}
                  alt="Community tree planting event"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                Make an Impact
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Get Involved
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Join us in our mission to create a more just and equitable world. 
                There are many ways to contribute, whether through volunteering, 
                donating, or simply spreading the word about our work.
              </p>
              
              <div className="space-y-4">
                {involvementOptions.map((option, index) => (
                  <Card key={option.title} className="bg-card hover:shadow-md transition-shadow">
                    <CardContent className="p-5 flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{option.title}</h4>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="shrink-0 text-primary hover:text-primary hover:bg-primary/10"
                        data-testid={`button-${option.action.toLowerCase().replace(' ', '-')}`}
                      >
                        {option.action}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <Sprout className="h-12 w-12 mx-auto opacity-50" strokeWidth={1} />
            </motion.div>
            <motion.blockquote 
              variants={fadeUp}
              className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8 italic"
            >
              "When I was given away by my parents, Be a Seedling became my home. 
              I ran to the chief's office where I was connected to Be a Seedling. 
              They connected me to an education scholarship. Now I have completed my High School."
            </motion.blockquote>
            <motion.p variants={fadeUp} className="text-lg opacity-80">
              — A Seedling Graduate
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-card grain" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Contact Us
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-muted-foreground max-w-xl mx-auto mb-12"
            >
              Have questions or want to learn more about how you can help? 
              Reach out to us today.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:beaseedling.mbt@gmail.com"
                className="flex items-center gap-3 text-lg text-foreground hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-6 w-6" />
                beaseedling.mbt@gmail.com
              </a>
            </motion.div>
            
            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" data-testid="button-donate-footer">
                Donate Now
              </Button>
              <Button size="lg" variant="outline" data-testid="button-volunteer">
                Volunteer Application
              </Button>
              <Button size="lg" variant="outline" data-testid="button-brochure">
                Download Brochure
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sprout className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <span className="font-serif text-lg font-semibold text-background">
                Be a Seedling
              </span>
            </div>
            <p className="text-sm text-center md:text-left">
              ©2025 by Be a Seedling. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-background transition-colors" data-testid="link-privacy">Privacy</a>
              <a href="#" className="hover:text-background transition-colors" data-testid="link-terms">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
