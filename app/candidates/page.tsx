"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  User,
  FileText,
  Star,
  Calendar,
  Phone,
  Video,
  MapPin,
  Mail,
  Briefcase,
  GraduationCap,
  Award,
  ArrowRight,
  Building,
  DollarSign,
} from "lucide-react"
import { mockCandidates, mockJobs, getJobById } from "@/lib/mock-data"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function Candidates() {
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [isScheduleOpen, setIsScheduleOpen] = useState(false)
  const [filterJobId, setFilterJobId] = useState<string>("all")
  const searchParams = useSearchParams()

  useEffect(() => {
    const candidateId = searchParams.get("candidateId")
    const jobId = searchParams.get("jobId")

    if (candidateId) {
      const candidate = mockCandidates.find((c) => c.id === Number.parseInt(candidateId))
      if (candidate) setSelectedCandidate(candidate)
    }

    if (jobId) {
      setFilterJobId(jobId)
    }
  }, [searchParams])

  const filteredCandidates =
    filterJobId === "all"
      ? mockCandidates
      : mockCandidates.filter((candidate) => candidate.jobId === Number.parseInt(filterJobId))

  const handleScheduleInterview = () => {
    setIsScheduleOpen(false)
    // In a real app, this would create an interview record
    alert(`Interview scheduled for ${selectedCandidate?.name}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Candidates</h1>
          <p className="text-muted-foreground">
            Review candidate profiles, ATS screening results, and schedule interviews
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={filterJobId} onValueChange={setFilterJobId}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by job" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Positions</SelectItem>
              {mockJobs.map((job) => (
                <SelectItem key={job.id} value={job.id.toString()}>
                  {job.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Candidate Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Candidates</p>
                <p className="text-2xl font-bold">{filteredCandidates.length}</p>
              </div>
              <User className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Interview Ready</p>
                <p className="text-2xl font-bold">
                  {
                    filteredCandidates.filter(
                      (c) => c.status === "Interview Scheduled" || c.status === "Technical Round",
                    ).length
                  }
                </p>
              </div>
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">High Scores (90+)</p>
                <p className="text-2xl font-bold">{filteredCandidates.filter((c) => c.score >= 90).length}</p>
              </div>
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Offers Extended</p>
                <p className="text-2xl font-bold">
                  {filteredCandidates.filter((c) => c.status === "Offer Extended").length}
                </p>
              </div>
              <Award className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Candidate List */}
        <div className="md:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Candidate Pipeline ({filteredCandidates.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[600px] overflow-y-auto">
              {filteredCandidates.map((candidate) => {
                const job = getJobById(candidate.jobId)
                return (
                  <div
                    key={candidate.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedCandidate?.id === candidate.id ? "border-blue-500 bg-blue-50" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedCandidate(candidate)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{candidate.name}</p>
                          <p className="text-sm text-muted-foreground">{candidate.position}</p>
                          {job && <p className="text-xs text-blue-600">{job.title}</p>}
                        </div>
                      </div>
                      <Badge
                        variant={
                          candidate.status === "Interview Scheduled" || candidate.status === "Technical Round"
                            ? "default"
                            : candidate.status === "Offer Extended"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {candidate.status}
                      </Badge>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">{candidate.score}% Match</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {candidate.location}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{candidate.experience}</span>
                      <span>{candidate.source}</span>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </div>

        {/* Candidate Details */}
        <div className="md:col-span-2">
          {selectedCandidate ? (
            <Tabs defaultValue="profile" className="space-y-4">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="ats">ATS Score</TabsTrigger>
                <TabsTrigger value="interview">Interview</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Candidate Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-lg">{selectedCandidate.name}</h3>
                          <p className="text-muted-foreground">{selectedCandidate.position}</p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{selectedCandidate.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{selectedCandidate.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{selectedCandidate.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{selectedCandidate.experience} experience</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{selectedCandidate.currentCompany}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Salary Details</span>
                          </div>
                          <div className="text-sm space-y-1">
                            <p>Current: {selectedCandidate.currentSalary}</p>
                            <p>Expected: {selectedCandidate.expectedSalary}</p>
                            <p>Notice Period: {selectedCandidate.noticePeriod}</p>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <GraduationCap className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Education</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{selectedCandidate.education}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Skills</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {selectedCandidate.skills.map((skill) => (
                              <Badge key={skill} variant="outline">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Professional Summary</h4>
                      <p className="text-sm text-muted-foreground">{selectedCandidate.summary}</p>
                    </div>

                    <div className="flex gap-2">
                      <Link href={`/interviews?candidateId=${selectedCandidate.id}`}>
                        <Button variant="outline">
                          <Calendar className="h-4 w-4 mr-2" />
                          View Interviews
                        </Button>
                      </Link>
                      {selectedCandidate.status === "Offer Extended" && (
                        <Link href={`/onboarding?candidateId=${selectedCandidate.id}`}>
                          <Button>
                            <ArrowRight className="h-4 w-4 mr-2" />
                            Start Onboarding
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ats" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      ATS Screening Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">Overall Match</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">
                              {selectedCandidate.matchPercentage}%
                            </div>
                            <Progress value={selectedCandidate.matchPercentage} className="mb-2" />
                            <p className="text-sm text-muted-foreground">Job Description Match</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">Score Breakdown</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Skills Match</span>
                            <span className="font-medium">95%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Experience Level</span>
                            <span className="font-medium">88%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Education</span>
                            <span className="font-medium">92%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Keywords</span>
                            <span className="font-medium">89%</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Resume Analysis</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm">{selectedCandidate.resumeText}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">AI Recommendation</h4>
                      <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <p className="text-sm text-green-800">
                          <strong>Recommended for Interview:</strong> {selectedCandidate.interviewSummary}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="interview" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Virtual HR Pre-Interview Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-medium mb-2">Key Strengths</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          {selectedCandidate.keyStrengths?.map((strength, index) => (
                            <li key={index}>• {strength}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Areas to Explore</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          {selectedCandidate.areasToExplore?.map((area, index) => (
                            <li key={index}>• {area}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Pre-Interview Q&A Summary</h4>
                      <div className="space-y-3">
                        {selectedCandidate.interviewQuestions?.map((qa, index) => (
                          <div key={index} className="bg-gray-50 p-3 rounded">
                            <p className="text-sm font-medium">{qa.question}</p>
                            <p className="text-sm text-muted-foreground mt-1">{qa.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="timeline" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Candidate Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedCandidate.timeline?.map((event, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              event.status === "completed"
                                ? "bg-green-600"
                                : event.status === "scheduled"
                                  ? "bg-blue-600"
                                  : "bg-gray-300"
                            }`}
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">{event.event}</p>
                              <p className="text-sm text-muted-foreground">{event.date}</p>
                            </div>
                            <Badge variant="outline" className="text-xs mt-1">
                              {event.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Schedule Interview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">Ready to Schedule Interview</h3>
                      <p className="text-muted-foreground mb-6">
                        {selectedCandidate.name} has been screened and is ready for the next step.
                      </p>

                      <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
                        <DialogTrigger asChild>
                          <Button size="lg">
                            <Calendar className="h-4 w-4 mr-2" />
                            Schedule Interview
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Schedule Interview - {selectedCandidate.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label>Date</Label>
                                <Input type="date" />
                              </div>
                              <div className="space-y-2">
                                <Label>Time</Label>
                                <Input type="time" />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label>Interview Mode</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select mode" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="virtual">
                                    <div className="flex items-center gap-2">
                                      <Video className="h-4 w-4" />
                                      Virtual Interview
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="physical">
                                    <div className="flex items-center gap-2">
                                      <MapPin className="h-4 w-4" />
                                      In-Person Interview
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="phone">
                                    <div className="flex items-center gap-2">
                                      <Phone className="h-4 w-4" />
                                      Phone Interview
                                    </div>
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label>Interviewer</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select interviewer" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="amit">Amit Kumar - CTO</SelectItem>
                                  <SelectItem value="kavya">Kavya Sharma - Marketing Head</SelectItem>
                                  <SelectItem value="ravi">Ravi Gupta - Design Lead</SelectItem>
                                  <SelectItem value="suresh">Suresh Patel - DevOps Lead</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label>Notes</Label>
                              <Textarea placeholder="Additional notes for the interview..." />
                            </div>

                            <div className="flex justify-end space-x-2">
                              <Button variant="outline" onClick={() => setIsScheduleOpen(false)}>
                                Cancel
                              </Button>
                              <Button onClick={handleScheduleInterview}>Schedule Interview</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center h-96">
                <div className="text-center">
                  <User className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Select a Candidate</h3>
                  <p className="text-muted-foreground">
                    Choose a candidate from the list to view their profile and screening results.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
