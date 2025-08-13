import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tractor, Users, MapPin, Wrench, Smartphone, Shield, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Tractor,
      title: "Equipment Rental",
      description: "Access a wide range of modern farming equipment and tractors",
      features: ["Tractors & Harvesters", "Irrigation Systems", "Plowing Equipment", "Seeding Machines"],
      badge: "Most Popular",
      color: "bg-primary",
      link: "/booking"
    },
    {
      icon: Users,
      title: "Farmer Hiring",
      description: "Connect with skilled agricultural workers and farmers",
      features: ["Experienced Farmers", "Seasonal Workers", "Equipment Operators", "Agricultural Experts"],
      badge: "Trusted",
      color: "bg-accent-green",
      link: "/farmers"
    },
  ];

  const additionalServices = [
    {
      icon: MapPin,
      title: "Location-based Search",
      description: "Find services near your location using GPS technology",
    },
    {
      icon: Smartphone,
      title: "Mobile App Support",
      description: "Access all features through our user-friendly mobile application",
    },
    {
      icon: Shield,
      title: "KYC Verification",
      description: "All users are verified for safe and secure transactions",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your needs",
    },
    {
      icon: Wrench,
      title: "Equipment Maintenance",
      description: "Regular maintenance services for optimal equipment performance",
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "All equipment and services are quality checked and rated",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for small farmers",
      features: [
        "Access to equipment listings",
        "Basic farmer profiles",
        "Location-based search",
        "Customer support"
      ],
    },
    {
      name: "Premium",
      price: "₹99/month",
      description: "Best for growing farms",
      features: [
        "Priority equipment booking",
        "Verified farmer profiles",
        "Advanced search filters",
        "24/7 priority support",
        "Booking analytics"
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large agricultural operations",
      features: [
        "Bulk equipment booking",
        "Custom farmer recruitment",
        "Dedicated account manager",
        "API access",
        "Custom integrations"
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive agricultural solutions designed to meet every farmer's needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our primary offerings that form the foundation of modern agricultural support
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {service.badge && (
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                    {service.badge}
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-4`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6" asChild>
                    <Link to={service.link}>
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extra services and features that enhance your farming experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pricing Plans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that best fits your farming needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow duration-300 ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-4">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of farmers who are already benefiting from our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/booking">Start Booking</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;