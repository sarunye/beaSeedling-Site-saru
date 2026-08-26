import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft, Shield, Users, FileText, Heart, CheckCircle,
  Building2, ChevronRight, BookOpen, Scale, Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { images, teamMembers, contactInfo } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const leadershipTeam = teamMembers.filter(m => 
  ["Founder", "Programs Director", "Director of Field Operations", "Education & Development Lead"].includes(m.role)
);

const accountabilityCommitments = [
  {
    icon: Users,
    title: "Community Accountability",
    description: "We are accountable to the pastoralist communities of Marsabit County. Community members are central to programme design, implementation, and review. We seek and act on community feedback.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We communicate openly about our programmes, results, challenges, and limitations. We do not inflate impact figures or make claims we cannot substantiate.",
  },
  {
    icon: Heart,
    title: "Child Safeguarding",
    description: "The safety and dignity of every child is non-negotiable. All staff and volunteers are expected to uphold child protection principles at all times.",
  },
  {
    icon: Scale,
    title: "Financial Stewardship",
    description: "All donations and grants are used solely for the purposes for which they were given. We maintain financial records and are committed to developing rigorous financial management practices.",
  },
  {
    icon: CheckCircle,
    title: "Learning & Adaptation",
    description: "We regularly review our programmes, learn from successes and failures, and adapt our approach to improve effectiveness and community outcomes.",
  },
  {
    icon: BookOpen,
    title: "Donor Reporting",
    description: "We provide regular, honest updates to supporters and donors about programme progress, challenges encountered, and results achieved.",
  },
];

const policies = [
  { name: "Child Safeguarding Policy", status: "under-development" },
  { name: "Financial Management Policy", status: "under-development" },
  { name: "Complaints & Feedback Policy", status: "under-development" },
  { name: "Data Protection & Privacy Policy", status: "under-development" },
  { name: "Anti-Corruption Policy", status: "under-development" },
  { name: "Human Resources Policy", status: "under-development" },
];

export default function Governance() {
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
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Accountability First</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Governance &amp; Transparency
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              We believe accountability is not optional — it is foundational. This page describes our organizational structure, leadership, commitments, and the standards we hold ourselves to.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Registration Status */}
      <section className="py-16 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Card className="border border-primary/20 rounded-3xl bg-primary/5">
              <CardContent className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Registration Status</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Be a Seedling is a registered <strong>Community-Based Organization (CBO)</strong> under the <strong>Ministry of Labour and Social Protection</strong>, Marsabit County, Kenya. We operate in accordance with the regulations and requirements of our registration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Organizational Overview */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
          >
            <motion.div variants={fadeUp}>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
                Organizational Overview
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg font-light leading-relaxed">
                <p>
                  Be a Seedling is a community-led development organization based in Marsabit County, Northern Kenya. We work with pastoralist communities to build resilience across five interconnected programme areas: education, child protection and girls empowerment, environmental restoration, indigenous knowledge preservation, and youth livelihoods.
                </p>
                <p>
                  We are rooted in the belief that sustainable community development must be community-led. Our team includes local leaders, educators, and development practitioners with deep knowledge of and commitment to Marsabit's communities.
                </p>
                <p>
                  We are a growing organization. We acknowledge openly that our governance systems, policies, and reporting mechanisms are at various stages of development, and we are committed to strengthening them over time.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Our Policies</span>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Policies &amp; Procedures</h3>
              <div className="space-y-3">
                {policies.map((policy) => (
                  <div key={policy.name} className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border/50">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium text-sm">{policy.name}</span>
                    </div>
                    <span className="text-xs font-bold tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                      Under Development
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground font-light italic pt-2">
                All policies are currently under development. We are committed to completing and publishing these policies to strengthen organizational accountability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Structure */}
      <section className="py-24 md:py-32 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.span variants={fadeUp} className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Team</motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
              Leadership Structure
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {leadershipTeam.map((member) => (
              <motion.div key={member.name} variants={fadeUp}>
                <Card className="h-full border border-border/50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden m-2 rounded-2xl">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-serif text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm font-medium">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Accountability Commitments */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.span variants={fadeUp} className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Standards
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
              Accountability Commitments
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg font-light max-w-2xl">
              These commitments reflect our values and the standards we hold ourselves to. They are not claims about fully developed systems — they are commitments we are actively building toward.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {accountabilityCommitments.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <div className="h-full p-8 rounded-3xl bg-card border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Financial Stewardship */}
      <section className="py-24 md:py-32 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Financial Integrity
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-foreground mb-6">
              Financial Stewardship Statement
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-5 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                Be a Seedling is committed to responsible financial management. Every donation received is used exclusively in service of our mission: supporting communities in Marsabit County through education, child protection, environmental restoration, indigenous knowledge preservation, and youth livelihoods.
              </p>
              <p>
                We currently accept donations via bank transfer (Equity Bank Kenya, Marsabit Branch). We do not accept donations through unverified channels, and we do not pay commission to fundraisers or agents.
              </p>
              <p>
                We are committed to strengthening our financial management practices, including regular financial reviews and the development of a formal financial management policy. Our annual financial summaries will be made available to supporters on request.
              </p>
              <div className="mt-6 p-6 rounded-2xl bg-background border border-border/50">
                <p className="text-sm font-semibold text-foreground mb-1">Annual Financial Reports</p>
                <p className="text-sm text-muted-foreground italic">Information to be uploaded. Financial summaries will be published here as they become available.</p>
                <a
                  href={`mailto:${contactInfo.email}?subject=${encodeURIComponent("Request for Financial Summary")}`}
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Request available information
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Questions about our governance?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg font-light mb-8">
              We welcome questions from donors, partners, and community members. Transparency is one of our core commitments.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={`mailto:${contactInfo.email}`}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12">
                  Contact Us
                </Button>
              </a>
              <Link href="/safeguarding">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12">
                  Child Safeguarding
                  <ChevronRight className="ml-2 h-4 w-4" />
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
