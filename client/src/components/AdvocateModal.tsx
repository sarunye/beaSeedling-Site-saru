
import { useState } from "react";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Share2, PenTool, Facebook, Twitter, Linkedin, CheckCircle2, Link as LinkIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AdvocateModal() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.origin);
    const text = encodeURIComponent("I support Be a Seedling in their mission to empower communities in Marsabit. Join me in making a difference!");
    
    let shareUrl = "";
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(window.location.origin);
        toast({ title: "Link Copied", description: "Website link copied to clipboard." });
        return;
    }

    if (shareUrl) window.open(shareUrl, '_blank');
  };

  const handleSubmitStory = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Story Submitted",
      description: "Thank you for sharing your voice! We will review your submission.",
    });
  };

  if (submitted) {
    return (
      <DialogContent className="sm:max-w-[425px]">
         <div className="py-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold mb-2 text-foreground">Thank You!</h2>
            <p className="text-muted-foreground mb-8 text-sm max-w-[80%]">
              Your voice matters. By sharing your story, you help us advocate for change.
            </p>
            <Button onClick={() => setSubmitted(false)} className="w-full">Submit Another</Button>
         </div>
      </DialogContent>
    )
  }

  return (
    <DialogContent className="sm:max-w-[500px]">
      <DialogHeader>
        <DialogTitle className="font-serif text-2xl">Become an Advocate</DialogTitle>
        <DialogDescription>
          Spread the word or share your own story to create awareness.
        </DialogDescription>
      </DialogHeader>

      <Tabs defaultValue="share" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="share" className="gap-2"><Share2 className="w-4 h-4" /> Share Our Mission</TabsTrigger>
          <TabsTrigger value="write" className="gap-2"><PenTool className="w-4 h-4" /> Write a Story</TabsTrigger>
        </TabsList>

        <TabsContent value="share" className="space-y-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-24 flex flex-col gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200" onClick={() => handleShare('facebook')}>
              <Facebook className="w-8 h-8" />
              <span>Facebook</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col gap-2 hover:bg-sky-50 hover:text-sky-500 hover:border-sky-200" onClick={() => handleShare('twitter')}>
              <Twitter className="w-8 h-8" />
              <span>Twitter / X</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col gap-2 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200" onClick={() => handleShare('linkedin')}>
              <Linkedin className="w-8 h-8" />
              <span>LinkedIn</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col gap-2 hover:bg-slate-50" onClick={() => handleShare('copy')}>
              <LinkIcon className="w-8 h-8" />
              <span>Copy Link</span>
            </Button>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Click to share a pre-written post about Be a Seedling with your network.
          </p>
        </TabsContent>

        <TabsContent value="write" className="space-y-4 py-2">
          <form onSubmit={handleSubmitStory} className="space-y-4">
            <div className="space-y-2">
              <Label>Your Name</Label>
              <Input placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label>Your Story / Testimonial</Label>
              <Textarea placeholder="Share your experience or why you support this cause..." className="min-h-[120px]" required />
            </div>
            <div className="space-y-2">
              <Label>Upload Photo (Optional)</Label>
              <Input type="file" accept="image/*" />
            </div>
            <Button type="submit" className="w-full">Submit Story</Button>
          </form>
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
}
