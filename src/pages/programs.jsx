/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Progress } from "../components/ui/progress";
import { useToast } from "../hooks/use-toast";
import {
  GraduationCap,
  Users,
  Download,
  FileText,
  Video,
  BookOpen,
  CheckCircle,
  Award,
  Briefcase,
  Heart,
  Shield,
  TrendingUp,
  Clock,
  Send,
} from "lucide-react";

// ------------------ DATA ------------------
const trainingPrograms = [
  {
    title: "Leadership Development",
    description:
      "Comprehensive training on effective leadership, public speaking, and community organizing.",
    duration: "8 weeks",
    icon: GraduationCap,
    type: "online",
  },
  {
    title: "Campaign Management",
    description:
      "Learn the fundamentals of running successful political campaigns and voter outreach.",
    duration: "6 weeks",
    icon: Briefcase,
    type: "hybrid",
  },
  {
    title: "Policy Analysis",
    description:
      "Deep dive into policy-making, research methods, and evidence-based advocacy.",
    duration: "10 weeks",
    icon: FileText,
    type: "online",
  },
  {
    title: "Community Organizing",
    description:
      "Master the art of building grassroots movements and mobilizing community support.",
    duration: "4 weeks",
    icon: Users,
    type: "in-person",
  },
];

const resources = [
  { title: "Party Constitution", type: "PDF", size: "2.4 MB" },
  { title: "Volunteer Handbook", type: "PDF", size: "1.8 MB" },
  { title: "Campaign Guidelines", type: "PDF", size: "3.2 MB" },
  { title: "Policy Manifesto 2024", type: "PDF", size: "4.5 MB" },
];

const membershipBenefits = [
  { icon: Award, title: "Recognition Programs" },
  { icon: GraduationCap, title: "Free Training Access" },
  { icon: Users, title: "Networking Events" },
  { icon: Shield, title: "Legal Support" },
  { icon: TrendingUp, title: "Career Development" },
  { icon: Heart, title: "Community Support" },
];

const pollQuestion = {
  id: "priority-poll",
  question: "What should be our top priority for 2025?",
  options: [
    "Education Reform",
    "Healthcare Access",
    "Economic Development",
    "Environmental Protection",
  ],
};

// ------------------ COMPONENTS ------------------

