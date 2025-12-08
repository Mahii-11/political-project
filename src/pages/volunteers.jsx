/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ React Router Link
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import {
  Award,
  Star,
  Trophy,
  Medal,
  Users,
  Calendar,
  MessageSquare,
  BookOpen,
  Video,
  FileText,
  ExternalLink,
  Crown,
  Zap,
  Heart,
  Target,
} from "lucide-react";

// ---------------- DATA ----------------
const topContributors = [
  {
    id: 1,
    name: "Maria Santos",
    role: "Regional Coordinator",
    points: 2450,
    badges: ["Gold Volunteer", "100 Events", "Mentor"],
    avatar: "MS",
    rank: 1,
  },
  {
    id: 2,
    name: "David Kim",
    role: "Campaign Manager",
    points: 2180,
    badges: ["Silver Volunteer", "Campaign Star"],
    avatar: "DK",
    rank: 2,
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Youth Organizer",
    points: 1950,
    badges: ["Rising Star", "Youth Leader"],
    avatar: "AP",
    rank: 3,
  },
  {
    id: 4,
    name: "James O'Brien",
    role: "Community Liaison",
    points: 1820,
    badges: ["Community Champion"],
    avatar: "JO",
    rank: 4,
  },
  {
    id: 5,
    name: "Lisa Chen",
    role: "Training Coordinator",
    points: 1690,
    badges: ["Educator", "50 Workshops"],
    avatar: "LC",
    rank: 5,
  },
];

const achievementBadges = [
  {
    icon: Star,
    name: "First Steps",
    description: "Complete your first task",
    color: "text-yellow-500",
  },
  {
    icon: Trophy,
    name: "Campaign Hero",
    description: "Participate in 10 campaigns",
    color: "text-orange-500",
  },
  {
    icon: Medal,
    name: "Community Builder",
    description: "Recruit 5 new members",
    color: "text-blue-500",
  },
  {
    icon: Award,
    name: "Top Volunteer",
    description: "Earn 1000 points",
    color: "text-purple-500",
  },
  {
    icon: Zap,
    name: "Quick Responder",
    description: "First to RSVP to 10 events",
    color: "text-green-500",
  },
  {
    icon: Heart,
    name: "Dedicated",
    description: "Active for 6 months",
    color: "text-red-500",
  },
  {
    icon: Target,
    name: "Goal Crusher",
    description: "Complete all monthly goals",
    color: "text-indigo-500",
  },
  {
    icon: Crown,
    name: "Leader",
    description: "Lead a committee or team",
    color: "text-amber-500",
  },
];

const trainingCourses = [
  {
    title: "Introduction to Political Organizing",
    type: "video",
    duration: "45 min",
    level: "Beginner",
    progress: 100,
  },
  {
    title: "Effective Communication Skills",
    type: "video",
    duration: "1 hr",
    level: "Intermediate",
    progress: 60,
  },
  {
    title: "Campaign Strategy Fundamentals",
    type: "pdf",
    pages: 25,
    level: "Intermediate",
    progress: 30,
  },
  {
    title: "Community Engagement Best Practices",
    type: "video",
    duration: "30 min",
    level: "Advanced",
    progress: 0,
  },
];

const networkingOpportunities = [
  {
    title: "Weekly Volunteer Meetup",
    description: "Connect with fellow volunteers every Wednesday",
    icon: Calendar,
    link: "/events",
  },
  {
    title: "Mentor Program",
    description: "Get paired with experienced party leaders",
    icon: Users,
    link: "/programs",
  },
  {
    title: "Discussion Forum",
    description: "Share ideas and collaborate on initiatives",
    icon: MessageSquare,
    link: "#",
  },
];

// ---------------- COMPONENT ----------------
export default function Volunteers() {
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-amber-700" />;
      default:
        return (
          <span className="text-lg font-bold text-muted-foreground">
            #{rank}
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Volunteer Recognition
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Celebrating our dedicated volunteers who make our movement possible.
          Join us and earn recognition for your contributions.
        </p>
      </section>

      {/* Top Contributors */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Contributors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most active and dedicated volunteers this month.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {topContributors.map((contributor) => (
                <Card
                  key={contributor.id}
                  className={`overflow-hidden ${
                    contributor.rank <= 3 ? "border-primary/30" : ""
                  }`}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 flex items-center justify-center">
                      {getRankIcon(contributor.rank)}
                    </div>
                    <Avatar className="w-12 h-12 flex-shrink-0">
                      <AvatarFallback
                        className={`${
                          contributor.rank === 1
                            ? "bg-yellow-500/20 text-yellow-600"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {contributor.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{contributor.name}</h3>
                        {contributor.rank === 1 && (
                          <Badge variant="default" className="bg-yellow-500">
                            Top Volunteer
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {contributor.role}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {contributor.badges.map((badge) => (
                          <Badge
                            key={badge}
                            variant="secondary"
                            className="text-xs"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xl font-bold text-primary">
                        {contributor.points.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        points
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <Card className="sticky top-24 p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                    ?
                  </AvatarFallback>
                </Avatar>
                <p className="text-muted-foreground mb-4">
                  Join as a volunteer to track your progress and earn badges!
                </p>
                <Link to="/programs">
                  <Button>Become a Volunteer</Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Badges */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievement Badges
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Earn badges by participating in events, recruiting members, and
            contributing to our mission.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievementBadges.map((badge, index) => (
              <Card
                key={index}
                className="text-center p-6 hover-elevate cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <badge.icon className={`w-8 h-8 ${badge.color}`} />
                </div>
                <h4 className="font-semibold mb-1">{badge.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {badge.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skill & Networking */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Skill Development */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skill Development
            </h2>
            <p className="text-muted-foreground mb-8">
              Access training resources to enhance your skills and become a more
              effective volunteer.
            </p>
            <div className="space-y-4">
              {trainingCourses.map((course, index) => (
                <Card key={index} className="hover-elevate cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {course.type === "video" ? (
                        <Video className="w-5 h-5 text-primary" />
                      ) : (
                        <FileText className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{course.title}</h4>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span>
                          {course.type === "video"
                            ? course.duration
                            : `${course.pages} pages`}
                        </span>
                        <span>•</span>
                        <span>{course.level}</span>
                      </div>
                      {course.progress > 0 && (
                        <div className="flex items-center gap-2 mt-2">
                          <Progress
                            value={course.progress}
                            className="h-1 flex-1"
                          />
                          <span className="text-xs text-muted-foreground">
                            {course.progress}%
                          </span>
                        </div>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant={course.progress > 0 ? "secondary" : "default"}
                    >
                      {course.progress > 0
                        ? course.progress === 100
                          ? "Review"
                          : "Continue"
                        : "Start"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Networking */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Networking & Mentorship
            </h2>
            <p className="text-muted-foreground mb-8">
              Connect with fellow volunteers and learn from experienced party
              leaders.
            </p>
            <div className="space-y-4">
              {networkingOpportunities.map((opportunity, index) => (
                <Card key={index} className="hover-elevate cursor-pointer">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <opportunity.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">
                        {opportunity.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {opportunity.description}
                      </p>
                      <Link to={opportunity.link}>
                        <Button size="sm" variant="outline">
                          Learn More <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 p-6 bg-primary/5 border-primary/20 text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Join Our Community</h3>
              <p className="text-muted-foreground mb-4">
                Access exclusive forums, chat groups, and networking events for
                party volunteers.
              </p>
              <Link to="/programs">
                <Button>Get Started</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
