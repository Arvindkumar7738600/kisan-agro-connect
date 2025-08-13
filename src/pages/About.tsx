import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Users, Target, Award, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Promoting eco-friendly farming practices for a better tomorrow",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong connections between farmers and service providers",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Leveraging technology to solve agricultural challenges",
    },
    {
      icon: Heart,
      title: "Empowerment",
      description: "Supporting farmers with tools and opportunities to thrive",
    },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      description: "Agricultural engineer with 15+ years in farming technology",
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      description: "Expert in rural development and farmer welfare programs",
    },
    {
      name: "Amit Singh",
      role: "Technology Lead",
      description: "Software architect specializing in agricultural applications",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About KisanSeva Plus
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are dedicated to revolutionizing agriculture by connecting farmers with the resources, 
            equipment, and skilled workforce they need to succeed in modern farming.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower farmers across India by providing them with easy access to modern agricultural 
                equipment, skilled labor, and technology-driven solutions that increase productivity and 
                improve livelihoods.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Innovation Driven</h3>
                  <p className="text-muted-foreground">Using technology to solve real farming challenges</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-primary/10 to-accent-green/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's leading agricultural platform that bridges the gap between technology 
                  and traditional farming, creating a sustainable ecosystem where every farmer has access 
                  to the resources they need to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape our commitment to the farming community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team combines agricultural expertise with technological innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent-green rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent-green/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Since our launch, we've helped thousands of farmers improve their productivity and income
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Villages Connected</div>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-accent-green mb-2">₹2Cr+</div>
              <div className="text-muted-foreground">Farmer Income Generated</div>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-secondary-dark mb-2">10,000+</div>
              <div className="text-muted-foreground">Successful Bookings</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;