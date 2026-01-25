
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Download, Share2, Calendar, User, Play } from "lucide-react";

interface ArchiveModalProps {
  item: any;
  type: 'blog' | 'video' | 'research';
}

export function ArchiveModal({ item, type }: ArchiveModalProps) {
  if (!item) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: `Check out this ${type}: ${item.title}`,
        url: window.location.href,
      });
    } else {
      // Fallback
      alert("Link copied to clipboard!");
    }
  };

  return (
    <DialogContent className="max-w-3xl h-[80vh] flex flex-col p-0 overflow-hidden">
      <DialogHeader className="p-6 pb-2 shrink-0">
        <DialogTitle className="font-serif text-2xl md:text-3xl pr-8">{item.title}</DialogTitle>
        <DialogDescription className="flex items-center gap-4 mt-2 text-sm">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
          {item.author && <span className="flex items-center gap-1"><User className="w-3 h-3" /> {item.author}</span>}
          {item.type && <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded text-xs font-medium">{item.type}</span>}
        </DialogDescription>
      </DialogHeader>

      <ScrollArea className="flex-1 p-6 pt-2">
        {type === 'video' && (
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-black mb-6 shadow-lg">
             {item.link ? (
               <iframe 
                 width="100%" 
                 height="100%" 
                 src={item.link} 
                 title={item.title} 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
               ></iframe>
             ) : (
               <div className="w-full h-full flex items-center justify-center text-white/50 flex-col gap-2">
                 <Play className="w-12 h-12" />
                 <p>Video source unavailable in preview</p>
               </div>
             )}
          </div>
        )}

        {type === 'blog' && (
          <div className="prose prose-stone max-w-none dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: item.content || item.excerpt }} />
          </div>
        )}

        {type === 'research' && (
          <div className="space-y-6">
             <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
               <h4 className="font-semibold mb-2">Abstract / Summary</h4>
               <p className="text-muted-foreground">{item.description || "No description available."}</p>
             </div>
             
             {item.type === 'Video' ? (
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-black shadow-lg">
                   <iframe 
                     width="100%" 
                     height="100%" 
                     src={item.link} 
                     title={item.title} 
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen
                   ></iframe>
                </div>
             ) : (
                <div className="flex justify-center py-8">
                  <Button size="lg" className="gap-2">
                    <Download className="w-4 h-4" /> Download Full Report (PDF)
                  </Button>
                </div>
             )}
          </div>
        )}
      </ScrollArea>

      <div className="p-4 border-t bg-muted/20 shrink-0 flex justify-end gap-2">
        <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
          <Share2 className="w-4 h-4" /> Share this {type}
        </Button>
      </div>
    </DialogContent>
  );
}
