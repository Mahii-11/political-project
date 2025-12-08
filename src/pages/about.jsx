import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import {
  Users,
  Target,
  Heart,
  Shield,
  Scale,
  Globe,
  Handshake,
  Award,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const timelineEvents = [
  {
    year: "1985",
    title: "Party Foundation",
    description:
      "United People's Party was established with a vision to unite citizens and promote democratic values.",
  },
  {
    year: "1990",
    title: "First Major Victory",
    description:
      "Won 25 parliamentary seats in our first general election, establishing a strong presence in national politics.",
  },
  {
    year: "2000",
    title: "National Expansion",
    description:
      "Expanded to all 50 districts with over 10,000 registered members across the country.",
  },
  {
    year: "2010",
    title: "Youth Wing Launch",
    description:
      "Established the Youth Leadership Program, training the next generation of political leaders.",
  },
  {
    year: "2020",
    title: "Historic Milestone",
    description:
      "Reached 50,000 active members and implemented 100+ community development projects.",
  },
  {
    year: "2024",
    title: "Digital Transformation",
    description:
      "Launched comprehensive digital platform to engage members and expand outreach globally.",
  },
];

const coreValues = [
  {
    icon: Scale,
    title: "Justice & Equality",
    description:
      "We believe in equal rights and opportunities for all citizens regardless of background.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparency and honesty in all our actions and decisions form the core of our leadership.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "Committed to environmental protection and sustainable development for future generations.",
  },
  {
    icon: Handshake,
    title: "Unity",
    description:
      "Bringing together diverse communities to work towards common goals and shared prosperity.",
  },
  {
    icon: Target,
    title: "Progress",
    description:
      "Driving innovation and modernization while respecting our cultural heritage and traditions.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Putting people first and ensuring no citizen is left behind in our development journey.",
  },
];

const achievements = [
  { icon: Award, value: "45+", label: "Laws Proposed" },
  { icon: Users, value: "50K+", label: "Active Members" },
  { icon: TrendingUp, value: "180+", label: "Projects Completed" },
  { icon: CheckCircle, value: "500+", label: "Communities Served" },
];

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn about our journey, our values, and our commitment to serving
            the people.
          </p>

          {/* 🔗 Navigation Example (Home er moto) */}
          <div className="flex justify-center gap-4 mt-6">
            <Link to="/" className="text-primary underline">
              Go Home
            </Link>
            <Link to="/programs" className="text-primary underline">
              View Programs
            </Link>
            <Link to="/contact" className="text-primary underline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to a national movement, trace our path
              through the decades.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

            <div className="space-y-8 md:space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-3">
                          {event.year}
                        </span>
                        <h3 className="text-xl font-semibold mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our actions and define our commitment to
              the people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leader Message */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Message from Our Leader
            </h2>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary rounded-full" />
              <blockquote className="pl-8 text-lg italic text-muted-foreground">
                "Our party was built on the fundamental belief that every
                citizen deserves a voice in shaping their future..."
              </blockquote>
            </div>

            <div className="flex items-center gap-4 mt-8 pl-8">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                  JD
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-lg">John Davidson</p>
                <p className="text-muted-foreground">Party Chairman</p>
              </div>
            </div>
          </div>

          <Card className="p-8">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
