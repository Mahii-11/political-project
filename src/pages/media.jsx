import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Dialog, DialogContent, DialogHeader } from "../components/ui/dialog";
import {
  Image as ImageIcon,
  Video,
  Quote,
  Download,
  Play,
  FileText,
  Palette,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const photoCategories = ["All", "Campaigns", "Events", "Community"];

const photos = [
  { id: 1, category: "Campaigns", title: "Rally 2024" },
  { id: 2, category: "Events", title: "Annual Convention" },
  { id: 3, category: "Community", title: "Youth Outreach" },
  { id: 4, category: "Campaigns", title: "Door-to-Door Campaign" },
  { id: 5, category: "Events", title: "Leadership Summit" },
  { id: 6, category: "Community", title: "Volunteer Day" },
  { id: 7, category: "Campaigns", title: "Town Hall Meeting" },
  { id: 8, category: "Events", title: "Policy Forum" },
  { id: 9, category: "Community", title: "Community Service" },
];

const videos = [
  {
    id: 1,
    title: "2024 Campaign Launch",
    description: "Official launch of our 2024 election campaign",
    duration: "12:45",
    views: "24K",
    featured: true,
  },
  {
    id: 2,
    title: "Chairman's New Year Address",
    description: "Annual message from party leadership",
    duration: "8:30",
    views: "18K",
    featured: false,
  },
  {
    id: 3,
    title: "Youth Leadership Documentary",
    description: "Stories from our young leaders",
    duration: "25:00",
    views: "32K",
    featured: false,
  },
  {
    id: 4,
    title: "Policy Explained: Healthcare",
    description: "Our vision for accessible healthcare",
    duration: "15:20",
    views: "12K",
    featured: false,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Community Organizer",
    quote:
      "Joining this party changed my life. I found a community that truly cares about making a difference. The training programs helped me develop skills I never knew I had.",
    years: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Youth Wing Leader",
    quote:
      "As a young person, I was skeptical about politics. But this party gave me hope and a platform to voice my generation's concerns. We're building the future together.",
    years: 3,
  },
  {
    id: 3,
    name: "Fatima Ahmed",
    role: "Policy Volunteer",
    quote:
      "The transparency and integrity of this party's leadership convinced me to get involved. Every voice is heard, and every contribution matters.",
    years: 7,
  },
  {
    id: 4,
    name: "Robert Williams",
    role: "Campaign Volunteer",
    quote:
      "I've worked on three campaigns now, and each one has been an incredible experience. The camaraderie among volunteers is unmatched.",
    years: 4,
  },
];

const pressKitItems = [
  {
    title: "Party Logo Pack",
    description: "High-resolution logos in various formats",
    type: "ZIP",
    size: "8.5 MB",
    icon: Palette,
  },
  {
    title: "Brand Guidelines",
    description: "Official colors, fonts, and usage rules",
    type: "PDF",
    size: "3.2 MB",
    icon: FileText,
  },
  {
    title: "Press Release Template",
    description: "Official press release format",
    type: "DOCX",
    size: "0.5 MB",
    icon: FileText,
  },
  {
    title: "Campaign Banners",
    description: "Ready-to-use digital and print banners",
    type: "ZIP",
    size: "15 MB",
    icon: ImageIcon,
  },
];

export default function Media() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const navigateLightbox = (direction) => {
    if (direction === "prev") {
      setLightboxIndex(
        lightboxIndex === 0 ? filteredPhotos.length - 1 : lightboxIndex - 1
      );
    } else {
      setLightboxIndex(
        lightboxIndex === filteredPhotos.length - 1 ? 0 : lightboxIndex + 1
      );
    }
  };

  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Media & Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our photo galleries, videos, success stories, and press
            resources.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="photos" className="space-y-8">
            <TabsList className="flex flex-wrap gap-2">
              <TabsTrigger value="photos" className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> Photos
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="w-4 h-4" /> Videos
              </TabsTrigger>
              <TabsTrigger value="stories" className="flex items-center gap-2">
                <Quote className="w-4 h-4" /> Success Stories
              </TabsTrigger>
              <TabsTrigger value="press" className="flex items-center gap-2">
                <Download className="w-4 h-4" /> Press Kit
              </TabsTrigger>
            </TabsList>

            <TabsContent value="photos">
              <div className="flex flex-wrap gap-2 mb-4">
                {photoCategories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPhotos.map((photo, index) => (
                  <Card
                    key={photo.id}
                    className="overflow-hidden cursor-pointer hover-elevate"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-primary/40" />
                    </div>
                    <CardContent className="p-3">
                      <p className="font-medium text-sm">{photo.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {photo.category}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              {videos.find((v) => v.featured) && (
                <Card className="overflow-hidden mb-4">
                  <div className="grid lg:grid-cols-2">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                        <Play className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col justify-center">
                      <span className="text-xs font-medium text-primary mb-2">
                        FEATURED VIDEO
                      </span>
                      <h3 className="text-2xl font-bold mb-2">
                        {videos.find((v) => v.featured)?.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {videos.find((v) => v.featured)?.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>
                          Duration: {videos.find((v) => v.featured)?.duration}
                        </span>
                        <span>
                          {videos.find((v) => v.featured)?.views} views
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos
                  .filter((v) => !v.featured)
                  .map((video) => (
                    <Card
                      key={video.id}
                      className="overflow-hidden hover-elevate cursor-pointer"
                    >
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <Play className="w-6 h-6 text-primary" />
                        </div>
                        <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-2 py-1 rounded">
                          {video.duration}
                        </span>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-1">{video.title}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {video.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {video.views} views
                        </p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="stories">
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12 flex-shrink-0">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Quote className="w-4 h-4 text-primary" />
                          <span className="text-xs text-muted-foreground">
                            Member for {testimonial.years} years
                          </span>
                        </div>
                        <p className="text-muted-foreground italic mb-4">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="press">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Press Kit</h2>
                <p className="text-muted-foreground">
                  Download official party resources for media and volunteer use.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {pressKitItems.map((item, index) => (
                  <Card key={index} className="hover-elevate cursor-pointer">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.type} • {item.size}
                        </p>
                      </div>
                      <Button size="icon" variant="ghost">
                        <Download className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/95">
          <DialogHeader className="absolute top-4 right-4 z-10">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setLightboxOpen(false)}
              className="text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </Button>
          </DialogHeader>
          <div className="relative aspect-[16/10] flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
              <ImageIcon className="w-24 h-24 text-white/40" />
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="absolute left-4 text-white hover:bg-white/10"
              onClick={() => navigateLightbox("prev")}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-4 text-white hover:bg-white/10"
              onClick={() => navigateLightbox("next")}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          </div>
          <div className="p-4 bg-black text-white text-center">
            <p className="font-medium">
              {filteredPhotos[lightboxIndex]?.title}
            </p>
            <p className="text-sm text-white/60">
              {lightboxIndex + 1} of {filteredPhotos.length}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
