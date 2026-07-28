import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft, Shield, Heart, Users, AlertTriangle, 
  Phone, Mail, ChevronRight, Eye, Lock, HandHeart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { images, contactInfo } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const principles = [
  {
    icon: Shield,
    title: "Protection from Harm",
    description: "Every child who comes into contact with Be a Seedling's work has the right to be protected from abuse, neglect, exploitation, and all forms of violence.",
  },
  {
    icon: Heart,
    title: "Dignity &amp; Respect",
    description: "We treat every child with dignity, respect, and fairness. Children are never used for organizational promotional purposes without appropriate consent and in ways that could expose them to risk.",
  },
  {
    icon: Eye,
    title: "Safe Participation",
    description: "All programme activities involving children are designed to ensure their safety. Children participate in environments that are physically safe, emotionally supportive, and free from any form of harassment.",
  },
  {
    icon: Lock,
    title: "Responsible Photography &amp; Media",
    description: "We use photographs and stories of children responsibly and only where appropriate consent has been obtained. We do not share images that could identify or endanger vulnerable children.",
  },
  {
    icon: Users,
    title: "Staff &amp; Volunteer Standards",
    description: "All staff and volunteers are expected to understand and uphold child protection principles. We do not tolerate any behaviour that puts children at risk.",
  },
  {
    icon: HandHeart,
    title: "Best Interests of the Child",
    description: "In all programme decisions, the best interests of the child are a primary consideration. We prioritize child wellbeing above organizational convenience or interest.",
  },
];

export default function Safeguarding() {
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
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Child Protection</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Child Safeguarding
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              The safety and wellbeing of every child is at the heart of everything we do. Be a Seedling is committed to creating safe environments where children can learn, grow, and be protected.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Card className="border border-primary/20 rounded-3xl bg-primary/5">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg font-light">
                      Be a Seedling is committed to the protection of all children who come into contact with our programmes, staff, volunteers, and activities. We believe that every child — regardless of age, gender, ethnicity, disability, or background — has the right to be safe, respected, and free from harm.
                    </p>
                    <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
                      <p className="text-sm text-amber-800 font-medium">
                        <strong>Note:</strong> A formal Child Safeguarding Policy is currently under development. The principles outlined on this page reflect our organizational commitment and the standards we apply in all programme activities. We are committed to completing and publishing our formal policy.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Safe Participation Principles */}
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
              Core Principles
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
              Safe Participation Principles
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {principles.map((principle) => (
              <motion.div key={principle.title} variants={fadeUp}>
                <div className="h-full p-8 rounded-3xl bg-card border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <principle.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3" dangerouslySetInnerHTML={{ __html: principle.title }} />
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Protect Against */}
      <section className="py-24 md:py-32 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Commitment Covers
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-foreground mb-8">
              Protection from All Forms of Harm
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4">
              {[
                "Physical, emotional, and sexual abuse",
                "Neglect and exploitation",
                "Gender-based violence, including FGM and early marriage",
                "Child labour and trafficking",
                "Bullying, harassment, and discrimination",
                "Online exploitation and misuse of images",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reporting Concerns */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-start gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                <AlertTriangle className="h-8 w-8 text-red-500" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Reporting a Concern
                </h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  If you have a concern about the safety or welfare of a child connected to Be a Seedling's programmes, we ask you to report it immediately. All concerns are taken seriously and treated with care and confidentiality.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4 mt-8">
              <a href={`mailto:${contactInfo.email}?subject=Child Safeguarding Concern`}>
                <Card className="h-full border border-border/50 rounded-3xl hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <Mail className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Email Us</h3>
                    <p className="text-muted-foreground text-sm">{contactInfo.email}</p>
                    <p className="text-xs text-muted-foreground mt-2">Please include "Child Safeguarding Concern" in your subject line.</p>
                  </CardContent>
                </Card>
              </a>

              <Card className="h-full border border-border/50 rounded-3xl">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">In Case of Emergency</h3>
                  <p className="text-muted-foreground text-sm">For urgent situations involving immediate risk to a child, contact the relevant local authorities, police, or child protection services in Marsabit County.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.p variants={fadeUp} className="text-sm text-muted-foreground mt-6 font-light italic">
              A formal internal reporting procedure is currently under development. In the meantime, all concerns should be directed to the organizational leadership via email.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Learn more about our accountability standards
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/governance">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12">
                  Governance &amp; Transparency
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12">
                  Return to Home
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
