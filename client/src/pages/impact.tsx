import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ArrowLeft,
  GraduationCap,
  TreePine,
  ShieldCheck,
  BookOpen,
  Briefcase,
  ChevronRight,
  TrendingUp,
  Users
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { images, contactInfo } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

function Counter({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const duration = 2; // seconds
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * value));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

const pillars = [
  {
    title: "Education & Access",
    icon: GraduationCap,
    status: "Data Available",
    metric: "150+ Students Supported",
    description: "Vulnerable learners provided with school fees, uniforms, and materials, ensuring consistent access to secondary education.",
  },
  {
    title: "Girls & Protection",
    icon: ShieldCheck,
    status: "Data Available",
    metric: "500+ Girls Reached",
    description: "Girls empowered through education advocacy and anti-FGM protection campaigns, promoting rights and safety.",
  },
  {
    title: "Environmental Restoration",
    icon: TreePine,
    status: "Data Available",
    metric: "10,000+ Trees Planted",
    description: "Indigenous trees planted across degraded landscapes in Marsabit County to combat desertification.",
  },
  {
    title: "Indigenous Knowledge",
    icon: BookOpen,
    status: "Information to be uploaded",
    metric: "Data Pending",
    description: "Documenting oral histories, ecological knowledge, and cultural practices of pastoralist communities.",
  },
  {
    title: "Youth Livelihoods",
    icon: Briefcase,
    status: "Information to be uploaded",
    metric: "Data Pending",
    description: "Vocational skills training and mentorship to improve household resilience and youth employment.",
  }
];

const completedProjects = [
  { title: "School Fees Program 2025", location: "150 students in Ngurunit", impact: "150+ Students" },
  { title: "Forest Restoration Initiative", location: "5 ha in Laisamis", impact: "2,000 Trees" },
  { title: "Anti-FGM Campaign", location: "20 villages engaged", impact: "500+ Families" },
  { title: "Clean Water Project", location: "3 schools equipped", impact: "1,200 Students" },
];

const longTermIndicators = [
  { icon: GraduationCap, label: "School retention rates" },
  { icon: TreePine, label: "Tree survival rates" },
  { icon: ShieldCheck, label: "Girl protection outcomes" },
  { icon: Users, label: "Community participation depth" },
  { icon: TrendingUp, label: "Youth livelihood outcomes" },
];

