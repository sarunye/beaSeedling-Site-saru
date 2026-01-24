import { useState } from "react";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle2, 
  Loader2, 
  Smartphone, 
  CreditCard, 
  Banknote, 
  Globe, 
  Repeat, 
  Heart, 
  Shield 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { paymentInfo } from "@/data/content";

export function DonateModal() {
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
                <svg viewBox="0 0 80 40" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 28V12L15 12L20 22L25 12L30 12V28H26V17L20 28H19L14 17V28H10Z" fill="currentColor"/>
                  <path d="M36 21H45" stroke="currentColor" strokeWidth="2"/>
                  <path d="M50 12H60C62.7614 12 65 14.2386 65 17V19C65 21.7614 62.7614 24 60 24H54V28H50V12ZM54 20H60C60.5523 20 61 19.5523 61 19V17C61 16.4477 60.5523 16 60 16H54V20Z" fill="currentColor"/>
                </svg>
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
                  <div className="bg-white p-1.5 rounded-md border border-green-100 shrink-0">
                    <svg viewBox="0 0 100 40" className="w-12 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <text x="0" y="30" fontFamily="sans-serif" fontWeight="900" fontSize="32" fill="#000000">M-</text>
                      <text x="45" y="30" fontFamily="sans-serif" fontWeight="900" fontSize="32" fill="#43B02A">PESA</text>
                    </svg>
                  </div>
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
