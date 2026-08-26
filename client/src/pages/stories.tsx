import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, BookOpen, GraduationCap, TreePine, Heart,
  Users, Lightbulb, ArrowRight, ChevronRight, Star, Share2, Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { images, contactInfo } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

type Category = "all" | "education" | "girls" | "environment" | "indigenous" | "livelihoods";

const categories: { id: Category; label: string; icon: any; color: string }[] = [
  { id: "all", label: "All Stories", icon: BookOpen, color: "bg-foreground text-background" },
  { id: "education", label: "Education", icon: GraduationCap, color: "bg-primary/10 text-primary" },
  { id: "girls", label: "Girls Empowerment", icon: Heart, color: "bg-rose-100 text-rose-600" },
  { id: "environment", label: "Environment", icon: TreePine, color: "bg-emerald-100 text-emerald-600" },
  { id: "indigenous", label: "Indigenous Knowledge", icon: Lightbulb, color: "bg-amber-100 text-amber-600" },
  { id: "livelihoods", label: "Youth Livelihoods", icon: Users, color: "bg-secondary/10 text-secondary" },
];

interface Story {
  id: string;
  title: string;
  category: Category;
  location: string;
  challenge: string;
  intervention: string;
  outcome: string;
  quote?: string;
  quoteAuthor?: string;
  isPlaceholder?: boolean;
}

const stories: Story[] = [
  {
    id: "1",
    title: "Completing High School Against the Odds",
    category: "education",
    location: "Marsabit County",
    challenge: "A young person was given away by their family and faced losing all access to education. Without support, dropping out seemed inevitable.",
    intervention: "Be a Seedling connected them with an education scholarship, providing school fees, materials, and ongoing mentorship through a local leader.",
    outcome: "They have now completed high school — a milestone that opens doors to further education, employment, and the ability to advocate for others in similar situations.",
    quote: "When I was given away by my parents, Be a Seedling became my home. I ran to the chief's office where I was connected to Be a Seedling. They connected me to an education scholarship. Now I have completed my High School.",
    quoteAuthor: "A Seedling Graduate, Marsabit County",
  },
  {
    id: "2",
    title: "A Family Freed from Water Poverty",
    category: "education",
    location: "Marsabit County",
    challenge: "Without access to a nearby water source, children — especially girls — spent hours each day fetching water rather than attending school.",
    intervention: "Be a Seedling supported a clean water initiative, installing water access points that reduced the burden on families.",
    outcome: "With less time spent fetching water, daughters in the family are now attending school consistently, with improved attendance and renewed hope for their futures.",
    quote: "Be a Seedling has transformed our village. The water project means my daughters can go to school instead of walking miles for water. We are forever grateful.",
    quoteAuthor: "Fatuma Ali, Community Member, Marsabit County",
  },
  {
    id: "3",
    title: "Volunteering as a Catalyst for Change",
    category: "livelihoods",
    location: "Marsabit County",
    challenge: "Many young people in Marsabit face limited opportunities to develop skills, connect with mentors, and contribute meaningfully to community development.",
    intervention: "Be a Seedling engaged young volunteers in community events, enabling them to contribute directly to tree planting, education support, and awareness campaigns.",
    outcome: "Volunteers gained skills, confidence, and networks — and the communities they served experienced tangible positive change as a result of their contributions.",
    quote: "Volunteering with this team was a life-changing experience. The dedication of the staff and the resilience of the community is inspiring.",
    quoteAuthor: "John Kamau, Volunteer",
  },
  {
    id: "4",
    title: "Indigenous Ecological Knowledge: Preservation Begins",
    category: "indigenous",
    location: "Ngurunit, Marsabit County",
    challenge: "Oral histories, ecological knowledge, and cultural practices of the Rendille community risk being lost as younger generations migrate and traditional knowledge is not documented.",
    intervention: "The Rendille Indigenous Knowledge Initiative is bringing community elders, young people, and researchers together to document, digitize, and transmit this knowledge through intergenerational teaching.",
    outcome: "Initial documentation is underway. This initiative is creating bridges between generations and preserving cultural heritage that has guided community resilience for centuries.",
    isPlaceholder: false,
  },
  {
    id: "5",
    title: "Girls Empowerment Stories",
    category: "girls",
    location: "Marsabit County",
    challenge: "Information to be uploaded",
    intervention: "Information to be uploaded",
    outcome: "Information to be uploaded — Be a Seedling is collecting and will publish verified stories of girls supported through our education and protection programmes.",
    isPlaceholder: true,
  },
  {
    id: "6",
    title: "Environmental Restoration Stories",
    category: "environment",
    location: "Laisamis Constituency",
    challenge: "Degraded land, reduced rainfall, and loss of indigenous tree cover have eroded ecosystem services and community livelihoods.",
    intervention: "Community tree planting drives and forest restoration work have brought together volunteers, local leaders, and schools to restore degraded landscapes.",
    outcome: "Over 10,000 trees have been planted. Longer-term environmental outcomes including tree survival rates and ecosystem recovery are being monitored.",
    isPlaceholder: false,
  },
];

