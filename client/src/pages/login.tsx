import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lock } from "lucide-react";
import logoImage from "@assets/generated_images/seedling_nonprofit_logo_design.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@beaseedling.org" && password === "admin123") {
      // Set a mock auth token
      localStorage.setItem("authToken", "mock-token");
      setLocation("/admin");
    } else {
      setError("Invalid credentials. Try admin@beaseedling.org / admin123");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <img src={logoImage} alt="Logo" className="w-10 h-10 object-contain" />
          </div>
          <CardTitle className="font-serif text-2xl">Admin Portal</CardTitle>
          <CardDescription>Sign in to manage website content</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@beaseedling.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              <Lock className="w-4 h-4 mr-2" /> Sign In
            </Button>
            <div className="text-center mt-4">
              <p className="text-xs text-muted-foreground">
                Demo Credentials:<br />
                User: admin@beaseedling.org<br />
                Pass: admin123
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