function TrainingProgramCard({ program, onEnroll }) {
  const Icon = program.icon;
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-semibold text-lg">{program.title}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground">
                {program.type}
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              {program.description}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {program.duration}
              </div>
              <Button size="sm" onClick={onEnroll}>
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ResourceCard({ resource }) {
  return (
    <Card className="hover-elevate cursor-pointer">
      <CardContent className="p-4 flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <FileText className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium truncate">{resource.title}</h4>
          <p className="text-sm text-muted-foreground">
            {resource.type} • {resource.size}
          </p>
        </div>
        <Button size="icon" variant="ghost">
          <Download className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

function VideoCard({ icon: Icon, title, subtitle }) {
  return (
    <Card className="overflow-hidden hover-elevate cursor-pointer">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <CardContent className="p-3">
        <h4 className="font-medium text-sm truncate">{title}</h4>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
}

function MembershipBenefitCard({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-2 p-3 rounded-lg bg-card">
      <Icon className="w-5 h-5 text-primary flex-shrink-0" />
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}

function PollCard({
  pollSelection,
  setPollSelection,
  pollSubmitted,
  handlePollSubmit,
}) {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Have Your Say</h3>
      <p className="text-muted-foreground mb-4">{pollQuestion.question}</p>

      {!pollSubmitted ? (
        <div className="space-y-4">
          <RadioGroup value={pollSelection} onValueChange={setPollSelection}>
            {pollQuestion.options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
          <Button onClick={handlePollSubmit} disabled={!pollSelection}>
            <Send className="w-4 h-4 mr-2" />
            Submit Vote
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-2 text-primary">
          <CheckCircle className="w-5 h-5" />
          <span>Thank you for voting!</span>
        </div>
      )}
    </Card>
  );
}

function RegistrationForm() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    memberType: "member",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFormChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleFormSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({
          title: "Registration Successful!",
          description: "Welcome to United People's Party!",
        });
        setFormStep(3);
      } else throw new Error("Failed to register");
    } catch {
      toast({
        title: "Error",
        description: "Failed to submit registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6">
      <CardHeader className="p-0 mb-6">
        <CardTitle>Registration Form</CardTitle>
        <div className="flex items-center gap-2 mt-4">
          <Progress value={(formStep / 3) * 100} className="h-2" />
          <span className="text-sm text-muted-foreground">
            Step {formStep} of 3
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {formStep === 1 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleFormChange("name", e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleFormChange("email", e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleFormChange("phone", e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
            <Button
              className="w-full"
              onClick={() => setFormStep(2)}
              disabled={!formData.name || !formData.email}
            >
              Next Step
            </Button>
          </div>
        )}

        {formStep === 2 && (
          <div className="space-y-4">
            <div>
              <Label>Membership Type</Label>
              <RadioGroup
                value={formData.memberType}
                onValueChange={(value) => handleFormChange("memberType", value)}
                className="mt-2"
              >
                {["member", "volunteer", "donor"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <RadioGroupItem value={type} id={type} />
                    <Label htmlFor={type}>
                      {type === "member"
                        ? "Regular Member"
                        : type === "volunteer"
                        ? "Active Volunteer"
                        : "Supporting Donor"}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="interest">Area of Interest</Label>
              <Select
                value={formData.areaOfInterest}
                onValueChange={(value) =>
                  handleFormChange("areaOfInterest", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="community">
                    Community Organizing
                  </SelectItem>
                  <SelectItem value="campaign">Campaign Activities</SelectItem>
                  <SelectItem value="policy">Policy Research</SelectItem>
                  <SelectItem value="media">Media & Communications</SelectItem>
                  <SelectItem value="youth">Youth Programs</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setFormStep(1)}>
                Back
              </Button>
              <Button
                className="flex-1"
                onClick={handleFormSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Complete Registration"}
              </Button>
            </div>
          </div>
        )}

        {formStep === 3 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Welcome to the Party!
            </h3>
            <p className="text-muted-foreground mb-4">
              Your registration has been submitted successfully. We'll be in
              touch soon with next steps.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setFormStep(1);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  areaOfInterest: "",
                  memberType: "member",
                });
              }}
            >
              Register Another Member
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ------------------ MAIN PAGE ------------------

export default function Programs() {
  const [pollSelection, setPollSelection] = useState("");
  const [pollSubmitted, setPollSubmitted] = useState(false);
  const { toast } = useToast();

  const handlePollSubmit = async () => {
    if (!pollSelection) return;
    try {
      const response = await fetch("/api/polls", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pollId: pollQuestion.id,
          option: pollSelection,
        }),
      });
      if (response.ok) {
        setPollSubmitted(true);
        toast({
          title: "Vote Recorded!",
          description: "Thank you for participating in our poll.",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to submit vote. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Programs & Initiatives
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our training programs, resources, and ways to get involved
            in our movement.
          </p>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Training & Development
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enhance your skills with our comprehensive training programs.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {trainingPrograms.map((program) => (
            <TrainingProgramCard
              key={program.title}
              program={program}
              onEnroll={() =>
                console.log(`Enroll clicked for ${program.title}`)
              }
            />
          ))}
        </div>
      </section>

      {/* Resources & Videos */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Downloadable Resources
            </h2>
            <p className="text-muted-foreground mb-8">
              Access our official documents and guides to stay informed about
              party policies and procedures.
            </p>
            <div className="space-y-4">
              {resources.map((res) => (
                <ResourceCard key={res.title} resource={res} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Video Resources
            </h2>
            <p className="text-muted-foreground mb-8">
              Watch our training videos and educational content.
            </p>
            <VideoCard
              icon={Video}
              title="Introduction to Party Values"
              subtitle="15 min video"
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <VideoCard icon={BookOpen} title="Leadership 101" subtitle="" />
              <VideoCard icon={Users} title="Community Building" subtitle="" />
            </div>
          </div>
        </div>
      </section>

      {/* Membership & Poll */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Membership Benefits
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {membershipBenefits.map((benefit) => (
                <MembershipBenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>
          <div>
            <PollCard
              pollSelection={pollSelection}
              setPollSelection={setPollSelection}
              pollSubmitted={pollSubmitted}
              handlePollSubmit={handlePollSubmit}
            />
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-3xl mx-auto px-4">
          <RegistrationForm />
        </div>
      </section>
    </div>
  );
}
