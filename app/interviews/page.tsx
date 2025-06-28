"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Video, MapPin, Phone, User, Star, CheckCircle, XCircle } from "lucide-react"
import { mockInterviews, mockCompletedInterviews, getCandidateById, getJobById } from "@/lib/mock-data"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function InterviewPanel() {
  const [selectedInterview, setSelectedInterview] = useState(null)
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    const candidateId = searchParams.get("candidateId")
    if (candidateId) {
      const interview = mockInterviews.find((i) => i.candidateId === Number.parseInt(candidateId))
      if (interview) setSelectedInterview(interview)
    }
  }, [searchParams])

  const upcomingInterviews = mockInterviews
  const completedInterviews = mockCompletedInterviews

  const handleSubmitFeedback = () => {
    setIsFeedbackOpen(false)
    alert("Interview feedback submitted successfully!")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Interview Panel</h1>
        <p className="text-muted-foreground">Manage interview schedules and track interview outcomes</p>
      </div>

      {/* Interview Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Today's Interviews</p>
                <p className="text-2xl font-bold">4</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">2 completed, 2 pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">This Week</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">8 scheduled, 4 completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pass Rate</p>
                <p className="text-2xl font-bold">75%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Above industry average</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Score</p>
                <p className="text-2xl font-bold">8.2</p>
              </div>
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Out of 10</p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Today's Interview Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingInterviews.slice(0, 2).map((interview) => {
              const candidate = getCandidateById(interview.candidateId)
              const job = getJobById(interview.jobId)
              return (
                <div key={interview.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">{interview.candidateName}</h3>
                      <p className="text-sm text-muted-foreground">{interview.position}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center gap-1 text-sm">
                          <Clock className="h-3 w-3" />
                          {interview.time}
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          {interview.mode === "Virtual" && <Video className="h-3 w-3" />}
                          {interview.mode === "In-Person" && <MapPin className="h-3 w-3" />}
                          {interview.mode === "Phone" && <Phone className="h-3 w-3" />}
                          {interview.mode}
                        </div>
                        <span className="text-sm text-muted-foreground">with {interview.interviewer}</span>
                      </div>
                      {job && <p className="text-xs text-blue-600 mt-1">For: {job.title}</p>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        interview.status === "Confirmed"
                          ? "default"
                          : interview.status === "Scheduled"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {interview.status}
                    </Badge>
                    <Link href={`/candidates?candidateId=${interview.candidateId}`}>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      Join Interview
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Interviews */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Interviews</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Mode</TableHead>
                <TableHead>Interviewer</TableHead>
                <TableHead>Round</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingInterviews.map((interview) => {
                const candidate = getCandidateById(interview.candidateId)
                return (
                  <TableRow key={interview.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{interview.candidateName}</p>
                        <p className="text-sm text-muted-foreground">
                          {candidate?.score}% match • {candidate?.source}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>{interview.position}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{interview.date}</span>
                        <span className="text-sm text-muted-foreground">{interview.time}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {interview.mode === "Virtual" && <Video className="h-3 w-3" />}
                        {interview.mode === "In-Person" && <MapPin className="h-3 w-3" />}
                        {interview.mode === "Phone" && <Phone className="h-3 w-3" />}
                        {interview.mode}
                      </div>
                    </TableCell>
                    <TableCell>{interview.interviewer}</TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        Round {interview.round}/{interview.totalRounds}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          interview.status === "Confirmed"
                            ? "default"
                            : interview.status === "Scheduled"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {interview.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Link href={`/candidates?candidateId=${interview.candidateId}`}>
                          <Button variant="ghost" size="sm">
                            Profile
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Completed Interviews */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Interview Results</CardTitle>
            <Dialog open={isFeedbackOpen} onOpenChange={setIsFeedbackOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Submit Feedback</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Interview Feedback</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Candidate Name</Label>
                    <Input placeholder="Enter candidate name" />
                  </div>
                  <div className="space-y-2">
                    <Label>Overall Score (1-10)</Label>
                    <Input type="number" min="1" max="10" placeholder="8.5" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Technical Skills</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Rate 1-10" />
                        </SelectTrigger>
                        <SelectContent>
                          {[...Array(10)].map((_, i) => (
                            <SelectItem key={i} value={(i + 1).toString()}>
                              {i + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Communication</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Rate 1-10" />
                        </SelectTrigger>
                        <SelectContent>
                          {[...Array(10)].map((_, i) => (
                            <SelectItem key={i} value={(i + 1).toString()}>
                              {i + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Result</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select result" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="passed">Passed</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                        <SelectItem value="on-hold">On Hold</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Notes</Label>
                    <Textarea placeholder="Interview notes and feedback..." />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsFeedbackOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSubmitFeedback}>Submit Feedback</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Interviewer</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Result</TableHead>
                <TableHead>Next Steps</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {completedInterviews.map((interview) => {
                const candidate = getCandidateById(interview.candidateId)
                return (
                  <TableRow key={interview.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{interview.candidateName}</p>
                        <p className="text-sm text-muted-foreground">{interview.round}</p>
                      </div>
                    </TableCell>
                    <TableCell>{interview.position}</TableCell>
                    <TableCell>{interview.date}</TableCell>
                    <TableCell>{interview.interviewer}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{interview.score}/10</span>
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div
                            className={`h-2 rounded-full ${interview.score >= 7 ? "bg-green-600" : "bg-red-600"}`}
                            style={{ width: `${(interview.score / 10) * 100}%` }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {interview.result === "Passed" ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-600" />
                        )}
                        <Badge variant={interview.result === "Passed" ? "default" : "destructive"}>
                          {interview.result}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-48">
                      <p className="text-sm text-muted-foreground truncate">{interview.nextSteps}</p>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Link href={`/candidates?candidateId=${interview.candidateId}`}>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </Link>
                        {interview.result === "Passed" && candidate?.status === "Offer Extended" && (
                          <Link href={`/onboarding?candidateId=${interview.candidateId}`}>
                            <Button variant="outline" size="sm">
                              Onboard
                            </Button>
                          </Link>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Interview Questions Bank */}
      <Card>
        <CardHeader>
          <CardTitle>Interview Questions Bank</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">Technical Questions</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Explain microservices architecture</li>
                <li>• How do you handle state management in React?</li>
                <li>• Design a scalable chat application</li>
                <li>• What's your approach to code reviews?</li>
                <li>• Describe your experience with cloud platforms</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Behavioral Questions</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Tell me about a challenging project you worked on</li>
                <li>• How do you handle tight deadlines?</li>
                <li>• Describe a time you had to learn something new quickly</li>
                <li>• How do you handle conflicts in a team?</li>
                <li>• What motivates you in your work?</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
