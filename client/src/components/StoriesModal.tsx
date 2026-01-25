
import { useState } from "react";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, MessageSquare, Plus, CheckCircle2, User, Image as ImageIcon, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useContent } from "@/context/ContentContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

export function StoriesModal() {
  const { toast } = useToast();
  const { stories, addStory } = useContent();
  const [activeTab, setActiveTab] = useState("read");
  const [submitted, setSubmitted] = useState(false);
  
  // Form State
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  const [mediaType, setMediaType] = useState<"none" | "image" | "video">("none");
  const [mediaLink, setMediaLink] = useState("");

  // Filter only approved stories for reading
  const approvedStories = stories.filter(s => s.status === "approved");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addStory({
      author: name,
      role: role || "Supporter",
      content,
      rating,
      image: mediaType === 'image' ? mediaLink : undefined,
      videoLink: mediaType === 'video' ? mediaLink : undefined
    });

    setSubmitted(true);
    toast({
      title: "Story Submitted",
      description: "Thank you! Your story has been submitted for review by our team.",
    });
    
    // Reset form
    setName("");
    setRole("");
    setContent("");
    setRating(5);
    setMediaType("none");
    setMediaLink("");
  };

  if (submitted) {
    return (
      <DialogContent className="sm:max-w-[500px]">
         <div className="py-12 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold mb-2 text-foreground">Thank You!</h2>
            <p className="text-muted-foreground mb-8 text-sm max-w-[80%]">
              Your story has been received. Our team will review it shortly. Once approved, it will appear in the Community Voices section.
            </p>
            <div className="flex gap-3 w-full">
              <Button variant="outline" onClick={() => setSubmitted(false)} className="flex-1">Submit Another</Button>
              <Button onClick={() => setActiveTab("read") || setSubmitted(false)} className="flex-1">Read Stories</Button>
            </div>
         </div>
      </DialogContent>
    )
  }

  return (
    <DialogContent className="sm:max-w-[800px] h-[80vh] flex flex-col p-0 overflow-hidden">
      <DialogHeader className="p-6 pb-2 shrink-0">
        <DialogTitle className="font-serif text-2xl md:text-3xl">Community Voices</DialogTitle>
        <DialogDescription>
          Read reviews, feedback, and stories from our community, or share your own experience.
        </DialogDescription>
      </DialogHeader>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
        <div className="px-6 pb-4 border-b shrink-0">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="read" className="gap-2"><MessageSquare className="w-4 h-4" /> Read Stories</TabsTrigger>
            <TabsTrigger value="write" className="gap-2"><Plus className="w-4 h-4" /> Share Your Story</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="read" className="flex-1 overflow-hidden m-0 p-0">
          <ScrollArea className="h-full p-6">
            <div className="grid gap-6">
              {approvedStories.length > 0 ? (
                approvedStories.map((story) => (
                  <Card key={story.id} className="bg-card hover:bg-accent/5 transition-colors border-l-4 border-l-primary/50">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{story.author}</h4>
                            <p className="text-xs text-muted-foreground">{story.role} • {story.date}</p>
                          </div>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < (story.rating || 5) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`} 
                            />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed italic mb-4">
                        "{story.content}"
                      </p>

                      {story.image && (
                        <div className="mb-4 rounded-lg overflow-hidden border">
                          <img src={story.image} alt="Story attachment" className="w-full h-48 object-cover" />
                        </div>
                      )}

                      {story.videoLink && (
                        <div className="mb-4 rounded-lg overflow-hidden border aspect-video">
                           <iframe 
                             width="100%" 
                             height="100%" 
                             src={story.videoLink} 
                             title="Story video"
                             frameBorder="0" 
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                             allowFullScreen
                           ></iframe>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p>No stories yet. Be the first to share your experience!</p>
                </div>
              )}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="write" className="flex-1 overflow-y-auto m-0 p-6">
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Jane Doe" value={name} onChange={e => setName(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role (Optional)</Label>
                <Input id="role" placeholder="Volunteer, Donor, etc." value={role} onChange={e => setRole(e.target.value)} />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Rating</Label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star 
                      className={`w-8 h-8 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Your Story / Feedback</Label>
              <Textarea 
                id="content" 
                placeholder="Share your experience, recommendations, or feedback..." 
                className="min-h-[150px]" 
                value={content}
                onChange={e => setContent(e.target.value)}
                required 
              />
            </div>

            <div className="space-y-3">
              <Label>Add Media (Optional)</Label>
              <div className="flex gap-4">
                <Button 
                  type="button" 
                  variant={mediaType === 'image' ? 'default' : 'outline'} 
                  onClick={() => setMediaType(mediaType === 'image' ? 'none' : 'image')}
                  className="gap-2"
                >
                  <ImageIcon className="w-4 h-4" /> Add Image URL
                </Button>
                <Button 
                  type="button" 
                  variant={mediaType === 'video' ? 'default' : 'outline'} 
                  onClick={() => setMediaType(mediaType === 'video' ? 'none' : 'video')}
                  className="gap-2"
                >
                  <Video className="w-4 h-4" /> Add Video Link
                </Button>
              </div>

              {mediaType === 'image' && (
                <Input 
                  placeholder="https://example.com/image.jpg" 
                  value={mediaLink}
                  onChange={e => setMediaLink(e.target.value)}
                />
              )}
              {mediaType === 'video' && (
                <Input 
                  placeholder="https://youtube.com/embed/..." 
                  value={mediaLink}
                  onChange={e => setMediaLink(e.target.value)}
                />
              )}
            </div>

            <Button type="submit" className="w-full h-12 text-lg">Submit Story</Button>
          </form>
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
}
