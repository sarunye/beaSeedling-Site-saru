import { useState } from "react";
import { motion } from "framer-motion";
import { useContent } from "@/context/ContentContext";
import { 
  Sprout, 
  Heart, 
  Users, 
  TreePine, 
  BookOpen, 
  Shield, 
  Globe, 
  Mail, 
  Menu, 
  X,
  ChevronRight,
  Leaf,
  HandHeart,
  GraduationCap,
  TreeDeciduous,
  Play,
  FileText,
  Newspaper,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Clock,
  CheckCircle2,
  Calendar,
  MapPin,
  ArrowRight,
  CreditCard,
  Smartphone,
  Banknote,
  Loader2,
  Repeat,
  CalendarDays
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  teamMembers, 
  upcomingProjects, 
  completedProjects, 
  researchItems, 
  images,
  contactInfo,
  paymentInfo
} from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

import { Textarea } from "@/components/ui/textarea";

function VolunteerModal() {
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

function DonateModal() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'details' | 'processing' | 'success'>('details');
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');

  const presetAmounts = [
    { value: '500', label: 'KES 500' },
    { value: '1000', label: 'KES 1,000' },
    { value: '2500', label: 'KES 2,500' },
    { value: '5000', label: 'KES 5,000' },
  ];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStep('processing');
    
    // Simulate payment prompt/processing
    setTimeout(() => {
      setLoading(false);
      setStep('success');
      toast({
        title: "Payment Initiated",
        description: paymentMethod === 'mpesa' 
          ? `Please check your phone for the M-Pesa PIN prompt for KES ${amount || 'your donation'}.` 
          : "Processing your secure donation.",
      });
    }, 2500);
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
            Your donation of KES {amount} has been initiated.
          </p>
          <p className="text-muted-foreground mb-8 text-sm max-w-[80%]">
            Your support helps Be a Seedling grow opportunities in Marsabit. 
            A receipt has been sent to your contact details.
          </p>
          <div className="w-full space-y-3">
            <Button onClick={() => { setStep('details'); setAmount(''); }} variant="outline" className="w-full">
              Make Another Donation
            </Button>
            <DialogTrigger asChild>
              <Button className="w-full bg-primary hover:bg-primary/90">Done</Button>
            </DialogTrigger>
          </div>
        </div>
      </DialogContent>
    );
  }

  return (
    <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="font-serif text-2xl">Support Our Mission</DialogTitle>
        <DialogDescription>
          Your contribution directly impacts lives in Marsabit County.
        </DialogDescription>
      </DialogHeader>
      
      <form onSubmit={handleDonate} className="space-y-6 pt-2">
        {/* Frequency Toggle */}
        <div className="flex bg-muted p-1 rounded-lg">
          <button
            type="button"
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${frequency === 'one-time' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            onClick={() => setFrequency('one-time')}
          >
            One-Time
          </button>
          <button
            type="button"
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all flex items-center justify-center gap-2 ${frequency === 'monthly' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            onClick={() => setFrequency('monthly')}
          >
            <Repeat className="w-3 h-3" /> Monthly
          </button>
        </div>

        {/* Amount Selection */}
        <div className="space-y-3">
          <Label>Select Amount</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {presetAmounts.map((preset) => (
              <button
                key={preset.value}
                type="button"
                className={`py-2 px-3 text-sm font-medium rounded-lg border transition-all ${amount === preset.value ? 'border-primary bg-primary/5 text-primary ring-1 ring-primary' : 'border-input hover:border-primary/50 hover:bg-accent'}`}
                onClick={() => setAmount(preset.value)}
              >
                {preset.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-muted-foreground">KES</span>
            <Input 
              type="number" 
              placeholder="Other Amount" 
              className="pl-12" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min="10"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Label className="text-base font-semibold">Select Payment Method</Label>
          <Tabs defaultValue="mpesa" onValueChange={setPaymentMethod} className="w-full">
            <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-muted/50 gap-1">
              <TabsTrigger value="mpesa" className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                <Smartphone className="h-5 w-5" />
                <span className="text-xs font-medium">M-Pesa</span>
              </TabsTrigger>
              <TabsTrigger value="card" className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                <CreditCard className="h-5 w-5" />
                <span className="text-xs font-medium">Card</span>
              </TabsTrigger>
              <TabsTrigger value="bank" className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                <Banknote className="h-5 w-5" />
                <span className="text-xs font-medium">Bank</span>
              </TabsTrigger>
              <TabsTrigger value="paypal" className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                <Globe className="h-5 w-5" />
                <span className="text-xs font-medium">PayPal</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="pt-6 px-1">
              {/* M-Pesa Content */}
              <TabsContent value="mpesa" className="m-0 space-y-4 animate-in fade-in duration-300">
                <div className="grid gap-2">
                  <Label htmlFor="phone">M-Pesa Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="0712 345 678" required pattern="^07\d{8}$|^01\d{8}$|^\+254\d{9}$" className="h-11" />
                </div>
                <div className="bg-green-50/50 p-4 rounded-lg border border-green-100 flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium text-green-900">Push Notification Payment</p>
                    <p className="text-green-800/80 mt-1">We'll send a prompt to your phone. Enter your M-Pesa PIN to complete the donation.</p>
                    {paymentInfo.mpesa.paybill && (
                       <p className="text-xs text-green-700 mt-2 font-mono bg-green-100/50 inline-block px-2 py-1 rounded">Paybill: {paymentInfo.mpesa.paybill}</p>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Card Content */}
              <TabsContent value="card" className="m-0 space-y-5 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 mb-2">
                   {/* Official Card Logos */}
                   <svg className="h-8" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect width="48" height="32" rx="4" fill="white" stroke="#E2E8F0"/>
                     <path d="M19.9687 7.99976H23.0907L21.1347 23.9998H18.0127L19.9687 7.99976Z" fill="#2566AF"/>
                     <path d="M13.248 8.2131C13.024 8.0531 12.28 7.94643 11.4133 7.94643C9.78665 7.94643 8.63998 8.82643 8.66665 10.8798C8.69332 12.3731 10.0266 13.2264 11.04 13.7331C12.08 14.2398 12.4266 14.5598 12.4266 15.0664C12.4266 15.8664 11.4933 16.2131 10.6133 16.2131C9.09332 16.2131 8.21332 15.8131 7.51998 15.4931L6.79998 18.8798C7.73332 19.3064 9.46665 19.6531 11.0933 19.6798C14.6933 19.6798 17.0666 17.8931 17.0933 15.1731C17.12 13.5731 16.1333 12.6931 14.88 12.0798C13.7066 11.4931 13.3333 11.2531 13.3333 10.7464C13.3333 10.1864 13.9466 9.94643 14.5866 9.94643C15.3866 9.91976 16.5866 10.1064 17.6533 10.6131L18.32 7.78643C17.44 7.46643 16.32 7.22643 14.9333 7.22643L13.248 8.2131Z" fill="#2566AF"/>
                     <path d="M26.2667 15.7064C26.4533 16.8531 27.2 19.6531 27.2 19.6531H30.9333C30.9333 19.6531 29.5733 13.0398 29.2 11.3864C29.04 10.6931 28.88 10.3731 28.48 9.9731C28.08 9.62643 27.2 9.27976 25.92 9.0931L26.2667 15.7064Z" fill="#2566AF"/>
                     <path d="M37.7867 7.99976H34.6667C33.6 7.99976 32.8533 8.31976 32.4533 9.2531L27.7067 20.4798L27.68 20.3464L24.5067 7.99976H21.28L25.8667 23.9998H29.0667L37.7867 7.99976Z" fill="#2566AF"/>
                   </svg>
                   <svg className="h-8" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect width="48" height="32" rx="4" fill="white" stroke="#E2E8F0"/>
                     <path d="M19.2 24H15.2L17.2 12H21.2L19.2 24Z" fill="#FF5F00"/>
                     <path d="M26.4 24H22.4L24.4 12H28.4L26.4 24Z" fill="#EB001B"/>
                     <path d="M36.4 12H32.4C31.4 12 30.6 12.4 30.2 13.2L26.4 24H30.4L31.2 21.6H36L36.8 24H40.4L36.4 12ZM32.4 18.4L33.6 14.8H34.4L35.2 18.4H32.4Z" fill="#F79E1B"/>
                     <path d="M13.2 24H9.2L13.2 12H18.8C20.8 12 22 13 22 15.2C22 17.6 20.4 19.2 18.4 19.2H14.8L13.2 24ZM16.4 16.4H17.6C18.2 16.4 18.6 16 18.6 15.4C18.6 14.8 18.2 14.4 17.6 14.4H17L16.4 16.4Z" fill="#FF5F00"/>
                   </svg>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input id="card-number" placeholder="0000 0000 0000 0000" className="pl-10 h-11 font-mono" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" className="h-11 font-mono" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVV/CVC2</Label>
                      <Input id="cvc" placeholder="123" maxLength={4} className="h-11 font-mono" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="card-name">Cardholder Name</Label>
                    <Input id="card-name" placeholder="Name as it appears on card" className="h-11" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="card-alias" className="flex items-center gap-2">
                      Card Alias <span className="text-xs font-normal text-muted-foreground">(Optional)</span>
                    </Label>
                    <Input id="card-alias" placeholder="e.g. My Personal Card" className="h-11" />
                  </div>
                </div>
              </TabsContent>

              {/* Bank Content */}
              <TabsContent value="bank" className="m-0 space-y-4 animate-in fade-in duration-300">
                <div className="grid gap-2">
                  <Label htmlFor="bank-email">Email for Receipt</Label>
                  <Input id="bank-email" type="email" placeholder="your@email.com" required className="h-11" />
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-sm space-y-4 shadow-sm">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 border-b border-slate-200 pb-3">
                    <Banknote className="h-5 w-5" />
                    <span>Bank Transfer Details</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-y-3 gap-x-2 text-slate-600">
                    <span className="font-medium">Bank:</span> <span className="text-slate-900">{paymentInfo.bank.bankName}</span>
                    <span className="font-medium">Branch:</span> <span className="text-slate-900">{paymentInfo.bank.branch}</span>
                    <span className="font-medium">Account:</span> <span className="text-slate-900">{paymentInfo.bank.accountName}</span>
                    <span className="font-medium">Acc No:</span> <span className="text-slate-900 font-mono bg-white px-2 py-0.5 rounded border">{paymentInfo.bank.accountNumber}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Use your name or email as the transaction reference.
                </p>
              </TabsContent>

              {/* PayPal Content */}
              <TabsContent value="paypal" className="m-0 space-y-6 animate-in fade-in duration-300 text-center py-4">
                <div className="mx-auto mb-4">
                  {/* Official PayPal Logo */}
                  <svg className="h-12 mx-auto" viewBox="0 0 124 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.211 13.344C46.211 13.344 46.257 13.344 46.303 13.344C50.287 13.344 52.607 15.344 52.287 18.694C51.967 21.994 49.367 24.344 45.707 24.344H42.757L41.607 31.644L41.511 32.244H37.011H36.965L37.057 31.644L39.957 13.344H46.211ZM42.257 20.594H44.607C46.757 20.594 47.757 19.544 47.907 18.244C48.057 16.944 47.057 16.294 45.207 16.294H42.957L42.257 20.594ZM103.711 13.344C103.711 13.344 103.757 13.344 103.803 13.344C107.787 13.344 110.107 15.344 109.787 18.694C109.467 21.994 106.867 24.344 103.207 24.344H100.257L98.007 38.694H93.457L96.357 20.394H93.407L92.257 27.694L92.161 28.294H87.661H87.615L87.753 27.694L90.653 9.394H103.711ZM99.757 20.594H102.107C104.257 20.594 105.257 19.544 105.407 18.244C105.557 16.944 104.557 16.294 102.707 16.294H100.457L99.757 20.594ZM11.857 13.344H18.111C18.111 13.344 18.157 13.344 18.203 13.344C22.187 13.344 24.507 15.344 24.187 18.694C23.867 21.994 21.267 24.344 17.607 24.344H14.657L12.357 38.694H7.807L11.857 13.344ZM14.157 20.594H16.507C18.657 20.594 19.657 19.544 19.807 18.244C19.957 16.944 18.957 16.294 17.107 16.294H14.857L14.157 20.594ZM87.753 27.694L87.707 27.994L87.753 27.694ZM37.057 31.644L37.011 31.944L37.057 31.644ZM77.757 13.344H73.307L69.257 38.694H73.807L75.607 27.244H79.257C82.907 27.244 85.807 25.744 86.407 21.794C86.457 21.494 86.507 21.144 86.507 20.794C86.757 16.294 83.807 13.344 77.757 13.344ZM77.057 23.494H75.007L76.007 17.094H77.657C79.607 17.094 80.857 18.044 80.607 20.194C80.407 22.394 79.057 23.494 77.057 23.494ZM33.957 13.344H29.507L25.457 38.694H30.007L31.807 27.244H35.457C39.107 27.244 42.007 25.744 42.607 21.794C42.657 21.494 42.707 21.144 42.707 20.794C42.957 16.294 40.007 13.344 33.957 13.344ZM33.257 23.494H31.207L32.207 17.094H33.857C35.807 17.094 37.057 18.044 36.807 20.194C36.607 22.394 35.257 23.494 33.257 23.494ZM68.607 13.344H64.057L61.757 24.344L59.407 13.344H54.707L59.357 33.344L56.907 38.694H61.657L68.607 13.344Z" fill="#003087"/>
                    <path d="M68.607 13.344H64.057L61.757 24.344L59.407 13.344H54.707L59.357 33.344L56.907 38.694H61.657L68.607 13.344Z" fill="#009CDE"/>
                    <path d="M64.057 13.344L61.757 24.344L59.407 13.344H54.707L59.357 33.344L56.907 38.694H61.657L68.607 13.344H64.057Z" fill="#003087"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Pay with PayPal</h4>
                  <p className="text-sm text-muted-foreground max-w-[80%] mx-auto">
                    You will be redirected to PayPal to complete your secure donation.
                  </p>
                </div>
                <Button variant="outline" type="button" className="w-full h-11 border-blue-200 hover:bg-blue-50 text-blue-700" onClick={() => window.open('https://paypal.com', '_blank')}>
                  Proceed to PayPal
                </Button>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <Button type="submit" className="w-full bg-primary h-12 text-lg font-medium shadow-lg hover:shadow-xl transition-all" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            <span className="flex items-center gap-2">
              <Heart className="w-5 h-5 fill-current" />
              Donate {amount ? `KES ${amount}` : ''} {frequency === 'monthly' ? 'Monthly' : ''}
            </span>
          )}
        </Button>
        
        <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
          <Shield className="w-3 h-3" /> Secure SSL Encrypted Transaction
        </p>
      </form>
    </DialogContent>
  );
}

export default function Home() {
  const { videos, blogs } = useContent();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [getInvolvedOpen, setGetInvolvedOpen] = useState(false);
  const [sponsorModalOpen, setSponsorModalOpen] = useState(false);
  const [selectedSponsorship, setSelectedSponsorship] = useState("");

  const handleInvolvementClick = (option: any) => {
    if (option.title.includes("Sponsor")) {
      setSelectedSponsorship(option.title);
      setSponsorModalOpen(true);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Programmes", href: "#programmes" },
    { name: "Projects", href: "#projects" },
    { name: "Archive", href: "#archive" },
    { name: "Contact", href: "#contact" },
  ];

  const archiveItems = {
    videos: videos,
    research: researchItems,
    blog: blogs,
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: contactInfo.socials.facebook, color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, url: contactInfo.socials.instagram, color: "hover:text-pink-600" },
    { name: "Twitter", icon: Twitter, url: contactInfo.socials.twitter, color: "hover:text-sky-500" },
    { name: "YouTube", icon: Youtube, url: contactInfo.socials.youtube, color: "hover:text-red-600" },
    { name: "LinkedIn", icon: Linkedin, url: contactInfo.socials.linkedin, color: "hover:text-blue-700" },
  ];

  const programmes = [
    {
      icon: GraduationCap,
      title: "Supporting Students",
      description: "We provide financial and material support to students struggling to afford school, including fees, supplies, and necessary materials."
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "We organize meetings and events to encourage students to excel, emphasizing education's importance for future success."
    },
    {
      icon: Shield,
      title: "Protecting Girls",
      description: "We work to protect girls from gender-based violence, FGM, early marriage, and provide menstrual hygiene education."
    },
    {
      icon: Globe,
      title: "Education Advocacy",
      description: "We advocate for every child's right to education, training leaders and adolescents on their rights and protections."
    },
    {
      icon: TreeDeciduous,
      title: "Environmental Conservation",
      description: "We advocate for environmental conservation through training, events, and forest rehabilitation projects."
    },
    {
      icon: HandHeart,
      title: "Youth Training",
      description: "We offer livelihood skills training for youth who have discontinued schooling, focusing on sustainable income generation."
    }
  ];

  const values = [
    { icon: Heart, title: "Compassion", description: "Fostering empathy and understanding" },
    { icon: Shield, title: "Integrity", description: "Upholding honesty and transparency" },
    { icon: Users, title: "Collaboration", description: "Working together towards common goals" },
    { icon: Leaf, title: "Sustainability", description: "Ensuring lasting positive impact" }
  ];

  const involvementOptions = [
    {
      title: "Sponsor a Student",
      description: "Help a victim of violence or poverty get the education and support they need to thrive.",
      action: "Sponsor Now"
    },
    {
      title: "Sponsor a Tree",
      description: "Help us restore our environment by sponsoring a tree or contributing to forest rehabilitation.",
      action: "Plant Hope"
    },
    {
      title: "Volunteer",
      description: "Join our team to organize events, fundraise, and provide direct support to communities.",
      action: "Join Us"
    },
    {
      title: "Partner With Us",
      description: "Organizations and institutions can collaborate on projects or share resources.",
      action: "Partner"
    }
  ];

  return (
    <div className="min-h-screen bg-background" id="home">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" className="flex items-center gap-2" data-testid="link-logo">
              <img src={images.logo} alt="Be a Seedling" className="h-10 w-10 object-contain" />
              <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                Be a Seedling
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`link-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90" data-testid="button-donate-nav">
                    Donate
                  </Button>
                </DialogTrigger>
                <DonateModal />
              </Dialog>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-primary" data-testid="button-donate-mobile">
                  Donate
                </Button>
              </DialogTrigger>
              <DonateModal />
            </Dialog>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="A seedling sprouting in warm sunlight"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-primary-foreground/80 text-sm md:text-base font-medium tracking-wide uppercase mb-4"
            >
              Non-Profit Organization
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Planting Hope,{" "}
              <span className="text-green-400">Growing Dreams</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            >
              Be a Seedling empowers underprivileged communities through education 
              and environmental conservation, fostering equity and advocating for a better world.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Dialog open={getInvolvedOpen} onOpenChange={setGetInvolvedOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-lg px-8"
                    data-testid="button-get-involved"
                  >
                    Get Involved
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl text-center">Join Our Mission</DialogTitle>
                    <DialogDescription className="text-center">
                      Choose how you would like to contribute to the Be a Seedling community in Marsabit.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="hover:border-primary cursor-pointer transition-all hover:bg-primary/5 border-2">
                          <CardContent className="pt-6 text-center space-y-2">
                            <Heart className="h-8 w-8 mx-auto text-primary" />
                            <h3 className="font-bold">Donate</h3>
                            <p className="text-xs text-muted-foreground">Support our projects with a financial contribution</p>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DonateModal />
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="hover:border-primary cursor-pointer transition-all hover:bg-primary/5 border-2">
                          <CardContent className="pt-6 text-center space-y-2">
                            <Users className="h-8 w-8 mx-auto text-primary" />
                            <h3 className="font-bold">Volunteer</h3>
                            <p className="text-xs text-muted-foreground">Join our team on the ground in Marsabit</p>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <VolunteerModal />
                    </Dialog>

                    <Card 
                      className="hover:border-primary cursor-pointer transition-all hover:bg-primary/5 border-2"
                      onClick={() => {
                        setGetInvolvedOpen(false);
                        setTimeout(() => {
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                    >
                      <CardContent className="pt-6 text-center space-y-2">
                        <Mail className="h-8 w-8 mx-auto text-primary" />
                        <h3 className="font-bold">Collaborate</h3>
                        <p className="text-xs text-muted-foreground">Share suggestions or explore partnerships</p>
                      </CardContent>
                    </Card>

                    <Card 
                      className="hover:border-primary cursor-pointer transition-all hover:bg-primary/5 border-2"
                      onClick={() => {
                        setGetInvolvedOpen(false);
                        setTimeout(() => {
                          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                    >
                      <CardContent className="pt-6 text-center space-y-2">
                        <Globe className="h-8 w-8 mx-auto text-primary" />
                        <h3 className="font-bold">Advocate</h3>
                        <p className="text-xs text-muted-foreground">Help us spread the word about our cause</p>
                      </CardContent>
                    </Card>
                  </div>
                </DialogContent>
              </Dialog>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8"
                data-testid="button-learn-more"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 md:py-32 bg-card grain" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Welcome
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Growing Opportunities for Underprivileged Individuals
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Be a Seedling is a non-profit organization that provides community-based 
                  programming, education, capacity building, environmental conservation and 
                  advocacy for underprivileged individuals and communities.
                </p>
                <p>
                  We believe that everyone deserves the opportunity to reach their full 
                  potential, regardless of their circumstances. We are committed to making 
                  a difference in the lives of those who are most in need.
                </p>
                <p className="font-medium text-foreground">
                  Together, we can make a difference.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={images.children}
                  alt="Children learning together"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <p className="font-serif text-3xl font-bold">1000+</p>
                <p className="text-sm opacity-90">Lives Impacted</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div variants={fadeUp}>
              <Card className="h-full bg-primary text-primary-foreground border-0 overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="opacity-90 leading-relaxed">
                    Be a Seedling empowers underprivileged communities through education 
                    and environmental conservation, fostering equity and advocating for a better world.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <Card className="h-full bg-secondary text-secondary-foreground border-0 overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="opacity-90 leading-relaxed">
                    We envision a future where all individuals have equal access to education, 
                    resources, and a healthy environment, enabling them to thrive and contribute 
                    positively to society.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h3 variants={fadeUp} className="font-serif text-2xl md:text-3xl font-bold text-center mb-12">
              Our Values
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div key={value.title} variants={fadeUp}>
                  <Card className="h-full text-center bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                      </div>
                      <h4 className="font-serif text-xl font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="py-20 md:py-32 bg-card grain" id="programmes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              What We Do
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Our Programmes
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Changing lives one child at a time through comprehensive support, 
              education, and environmental stewardship.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {programmes.map((programme, index) => (
              <motion.div key={programme.title} variants={fadeUp}>
                <Card className="h-full bg-background hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <programme.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3">{programme.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{programme.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 md:py-32 bg-background" id="involved">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <motion.div variants={fadeUp} className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={images.treePlanting}
                  alt="Community tree planting event"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                Make an Impact
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Get Involved
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Join us in our mission to create a more just and equitable world. 
                There are many ways to contribute, whether through volunteering, 
                donating, or simply spreading the word about our work.
              </p>
              
              <div className="space-y-4">
                {involvementOptions.map((option, index) => (
                  <Card 
                    key={option.title} 
                    className="bg-card hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50"
                    onClick={() => handleInvolvementClick(option)}
                  >
                    <CardContent className="p-5 flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{option.title}</h4>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="shrink-0 text-primary hover:text-primary hover:bg-primary/10"
                      >
                        {option.action}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Dialog open={sponsorModalOpen} onOpenChange={setSponsorModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-center">{selectedSponsorship}</DialogTitle>
            <DialogDescription className="text-center">
              Choose how you would like to proceed with your sponsorship.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="hover:border-primary cursor-pointer transition-all hover:bg-primary/5 border-2">
                  <CardContent className="pt-6 text-center space-y-2">
                    <Heart className="h-8 w-8 mx-auto text-primary" />
                    <h3 className="font-bold">Donate Now</h3>
                    <p className="text-xs text-muted-foreground">Make a direct financial contribution via M-Pesa, Card or Bank</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DonateModal />
            </Dialog>

                      <Card 
                      className="hover:border-primary cursor-pointer transition-all hover:bg-primary/5 border-2"
                      onClick={() => {
                        setSponsorModalOpen(false);
                        setTimeout(() => {
                          window.location.href = `mailto:${contactInfo.email}?subject=Inquiry regarding ${selectedSponsorship}`;
                        }, 100);
                      }}
                    >
                      <CardContent className="pt-6 text-center space-y-2">
                        <Mail className="h-8 w-8 mx-auto text-primary" />
                        <h3 className="font-bold">Contact Us</h3>
                        <p className="text-xs text-muted-foreground">Send us an email to request more details about sponsorship</p>
                      </CardContent>
                    </Card>
          </div>
        </DialogContent>
      </Dialog>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-card grain" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Our People
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Dedicated individuals working tirelessly to plant seeds of hope and change.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member: any) => (
              <motion.div key={member.name} variants={fadeUp} className={member.featured ? "sm:col-span-2 lg:col-span-1" : ""}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden bg-background hover:shadow-xl transition-all duration-300 group cursor-pointer border-none shadow-sm">
                      <div className="aspect-square overflow-hidden relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white text-sm font-medium flex items-center gap-2">
                            View Profile <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                      <div className="p-4 bg-background">
                        <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{member.name}</h3>
                        <p className="text-muted-foreground text-xs">{member.role}</p>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl overflow-hidden p-0 border-none bg-background">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="aspect-square md:aspect-auto h-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <DialogHeader>
                          <DialogTitle className="font-serif text-3xl font-bold mb-1">{member.name}</DialogTitle>
                          <p className="text-primary font-medium text-lg mb-6">{member.role}</p>
                        </DialogHeader>
                        <div className="space-y-4">
                          {member.bio && (
                            <p className="text-muted-foreground text-sm leading-relaxed italic border-l-4 border-primary/20 pl-4">
                              "{member.bio}"
                            </p>
                          )}
                          {member.email && (
                            <div className="pt-4 border-t border-border">
                              <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Contact</p>
                              <a href={`mailto:${member.email}`} className="text-primary hover:underline flex items-center gap-2 text-sm">
                                <Mail className="h-4 w-4" />
                                {member.email}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 md:py-32 bg-background" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6"
            >
              Our Work
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Projects
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Upcoming Projects */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Clock className="h-6 w-6 text-secondary" />
                <h3 className="font-serif text-2xl font-bold">Upcoming Projects</h3>
              </motion.div>
              <div className="space-y-4">
                {upcomingProjects.map((project) => (
                  <motion.div key={project.title} variants={fadeUp}>
                    <Card className="bg-card hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {project.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {project.location}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Completed Projects */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="font-serif text-2xl font-bold">Completed Projects</h3>
              </motion.div>
              <div className="space-y-4">
                {completedProjects.map((project) => (
                  <motion.div key={project.title} variants={fadeUp}>
                    <Card className="bg-card hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                        <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {project.impact}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-20 md:py-32 bg-card grain" id="archive">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Resources
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Archive
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Explore our videos, research, and stories from the field.
            </motion.p>
          </motion.div>

          {/* Videos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <Play className="h-6 w-6 text-primary" />
              <h3 className="font-serif text-2xl font-bold">Videos</h3>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {archiveItems.videos.map((video) => (
                <motion.div key={video.title} variants={fadeUp}>
                  <Card className="overflow-hidden bg-background hover:shadow-xl transition-all cursor-pointer group">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                          <Play className="h-6 w-6 text-primary fill-primary ml-1" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                        {video.duration}
                      </span>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{video.title}</h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research & Blog */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Research */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <FileText className="h-6 w-6 text-secondary" />
                <h3 className="font-serif text-2xl font-bold">Research & Reports</h3>
              </motion.div>
              <div className="space-y-3">
                {archiveItems.research.map((item) => (
                  <motion.div key={item.title} variants={fadeUp}>
                    <Card className="bg-background hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center">
                            <FileText className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{item.title}</h4>
                            <p className="text-xs text-muted-foreground">{item.type} • {item.date}</p>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Blog */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Newspaper className="h-6 w-6 text-primary" />
                <h3 className="font-serif text-2xl font-bold">Blog</h3>
              </motion.div>
              <div className="space-y-3">
                {archiveItems.blog.map((post) => (
                  <motion.div key={post.title} variants={fadeUp}>
                    <Card className="bg-background hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">{post.date}</p>
                        <h4 className="font-medium mb-1">{post.title}</h4>
                        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <Sprout className="h-12 w-12 mx-auto opacity-50" strokeWidth={1} />
            </motion.div>
            <motion.blockquote 
              variants={fadeUp}
              className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8 italic"
            >
              "When I was given away by my parents, Be a Seedling became my home. 
              I ran to the chief's office where I was connected to Be a Seedling. 
              They connected me to an education scholarship. Now I have completed my High School."
            </motion.blockquote>
            <motion.p variants={fadeUp} className="text-lg opacity-80">
              — A Seedling Graduate
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-card grain" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Contact Us
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-muted-foreground max-w-xl mx-auto mb-12"
            >
              Have questions or want to learn more about how you can help? 
              Reach out to us today.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-lg text-foreground hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-6 w-6" />
                {contactInfo.email}
              </a>
            </motion.div>

            {/* Social Media Links */}
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}
                    data-testid={`link-social-${social.name.toLowerCase()}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90" data-testid="button-donate-footer">
                    Donate Now
                  </Button>
                </DialogTrigger>
                <DonateModal />
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" data-testid="button-volunteer">
                    Volunteer Application
                  </Button>
                </DialogTrigger>
                <VolunteerModal />
              </Dialog>
              <Button size="lg" variant="outline" data-testid="button-brochure">
                Download Brochure
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src={images.logo} alt="Be a Seedling" className="h-8 w-8 object-contain" />
              <span className="font-serif text-lg font-semibold text-background">
                Be a Seedling
              </span>
            </div>
            <p className="text-sm text-center md:text-left">
              ©2025 by Be a Seedling. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/60 hover:text-background transition-colors"
                    data-testid={`link-footer-${social.name.toLowerCase()}`}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <div className="h-4 w-px bg-background/20" />
              <a 
                href="/login" 
                className="text-xs text-background/40 hover:text-background transition-colors"
              >
                Admin
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
