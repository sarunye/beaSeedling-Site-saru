import { useState } from "react";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { 
  CheckCircle2, 
  Heart, 
  Banknote, 
  Info,
  AlertCircle
} from "lucide-react";
import { paymentInfo } from "@/data/content";

export function DonateModal() {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [amount, setAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');

  const presetAmounts = [
    { value: '1500', label: 'KES 1,500', impact: 'May help support menstrual hygiene materials for learners' },
    { value: '5000', label: 'KES 5,000', impact: 'May support tree nursery and environmental restoration activities' },
    { value: '10000', label: 'KES 10,000', impact: 'May contribute toward educational materials for vulnerable learners' },
    { value: '25000', label: 'KES 25,000', impact: 'May contribute toward education support for vulnerable learners' },
  ];

  const selectedPreset = presetAmounts.find(p => p.value === amount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  if (step === 'success') {
    return (
      <DialogContent className="sm:max-w-[450px]">
        <div className="py-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="font-serif text-3xl font-bold mb-3 text-foreground">Thank You!</h2>
          <p className="text-lg font-medium text-primary mb-4">
            {amount ? `Your donation of KES ${Number(amount).toLocaleString()}` : 'Your donation'} is appreciated.
          </p>
          <div className="w-full bg-card rounded-2xl border border-border/50 p-5 text-left mb-6">
            <p className="text-sm font-bold mb-3">Next step — make your bank transfer:</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="grid grid-cols-[80px_1fr] gap-x-2">
                <span className="font-medium text-foreground">Bank:</span>
                <span>{paymentInfo.bank.bankName}</span>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-x-2">
                <span className="font-medium text-foreground">Branch:</span>
                <span>{paymentInfo.bank.branch}</span>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-x-2">
                <span className="font-medium text-foreground">Account:</span>
                <span>{paymentInfo.bank.accountName}</span>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-x-2">
                <span className="font-medium text-foreground">Acc No:</span>
                <span className="font-mono">{paymentInfo.bank.accountNumber}</span>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-x-2">
                <span className="font-medium text-foreground">Reference:</span>
                <span>{donorName || 'Your name'}</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-6">
            Please email <strong>beaseedling.mbt@gmail.com</strong> with your transfer confirmation so we can acknowledge your gift.
          </p>
          <div className="w-full space-y-3">
            <Button onClick={() => { setStep('details'); setAmount(''); setDonorName(''); setDonorEmail(''); }} variant="outline" className="w-full rounded-full">
              Make Another Donation
            </Button>
            <DialogTrigger asChild>
              <Button className="w-full bg-primary hover:bg-primary/90 rounded-full">Done</Button>
            </DialogTrigger>
          </div>
        </div>
      </DialogContent>
    );
  }

  return (
    <DialogContent className="sm:max-w-[520px] max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="font-serif text-2xl">Support Our Mission</DialogTitle>
        <DialogDescription>
          Your contribution directly supports communities in Marsabit County. All donations are received via bank transfer.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="space-y-6 pt-2">

        {/* Impact examples */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Choose an amount</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {presetAmounts.map((preset) => (
              <button
                key={preset.value}
                type="button"
                className={`p-4 text-left rounded-2xl border transition-all ${amount === preset.value ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-input hover:border-primary/40 hover:bg-accent'}`}
                onClick={() => setAmount(preset.value)}
              >
                <p className="font-bold text-sm text-foreground">{preset.label}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">{preset.impact}</p>
              </button>
            ))}
          </div>

          <div className="relative">
            <span className="absolute left-4 top-3 text-muted-foreground text-sm font-medium">KES</span>
            <Input
              type="number"
              placeholder="Other amount"
              className="pl-14 h-11 rounded-xl"
              value={presetAmounts.find(p => p.value === amount) ? '' : amount}
              onChange={(e) => setAmount(e.target.value)}
              min="100"
            />
          </div>

          {selectedPreset && (
            <div className="flex items-start gap-2 text-xs text-muted-foreground bg-primary/5 border border-primary/10 rounded-xl p-3">
              <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span><strong>Potential impact:</strong> {selectedPreset.impact}. These are examples of what your donation <em>may</em> contribute toward — not guaranteed specific outputs.</span>
            </div>
          )}
        </div>

        {/* Donor details */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Your details (for acknowledgement)</Label>
          <Input
            type="text"
            placeholder="Your name"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="h-11 rounded-xl"
            required
          />
          <Input
            type="email"
            placeholder="Email address (optional)"
            value={donorEmail}
            onChange={(e) => setDonorEmail(e.target.value)}
            className="h-11 rounded-xl"
          />
        </div>

        {/* Bank Transfer Details */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2 font-semibold text-slate-900 border-b border-slate-200 pb-3 mb-4">
            <Banknote className="h-5 w-5" />
            <span>Bank Transfer Details</span>
          </div>
          <div className="grid grid-cols-[90px_1fr] gap-y-3 gap-x-2 text-sm text-slate-600">
            <span className="font-medium">Bank:</span>
            <span className="text-slate-900">{paymentInfo.bank.bankName}</span>
            <span className="font-medium">Branch:</span>
            <span className="text-slate-900">{paymentInfo.bank.branch}</span>
            <span className="font-medium">Account:</span>
            <span className="text-slate-900">{paymentInfo.bank.accountName}</span>
            <span className="font-medium">Acc No:</span>
            <span className="text-slate-900 font-mono bg-white px-2 py-0.5 rounded border border-slate-200">{paymentInfo.bank.accountNumber}</span>
          </div>
        </div>

        {/* Note about future payment options */}
        <div className="flex items-start gap-2 text-xs text-muted-foreground">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
          <span>
            We currently accept donations via bank transfer only. <strong>Additional digital payment options will be introduced in future.</strong> After transferring, please email us your confirmation at beaseedling.mbt@gmail.com.
          </span>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary h-12 text-base font-medium shadow-lg hover:shadow-xl transition-all rounded-full"
          disabled={!amount || !donorName}
        >
          <Heart className="w-5 h-5 fill-current mr-2" />
          Confirm Donation{amount ? ` of KES ${Number(amount).toLocaleString()}` : ''}
        </Button>
      </form>
    </DialogContent>
  );
}
