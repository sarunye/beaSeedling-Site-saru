import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useContent } from "@/context/ContentContext";
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
  TreeDeciduous,
  Play,
  FileText,
  Newspaper,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Clock,
  CheckCircle2,
  Calendar,
  MapPin,
  ArrowRight,
  CalendarDays,
  Star,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  teamMembers, 
  upcomingProjects, 
  completedProjects, 
  researchItems, 
  images,
  contactInfo
} from "@/data/content";
import { DonateModal } from "@/components/DonateModal";
import { VolunteerModal } from "@/components/VolunteerModal";
import { ArchiveModal } from "@/components/ArchiveModal";
import { AdvocateModal } from "@/components/AdvocateModal";
import { StoriesModal } from "@/components/StoriesModal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const { videos, blogs, teamMembers, upcomingProjects, completedProjects } = useContent();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [getInvolvedOpen, setGetInvolvedOpen] = useState(false);
  const [sponsorModalOpen, setSponsorModalOpen] = useState(false);
  const [selectedSponsorship, setSelectedSponsorship] = useState("");
  const [selectedArchiveItem, setSelectedArchiveItem] = useState<any>(null);
  const [archiveType, setArchiveType] = useState<'blog' | 'video' | 'research'>('blog');

  const handleInvolvementClick = (option: any) => {
    if (option.title.includes("Sponsor")) {
      setSelectedSponsorship(option.title);
      setSponsorModalOpen(true);
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else if (option.title === "Volunteer") {
      (document.querySelector('[data-testid="button-volunteer"]') as HTMLElement)?.click();
    } else if (option.title === "Partner With Us") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else if (option.title === "Advocate") {
      document.getElementById("trigger-advocate-modal")?.click();
    } else if (option.title === "Community Voices") {
      document.getElementById("trigger-stories-modal")?.click();
    }
  };

  const handleArchiveClick = (item: any, type: 'blog' | 'video' | 'research') => {
    setSelectedArchiveItem(item);
    setArchiveType(type);
    document.getElementById("trigger-archive-modal")?.click();
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programmes", href: "#programmes" },
    { name: "Projects", href: "#projects" },
    { name: "Archive", href: "#archive" },
    { name: "Contact", href: "#contact" },
  ];

  const pageLinks = [
    { name: "Impact", href: "/impact" },
    { name: "Partner", href: "/partner" },
  ];

  const archiveItems = {
    videos: videos,
    research: researchItems,
    blog: blogs,
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: contactInfo.socials.facebook, color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, url: contactInfo.socials.instagram, color: "hover:text-pink-600" },
    { name: "Twitter", icon: Twitter, url: contactInfo.socials.twitter, color: "hover:text-sky-500" },
    { name: "YouTube", icon: Youtube, url: contactInfo.socials.youtube, color: "hover:text-red-600" },
    { name: "LinkedIn", icon: Linkedin, url: contactInfo.socials.linkedin, color: "hover:text-blue-700" },
  ];

  const programmes = [
    {
      icon: GraduationCap,
      title: "Education & Learning",
      description: "We support vulnerable learners to stay in school through scholarships, mentorship, and essential learning materials. We advocate for every child's right to education in Marsabit County.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Shield,
      title: "Child Protection & Girls Empowerment",
      description: "We work to protect children from gender-based violence, FGM, and early marriage, and empower girls through education advocacy and menstrual hygiene support.",
      color: "bg-rose-100 text-rose-600"
    },
    {
      icon: TreeDeciduous,
      title: "Environmental Restoration & Climate Resilience",
      description: "We lead community tree planting, land restoration, and environmental conservation that protects forests, water sources, and builds long-term ecosystem resilience.",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: Lightbulb,
      title: "Indigenous Knowledge & Cultural Preservation",
      description: "Through the Rendille Indigenous Knowledge Initiative and related programmes, we document oral histories, ecological knowledge, and cultural practices of pastoralist communities.",
      color: "bg-amber-100 text-amber-600"
    },
    {
      icon: HandHeart,
      title: "Youth Livelihoods",
      description: "We provide vocational and livelihood skills training for youth who have discontinued formal schooling, enabling sustainable income generation and community contribution.",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: BookOpen,
      title: "Advocacy & Awareness",
      description: "We train community leaders, parents, and young people on rights, protections, and environmental responsibilities — enabling communities to advocate for themselves.",
      color: "bg-purple-100 text-purple-600"
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
    },
    {
      title: "Advocate",
      description: "Spread awareness or share your story to help us reach more people and create change.",
      action: "Advocate"
    },
    {
      title: "Community Voices",
      description: "Read stories from our community or share your own experience and feedback.",
      action: "Read Stories"
    }
  ];

  return (
    <div className="min-h-screen bg-background" id="home">
      {/* Hidden Triggers for Modals */}
      <Dialog>
        <DialogTrigger asChild>
          <button id="trigger-archive-modal" className="hidden">Open Archive</button>
        </DialogTrigger>
        <ArchiveModal item={selectedArchiveItem} type={archiveType} />
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <button id="trigger-advocate-modal" className="hidden">Open Advocate</button>
        </DialogTrigger>
        <AdvocateModal />
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <button id="trigger-stories-modal" className="hidden">Open Stories</button>
        </DialogTrigger>
        <StoriesModal />
      </Dialog>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" className="flex items-center gap-2" data-testid="link-logo">
              <img src={images.logo} alt="Be a Seedling" className="h-10 w-10 object-contain" />
              <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                Be a Seedling
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
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
              {pageLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {link.name}
                </a>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90" data-testid="button-donate-nav">
                    Donate
                  </Button>
                </DialogTrigger>
                <DonateModal />
              </Dialog>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2.5 px-3 rounded-xl text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="border-t border-border/50 pt-2 mt-2">
                {pageLinks.map((link) => (
                  <a key={link.name} href={link.href} className="block py-2.5 px-3 rounded-xl text-foreground hover:text-primary hover:bg-primary/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </a>
                ))}
              </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-primary mt-3 rounded-xl" data-testid="button-donate-mobile">
                  Donate
                </Button>
              </DialogTrigger>
              <DonateModal />
            </Dialog>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="A seedling sprouting in warm sunlight"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">
                Marsabit County, Kenya
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6"
            >
              Planting Hope,<br />
              <span className="text-primary italic font-normal">Growing Resilience.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-light"
            >
              Building resilient pastoralist communities through education, child protection, environmental restoration, indigenous knowledge preservation, and sustainable livelihoods.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Dialog open={getInvolvedOpen} onOpenChange={setGetInvolvedOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105"
                    data-testid="button-get-involved"
                  >
                    Get Involved
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] border-none shadow-2xl rounded-3xl">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl text-center">Join Our Mission</DialogTitle>
                    <DialogDescription className="text-center">
                      Choose how you would like to contribute to the Be a Seedling community in Marsabit.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="hover:border-primary cursor-pointer transition-all hover:bg-primary/5 border-2">
                          <CardContent className="pt-6 text-center space-y-2">
                            <Heart className="h-8 w-8 mx-auto text-primary" />
                            <h3 className="font-bold">Donate</h3>
                            <p className="text-xs text-muted-foreground">Support our projects with a financial contribution</p>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DonateModal />
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="hover:border-primary cursor-pointer transition-all hover:bg-primary/5 border-2">
                          <CardContent className="pt-6 text-center space-y-2">
                            <Users className="h-8 w-8 mx-auto text-primary" />
                            <h3 className="font-bold">Volunteer</h3>
                            <p className="text-xs text-muted-foreground">Join our team on the ground in Marsabit</p>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <VolunteerModal />
                    </Dialog>

                    <Card 
                      className="hover:border-primary cursor-pointer transition-all hover:bg-primary/5 border-2"
                      onClick={() => {
                        setGetInvolvedOpen(false);
                        setTimeout(() => {
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                    >
                      <CardContent className="pt-6 text-center space-y-2">
                        <Mail className="h-8 w-8 mx-auto text-primary" />
                        <h3 className="font-bold">Collaborate</h3>
                        <p className="text-xs text-muted-foreground">Share suggestions or explore partnerships</p>
                      </CardContent>
                    </Card>

                    <Card 
                      className="hover:border-primary cursor-pointer transition-all hover:bg-primary/5 border-2"
                      onClick={() => {
                        setGetInvolvedOpen(false);
                        setTimeout(() => {
                          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                    >
                      <CardContent className="pt-6 text-center space-y-2">
                        <Globe className="h-8 w-8 mx-auto text-primary" />
                        <h3 className="font-bold">Advocate</h3>
                        <p className="text-xs text-muted-foreground">Help us spread the word about our cause</p>
                      </CardContent>
                    </Card>
                  </div>
                </DialogContent>
              </Dialog>
              <Link href="/impact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-8 h-14 rounded-full backdrop-blur-sm"
                  data-testid="button-learn-more"
                >
                  View Our Impact
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats (New) */}
      <section className="relative -mt-16 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-card rounded-2xl shadow-xl border border-border/50 p-8 flex flex-wrap justify-around items-center gap-8 text-center"
        >
          <div>
            <p className="font-serif text-4xl font-bold text-primary mb-1">1,000+</p>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Lives Impacted</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-border"></div>
          <div>
            <p className="font-serif text-4xl font-bold text-primary mb-1">10,000+</p>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Trees Planted</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-border"></div>
          <div>
            <p className="font-serif text-4xl font-bold text-primary mb-1">5+</p>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Communities</p>
          </div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 md:py-40 bg-background" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          >
            <motion.div variants={fadeUp} className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src={images.children}
                  alt="Children learning together"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Team in the field — offset card */}
              <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-background">
                <img
                  src={images.teamCommunity}
                  alt="Be a Seedling team with community members in Marsabit"
                  className="w-full h-full object-cover blur-[1px] scale-105"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-secondary"></span>
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                  Our Story
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
                Building resilient pastoralist communities.
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                <p>
                  Be a Seedling is a registered Community-Based Organization (CBO) based in Marsabit County, Northern Kenya. We are a community-led development organization building resilient pastoralist communities through education, child protection, environmental restoration, indigenous knowledge preservation, and sustainable livelihoods.
                </p>
                <p>
                  We believe thriving ecosystems and thriving children are interconnected. By supporting education, protecting vulnerable children, restoring degraded landscapes, and preserving indigenous knowledge, we help communities create lasting resilience.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/impact">
                  <Button variant="outline" className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/5">
                    View Our Impact <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/theory-of-change">
                  <Button variant="ghost" className="rounded-full text-muted-foreground hover:text-foreground">
                    Our Theory of Change
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 md:py-32 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            <motion.div variants={fadeUp}>
              <div className="h-full bg-primary text-primary-foreground p-10 md:p-14 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <h3 className="font-serif text-3xl font-bold mb-4 relative z-10">Our Mission</h3>
                <p className="text-lg opacity-90 leading-relaxed font-light relative z-10">
                  Be a Seedling empowers underprivileged communities through education 
                  and environmental conservation, fostering equity and advocating for a better world.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <div className="h-full bg-secondary text-secondary-foreground p-10 md:p-14 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <h3 className="font-serif text-3xl font-bold mb-4 relative z-10">Our Vision</h3>
                <p className="text-lg opacity-90 leading-relaxed font-light relative z-10">
                  We envision a future where all individuals have equal access to education, 
                  resources, and a healthy environment, enabling them to thrive.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="flex flex-col items-center mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Core Principles</span>
              <motion.h3 variants={fadeUp} className="font-serif text-4xl font-bold text-center">
                What drives us forward
              </motion.h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div key={value.title} variants={fadeUp}>
                  <div className="h-full p-8 rounded-3xl bg-background border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <value.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-serif text-xl font-bold mb-3">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed font-light">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="py-24 md:py-32 bg-background" id="programmes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <div className="max-w-2xl">
              <motion.span 
                variants={fadeUp}
                className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
              >
                Our Focus Areas
              </motion.span>
              <motion.h2 
                variants={fadeUp}
                className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-[1.1]"
              >
                Creating impact where it matters most.
              </motion.h2>
            </div>
            <motion.p 
              variants={fadeUp}
              className="text-muted-foreground text-lg max-w-md font-light"
            >
              We deliver targeted programmes designed alongside local communities to ensure lasting, sustainable change.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {programmes.map((programme, index) => (
              <motion.div key={programme.title} variants={fadeUp}>
                <Card className="h-full bg-card border-border/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden group rounded-3xl">
                  <CardContent className="p-8 md:p-10 relative z-10">
                    <div className={`w-16 h-16 rounded-2xl ${programme.color} flex items-center justify-center mb-8 transition-all duration-300`}>
                      <programme.icon className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-4">{programme.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-light text-sm">{programme.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Showcase */}
      <section className="py-24 md:py-32 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-16"
          >
            <div>
              <motion.span variants={fadeUp} className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
                Evidence of Change
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
                Our impact in numbers.
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} className="lg:pt-14">
              <a href="/impact">
                <Button variant="outline" className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/5">
                  Full Impact Report <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Big stat strip */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-3xl overflow-hidden mb-12"
          >
            {[
              { number: "150+", label: "Students Supported", sub: "School fees, uniforms & materials" },
              { number: "500+", label: "Girls Reached", sub: "Education advocacy & protection" },
              { number: "10,000+", label: "Trees Planted", sub: "Indigenous species, Marsabit County" },
              { number: "20+", label: "Villages Engaged", sub: "Across pastoralist communities" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="bg-card p-8 md:p-10 flex flex-col gap-1">
                <p className="font-serif text-4xl md:text-5xl font-bold text-primary leading-none">{stat.number}</p>
                <p className="font-bold text-sm mt-2">{stat.label}</p>
                <p className="text-xs text-muted-foreground font-light leading-snug">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Programme impact rows */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: GraduationCap,
                area: "Education & Learning",
                headline: "Keeping learners in school",
                body: "Vulnerable children in Marsabit receive bursaries, learning materials, and mentorship — breaking the cycle of dropout in under-resourced pastoralist households.",
                color: "bg-primary/10 text-primary",
              },
              {
                icon: TreePine,
                area: "Environmental Restoration",
                headline: "5 hectares of forest restored",
                body: "Community-led tree nurseries and planting campaigns are reversing land degradation, restoring water catchments, and rebuilding biodiversity in Laisamis and surrounding areas.",
                color: "bg-secondary/10 text-secondary",
              },
              {
                icon: Heart,
                area: "Child Protection",
                headline: "Protecting girls' futures",
                body: "Awareness campaigns targeting early marriage and FGM, combined with safe-space education programmes, are reaching girls and families across the region.",
                color: "bg-primary/10 text-primary",
              },
            ].map((item) => (
              <motion.div key={item.area} variants={fadeUp}>
                <div className="h-full p-8 rounded-3xl border border-border/50 bg-background hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">{item.area}</p>
                  <h3 className="font-serif text-xl font-bold mb-3">{item.headline}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-xs text-muted-foreground text-center mt-8 max-w-xl mx-auto"
          >
            * Figures reflect cumulative programme activity. Some metrics are self-reported or estimated.
          </motion.p>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden" id="involved">
        <div className="absolute inset-0">
          <img
            src={images.treePlanting}
            alt="Community tree planting event"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          >
            <motion.div variants={fadeUp}>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-6 block">
                Join The Movement
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
                Become a seed of change today.
              </h2>
              <p className="text-white/80 text-xl mb-12 leading-relaxed font-light max-w-xl">
                Whether you donate, volunteer, or advocate, your support directly fuels our mission to uplift the communities of Marsabit County.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-10 h-14 rounded-full shadow-xl transition-transform hover:scale-105"
                  >
                    Donate Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DonateModal />
              </Dialog>
            </motion.div>
            
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {involvementOptions.filter(o => !o.title.includes('Sponsor')).map((option, index) => (
                  <div 
                    key={option.title} 
                    className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/20 cursor-pointer transition-all hover:scale-105"
                    onClick={() => handleInvolvementClick(option)}
                  >
                    <h4 className="font-serif text-xl font-bold text-white mb-2">{option.title}</h4>
                    <p className="text-sm text-white/70 font-light leading-relaxed">{option.description}</p>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Dialog open={sponsorModalOpen} onOpenChange={setSponsorModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-center">{selectedSponsorship}</DialogTitle>
            <DialogDescription className="text-center">
              Choose how you would like to proceed with your sponsorship.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="hover:border-primary cursor-pointer transition-all hover:bg-primary/5 border-2">
                  <CardContent className="pt-6 text-center space-y-2">
                    <Heart className="h-8 w-8 mx-auto text-primary" />
                    <h3 className="font-bold">Donate Now</h3>
                    <p className="text-xs text-muted-foreground">Make a direct financial contribution via M-Pesa, Card or Bank</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DonateModal />
            </Dialog>

                      <Card 
                      className="hover:border-primary cursor-pointer transition-all hover:bg-primary/5 border-2"
                      onClick={() => {
                        setSponsorModalOpen(false);
                        setTimeout(() => {
                          window.location.href = `mailto:${contactInfo.email}?subject=Inquiry regarding ${selectedSponsorship}`;
                        }, 100);
                      }}
                    >
                      <CardContent className="pt-6 text-center space-y-2">
                        <Mail className="h-8 w-8 mx-auto text-primary" />
                        <h3 className="font-bold">Contact Us</h3>
                        <p className="text-xs text-muted-foreground">Send us an email to request more details about sponsorship</p>
                      </CardContent>
                    </Card>
          </div>
        </DialogContent>
      </Dialog>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-card grain" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <div className="max-w-2xl">
              <motion.span 
                variants={fadeUp}
                className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
              >
                Our People
              </motion.span>
              <motion.h2 
                variants={fadeUp}
                className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-[1.1]"
              >
                Meet the Team
              </motion.h2>
            </div>
            <motion.p 
              variants={fadeUp}
              className="text-muted-foreground text-lg max-w-md font-light"
            >
              Dedicated individuals working tirelessly to plant seeds of hope and change.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {teamMembers.map((member: any) => (
              <motion.div key={member.name} variants={fadeUp} className={member.featured ? "sm:col-span-2 lg:col-span-1" : ""}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden bg-background hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group cursor-pointer border border-border/50 rounded-3xl h-full flex flex-col">
                      <div className="aspect-square overflow-hidden relative m-2 rounded-2xl">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <span className="text-white text-sm font-medium flex items-center gap-2 mb-2">
                            View Full Profile <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                      <div className="p-6 bg-background flex-1 flex flex-col justify-center text-center">
                        <h3 className="font-serif text-xl font-bold text-foreground mb-1">{member.name}</h3>
                        <p className="text-primary font-medium text-sm">{member.role}</p>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl overflow-hidden p-0 border-none bg-background rounded-[2rem]">
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 aspect-square md:aspect-[3/4] h-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="md:col-span-3 p-10 md:p-12 flex flex-col justify-center bg-card">
                        <DialogHeader className="text-left mb-8">
                          <DialogTitle className="font-serif text-3xl md:text-4xl font-bold mb-2">{member.name}</DialogTitle>
                          <p className="text-primary font-bold tracking-widest uppercase text-xs">{member.role}</p>
                        </DialogHeader>
                        <div className="space-y-6">
                          {member.bio && (
                            <p className="text-muted-foreground text-base leading-relaxed font-light">
                              {member.bio}
                            </p>
                          )}
                          {member.email && (
                            <div className="pt-6 mt-6 border-t border-border/50">
                              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-semibold">Get in touch</p>
                              <a href={`mailto:${member.email}`} className="text-foreground hover:text-primary transition-colors flex items-center gap-3 text-sm font-medium group">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                  <Mail className="h-4 w-4" />
                                </div>
                                {member.email}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 md:py-32 bg-background border-t border-border/50" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
          >
            <div className="max-w-2xl">
              <motion.span 
                variants={fadeUp}
                className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block"
              >
                Our Work
              </motion.span>
              <motion.h2 
                variants={fadeUp}
                className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-[1.1]"
              >
                Projects in Marsabit County
              </motion.h2>
            </div>
          </motion.div>

          {/* Rendille Featured Initiative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden bg-foreground text-background p-8 md:p-12">
              <div className="absolute inset-0 opacity-20">
                <img src={images.beadwork} alt="" className="w-full h-full object-cover blur-sm" />
              </div>
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
                    <Star className="h-3.5 w-3.5" />
                    Featured Initiative
                  </span>
                  <span className="text-xs font-medium text-white/60 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    Ngurunit, Marsabit County
                  </span>
                  <span className="text-xs font-medium text-white/60 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    Sept 2026 – May 2027
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4">
                  Rendille Indigenous Knowledge Initiative
                </h3>
                <p className="text-white/70 text-lg font-light leading-relaxed max-w-3xl mb-6">
                  A community-led preservation initiative in Ngurunit to document oral histories, ecological knowledge, and cultural practices of the Rendille community through digital archiving and intergenerational teaching.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Indigenous Ecological Knowledge", "Climate Adaptation", "Cultural Preservation", "Community Knowledge Systems"].map(tag => (
                    <span key={tag} className="text-xs bg-white/10 border border-white/20 text-white/80 px-3 py-1.5 rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                <Link href="/partner">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full">
                    Explore Partnership Opportunities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Upcoming Projects */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-3xl font-bold">Upcoming</h3>
              </motion.div>
              <div className="space-y-6">
                {upcomingProjects.map((project) => (
                  <motion.div key={project.title} variants={fadeUp}>
                    <div className="group relative pl-8 pb-8 border-l border-border/50 last:border-0 last:pb-0">
                      <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-secondary ring-4 ring-background"></div>
                      <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:shadow-xl hover:border-secondary/30 transition-all duration-300">
                        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground font-medium uppercase tracking-wider mb-4">
                          <span className="flex items-center gap-1.5 bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                            <Calendar className="h-3.5 w-3.5" />
                            {project.date}
                          </span>
                          <span className="flex items-center gap-1.5 bg-background px-3 py-1 rounded-full border border-border">
                            <MapPin className="h-3.5 w-3.5" />
                            {project.location}
                          </span>
                        </div>
                        <h4 className="font-serif text-xl font-bold mb-3 group-hover:text-secondary transition-colors">{project.title}</h4>
                        <p className="text-muted-foreground leading-relaxed font-light">{project.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Completed Projects */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-3xl font-bold">Completed</h3>
              </motion.div>
              <div className="space-y-6">
                {completedProjects.map((project) => (
                  <motion.div key={project.title} variants={fadeUp}>
                     <div className="group relative pl-8 pb-8 border-l border-border/50 last:border-0 last:pb-0">
                      <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
                      <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                        <h4 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                        <p className="text-muted-foreground leading-relaxed font-light mb-5">{project.description}</p>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {project.impact}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-24 md:py-32 bg-card grain border-t border-border/50" id="archive">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.span 
              variants={fadeUp}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Resources
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-[1.1]"
            >
              Explore our Archive
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto font-light"
            >
              Dive deeper into our impact through videos, research reports, and stories from the field.
            </motion.p>
          </motion.div>

          {/* Videos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-24"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Play className="h-5 w-5 text-primary ml-1" />
              </div>
              <h3 className="font-serif text-3xl font-bold">Featured Videos</h3>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {archiveItems.videos.map((video) => (
                <motion.div key={video.title} variants={fadeUp}>
                  <Card 
                    className="overflow-hidden bg-background border border-border/50 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group h-full flex flex-col"
                    onClick={() => handleArchiveClick(video, 'video')}
                  >
                    <div className="relative aspect-video overflow-hidden m-2 rounded-2xl">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-500">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center scale-90 group-hover:scale-100 shadow-xl transition-transform duration-500">
                          <Play className="h-6 w-6 text-primary fill-primary ml-1" />
                        </div>
                      </div>
                      <span className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-md text-white text-xs font-medium tracking-wider rounded-lg">
                        {video.duration}
                      </span>
                    </div>
                    <CardContent className="p-6 flex-1 flex items-center">
                      <h4 className="font-serif text-lg font-bold group-hover:text-primary transition-colors">{video.title}</h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research & Blog */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Research */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-3xl font-bold">Research & Reports</h3>
              </motion.div>
              <div className="space-y-4">
                {archiveItems.research.map((item) => (
                  <motion.div key={item.title} variants={fadeUp}>
                    <Card 
                      className="bg-background border border-border/50 rounded-2xl hover:shadow-xl hover:border-secondary/30 transition-all duration-300 cursor-pointer group"
                      onClick={() => handleArchiveClick(item, 'research')}
                    >
                      <CardContent className="p-6 flex items-center justify-between">
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 rounded-xl bg-secondary/5 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                            <FileText className="h-6 w-6 text-secondary group-hover:text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-base mb-1 group-hover:text-secondary transition-colors">{item.title}</h4>
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.type} • {item.date}</p>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <ChevronRight className="h-4 w-4 text-secondary" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Blog */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Newspaper className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-3xl font-bold">Blog & Updates</h3>
              </motion.div>
              <div className="space-y-4">
                {archiveItems.blog.map((post) => (
                  <motion.div key={post.title} variants={fadeUp}>
                    <Card 
                      className="bg-background border border-border/50 rounded-2xl hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                      onClick={() => handleArchiveClick(post, 'blog')}
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></div>
                      <CardContent className="p-6 md:p-8">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-wider mb-4">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                        <h4 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h4>
                        <p className="text-muted-foreground font-light leading-relaxed mb-6">{post.excerpt}</p>
                        <span className="text-primary text-sm font-bold tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                          Read Story <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 md:py-40 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <Sprout className="h-16 w-16 mx-auto text-primary" strokeWidth={1} />
            </motion.div>
            <motion.blockquote 
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-relaxed mb-10 text-white/90"
            >
              "When I was given away by my parents, Be a Seedling became my home. 
              I ran to the chief's office where I was connected to Be a Seedling. 
              They connected me to an education scholarship. Now I have completed my High School."
            </motion.blockquote>
            <motion.div variants={fadeUp} className="flex flex-col items-center justify-center">
              <p className="text-xl font-bold tracking-widest uppercase text-primary mb-1">
                A Seedling Graduate
              </p>
              <p className="text-white/50 text-sm font-medium uppercase tracking-wider">Marsabit County</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 md:py-32 bg-background border-t border-border/50 overflow-hidden" id="contact">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={images.communityGift}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover blur-xl opacity-[0.07]"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span 
              variants={fadeUp}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Get in Touch
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 leading-[1.1]"
            >
              Let's create lasting change, together.
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-muted-foreground text-lg mb-12 font-light leading-relaxed"
            >
              Have questions or want to learn more about how you can help? 
              Reach out to us today. We're always looking for new partners and supporters.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center justify-between gap-6 bg-card border border-border/50 p-4 pl-6 rounded-full hover:shadow-xl hover:border-primary/30 transition-all duration-300 w-full sm:w-auto"
                data-testid="link-email"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-lg font-medium">{contactInfo.email}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            </motion.div>

            {/* Social Media Links */}
            <motion.div variants={fadeUp} className="mb-16">
              <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-8">Follow our journey</p>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground ${social.color} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                    data-testid={`link-social-${social.name.toLowerCase()}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-16 border-t border-border/50">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-14 rounded-full shadow-xl" data-testid="button-donate-footer">
                    Make a Donation
                  </Button>
                </DialogTrigger>
                <DonateModal />
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="border-2 border-border hover:border-foreground hover:bg-transparent text-base px-8 h-14 rounded-full" data-testid="button-volunteer">
                    Become a Volunteer
                  </Button>
                </DialogTrigger>
                <VolunteerModal />
              </Dialog>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        {/* Footer Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-border/50">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={images.logo} alt="Be a Seedling" className="h-10 w-10 object-contain" />
                <span className="font-serif text-lg font-bold text-foreground">Be a Seedling</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Registered Community-Based Organization (CBO) under the Ministry of Labour and Social Protection, Marsabit County, Kenya.
              </p>
              <p className="text-xs text-muted-foreground mt-3">{contactInfo.email}</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Our Work</h4>
              <div className="space-y-2">
                <a href="#programmes" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Programmes</a>
                <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
                <a href="/impact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Impact &amp; Results</a>
                <a href="/theory-of-change" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Theory of Change</a>
                <a href="/stories" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Stories of Change</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Get Involved</h4>
              <div className="space-y-2">
                <a href="/partner" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Partner With Us</a>
                <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Volunteer</a>
                <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Accountability</h4>
              <div className="space-y-2">
                <a href="/governance" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Governance &amp; Transparency</a>
                <a href="/safeguarding" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Child Safeguarding</a>
              </div>
              <div className="mt-6">
                <h4 className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider">Follow us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-muted-foreground ${social.color} transition-colors`}
                      data-testid={`link-footer-${social.name.toLowerCase()}`}
                      title={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Be a Seedling. All rights reserved.
            </p>
            <a 
              href="/login" 
              className="text-xs font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              Admin Login
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
