import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  GraduationCap, TreePine, Users, MapPin, Heart, BookOpen, 
  ArrowLeft, TrendingUp, Clock, CheckCircle, Target, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { images, contactInfo } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const impactStats = [
  {
    icon: GraduationCap,
    number: "150+",
    label: "Students Supported",
    description: "Vulnerable learners provided with school fees, uniforms, and materials",
    color: "bg-primary/10 text-primary",
    available: true,
  },
  {
    icon: Heart,
    number: "500+",
    label: "Girls Reached",
    description: "Girls empowered through education advocacy and protection programmes",
    color: "bg-secondary/10 text-secondary",
    available: true,
  },
  {
    icon: TreePine,
    number: "10,000+",
    label: "Trees Planted",
    description: "Indigenous trees planted across degraded landscapes in Marsabit County",
    color: "bg-primary/10 text-primary",
    available: true,
  },
  {
    icon: Users,
    number: "20+",
    label: "Villages Reached",
    description: "Pastoralist villages engaged through awareness and programme activities",
    color: "bg-secondary/10 text-secondary",
    available: true,
  },
  {
    icon: MapPin,
    number: "5+",
    label: "Communities Served",
    description: "Distinct pastoralist communities receiving direct programme support",
    color: "bg-primary/10 text-primary",
    available: true,
  },
  {
    icon: BookOpen,
    number: "Information to be uploaded",
    label: "Volunteers Engaged",
    description: "Community and external volunteers contributing time and skills",
    color: "bg-muted text-muted-foreground",
    available: false,
  },
];

const environmentalAchievements = [
  {
    title: "Forest Restoration Initiative",
    description: "Restored 5 hectares of degraded forest land in Laisamis, working alongside community members to replant indigenous tree species.",
    metric: "5 ha restored",
    status: "Completed"
  },
  {
    title: "Community Tree Nurseries",
    description: "Established community-managed tree nurseries producing indigenous seedlings for ongoing reforestation efforts.",
    metric: "Information to be uploaded",
    status: "Ongoing"
  },
  {
    title: "Environmental Awareness Programme",
    description: "Community training on sustainable land management, water conservation, and the importance of indigenous tree species.",
    metric: "5+ communities trained",
    status: "Ongoing"
  },
];

const longTermMetrics = [
  {
    icon: TrendingUp,
    title: "School Retention Rates",
    description: "Monitoring the percentage of sponsored students who remain enrolled and progress through secondary education.",
  },
  {
    icon: GraduationCap,
    title: "Educational Progression",
    description: "Tracking learners from scholarship support through secondary school completion and into further education or employment.",
  },
  {
    icon: TreePine,
    title: "Tree Survival Rates",
    description: "Measuring the proportion of planted trees surviving to maturity as an indicator of ecosystem restoration success.",
  },
  {
    icon: Users,
    title: "Community Participation",
    description: "Assessing the depth and breadth of community involvement in programme activities and decision-making.",
  },
  {
    icon: Heart,
    title: "Livelihood Outcomes",
    description: "Evaluating improvements in youth livelihoods and household resilience following vocational skills training.",
  },
  {
    icon: CheckCircle,
    title: "Girl Protection Outcomes",
    description: "Monitoring reductions in early marriage, FGM, and dropout rates among girls supported by the programme.",
  },
];

export default function Impact() {
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-primary" />
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Evidence of Change</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Impact &amp; Results
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              We are committed to measuring, reporting, and learning from our work. This page documents our community impact — with honesty about what we know and what we are still working to measure.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.span variants={fadeUp} className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Numbers
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
              Community impact at a glance
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {impactStats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <Card className={`h-full border border-border/50 rounded-3xl transition-all duration-300 ${stat.available ? 'hover:shadow-xl hover:shadow-primary/5' : 'opacity-70'}`}>
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center mb-6`}>
                      <stat.icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <p className={`font-serif text-3xl font-bold mb-1 ${stat.available ? 'text-foreground' : 'text-muted-foreground text-lg'}`}>
                      {stat.number}
                    </p>
                    <p className="font-bold text-base mb-3">{stat.label}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">{stat.description}</p>
                  </CardContent>
                </Card>
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
            * Figures reflect cumulative programme activity. Some metrics are self-reported or estimated. Be a Seedling is committed to strengthening data collection processes over time.
          </motion.p>
        </div>
      </section>

      {/* Environmental Restoration */}
      <section className="py-24 md:py-32 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.span variants={fadeUp} className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              Environmental Restoration
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
              Restoring Marsabit's landscapes
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {environmentalAchievements.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <Card className="h-full border border-border/50 rounded-3xl hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${item.status === 'Completed' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light mb-4">{item.description}</p>
                    <div className="pt-4 border-t border-border/50">
                      <span className="text-sm font-bold text-primary">{item.metric}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Measuring Long-Term Change */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.span variants={fadeUp} className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Long-Term Commitment
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
              Measuring Long-Term Change
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg font-light max-w-3xl leading-relaxed">
              Be a Seedling is committed to going beyond counting activities. We are building our capacity to monitor long-term outcomes — the sustainable changes that matter most to the communities we serve. Below are the indicators we track and aspire to measure more rigorously over time.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {longTermMetrics.map((metric) => (
              <motion.div key={metric.title} variants={fadeUp}>
                <div className="h-full p-8 rounded-3xl bg-card border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <metric.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">{metric.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{metric.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Accountability Commitment */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-8">
              <Target className="h-8 w-8 text-white" strokeWidth={1.5} />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Accountability &amp; Learning
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg font-light leading-relaxed mb-8">
              We are committed to community participation, transparent feedback mechanisms, and continuous learning. Our monitoring and evaluation systems are evolving — we regularly review our programmes and adapt based on community feedback and evidence.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/governance">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 h-12">
                  View Governance &amp; Transparency
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href={`mailto:${contactInfo.email}`}>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12">
                  Contact Us
                </Button>
              </a>
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
