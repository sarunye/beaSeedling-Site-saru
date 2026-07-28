import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft, GraduationCap, TreePine, Heart, 
  ArrowRight, ChevronRight, Users, BookOpen, Lightbulb, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, contactInfo } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

interface PathwayStep {
  label: string;
  description: string;
}

interface Pathway {
  icon: any;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  steps: PathwayStep[];
  longTermGoal: string;
}

const pathways: Pathway[] = [
  {
    icon: GraduationCap,
    title: "Education Pathway",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    longTermGoal: "Educated, empowered young people who contribute to community development and break intergenerational cycles of poverty.",
    steps: [
      { label: "Scholarships", description: "School fees, uniforms, and materials for vulnerable learners" },
      { label: "School Retention", description: "Mentorship and community advocacy to keep children in school" },
      { label: "Educational Completion", description: "Learners progress from primary through secondary school" },
      { label: "Skills Development", description: "Vocational training and further education opportunities" },
      { label: "Improved Livelihoods", description: "Graduates secure better opportunities and support their families" },
    ]
  },
  {
    icon: TreePine,
    title: "Environment Pathway",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    longTermGoal: "Restored, resilient ecosystems that sustain community livelihoods, food security, and adaptive capacity in the face of climate change.",
    steps: [
      { label: "Tree Planting", description: "Community-led planting of indigenous tree species" },
      { label: "Land Restoration", description: "Degraded landscapes begin to recover through sustained effort" },
      { label: "Ecosystem Recovery", description: "Biodiversity returns; water retention and soil health improve" },
      { label: "Climate Resilience", description: "Communities better equipped to cope with erratic rainfall and drought" },
      { label: "Stronger Communities", description: "Ecosystems support sustainable livelihoods and food security" },
    ]
  },
  {
    icon: Heart,
    title: "Child Protection & Girls Empowerment Pathway",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    longTermGoal: "Girls who are educated, protected, and empowered become agents of change who improve outcomes for the next generation.",
    steps: [
      { label: "Awareness & Advocacy", description: "Community education on child rights, FGM, and early marriage" },
      { label: "Safe Participation", description: "Girls participate in safe learning and empowerment spaces" },
      { label: "Reduced Harm", description: "Reduction in FGM, early marriage, and school dropout among girls" },
      { label: "Girls' Empowerment", description: "Girls develop confidence, skills, and aspirations for the future" },
      { label: "Intergenerational Change", description: "Empowered women invest in their children's education and health" },
    ]
  },
  {
    icon: Lightbulb,
    title: "Indigenous Knowledge Pathway",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    longTermGoal: "Rendille and other pastoralist communities preserve and transmit their knowledge systems, strengthening cultural identity and ecological resilience.",
    steps: [
      { label: "Documentation", description: "Oral histories, ecological knowledge, and cultural practices are recorded" },
      { label: "Intergenerational Transmission", description: "Elders teach youth; knowledge bridges are created" },
      { label: "Community Ownership", description: "Communities lead their own knowledge preservation processes" },
      { label: "Applied Knowledge", description: "Indigenous ecological knowledge informs climate adaptation practices" },
      { label: "Cultural Resilience", description: "Strong cultural identity and knowledge systems support community wellbeing" },
    ]
  },
  {
    icon: Users,
    title: "Youth Livelihoods Pathway",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
    longTermGoal: "Young people who have not completed formal schooling develop sustainable income sources and contribute to community resilience.",
    steps: [
      { label: "Skills Training", description: "Vocational and livelihood skills training for out-of-school youth" },
      { label: "Mentorship", description: "Youth are mentored by experienced practitioners and community leaders" },
      { label: "Income Generation", description: "Youth apply skills to generate sustainable income" },
      { label: "Economic Independence", description: "Young people are less dependent on humanitarian assistance" },
      { label: "Community Investment", description: "Economically active youth reinvest in their families and communities" },
    ]
  },
];

