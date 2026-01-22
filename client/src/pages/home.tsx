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
  CreditCard,
  Smartphone,
  Banknote,
  Loader2,
  Repeat,
  CalendarDays
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
import heroImage from "@assets/generated_images/seedling_sprouting_in_sunlight.png";
import childrenImage from "@assets/generated_images/children_learning_under_tree.png";
import treePlantingImage from "@assets/generated_images/community_tree_planting_event.png";
import founderImage from "@assets/20260109_073202_1768269100356.jpg";
import carolineImage from "@assets/20260117_160940_1768830964832.jpg";
import eleonoraImage from "@assets/IMG-20260119-WA0029_1768830769372.jpg";
import davidImage from "@assets/Image-empty-state_1768832269234.jpg";
import logoImage from "@assets/generated_images/seedling_nonprofit_logo_design.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

function DonateModal() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'details' | 'processing' | 'success'>('details');
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');

  const presetAmounts = [
    { value: '500', label: 'KES 500' },
    { value: '1000', label: 'KES 1,000' },
    { value: '2500', label: 'KES 2,500' },
    { value: '5000', label: 'KES 5,000' },
  ];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStep('processing');
    
    // Simulate payment prompt/processing
    setTimeout(() => {
      setLoading(false);
      setStep('success');
      toast({
        title: "Payment Initiated",
        description: paymentMethod === 'mpesa' 
          ? `Please check your phone for the M-Pesa PIN prompt for KES ${amount || 'your donation'}.` 
          : "Processing your secure donation.",
      });
    }, 2500);
  };

  if (step === 'success') {
    return (
      <DialogContent className="sm:max-w-[425px]">
        <div className="py-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="font-serif text-3xl font-bold mb-2 text-foreground">Thank You!</h2>
          <p className="text-lg font-medium text-primary mb-4">
            Your donation of KES {amount} has been initiated.
          </p>
          <p className="text-muted-foreground mb-8 text-sm max-w-[80%]">
            Your support helps Be a Seedling grow opportunities in Marsabit. 
            A receipt has been sent to your contact details.
          </p>
          <div className="w-full space-y-3">
            <Button onClick={() => { setStep('details'); setAmount(''); }} variant="outline" className="w-full">
              Make Another Donation
            </Button>
            <DialogTrigger asChild>
              <Button className="w-full bg-primary hover:bg-primary/90">Done</Button>
            </DialogTrigger>
          </div>
        </div>
      </DialogContent>
    );
  }

  return (
    <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="font-serif text-2xl">Support Our Mission</DialogTitle>
        <DialogDescription>
          Your contribution directly impacts lives in Marsabit County.
        </DialogDescription>
      </DialogHeader>
      
      <form onSubmit={handleDonate} className="space-y-6 pt-2">
        {/* Frequency Toggle */}
        <div className="flex bg-muted p-1 rounded-lg">
          <button
            type="button"
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${frequency === 'one-time' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            onClick={() => setFrequency('one-time')}
          >
            One-Time
          </button>
          <button
            type="button"
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all flex items-center justify-center gap-2 ${frequency === 'monthly' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            onClick={() => setFrequency('monthly')}
          >
            <Repeat className="w-3 h-3" /> Monthly
          </button>
        </div>

        {/* Amount Selection */}
        <div className="space-y-3">
          <Label>Select Amount</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {presetAmounts.map((preset) => (
              <button
                key={preset.value}
                type="button"
                className={`py-2 px-3 text-sm font-medium rounded-lg border transition-all ${amount === preset.value ? 'border-primary bg-primary/5 text-primary ring-1 ring-primary' : 'border-input hover:border-primary/50 hover:bg-accent'}`}
                onClick={() => setAmount(preset.value)}
              >
                {preset.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-muted-foreground">KES</span>
            <Input 
              type="number" 
              placeholder="Other Amount" 
              className="pl-12" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min="10"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Label>Payment Method</Label>
          <Tabs defaultValue="mpesa" onValueChange={setPaymentMethod} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mpesa">M-Pesa</TabsTrigger>
              <TabsTrigger value="card">Card</TabsTrigger>
              <TabsTrigger value="bank">Bank</TabsTrigger>
            </TabsList>
            
            <div className="pt-4">
              <TabsContent value="mpesa" className="m-0 space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="phone">M-Pesa Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="0712 345 678" required pattern="^07\d{8}$|^01\d{8}$|^\+254\d{9}$" />
                </div>
                <div className="bg-green-50/50 p-4 rounded-lg border border-green-100 flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium text-green-900">How it works:</p>
                    <p className="text-green-800/80 mt-1">We'll send a prompt to your phone. Enter your M-Pesa PIN to complete the donation.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="card" className="m-0 space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="card-name">Cardholder Name</Label>
                  <Input id="card-name" placeholder="John Doe" required />
                </div>
                <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium text-blue-900">Secure Payment</p>
                    <p className="text-blue-800/80 mt-1">Your transaction is encrypted and processed securely. We do not store your card details.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="bank" className="m-0 space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="bank-email">Email for Receipt</Label>
                  <Input id="bank-email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="bg-muted p-4 rounded-lg text-sm space-y-3 border">
                  <div className="flex items-center gap-2 font-semibold">
                    <Banknote className="h-4 w-4" />
                    <span>Bank Transfer Details</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-1 text-muted-foreground">
                    <span>Bank:</span> <span className="text-foreground font-medium">Equity Bank Kenya</span>
                    <span>Branch:</span> <span className="text-foreground font-medium">Marsabit</span>
                    <span>Account:</span> <span className="text-foreground font-medium">Be a Seedling CBO</span>
                    <span>Acc No:</span> <span className="text-foreground font-mono bg-muted-foreground/10 px-1 rounded">1234567890123</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Please include your name or email in the transaction reference.
                </p>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <Button type="submit" className="w-full bg-primary h-12 text-lg font-medium shadow-lg hover:shadow-xl transition-all" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            <span className="flex items-center gap-2">
              <Heart className="w-5 h-5 fill-current" />
              Donate {amount ? `KES ${amount}` : ''} {frequency === 'monthly' ? 'Monthly' : ''}
            </span>
          )}
        </Button>
        
        <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
          <Shield className="w-3 h-3" /> Secure SSL Encrypted Transaction
        </p>
      </form>
    </DialogContent>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Programmes", href: "#programmes" },
    { name: "Projects", href: "#projects" },
    { name: "Archive", href: "#archive" },
    { name: "Contact", href: "#contact" },
  ];

  const teamMembers = [
    { 
      name: "Jeremiah Lengure", 
      role: "Founder", 
      image: founderImage,
      bio: "Non-profit leader with over 12 years of experience in the development sector in Kenya. Jeremiah holds a master's degree in monitoring and evaluation from Maseno University and possesses skills in project management, research methods, and community-based natural resources management. He is currently serving as a project manager at the Global Development Incubator.",
      email: "sarunye@gmail.com",
      featured: true
    },
    { 
      name: "Caroline Sarunye", 
      role: "Programs Director", 
      image: carolineImage,
      bio: "Caroline leads our community-based programming with a focus on women's empowerment and education advocacy. She has extensive experience in community mobilization and indigenous knowledge preservation within Marsabit County.",
      email: "caroline@beaseedling.org"
    },
    { 
      name: "Eleonora", 
      role: "Research Partner", 
      image: eleonoraImage,
      bio: "Eleonora is a PhD candidate at Washington State University studying how pastoralist communities navigate uncertainty, knowledge transmission, and social cohesion under climate change and conflict. She integrates Indigenous knowledge systems with ethnography and computational modeling to examine mobility, trust, and resource management, with a focus on equity and social learning under environmental stress. Her interdisciplinary background spans psychology, women’s studies, and anthropology, with expertise in participatory research, ethnographic fieldwork, and integrating grounded behavioral data into agent-based and epidemiological modeling. She is a fellow at the Zeit Stiftung Bucerius Institute, exploring creative approaches to uncertainty across disciplines."
    },
    { 
      name: "David Leparporori", 
      role: "Project Officer", 
      image: davidImage,
      bio: "David is a highly passionate individual with extensive experience in mentoring and poverty alleviation. He spent over seven years as a mentor with The BOMA Project and has implemented poverty graduation programs for over a decade. With a diverse background in farming, pastoralism, and tourism guiding, he is committed to making a positive impact in the lives of underprivileged communities.",
      email: "david@beaseedling.org"
    },
  ];

  const upcomingProjects = [
    { 
      title: "Rendille Indigenous Knowledge Initiative", 
      description: "A community-led preservation initiative in Ngurunit to document oral histories, ecological knowledge, and cultural practices of the Rendille community through digital archiving and intergenerational teaching.", 
      date: "Sept 2026 - May 2027", 
      location: "Ngurunit, Marsabit County" 
    },
    { title: "Tree Planting Drive 2026", description: "Planting 10,000 trees across 5 communities in Marsabit", date: "March 2026", location: "Laisamis Constituency" },
    { title: "Girls Education Summit", description: "Empowering 500 girls with life skills and menstrual health education", date: "April 2026", location: "Marsabit Central" },
  ];

  const completedProjects = [
    { title: "School Fees Program 2025", description: "Provided scholarships to 150 underprivileged students in Ngurunit", impact: "150 students supported" },
    { title: "Forest Restoration Initiative", description: "Restored 5 hectares of degraded forest land in Laisamis", impact: "2,000 trees planted" },
    { title: "Anti-FGM Campaign", description: "Community awareness reaching 20 villages across Marsabit County", impact: "500+ families educated" },
    { title: "Clean Water Project", description: "Installed water points in 3 schools in Marsabit Central", impact: "1,200 students benefited" },
  ];

  const archiveItems = {
    videos: [
      { title: "Our Impact Story 2024", thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=225&fit=crop", duration: "5:32" },
      { title: "Tree Planting Documentary", thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=225&fit=crop", duration: "12:45" },
      { title: "Education Matters", thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=225&fit=crop", duration: "8:20" },
    ],
    research: [
      {
        title: "Community Education Initiative",
        type: "Video",
        date: "Oct 2025",
        link: "https://youtu.be/fj8qOyys65c?si=crs1FCZs0bbSC5bL"
      },
      { title: "Impact Assessment Report 2024", type: "PDF", date: "Dec 2024" },
      { title: "Environmental Conservation Study", type: "PDF", date: "Oct 2024" },
      { title: "Girls Education Barriers Analysis", type: "PDF", date: "Aug 2024" },
    ],
    blog: [
      { title: "Why Education is the Key to Breaking the Cycle of Poverty", excerpt: "Education transforms lives and communities...", date: "Jan 2026" },
      { title: "Protecting Our Forests: A Community Approach", excerpt: "Sustainable conservation starts with people...", date: "Dec 2025" },
      { title: "Empowering Girls: Stories of Hope", excerpt: "Meet the young women changing their communities...", date: "Nov 2025" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/beaseedling", color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/beaseedling", color: "hover:text-pink-600" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/beaseedling", color: "hover:text-sky-500" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/beaseedling", color: "hover:text-red-600" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/beaseedling", color: "hover:text-blue-700" },
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
              <img src={logoImage} alt="Be a Seedling" className="h-10 w-10 object-contain" />
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
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-primary" data-testid="button-donate-mobile">
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-lg px-8"
                    data-testid="button-get-involved"
                  >
                    Get Involved
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
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

                    <Card 
                      className="hover:border-primary cursor-pointer transition-all hover:bg-primary/5 border-2"
                      onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <CardContent className="pt-6 text-center space-y-2">
                        <Users className="h-8 w-8 mx-auto text-primary" />
                        <h3 className="font-bold">Volunteer</h3>
                        <p className="text-xs text-muted-foreground">Join our team on the ground in Marsabit</p>
                      </CardContent>
                    </Card>

                    <Card 
                      className="hover:border-primary cursor-pointer transition-all hover:bg-primary/5 border-2"
                      onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
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
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8"
                data-testid="button-learn-more"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
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

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-card grain" id="team">
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
              Our People
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Dedicated individuals working tirelessly to plant seeds of hope and change.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member: any) => (
              <motion.div key={member.name} variants={fadeUp} className={member.featured ? "sm:col-span-2 lg:col-span-1" : ""}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden bg-background hover:shadow-xl transition-all duration-300 group cursor-pointer border-none shadow-sm">
                      <div className="aspect-square overflow-hidden relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white text-sm font-medium flex items-center gap-2">
                            View Profile <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                      <div className="p-4 bg-background">
                        <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{member.name}</h3>
                        <p className="text-muted-foreground text-xs">{member.role}</p>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl overflow-hidden p-0 border-none bg-background">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="aspect-square md:aspect-auto h-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <DialogHeader>
                          <DialogTitle className="font-serif text-3xl font-bold mb-1">{member.name}</DialogTitle>
                          <p className="text-primary font-medium text-lg mb-6">{member.role}</p>
                        </DialogHeader>
                        <div className="space-y-4">
                          {member.bio && (
                            <p className="text-muted-foreground text-sm leading-relaxed italic border-l-4 border-primary/20 pl-4">
                              "{member.bio}"
                            </p>
                          )}
                          {member.email && (
                            <div className="pt-4 border-t border-border">
                              <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Contact</p>
                              <a href={`mailto:${member.email}`} className="text-primary hover:underline flex items-center gap-2 text-sm">
                                <Mail className="h-4 w-4" />
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
      <section className="py-20 md:py-32 bg-background" id="projects">
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
              className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6"
            >
              Our Work
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Projects
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Upcoming Projects */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Clock className="h-6 w-6 text-secondary" />
                <h3 className="font-serif text-2xl font-bold">Upcoming Projects</h3>
              </motion.div>
              <div className="space-y-4">
                {upcomingProjects.map((project) => (
                  <motion.div key={project.title} variants={fadeUp}>
                    <Card className="bg-card hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {project.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {project.location}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
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
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="font-serif text-2xl font-bold">Completed Projects</h3>
              </motion.div>
              <div className="space-y-4">
                {completedProjects.map((project) => (
                  <motion.div key={project.title} variants={fadeUp}>
                    <Card className="bg-card hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                        <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {project.impact}
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

      {/* Archive Section */}
      <section className="py-20 md:py-32 bg-card grain" id="archive">
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
              Resources
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Archive
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Explore our videos, research, and stories from the field.
            </motion.p>
          </motion.div>

          {/* Videos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <Play className="h-6 w-6 text-primary" />
              <h3 className="font-serif text-2xl font-bold">Videos</h3>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {archiveItems.videos.map((video) => (
                <motion.div key={video.title} variants={fadeUp}>
                  <Card className="overflow-hidden bg-background hover:shadow-xl transition-all cursor-pointer group">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                          <Play className="h-6 w-6 text-primary fill-primary ml-1" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                        {video.duration}
                      </span>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{video.title}</h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research & Blog */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Research */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <FileText className="h-6 w-6 text-secondary" />
                <h3 className="font-serif text-2xl font-bold">Research & Reports</h3>
              </motion.div>
              <div className="space-y-3">
                {archiveItems.research.map((item) => (
                  <motion.div key={item.title} variants={fadeUp}>
                    <Card className="bg-background hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center">
                            <FileText className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{item.title}</h4>
                            <p className="text-xs text-muted-foreground">{item.type} • {item.date}</p>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
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
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Newspaper className="h-6 w-6 text-primary" />
                <h3 className="font-serif text-2xl font-bold">Blog</h3>
              </motion.div>
              <div className="space-y-3">
                {archiveItems.blog.map((post) => (
                  <motion.div key={post.title} variants={fadeUp}>
                    <Card className="bg-background hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">{post.date}</p>
                        <h4 className="font-medium mb-1">{post.title}</h4>
                        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
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
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a 
                href="mailto:beaseedling.mbt@gmail.com"
                className="flex items-center gap-3 text-lg text-foreground hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-6 w-6" />
                beaseedling.mbt@gmail.com
              </a>
            </motion.div>

            {/* Social Media Links */}
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}
                    data-testid={`link-social-${social.name.toLowerCase()}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90" data-testid="button-donate-footer">
                    Donate Now
                  </Button>
                </DialogTrigger>
                <DonateModal />
              </Dialog>
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
              <img src={logoImage} alt="Be a Seedling" className="h-8 w-8 object-contain" />
              <span className="font-serif text-lg font-semibold text-background">
                Be a Seedling
              </span>
            </div>
            <p className="text-sm text-center md:text-left">
              ©2025 by Be a Seedling. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/60 hover:text-background transition-colors"
                    data-testid={`link-footer-${social.name.toLowerCase()}`}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