export default function Impact() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img src={images.logo} alt="Be a Seedling" className="h-12 w-12 object-contain group-hover:scale-105 transition-transform" />
            <span className="font-serif text-2xl font-bold text-primary tracking-tight">Be a Seedling</span>
          </a>
          <a href="/" className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Prose */}
            <motion.div className="lg:col-span-6" variants={stagger} initial="hidden" animate="visible">
              <motion.span variants={fadeUp} className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                Our Impact
              </motion.span>
              <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
                Evidence of <br/>Change.
              </motion.h1>
              <motion.div variants={fadeUp} className="border-l-4 border-amber-500 pl-6 py-2 my-8">
                <p className="font-serif text-2xl italic text-foreground/90 leading-snug">
                  "We are committed to measuring, reporting, and learning from our work with absolute transparency."
                </p>
              </motion.div>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
                This page documents our community impact — with honesty about what we know and what we are still working to measure. We believe in sharing our journey as we build capacity to monitor long-term outcomes in Marsabit County.
              </motion.p>
            </motion.div>
            
            {/* Report Card */}
            <motion.div 
              className="lg:col-span-6" 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-primary text-primary-foreground p-8 md:p-12 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col justify-between min-h-[550px]">
                {/* Dotted pattern decoration */}
                <div 
                  className="absolute top-0 right-0 w-72 h-72 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, white 2px, transparent 2.5px)",
                    backgroundSize: "16px 16px",
                    maskImage: "radial-gradient(circle, black 20%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(circle, black 20%, transparent 70%)"
                  }}
                />
                
                <div className="relative z-10">
                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">Annual Report Card</h3>
                  <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6 font-light max-w-sm">
                    A snapshot of our cumulative reach across Marsabit County. We focus our resources where they create the most <span className="text-amber-400 font-medium">enduring value</span>.
                  </p>
                </div>

                <div className="relative z-10 mt-12 pt-8 border-t border-primary-foreground/20">
                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <div>
                      <div className="font-serif text-5xl md:text-6xl font-bold mb-2 text-white"><Counter value={5} suffix=" ha" /></div>
                      <div className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-400">Forest Restored</div>
                    </div>
                    <div>
                      <div className="font-serif text-5xl md:text-6xl font-bold mb-2 text-white"><Counter value={500} suffix="+" /></div>
                      <div className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-400">Families Educated</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground backdrop-blur-sm">Education</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground backdrop-blur-sm">Environment</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground backdrop-blur-sm">Protection</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-width Stat Ribbon */}
      <section className="py-16 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 md:divide-x divide-border/50"
          >
            <motion.div variants={fadeUp} className="text-center px-4">
              <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2"><Counter value={150} suffix="+" /></div>
              <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Students Supported</div>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center px-4">
              <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2"><Counter value={500} suffix="+" /></div>
              <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Girls Reached</div>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center px-4">
              <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2"><Counter value={10000} suffix="+" /></div>
              <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Trees Planted</div>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center px-4">
              <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2"><Counter value={20} suffix="+" /></div>
              <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Villages Engaged</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programme Results by Pillar */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-16 max-w-3xl"
          >
            <motion.span variants={fadeUp} className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block">Programme Results</motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
              Impact by Pillar
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pillars.map((pillar, i) => (
              <motion.div key={i} variants={fadeUp} className="h-full">
                <Card className={`h-full border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 ${pillar.status === 'Information to be uploaded' ? 'bg-muted/20 opacity-80' : 'bg-card hover:shadow-xl hover:border-primary/20'}`}>
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6 flex justify-between items-start">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${pillar.status === 'Information to be uploaded' ? 'bg-muted text-muted-foreground' : 'bg-primary/10 text-primary'}`}>
                        <pillar.icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full text-right ${pillar.status === 'Information to be uploaded' ? 'bg-muted-foreground/10 text-muted-foreground' : 'bg-amber-400/20 text-amber-700'}`}>
                        {pillar.status}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-2xl font-bold mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed flex-grow mb-8">
                      {pillar.description}
                    </p>
                    
                    <div className="pt-6 border-t border-border/50 mt-auto">
                      <p className={`font-bold ${pillar.status === 'Information to be uploaded' ? 'text-muted-foreground text-sm' : 'text-primary text-xl'}`}>
                        {pillar.metric}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Completed Projects Showcase */}
      <section className="py-24 md:py-32 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.span variants={fadeUp} className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block">Track Record</motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
              Completed Projects
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="order-2 lg:order-1 flex flex-col justify-center"
            >
              <div className="divide-y divide-border border-y border-border">
                {completedProjects.map((proj, i) => (
                  <motion.div variants={fadeUp} key={i} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">{proj.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{proj.location}</p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <span className="inline-block px-4 py-2 bg-amber-400/10 text-amber-700 rounded-full text-sm font-bold tracking-wide">
                        {proj.impact}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={fadeUp} className="border-l-4 border-amber-500 pl-6 py-2 mt-12">
                <p className="font-serif text-xl italic text-foreground/90">
                  "Every completed project is a promise kept to the communities we serve."
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 lg:order-2 relative rounded-[2rem] overflow-hidden min-h-[400px] shadow-xl"
            >
              <img src={images.treePlanting} alt="Community action in Marsabit" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Measure Change */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block">Long-Term Outcomes</motion.span>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
                How We Measure Change
              </motion.h2>
              <motion.div variants={fadeUp} className="border-l-4 border-amber-500 pl-6 py-2 mb-8">
                <p className="font-serif text-xl italic text-foreground/90">
                  "We are building our capacity to monitor long-term outcomes — the sustainable changes that matter most."
                </p>
              </motion.div>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground font-light leading-relaxed">
                True impact takes time. Beyond counting initial activities, we are establishing frameworks to track these key indicators over years to understand our effect on systemic poverty and ecosystem health.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="flex flex-col gap-4"
            >
              {longTermIndicators.map((indicator, i) => (
                <motion.div variants={fadeUp} key={i} className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <indicator.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-serif text-xl font-bold text-foreground">{indicator.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accountability CTA */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Dotted pattern */}
        <div 
          className="absolute bottom-0 left-0 w-full h-full opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, white 2px, transparent 2.5px)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to top, black, transparent)",
            WebkitMaskImage: "linear-gradient(to top, black, transparent)"
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Accountability &amp; Learning
            </motion.h2>
            <motion.p variants={fadeUp} className="text-primary-foreground/90 text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              We regularly review our programmes and adapt based on community feedback. Review our governance structures and financial transparency.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/governance" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition-colors shadow-lg shadow-black/10">
                Governance &amp; Transparency
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center justify-center h-14 px-8 rounded-full border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-colors">
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-sm text-muted-foreground font-light">
            Registered Community-Based Organization (CBO) under the Ministry of Labour and Social Protection, Marsabit County, Kenya.
          </p>
          <p className="text-xs text-muted-foreground font-light">
            © {new Date().getFullYear()} Be a Seedling. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
