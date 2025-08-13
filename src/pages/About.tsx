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
      name: "Arvind Kumar",
      role: "Founder & CEO",
      description: "1st-year Data Science student at IIT Madras from Ranchi, Jharkhand. Passionate about leveraging technology to solve real agricultural challenges.",
      location: "Originally from Ranchi, Jharkhand",
      education: "IIT Madras - Data Science",
    },
    {
      name: "Aman Raj",
      role: "Co-Founder & CTO",
      description: "1st-year Data Science student at IIT Madras from Ranchi, Jharkhand. Focused on building scalable tech solutions for rural farming communities.",
      location: "Originally from Ranchi, Jharkhand", 
      education: "IIT Madras - Data Science",
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
                improve livelihoods. <em>Hafto ka kaam, ganto mein</em> - transforming weeks of work into hours.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As young students from rural India, we understand the challenges farmers face daily. Our mission 
                is simple: make farming easier, faster, and more profitable for rural communities through innovative technology.
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
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To become India's leading agricultural platform that bridges the gap between technology 
                  and traditional farming, creating a sustainable ecosystem where every farmer has access 
                  to the resources they need to thrive.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <em>"Sapno ka startup, kisan ke liye"</em> - A dream startup, for the farmers. We believe 
                  that young minds can create big changes, and we're proving it every day.
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
              Meet Our Young Founders
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Two passionate students from Ranchi, Jharkhand, studying at IIT Madras and working hard to revolutionize 
              agriculture through technology. <em>Choti umar, bade sapne</em> - young age, big dreams!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent-green rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium text-lg">
                    {member.role}
                  </CardDescription>
                  <div className="space-y-1 mt-2">
                    <p className="text-sm text-accent-green font-medium">{member.education}</p>
                    <p className="text-xs text-muted-foreground">{member.location}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Founders Story Section */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent-green/5 rounded-2xl p-8">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Born and raised in Ranchi, Jharkhand, we've seen firsthand the struggles of farming families. 
                As 1st-year Data Science students at IIT Madras, we realized we could use our technical skills 
                to solve real problems that affect millions of farmers across India.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <em>"Padhenge aur desh ke kisano ki madad karenge"</em> - We'll study and help the nation's farmers. 
                That's our promise. Every late night coding session, every line of code we write, is dedicated to 
                making farming easier, faster, and more profitable for rural communities.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-background rounded-full px-4 py-2 border border-primary/20">
                  <span className="font-medium text-primary">🎓 IIT Madras Students</span>
                </div>
                <div className="bg-background rounded-full px-4 py-2 border border-accent-green/20">
                  <span className="font-medium text-accent-green">🌾 Agriculture Tech</span>
                </div>
                <div className="bg-background rounded-full px-4 py-2 border border-secondary-dark/20">
                  <span className="font-medium text-secondary-dark">🚀 Young Innovators</span>
                </div>
              </div>
            </div>
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