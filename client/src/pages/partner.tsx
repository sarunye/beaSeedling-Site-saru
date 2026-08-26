import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft, Globe, GraduationCap, TreePine, Heart,
  BookOpen, Users, Lightbulb, MapPin, Mail, ChevronRight,
  Building2, Microscope, Briefcase, HandHeart, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { images, contactInfo } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const partnerTypes = [
  {
    icon: Globe,
    title: "NGOs &amp; Development Agencies",
    description: "Organizations working in education, child protection, environment, or livelihoods can co-implement programmes, share resources, or collaborate on community outreach in Northern Kenya.",
  },
  {
    icon: Building2,
    title: "Foundations &amp; Funders",
    description: "Philanthropic foundations and grant-making organizations can support Be a Seedling's programmes through project funding, capacity building grants, or unrestricted core support.",
  },
  {
    icon: Microscope,
    title: "Research Institutions",
    description: "We welcome collaboration with universities and research institutions interested in pastoralist communities, indigenous knowledge, climate resilience, or education in marginalized settings.",
  },
  {
    icon: GraduationCap,
    title: "Universities",
    description: "Academic partnerships for student placements, joint research, or knowledge exchange around community development, environmental science, or social work are warmly welcomed.",
  },
  {
    icon: Briefcase,
    title: "Corporate Partners",
    description: "Businesses seeking to invest in community development, environmental restoration, or education as part of their CSR commitments can partner with us for meaningful, measurable impact.",
  },
  {
    icon: HandHeart,
    title: "Individual Experts",
    description: "Professionals with skills in monitoring and evaluation, communications, finance, health, or advocacy who wish to contribute pro bono expertise are encouraged to reach out.",
  },
];

const programmeAreas = [
  { icon: GraduationCap, title: "Education & Learning", color: "bg-primary/10 text-primary" },
  { icon: Heart, title: "Child Protection & Girls Empowerment", color: "bg-rose-100 text-rose-600" },
  { icon: TreePine, title: "Environmental Restoration & Climate Resilience", color: "bg-emerald-100 text-emerald-600" },
  { icon: BookOpen, title: "Indigenous Knowledge & Cultural Preservation", color: "bg-amber-100 text-amber-600" },
  { icon: Users, title: "Youth Livelihoods", color: "bg-secondary/10 text-secondary" },
];

const whyPartner = [
  {
    title: "Authentic Community Roots",
    description: "Be a Seedling was founded by and remains deeply embedded in Marsabit's pastoralist communities. Our work is genuinely community-led, not parachuted in.",
  },
  {
    title: "Geographic Coverage",
    description: "We operate across Marsabit County, including Laisamis Constituency and Marsabit Central, with reach into remote villages rarely accessed by outside organizations.",
  },
  {
    title: "Local Knowledge & Community Trust",
    description: "Years of relationship-building mean communities trust and participate in our programmes. Partners gain access to this trust and the community networks we have built.",
  },
  {
    title: "Multi-Sector Approach",
    description: "Our integrated model — addressing education, environment, child protection, and livelihoods together — creates opportunities for cross-sector partnerships with multiplied impact.",
  },
  {
    title: "Featured Initiative: Rendille Indigenous Knowledge",
    description: "Our flagship Rendille Indigenous Knowledge Initiative offers a unique opportunity for research partnerships around oral history, ecological knowledge, and cultural preservation.",
    featured: true,
  },
];

const collaborationOpportunities = [
  "Co-designing and co-implementing programmes",
  "Providing technical assistance and capacity building",
  "Joint funding applications to institutional donors",
  "Research and documentation collaborations",
  "Student internships and field placements",
  "In-kind support (equipment, materials, expertise)",
  "Donor referrals and fundraising collaboration",
  "Awareness raising and communications support",
];

