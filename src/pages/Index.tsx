import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Heart, Monitor, TrendingUp } from "lucide-react";
import healthcareDashboard from "@/assets/healthcare-dashboard.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-subtle-gradient">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-health-gradient rounded-xl shadow-healthcare">
                <Activity className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">
                Nightingale Labs
              </h1>
            </div>

            {/* Mission Statement */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Empowering Better Health Through{" "}
                <span className="bg-health-gradient bg-clip-text text-transparent">
                  Intelligent Monitoring
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                By combining cutting-edge hardware with advanced analytics, we provide 
                hospitals, research labs, and individuals with meaningful insights into 
                vital health data—like heart rate and respiratory rate—via a seamless 
                mobile experience.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                We're committed to turning data into actionable knowledge that supports 
                preventive care, deeper research, and healthier lives.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent rounded-lg">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Real-time Monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent rounded-lg">
                  <Monitor className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Advanced Analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent rounded-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Actionable Insights</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent rounded-lg">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Mobile Experience</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg"
                className="animate-pulse-glow"
              >
                Sign Up for Early Access
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                Login to Dashboard
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 space-y-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Trusted by Healthcare Professionals
              </p>
              <div className="flex items-center space-x-6 text-muted-foreground">
                <span className="text-sm">Research Labs</span>
                <span className="text-sm">•</span>
                <span className="text-sm">Hospitals</span>
                <span className="text-sm">•</span>
                <span className="text-sm">Individual Care</span>
              </div>
            </div>
          </div>

          {/* Right Side - Chart Illustration */}
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-chart-gradient opacity-20 rounded-3xl blur-3xl animate-float"></div>
            
            {/* Main Chart Card */}
            <Card className="relative p-8 bg-background/80 backdrop-blur-xl border-primary/20 shadow-healthcare">
              <div className="space-y-6">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    Live Health Monitoring
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    <span className="text-sm text-muted-foreground">Live</span>
                  </div>
                </div>

                {/* Chart Image */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-primary/10">
                  <img 
                    src={healthcareDashboard} 
                    alt="Healthcare monitoring dashboard showing real-time vital signs"
                    className="w-full h-auto object-cover opacity-90"
                  />
                  
                  {/* Overlay Stats */}
                  <div className="absolute top-4 left-4 space-y-2">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20">
                      <div className="flex items-center space-x-2">
                        <Heart className="h-4 w-4 text-red-500" />
                        <div>
                          <p className="text-xs text-muted-foreground">Heart Rate</p>
                          <p className="text-sm font-semibold">72 BPM</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20">
                      <div className="flex items-center space-x-2">
                        <Activity className="h-4 w-4 text-blue-500" />
                        <div>
                          <p className="text-xs text-muted-foreground">Respiratory</p>
                          <p className="text-sm font-semibold">16 RPM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">99.9%</p>
                    <p className="text-xs text-muted-foreground">Accuracy</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">24/7</p>
                    <p className="text-xs text-muted-foreground">Monitoring</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">Real-time</p>
                    <p className="text-xs text-muted-foreground">Analytics</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;