export default function Stories() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [sharedStoryId, setSharedStoryId] = useState<string | null>(null);

  const filtered = stories.filter(s => activeCategory === "all" || s.category === activeCategory);

  useEffect(() => {
    const storyId = window.location.hash.replace("#story-", "");
    const linkedStory = stories.find((story) => story.id === storyId);
    if (linkedStory) {
      setActiveCategory(linkedStory.category);
      window.setTimeout(() => {
        document.getElementById(`story-${linkedStory.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, []);

  const handleShare = async (story: Story) => {
    const shareUrl = `${window.location.origin}/stories#story-${story.id}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: story.title, text: story.outcome, url: shareUrl });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setSharedStoryId(story.id);
      window.setTimeout(() => setSharedStoryId(null), 2200);
    } catch {
      window.prompt("Copy this story link:", shareUrl);
    }
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
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Community Voices</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Stories of Change
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              Behind every statistic is a person, a family, a community. These are the stories of change unfolding in Marsabit County — told with honesty, dignity, and respect.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border/50 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                aria-pressed={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground'
                }`}
              >
                <cat.icon className="h-4 w-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {filtered.map((story) => (
                <Card id={`story-${story.id}`} key={story.id} className={`scroll-mt-40 border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 ${story.isPlaceholder ? 'opacity-60 border-dashed' : 'border-border/50'}`}>
                  <CardContent className="p-0">
                    {/* Category tag */}
                    <div className="p-6 pb-0">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full ${categories.find(c => c.id === story.category)?.color || 'bg-muted text-muted-foreground'}`}>
                        {categories.find(c => c.id === story.category)?.label}
                      </span>
                      <div className="flex items-center gap-1.5 mt-3">
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground font-medium">{story.location}</span>
                      </div>
                    </div>

                    <div className="p-6">
                       <div className="flex items-start justify-between gap-4 mb-5">
                         <h3 className="font-serif text-2xl font-bold text-foreground">{story.title}</h3>
                         <button
                           type="button"
                           onClick={() => void handleShare(story)}
                           className="inline-flex items-center gap-1.5 shrink-0 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                           aria-label={`Share ${story.title}`}
                         >
                           {sharedStoryId === story.id ? <Check className="h-3.5 w-3.5" /> : <Share2 className="h-3.5 w-3.5" />}
                           {sharedStoryId === story.id ? "Link copied" : "Share"}
                         </button>
                       </div>

                      {/* Story structure */}
                      <div className="space-y-4">
                        <div className="relative pl-5 border-l-2 border-red-200">
                          <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Challenge</p>
                          <p className="text-muted-foreground text-sm leading-relaxed font-light">{story.challenge}</p>
                        </div>
                        <div className="relative pl-5 border-l-2 border-primary/30">
                          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Intervention</p>
                          <p className="text-muted-foreground text-sm leading-relaxed font-light">{story.intervention}</p>
                        </div>
                        <div className="relative pl-5 border-l-2 border-emerald-300">
                          <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Outcome</p>
                          <p className="text-muted-foreground text-sm leading-relaxed font-light">{story.outcome}</p>
                        </div>
                      </div>

                      {story.quote && (
                        <div className="mt-6 p-5 rounded-2xl bg-primary/5 border border-primary/10">
                          <div className="flex gap-1 mb-3">
                            {[1,2,3,4,5].map(i => <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />)}
                          </div>
                          <p className="text-foreground font-serif text-base leading-relaxed italic mb-3">
                            "{story.quote}"
                          </p>
                          <p className="text-xs font-bold text-primary tracking-wider uppercase">— {story.quoteAuthor}</p>
                        </div>
                      )}

                      {story.isPlaceholder && (
                        <div className="mt-4 p-3 rounded-xl bg-muted text-center">
                          <p className="text-xs text-muted-foreground italic">More stories coming soon — we are collecting community testimonials for this programme area.</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Have a story to share?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              If you have been supported by Be a Seedling, or if you have witnessed change in our community, we would love to hear from you. Your story matters and can inspire others.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href={`mailto:${contactInfo.email}?subject=Story of Change`}>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12 font-bold">
                  Share Your Story
                  <ChevronRight className="ml-2 h-4 w-4" />
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
