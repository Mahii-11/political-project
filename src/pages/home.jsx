import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { AnimatedCounter } from "../components/animated-counter";
import heroImage from "../assets/politicalImage.png";
import {
  Users,
  Target,
  Heart,
  Handshake,
  ChevronRight,
  Calendar,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Lightbulb,
  Globe,
} from "lucide-react";

const stats = [
  { label: "Active Members", value: 50000, suffix: "+" },
  { label: "Campaigns", value: 150, suffix: "" },
  { label: "Volunteers", value: 12000, suffix: "+" },
  { label: "Communities Served", value: 500, suffix: "+" },
];

const missionItems = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To unite citizens under a common vision of progress, equality, and sustainable development for all.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "A nation where every citizen has equal opportunity to thrive and contribute to society.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, transparency, and unwavering commitment to serving the people's interests.",
  },
];

const newsArticles = [
  {
    id: "1",
    title: "Youth Leadership Program Launches Nationwide",
    excerpt:
      "Our new initiative aims to train 10,000 young leaders across the country by 2025.",
    date: "Dec 5, 2024",
    category: "Programs",
  },
  {
    id: "2",
    title: "Community Development Project Breaks Ground",
    excerpt:
      "New infrastructure project set to benefit over 50,000 residents in rural areas.",
    date: "Dec 3, 2024",
    category: "Campaigns",
  },
  {
    id: "3",
    title: "Annual Party Convention Dates Announced",
    excerpt:
      "Mark your calendars for the biggest gathering of party members this year.",
    date: "Dec 1, 2024",
    category: "Events",
  },
];

const upcomingEvents = [
  {
    title: "Town Hall Meeting",
    date: "Dec 15, 2024",
    location: "Central Community Hall",
    type: "meeting",
  },
  {
    title: "Volunteer Training Workshop",
    date: "Dec 20, 2024",
    location: "Party Headquarters",
    type: "training",
  },
  {
    title: "Fundraising Gala",
    date: "Dec 28, 2024",
    location: "Grand Convention Center",
    type: "campaign",
  },
];

const impactMetrics = [
  { icon: Shield, label: "Laws Proposed", value: 45 },
  { icon: Globe, label: "International Partners", value: 28 },
  { icon: TrendingUp, label: "Growth Rate", value: 32, suffix: "%" },
  { icon: CheckCircle, label: "Projects Completed", value: 180 },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Members,
            <br />
            Strengthening the Party
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in building a brighter future for our nation. Together, we
            can create lasting change and prosperity for all citizens.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/programs">
              <Button
                size="lg"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                data-testid="hero-button-join"
              >
                <Users className="w-5 h-5 mr-2" />
                Join as Member
              </Button>
            </Link>
            <Link to="/volunteers">
              <Button
                size="lg"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                data-testid="hero-button-volunteer"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Volunteer Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="default"
                data-testid="hero-button-newsletter"
              >
                Subscribe Newsletter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
                data-testid={`stat-${stat.label
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                </div>
                <div className="text-primary-foreground/80 text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our party is built on strong foundations and clear principles that
              guide everything we do.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {missionItems.map((item) => (
              <Card
                key={item.title}
                className="text-center"
                data-testid={`card-${item.title
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Latest News</h2>
              <p className="text-muted-foreground mt-2">
                Stay updated with our recent activities and achievements
              </p>
            </div>
            <Link to="/media">
              <Button variant="outline" data-testid="button-view-all-news">
                View All News
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden hover-elevate cursor-pointer"
                data-testid={`news-card-${article.id}`}
              >
                <div className="h-48 bg-linear-to-br from-primary/20 to-primary/5" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 p-0 h-auto"
                    data-testid={`button-read-more-${article.id}`}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground mt-2">
                Join us at our upcoming gatherings and activities
              </p>
            </div>
            <Link to="/events">
              <Button variant="outline" data-testid="button-view-all-events">
                View Calendar
                <Calendar className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden"
                data-testid={`event-card-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
                      <span className="text-xs font-medium text-primary">
                        {event.date.split(" ")[0]}
                      </span>
                      <span className="text-lg font-bold text-primary">
                        {event.date.split(" ")[1].replace(",", "")}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold mb-1 truncate">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {event.location}
                      </p>
                      <Link to="/events">
                        <Button size="sm" data-testid={`button-rsvp-${index}`}>
                          RSVP Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Together, we've achieved remarkable milestones in our journey to
              serve the people.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <Card
                key={index}
                className="text-center p-6"
                data-testid={`impact-${metric.label
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold">
                  <AnimatedCounter
                    target={metric.value}
                    suffix={metric.suffix || ""}
                    duration={2000}
                  />
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {metric.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Join thousands of dedicated members working together for a better
            tomorrow. Your voice matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/programs">
              <Button
                size="lg"
                variant="secondary"
                data-testid="cta-button-become-member"
              >
                <Users className="w-5 h-5 mr-2" />
                Become a Member
              </Button>
            </Link>
            <Link to="/volunteers">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="cta-button-volunteer"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