export default function Partner() {
  const [selectedPartner, setSelectedPartner] = useState(0);
  const [selectedOpportunities, setSelectedOpportunities] = useState<string[]>([]);
  const [inquiry, setInquiry] = useState({
    organization: "",
    name: "",
    email: "",
    message: "",
  });

  const toggleOpportunity = (opportunity: string) => {
    setSelectedOpportunities((current) =>
      current.includes(opportunity)
        ? current.filter((item) => item !== opportunity)
        : [...current, opportunity]
    );
  };

  const inquirySubject = selectedOpportunities.length
    ? `Partnership Inquiry — ${selectedOpportunities.join(", ")}`
    : "Partnership Inquiry — Be a Seedling";

  const handleInquirySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = [
      `Organisation: ${inquiry.organization}`,
      `Contact person: ${inquiry.name}`,
      `Email: ${inquiry.email}`,
      `Collaboration areas: ${selectedOpportunities.join(", ") || "General partnership enquiry"}`,
      "",
      inquiry.message,
    ].join("\n");
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(inquirySubject)}&body=${encodeURIComponent(body)}`;
  };

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
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Collaboration</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Partner With Us
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              We believe the challenges facing pastoralist communities in Marsabit County require diverse skills, resources, and partnerships. We are actively seeking partners who share our commitment to community-led, sustainable development.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <a href="#partner-inquiry">
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-14 text-base shadow-xl">
                  Contact Us to Explore Partnership Opportunities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Initiative */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Card className="border-0 rounded-3xl bg-white/10 backdrop-blur-md">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="shrink-0">
                    <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
                      ⭐ Featured Initiative
                    </span>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                      Rendille Indigenous Knowledge Initiative
                    </h2>
                    <p className="text-white/80 font-light leading-relaxed text-lg">
                      A community-led preservation initiative in Ngurunit documenting oral histories, ecological knowledge, and cultural practices of the Rendille community. This project offers unique partnership opportunities for universities, research institutions, and cultural preservation organizations. Themes include Indigenous Ecological Knowledge, Climate Adaptation, Cultural Preservation, and Community Knowledge Systems.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      {["Indigenous Ecological Knowledge", "Climate Adaptation", "Cultural Preservation", "Community Knowledge Systems"].map((tag) => (
                        <span key={tag} className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Partner */}
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
              The Case for Partnership
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
              Why Partner with Be a Seedling?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyPartner.map((item, index) => (
              <motion.div key={item.title} variants={fadeUp}>
                <Card
                  role="button"
                  tabIndex={0}
                  aria-expanded={selectedPartner === index}
                  onClick={() => setSelectedPartner(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedPartner(index);
                    }
                  }}
                  className={`h-full cursor-pointer border rounded-3xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${selectedPartner === index ? 'border-primary ring-1 ring-primary/30 shadow-xl' : item.featured ? 'border-primary/30 bg-primary/5' : 'border-border/50'} hover:shadow-xl`}
                >
                  <CardContent className="p-8">
                    {item.featured && (
                      <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                        Featured
                      </span>
                    )}
                    <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            key={selectedPartner}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 rounded-3xl bg-primary text-primary-foreground p-8 md:p-10"
          >
            <p className="text-amber-300 text-xs font-bold tracking-widest uppercase mb-3">
              Why this matters
            </p>
            <h3 className="font-serif text-3xl font-bold text-white mb-3">
              {whyPartner[selectedPartner].title}
            </h3>
            <p className="text-white/80 text-lg font-light leading-relaxed max-w-3xl">
              {whyPartner[selectedPartner].description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Geographic Coverage & Programme Areas */}
      <section className="py-24 md:py-32 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 lg:gap-24"
          >
            <motion.div variants={fadeUp}>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Where We Work</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Geographic Coverage</h2>
              <div className="space-y-4">
                {[
                  { place: "Laisamis Constituency", detail: "Including Ngurunit, focus of the Rendille Indigenous Knowledge Initiative" },
                  { place: "Marsabit Central", detail: "Girls education, child protection, and urban community programming" },
                  { place: "Marsabit County broadly", detail: "Environmental restoration and community outreach" },
                ].map((loc) => (
                  <div key={loc.place} className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-border/50">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-bold text-sm">{loc.place}</span>
                      <p className="text-muted-foreground text-xs mt-1">{loc.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Work</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Programme Areas</h2>
              <div className="space-y-3">
                {programmeAreas.map((area) => (
                  <div key={area.title} className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border/50">
                    <div className={`w-10 h-10 rounded-xl ${area.color} flex items-center justify-center shrink-0`}>
                      <area.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-sm">{area.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
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
              Who We Work With
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
              Types of Partners
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {partnerTypes.map((partner) => (
              <motion.div key={partner.title} variants={fadeUp}>
                <div className="h-full p-8 rounded-3xl bg-card border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <partner.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3" dangerouslySetInnerHTML={{ __html: partner.title }} />
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{partner.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="py-24 md:py-32 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              How We Can Work Together
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-foreground mb-10">
              Opportunities for Collaboration
            </motion.h2>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-3">
              {collaborationOpportunities.map((opp) => (
                <motion.div key={opp} variants={fadeUp}>
                  <button
                    type="button"
                    aria-pressed={selectedOpportunities.includes(opp)}
                    onClick={() => toggleOpportunity(opp)}
                    className={`w-full flex items-center gap-3 p-4 rounded-2xl text-left border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${selectedOpportunities.includes(opp) ? 'bg-primary/10 border-primary/40' : 'bg-background border-border/50 hover:border-primary/30'}`}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{opp}</span>
                  </button>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <p className="text-sm text-muted-foreground">
                {selectedOpportunities.length
                  ? `${selectedOpportunities.length} collaboration ${selectedOpportunities.length === 1 ? "area" : "areas"} selected`
                  : "Select the areas you would like to explore"}
              </p>
              <a
                href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(inquirySubject)}`}
                className={`inline-flex items-center justify-center h-12 px-6 rounded-full font-bold transition-colors ${selectedOpportunities.length ? 'bg-primary text-white hover:bg-primary/90' : 'bg-muted text-muted-foreground'}`}
                aria-disabled={!selectedOpportunities.length}
                onClick={(event) => {
                  if (!selectedOpportunities.length) event.preventDefault();
                }}
              >
                Send Partnership Inquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership inquiry */}
      <section id="partner-inquiry" className="py-24 md:py-32 bg-background border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Start a conversation</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Tell us how you would like to work together</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl">
                Share a few details and your email app will open with a prepared enquiry. No information is stored on this website.
              </p>
            </motion.div>
            <motion.form variants={fadeUp} onSubmit={handleInquirySubmit} className="grid sm:grid-cols-2 gap-5 rounded-3xl bg-card border border-border/50 p-6 md:p-8">
              <div className="space-y-2">
                <label htmlFor="partner-organization" className="text-sm font-semibold">Organisation or institution</label>
                <Input id="partner-organization" value={inquiry.organization} onChange={(event) => setInquiry({ ...inquiry, organization: event.target.value })} placeholder="Your organisation" required className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <label htmlFor="partner-name" className="text-sm font-semibold">Your name</label>
                <Input id="partner-name" value={inquiry.name} onChange={(event) => setInquiry({ ...inquiry, name: event.target.value })} placeholder="Contact person" required className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="partner-email" className="text-sm font-semibold">Email address</label>
                <Input id="partner-email" type="email" value={inquiry.email} onChange={(event) => setInquiry({ ...inquiry, email: event.target.value })} placeholder="you@example.org" required className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="partner-message" className="text-sm font-semibold">How could we collaborate?</label>
                <Textarea id="partner-message" value={inquiry.message} onChange={(event) => setInquiry({ ...inquiry, message: event.target.value })} placeholder="Tell us about your idea, resources, or area of interest" required className="min-h-32 rounded-xl" />
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">Selected areas: {selectedOpportunities.length ? selectedOpportunities.join(" • ") : "General partnership enquiry"}</p>
                <Button type="submit" className="rounded-full px-7 h-12 bg-primary hover:bg-primary/90">
                  Prepare Email Enquiry
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to explore a partnership?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              We welcome enquiries from all types of organizations and individuals. Whether you have a specific partnership in mind or simply want to explore possibilities, we'd love to hear from you.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href="#partner-inquiry">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 h-14 text-base font-bold shadow-xl">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us to Explore Partnership Opportunities
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
