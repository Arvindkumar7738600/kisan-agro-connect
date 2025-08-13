import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Clock, Star, Filter, Search, Tractor, Wrench, Droplets, Scissors } from "lucide-react";

const Booking = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("");

  const equipmentCategories = [
    { value: "all", label: "All Equipment" },
    { value: "tractors", label: "Tractors" },
    { value: "harvesters", label: "Harvesters" },
    { value: "irrigation", label: "Irrigation" },
    { value: "plowing", label: "Plowing" },
    { value: "seeding", label: "Seeding" },
  ];

  const equipmentList = [
    {
      id: 1,
      name: "John Deere 5050D Tractor",
      category: "tractors",
      owner: "Ramesh Singh",
      location: "Ludhiana, Punjab",
      distance: "2.5 km",
      price: "₹800/day",
      rating: 4.8,
      reviews: 127,
      image: "🚜",
      features: ["50 HP", "4WD", "Power Steering", "Good Condition"],
      available: true,
    },
    {
      id: 2,
      name: "Mahindra Arjun 605 DI",
      category: "tractors",
      owner: "Suresh Kumar",
      location: "Amritsar, Punjab",
      distance: "5.2 km",
      price: "₹750/day",
      rating: 4.6,
      reviews: 89,
      image: "🚜",
      features: ["60 HP", "Excellent Fuel Efficiency", "Latest Model"],
      available: true,
    },
    {
      id: 3,
      name: "Combine Harvester CH570",
      category: "harvesters",
      owner: "Harvesting Co-op",
      location: "Patiala, Punjab",
      distance: "8.1 km",
      price: "₹2500/day",
      rating: 4.9,
      reviews: 156,
      image: "🌾",
      features: ["High Capacity", "Advanced Technology", "Experienced Operator"],
      available: false,
    },
    {
      id: 4,
      name: "Drip Irrigation System",
      category: "irrigation",
      owner: "AquaTech Solutions",
      location: "Chandigarh",
      distance: "12.3 km",
      price: "₹300/day",
      rating: 4.7,
      reviews: 73,
      image: "💧",
      features: ["Water Efficient", "Complete Setup", "Technical Support"],
      available: true,
    },
    {
      id: 5,
      name: "Cultivator 9-Tyne",
      category: "plowing",
      owner: "Farming Tools Ltd",
      location: "Jalandhar, Punjab",
      distance: "6.7 km",
      price: "₹400/day",
      rating: 4.5,
      reviews: 45,
      image: "🔧",
      features: ["Heavy Duty", "Adjustable Depth", "Well Maintained"],
      available: true,
    },
    {
      id: 6,
      name: "Seed Drill Machine",
      category: "seeding",
      owner: "Modern Farming Co.",
      location: "Bathinda, Punjab",
      distance: "15.2 km",
      price: "₹600/day",
      rating: 4.4,
      reviews: 62,
      image: "🌱",
      features: ["Precision Seeding", "Multiple Crop Types", "Fertilizer Attachment"],
      available: true,
    },
  ];

  const filteredEquipment = equipmentList.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.owner.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesLocation = !selectedLocation || item.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const getIcon = (category: string) => {
    switch (category) {
      case "tractors": return Tractor;
      case "harvesters": return Scissors;
      case "irrigation": return Droplets;
      default: return Wrench;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-accent to-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Equipment Booking
          </h1>
          <p className="text-lg text-muted-foreground">
            Find and rent agricultural equipment near you
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
                placeholder="Search equipment, owner, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {equipmentCategories.map((category) => (
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

      {/* Equipment Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Available Equipment ({filteredEquipment.length})
            </h2>
            <Select defaultValue="distance">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distance">Distance</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEquipment.map((equipment) => {
              const IconComponent = getIcon(equipment.category);
              return (
                <Card key={equipment.id} className={`hover:shadow-lg transition-shadow duration-300 ${
                  !equipment.available ? 'opacity-75' : ''
                }`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg leading-tight">{equipment.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{equipment.owner}</p>
                        </div>
                      </div>
                      <Badge variant={equipment.available ? "default" : "secondary"}>
                        {equipment.available ? "Available" : "Booked"}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{equipment.location}</span>
                      </div>
                      <span className="text-muted-foreground">{equipment.distance}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{equipment.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({equipment.reviews} reviews)</span>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Features:</Label>
                      <div className="flex flex-wrap gap-1">
                        {equipment.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="text-2xl font-bold text-primary">{equipment.price}</div>
                      <Button 
                        disabled={!equipment.available}
                        className="w-24"
                      >
                        {equipment.available ? "Book Now" : "Unavailable"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredEquipment.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No equipment found</h3>
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
              Need Help with Booking?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team is here to assist you with equipment selection and booking
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Get help anytime with our round-the-clock customer support
                </CardDescription>
                <Button variant="outline">Contact Support</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 mx-auto text-accent-green mb-4" />
                <CardTitle>Schedule Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Schedule a visit to inspect equipment before booking
                </CardDescription>
                <Button variant="outline">Schedule Now</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Tractor className="h-12 w-12 mx-auto text-secondary-dark mb-4" />
                <CardTitle>List Your Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Earn money by listing your agricultural equipment
                </CardDescription>
                <Button variant="outline">List Equipment</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;