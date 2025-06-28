"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, Filter, Eye, Upload, FileText, MapPin, DollarSign, Users } from "lucide-react"
import { mockJobs } from "@/lib/mock-data"

export default function JobManagement() {
  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false)

  const activeJobs = mockJobs

  const resumes = [
    {
      id: 1,
      candidateName: "Rahul Sharma",
      email: "rahul.sharma@email.com",
      source: "LinkedIn",
      roleApplied: "Senior Full Stack Developer",
      date: "2024-01-15",
      score: 92,
      status: "Shortlisted",
    },
    {
      id: 2,
      candidateName: "Priya Patel",
      email: "priya.patel@email.com",
      source: "Naukri.com",
      roleApplied: "Digital Marketing Manager",
      date: "2024-01-12",
      score: 88,
      status: "Interview Scheduled",
    },
    {
      id: 3,
      candidateName: "Arjun Mehta",
      email: "arjun.mehta@email.com",
      source: "Dribbble",
      roleApplied: "Senior UX Designer",
      date: "2024-01-14",
      score: 85,
      status: "Portfolio Review",
    },
    {
      id: 4,
      candidateName: "Sneha Reddy",
      email: "sneha.reddy@email.com",
      source: "LinkedIn",
      roleApplied: "DevOps Engineer",
      date: "2024-01-16",
      score: 78,
      status: "New",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Job Management</h1>
          <p className="text-muted-foreground">Manage job postings and review incoming resumes</p>
        </div>
        <Dialog open={isCreateJobOpen} onOpenChange={setIsCreateJobOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create New Job
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Job Posting</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input id="title" placeholder="e.g. Senior Software Engineer" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g. Bangalore, Karnataka" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Job Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="salary">Salary Range</Label>
                <Input id="salary" placeholder="e.g. ₹15L - ₹25L" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea id="description" placeholder="Enter detailed job description..." className="min-h-[120px]" />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="auto-post" />
                <Label htmlFor="auto-post">Auto-post to job boards</Label>
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsCreateJobOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsCreateJobOpen(false)}>Create Job Posting</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="jobs" className="space-y-4">
        <TabsList>
          <TabsTrigger value="jobs">Active Job Postings</TabsTrigger>
          <TabsTrigger value="resumes">Resume Inbox</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Active Job Postings</CardTitle>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search jobs..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Salary</TableHead>
                    <TableHead>Resumes</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeJobs.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell className="font-medium">{job.title}</TableCell>
                      <TableCell>{job.department}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          {job.salary}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {job.resumesReceived}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={job.status === "Active" ? "default" : "secondary"}>{job.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resumes" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop resume files here, or click to browse
                  </p>
                  <Button variant="outline">Browse Files</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resume Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Total Resumes</span>
                  <span className="font-semibold">283</span>
                </div>
                <div className="flex justify-between">
                  <span>New (Unreviewed)</span>
                  <span className="font-semibold text-orange-600">47</span>
                </div>
                <div className="flex justify-between">
                  <span>Shortlisted</span>
                  <span className="font-semibold text-green-600">89</span>
                </div>
                <div className="flex justify-between">
                  <span>Rejected</span>
                  <span className="font-semibold text-red-600">147</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Resume Inbox</CardTitle>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="engineer">Software Engineer</SelectItem>
                      <SelectItem value="marketing">Marketing Manager</SelectItem>
                      <SelectItem value="designer">UX Designer</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all-sources">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-sources">All Sources</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="indeed">Indeed</SelectItem>
                      <SelectItem value="company">Company Site</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Candidate</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Role Applied</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {resumes.map((resume) => (
                    <TableRow key={resume.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{resume.candidateName}</p>
                          <p className="text-sm text-muted-foreground">{resume.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{resume.source}</Badge>
                      </TableCell>
                      <TableCell>{resume.roleApplied}</TableCell>
                      <TableCell>{resume.date}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-blue-600 rounded-full" style={{ width: `${resume.score}%` }} />
                          </div>
                          <span className="text-sm font-medium">{resume.score}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            resume.status === "New"
                              ? "destructive"
                              : resume.status === "Shortlisted"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {resume.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
