import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star, Clock, Search, Filter, Users, Award, Calendar, Phone } from "lucide-react";

const Farmers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("");

  const skillCategories = [
    { value: "all", label: "All Skills" },
    { value: "crop-farming", label: "Crop Farming" },
    { value: "livestock", label: "Livestock" },
    { value: "equipment", label: "Equipment Operation" },
    { value: "irrigation", label: "Irrigation" },
    { value: "harvesting", label: "Harvesting" },
    { value: "organic", label: "Organic Farming" },
  ];

  const farmersList = [
    {
      id: 1,
      name: "Rajesh Kumar Singh",
      age: 35,
      experience: "12 years",
      location: "Ludhiana, Punjab",
      distance: "3.2 km",
      skills: ["Wheat Farming", "Rice Cultivation", "Tractor Operation"],
      specialization: "crop-farming",
      rating: 4.9,
      reviews: 143,
      rate: "₹800/day",
      languages: ["Hindi", "Punjabi", "English"],
      availability: "Available",
      verified: true,
      description: "Experienced farmer specializing in cereal crops with modern farming techniques.",
    },
    {
      id: 2,
      name: "Suresh Patel",
      age: 42,
      experience: "18 years",
      location: "Amritsar, Punjab",
      distance: "7.5 km",
      skills: ["Organic Farming", "Soil Management", "Pest Control"],
      specialization: "organic",
      rating: 4.8,
      reviews: 89,
      rate: "₹900/day",
      languages: ["Hindi", "Punjabi"],
      availability: "Available",
      verified: true,
      description: "Certified organic farming expert with expertise in sustainable agriculture.",
    },
    {
      id: 3,
      name: "Harpreet Kaur",
      age: 29,
      experience: "8 years",
      location: "Patiala, Punjab",
      distance: "12.1 km",
      skills: ["Vegetable Farming", "Greenhouse Management", "Drip Irrigation"],
      specialization: "irrigation",
      rating: 4.7,
      reviews: 76,
      rate: "₹750/day",
      languages: ["Hindi", "Punjabi", "English"],
      availability: "Busy until March 15",
      verified: true,
      description: "Young agricultural graduate specializing in modern vegetable cultivation.",
    },
    {
      id: 4,
      name: "Ramesh Yadav",
      age: 38,
      experience: "15 years",
      location: "Jalandhar, Punjab",
      distance: "15.3 km",
      skills: ["Cattle Farming", "Dairy Management", "Feed Preparation"],
      specialization: "livestock",
      rating: 4.6,
      reviews: 112,
      rate: "₹700/day",
      languages: ["Hindi", "Punjabi"],
      availability: "Available",
      verified: true,
      description: "Expert in livestock management and dairy farming operations.",
    },
    {
      id: 5,
      name: "Mohinder Singh",
      age: 45,
      experience: "20 years",
      location: "Bathinda, Punjab",
      distance: "18.7 km",
      skills: ["Combine Operation", "Harvesting", "Equipment Maintenance"],
      specialization: "equipment",
      rating: 4.9,
      reviews: 167,
      rate: "₹1200/day",
      languages: ["Hindi", "Punjabi"],
      availability: "Available",
      verified: true,
      description: "Highly skilled equipment operator with expertise in harvesting machinery.",
    },
    {
      id: 6,
      name: "Gurpreet Singh",
      age: 31,
      experience: "10 years",
      location: "Chandigarh",
      distance: "22.4 km",
      skills: ["Cotton Farming", "Crop Rotation", "Market Analysis"],
      specialization: "crop-farming",
      rating: 4.5,
      reviews: 58,
      rate: "₹850/day",
      languages: ["Hindi", "Punjabi", "English"],
      availability: "Available from March 20",
      verified: true,
      description: "Agricultural economics graduate with focus on commercial crop production.",
    },
  ];

  const filteredFarmers = farmersList.filter(farmer => {
    const matchesSearch = farmer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         farmer.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSkill = selectedSkill === "all" || farmer.specialization === selectedSkill;
    const matchesLocation = !selectedLocation || farmer.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    return matchesSearch && matchesSkill && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-accent to-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hire Skilled Farmers
          </h1>
          <p className="text-lg text-muted-foreground">
            Connect with experienced agricultural professionals for your farming needs
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search farmers by name or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Skill Filter */}
            <Select value={selectedSkill} onValueChange={setSelectedSkill}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Specialization" />
              </SelectTrigger>
              <SelectContent>
                {skillCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Location Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Location..."
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="pl-10 w-full lg:w-48"
              />
            </div>

            <Button variant="outline" className="lg:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Farmers Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Available Farmers ({filteredFarmers.length})
            </h2>
            <Select defaultValue="distance">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distance">Distance</SelectItem>
                <SelectItem value="rate-low">Rate: Low to High</SelectItem>
                <SelectItem value="rate-high">Rate: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="experience">Experience</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFarmers.map((farmer) => (
              <Card key={farmer.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-green rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg leading-tight flex items-center gap-2">
                          {farmer.name}
                          {farmer.verified && (
                            <Award className="h-4 w-4 text-accent-green" />
                          )}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Age: {farmer.age} • {farmer.experience} experience
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{farmer.location}</span>
                    </div>
                    <span className="text-muted-foreground">{farmer.distance}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{farmer.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({farmer.reviews} reviews)</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{farmer.description}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {farmer.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Languages:</p>
                    <div className="flex flex-wrap gap-1">
                      {farmer.languages.map((language, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className={`${
                      farmer.availability === "Available" ? "text-accent-green" : "text-muted-foreground"
                    }`}>
                      {farmer.availability}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-primary">{farmer.rate}</div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button size="sm">
                        Hire Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFarmers.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No farmers found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Help Finding the Right Farmer?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team can help you find the perfect agricultural professional for your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Expert Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Let our experts match you with the perfect farmer for your specific needs
                </CardDescription>
                <Button variant="outline">Request Matching</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 mx-auto text-accent-green mb-4" />
                <CardTitle>Schedule Interview</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Schedule interviews with potential farmers before making a decision
                </CardDescription>
                <Button variant="outline">Schedule Now</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-secondary-dark mb-4" />
                <CardTitle>Join as Farmer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Are you a skilled farmer? Join our platform and find work opportunities
                </CardDescription>
                <Button variant="outline">Join Platform</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Farmers;