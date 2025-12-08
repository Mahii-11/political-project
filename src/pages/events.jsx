import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "../lib/queryClient";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Calendar } from "../components/ui/calendar";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Skeleton } from "../components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useToast } from "../hooks/use-toast";
import {
  MapPin,
  Clock,
  Users,
  Calendar as CalendarIcon,
  Filter,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const pastEvents = [
  {
    title: "National Convention 2024",
    date: "November 2024",
    attendees: 5000,
    image: null,
  },
  {
    title: "Regional Leadership Forum",
    date: "October 2024",
    attendees: 350,
    image: null,
  },
  {
    title: "Voter Registration Drive",
    date: "September 2024",
    attendees: 1200,
    image: null,
  },
];

const eventTypeColors = {
  "town-hall": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  workshop: "bg-green-500/10 text-green-600 dark:text-green-400",
  fundraiser: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  appreciation: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  forum: "bg-red-500/10 text-red-600 dark:text-red-400",
};

export default function Events() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filterType, setFilterType] = useState("all");
  const [rsvpDialogOpen, setRsvpDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rsvpForm, setRsvpForm] = useState({ name: "", email: "", phone: "" });
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    data: eventsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["/api/events"],
  });

  const rsvpMutation = useMutation({
    mutationFn: async (data) => apiRequest("POST", "/api/rsvp", data),
    onSuccess: () => {
      setRsvpSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ["/api/events"] });
      toast({
        title: "RSVP Confirmed!",
        description: `You're registered for ${selectedEvent?.title}`,
      });
      setTimeout(() => setRsvpDialogOpen(false), 2000);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit RSVP. Please try again.",
        variant: "destructive",
      });
    },
  });

  const allEvents = eventsData?.data || [];
  const filteredEvents =
    filterType === "all"
      ? allEvents
      : allEvents.filter((event) => event.eventType === filterType);

  const handleRsvp = () => {
    if (!selectedEvent || !rsvpForm.name || !rsvpForm.email) return;
    rsvpMutation.mutate({
      eventId: selectedEvent.id,
      ...rsvpForm,
    });
  };

  const openRsvpDialog = (event) => {
    setSelectedEvent(event);
    setRsvpSubmitted(false);
    setRsvpForm({ name: "", email: "", phone: "" });
    setRsvpDialogOpen(true);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getShortDate = (dateStr) => {
    const date = new Date(dateStr);
    return {
      month: date.toLocaleDateString("en-US", { month: "short" }),
      day: date.getDate().toString(),
    };
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Events & Calendar
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our upcoming events and be part of the movement. From meetings
            to campaigns, there's always something happening.
          </p>
        </div>
      </section>

      {/* Upcoming Events & Calendar */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="town-hall">Town Halls</SelectItem>
                    <SelectItem value="workshop">Workshops</SelectItem>
                    <SelectItem value="fundraiser">Fundraisers</SelectItem>
                    <SelectItem value="appreciation">Appreciation</SelectItem>
                    <SelectItem value="forum">Forums</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {isLoading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex">
                        <div className="w-20 flex-shrink-0 bg-primary/5 flex flex-col items-center justify-center p-4 border-r border-border">
                          <Skeleton className="h-4 w-8 mb-1" />
                          <Skeleton className="h-8 w-6" />
                        </div>
                        <div className="flex-1 p-4">
                          <Skeleton className="h-5 w-3/4 mb-2" />
                          <Skeleton className="h-4 w-full mb-1" />
                          <Skeleton className="h-4 w-2/3 mb-3" />
                          <div className="flex gap-4">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-8 w-24" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : error ? (
                <Card className="p-8 text-center">
                  <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Failed to load events</h3>
                  <p className="text-muted-foreground">
                    Please try again later.
                  </p>
                </Card>
              ) : filteredEvents.length === 0 ? (
                <Card className="p-8 text-center">
                  <CalendarIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">No events found</h3>
                  <p className="text-muted-foreground">
                    Check back later for upcoming events.
                  </p>
                </Card>
              ) : (
                filteredEvents.map((event) => {
                  const shortDate = getShortDate(event.date);
                  const eventType = event.eventType;
                  return (
                    <Card key={event.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex">
                          <div className="w-20 flex-shrink-0 bg-primary/5 flex flex-col items-center justify-center p-4 border-r border-border">
                            <span className="text-sm font-medium text-primary">
                              {shortDate.month}
                            </span>
                            <span className="text-2xl font-bold">
                              {shortDate.day}
                            </span>
                          </div>
                          <div className="flex-1 p-4">
                            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                              <div>
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                  <h3 className="font-semibold">
                                    {event.title}
                                  </h3>
                                  <span
                                    className={`text-xs px-2 py-1 rounded-full ${
                                      eventTypeColors[eventType] ||
                                      "bg-muted text-muted-foreground"
                                    }`}
                                  >
                                    {event.eventType}
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {event.description}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 mt-3">
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                {event.time}
                              </div>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                <span className="truncate max-w-[200px]">
                                  {event.location}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Users className="w-4 h-4" />
                                {event.rsvpCount} attending
                              </div>
                              <Button
                                size="sm"
                                onClick={() => openRsvpDialog(event)}
                              >
                                RSVP Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              )}
            </div>
          </div>

          {/* Calendar Sidebar */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" /> Event Calendar
                </h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Past Event Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5" />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{event.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{event.date}</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {event.attendees.toLocaleString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Dialog */}
      <Dialog open={rsvpDialogOpen} onOpenChange={setRsvpDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {rsvpSubmitted
                ? "RSVP Confirmed!"
                : `RSVP for ${selectedEvent?.title}`}
            </DialogTitle>
          </DialogHeader>

          {rsvpSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground mb-2">
                You're registered for this event!
              </p>
              <p className="text-sm text-muted-foreground">
                {selectedEvent && formatDate(selectedEvent.date)} at{" "}
                {selectedEvent?.time}
              </p>
            </div>
          ) : (
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="rsvp-name">Full Name</Label>
                <Input
                  id="rsvp-name"
                  value={rsvpForm.name}
                  onChange={(e) =>
                    setRsvpForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="rsvp-email">Email Address</Label>
                <Input
                  id="rsvp-email"
                  type="email"
                  value={rsvpForm.email}
                  onChange={(e) =>
                    setRsvpForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <Label htmlFor="rsvp-phone">Phone Number (Optional)</Label>
                <Input
                  id="rsvp-phone"
                  value={rsvpForm.phone}
                  onChange={(e) =>
                    setRsvpForm((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  placeholder="Enter your phone number"
                />
              </div>
              <Button
                className="w-full"
                onClick={handleRsvp}
                disabled={
                  !rsvpForm.name || !rsvpForm.email || rsvpMutation.isPending
                }
              >
                {rsvpMutation.isPending ? "Submitting..." : "Confirm RSVP"}
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
