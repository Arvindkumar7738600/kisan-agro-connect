import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tractor, Users, MapPin, Star, ArrowRight, Leaf, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-agriculture.jpg";

const Home = () => {
  const features = [
    {
      icon: Tractor,
      title: "Equipment Rental",
      description: "Access modern farming equipment and tractors at affordable rates",
      color: "text-accent-green",
    },
    {
      icon: Users,
      title: "Hire Skilled Farmers",
      description: "Connect with experienced farmers and agricultural workers",
      color: "text-primary",
    },
    {
      icon: MapPin,
      title: "Location-based Search",
      description: "Find services and equipment near your location with GPS",
      color: "text-secondary-dark",
    },
    {
      icon: Shield,
      title: "Verified Users",
      description: "All users are KYC verified for safe and secure transactions",
      color: "text-accent-green",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Happy Farmers" },
    { number: "10,000+", label: "Equipment Listed" },
    { number: "1,000+", label: "Cities Covered" },
    { number: "98%", label: "Customer Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent-green/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Agriculture
            <span className="block text-secondary-light">Through Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Connect farmers, equipment owners, and agricultural workers on India's most trusted farming platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/booking">
                <Tractor className="mr-2 h-5 w-5" />
                Rent Equipment
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/farmers">
                <Users className="mr-2 h-5 w-5" />
                Hire Farmers
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need for Smart Farming
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From equipment rental to farmer hiring, we provide comprehensive solutions for modern agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent-green">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of farmers who are already benefiting from our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;