export default function TheoryOfChange() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src={images.logo} alt="Be a Seedling" className="h-10 w-10 object-contain" />
            <span className="font-serif text-xl font-semibold text-foreground">Be a Seedling</span>
          </a>
          <a href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-primary" />
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Model</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Theory of Change
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              We believe that thriving ecosystems and thriving children are interconnected. This page explains how our five programme pathways work together to build lasting resilience in Marsabit's pastoralist communities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Assumption */}
      <section className="py-16 bg-background border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Target className="h-8 w-8 text-primary" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core Belief
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              "We believe thriving ecosystems and thriving children are interconnected. By supporting education, protecting vulnerable children, restoring degraded landscapes, and preserving indigenous knowledge, we help communities create lasting resilience."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {pathways.map((pathway, pIndex) => (
            <motion.div
              key={pathway.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
                <div className={`w-14 h-14 rounded-2xl ${pathway.bgColor} flex items-center justify-center`}>
                  <pathway.icon className={`h-7 w-7 ${pathway.color}`} strokeWidth={1.5} />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{pathway.title}</h2>
              </motion.div>

              {/* Steps */}
              <motion.div variants={fadeUp} className="relative">
                {/* Desktop Flow */}
                <div className="hidden lg:flex items-start gap-0">
                  {pathway.steps.map((step, index) => (
                    <div key={step.label} className="flex items-center flex-1 min-w-0">
                      <div className={`flex-1 p-5 rounded-2xl border ${pathway.borderColor} bg-card hover:shadow-lg transition-all duration-300`}>
                        <div className={`w-8 h-8 rounded-full ${pathway.bgColor} flex items-center justify-center mb-3`}>
                          <span className={`text-xs font-bold ${pathway.color}`}>{index + 1}</span>
                        </div>
                        <p className="font-bold text-sm mb-1">{step.label}</p>
                        <p className="text-muted-foreground text-xs leading-relaxed font-light">{step.description}</p>
                      </div>
                      {index < pathway.steps.length - 1 && (
                        <div className="shrink-0 px-2">
                          <ArrowRight className={`h-5 w-5 ${pathway.color} opacity-40`} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Flow */}
                <div className="lg:hidden space-y-3">
                  {pathway.steps.map((step, index) => (
                    <div key={step.label}>
                      <div className={`p-5 rounded-2xl border ${pathway.borderColor} bg-card`}>
                        <div className="flex items-start gap-4">
                          <div className={`w-8 h-8 rounded-full ${pathway.bgColor} flex items-center justify-center shrink-0`}>
                            <span className={`text-xs font-bold ${pathway.color}`}>{index + 1}</span>
                          </div>
                          <div>
                            <p className="font-bold text-sm mb-1">{step.label}</p>
                            <p className="text-muted-foreground text-xs leading-relaxed font-light">{step.description}</p>
                          </div>
                        </div>
                      </div>
                      {index < pathway.steps.length - 1 && (
                        <div className="flex justify-center py-1">
                          <ArrowRight className={`h-4 w-4 ${pathway.color} opacity-40 rotate-90`} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Long-term goal */}
              <motion.div
                variants={fadeUp}
                className={`mt-6 p-6 rounded-2xl ${pathway.bgColor} border ${pathway.borderColor}`}
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0">
                    <Target className={`h-5 w-5 ${pathway.color} mt-0.5`} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider ${pathway.color} mb-1`}>Long-Term Goal</p>
                    <p className="text-foreground font-medium text-sm leading-relaxed">{pathway.longTermGoal}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interconnection */}
      <section className="py-24 md:py-32 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              The Bigger Picture
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Interconnected Pathways
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-xl font-light leading-relaxed mb-8">
              These five pathways are not separate — they are interconnected. An educated girl who stays in school becomes a young woman with the knowledge to protect her environment. A restored ecosystem supports food security that allows families to prioritize children's education. Indigenous knowledge passed to the next generation guides sustainable land management. Youth with livelihoods reinvest in community education. Together, these pathways build a resilient, self-determining community.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/impact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12">
                  See Our Impact
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/partner">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12">
                  Partner With Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            Registered Community-Based Organization (CBO) under the Ministry of Labour and Social Protection, Marsabit County, Kenya.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Be a Seedling. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
