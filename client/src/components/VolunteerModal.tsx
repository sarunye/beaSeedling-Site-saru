import { useState } from "react";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function VolunteerModal() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'details' | 'success'>('details');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setStep('success');
      toast({
        title: "Application Received",
        description: "Thank you for your interest! We will review your application and get back to you soon.",
      });
    }, 2000);
  };

  if (step === 'success') {
    return (
      <DialogContent className="sm:max-w-[425px]">
        <div className="py-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="font-serif text-3xl font-bold mb-2 text-foreground">Thank You!</h2>
          <p className="text-lg font-medium text-primary mb-4">
            We have received your application.
          </p>
          <p className="text-muted-foreground mb-8 text-sm max-w-[80%]">
            Your willingness to serve makes a huge difference. Our team will be in touch via email shortly.
          </p>
          <DialogTrigger asChild>
            <Button className="w-full bg-primary hover:bg-primary/90">Done</Button>
          </DialogTrigger>
        </div>
      </DialogContent>
    );
  }

  return (
    <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="font-serif text-2xl">Volunteer Application</DialogTitle>
        <DialogDescription>
          Join us in making a difference in Marsabit County. Tell us how you'd like to help.
        </DialogDescription>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-4 pt-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="john@example.com" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number (Optional)</Label>
          <Input id="phone" type="tel" placeholder="+254..." />
        </div>

        <div className="space-y-2">
          <Label htmlFor="interest">Area of Interest</Label>
          <select 
            id="interest" 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option>Education Support</option>
            <option>Tree Planting / Environment</option>
            <option>Community Outreach</option>
            <option>Fundraising</option>
            <option>Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Why would you like to volunteer?</Label>
          <Textarea 
            id="message" 
            placeholder="Tell us a bit about yourself and your motivation..." 
            className="min-h-[100px]"
            required
          />
        </div>

        <Button type="submit" className="w-full bg-primary h-12 text-lg font-medium" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </DialogContent>
  );
}
