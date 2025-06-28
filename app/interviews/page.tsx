import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, Clock, Video, MapPin, Phone, User } from "lucide-react"
import { mockInterviews, mockCompletedInterviews } from "@/lib/mock-data"

export default function InterviewPanel() {
  const upcomingInterviews = mockInterviews

  const completedInterviews = mockCompletedInterviews

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Interview Panel</h1>
        <p className="text-muted-foreground">Manage interview schedules and track interview outcomes</p>
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
            {upcomingInterviews.slice(0, 2).map((interview) => (
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
                  <Button variant="outline" size="sm">
                    Join Interview
                  </Button>
                </div>
              </div>
            ))}
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
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingInterviews.map((interview) => (
                <TableRow key={interview.id}>
                  <TableCell className="font-medium">{interview.candidateName}</TableCell>
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
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      <Button variant="outline" size="sm">
                        Cancel
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Completed Interviews */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Interview Results</CardTitle>
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
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {completedInterviews.map((interview) => (
                <TableRow key={interview.id}>
                  <TableCell className="font-medium">{interview.candidateName}</TableCell>
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
                    <Badge variant={interview.result === "Passed" ? "default" : "destructive"}>
                      {interview.result}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">{interview.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
