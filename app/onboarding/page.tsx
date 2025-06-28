"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  CheckCircle,
  Clock,
  AlertCircle,
  User,
  FileText,
  Calendar,
  Users,
  Building,
  DollarSign,
  ArrowRight,
} from "lucide-react"
import { mockOnboardingEmployees, getCandidateById, getJobById } from "@/lib/mock-data"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function OnboardingDashboard() {
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    const candidateId = searchParams.get("candidateId")
    if (candidateId) {
      const employee = mockOnboardingEmployees.find((e) => e.candidateId === Number.parseInt(candidateId))
      if (employee) setSelectedEmployee(employee)
    }
  }, [searchParams])

  const onboardingEmployees = mockOnboardingEmployees

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-600"
      case "In Progress":
        return "text-blue-600"
      case "Pending":
        return "text-orange-600"
      default:
        return "text-gray-600"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "In Progress":
        return <Clock className="h-4 w-4 text-blue-600" />
      case "Pending":
        return <AlertCircle className="h-4 w-4 text-orange-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Employee Onboarding</h1>
          <p className="text-muted-foreground">Track new hire onboarding progress and completion status</p>
        </div>
        <Dialog open={isAddEmployeeOpen} onOpenChange={setIsAddEmployeeOpen}>
          <DialogTrigger asChild>
            <Button>
              <User className="h-4 w-4 mr-2" />
              Add New Employee
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Employee to Onboarding</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Employee Name</Label>
                  <Input placeholder="Enter full name" />
                </div>
                <div className="space-y-2">
                  <Label>Position</Label>
                  <Input placeholder="Job title" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Department</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Manager</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select manager" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="amit">Amit Kumar</SelectItem>
                    <SelectItem value="kavya">Kavya Sharma</SelectItem>
                    <SelectItem value="ravi">Ravi Gupta</SelectItem>
                    <SelectItem value="priya">Priya Sharma</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsAddEmployeeOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsAddEmployeeOpen(false)}>Add Employee</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Onboarding Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Onboarding</p>
                <p className="text-2xl font-bold">{onboardingEmployees.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Active employees</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                <p className="text-2xl font-bold">
                  {onboardingEmployees.filter((e) => e.status === "In Progress").length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Currently onboarding</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">
                  {onboardingEmployees.filter((e) => e.status === "Completed").length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Successfully onboarded</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Completion</p>
                <p className="text-2xl font-bold">85%</p>
              </div>
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Task completion rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Employee List */}
        <div className="md:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Onboarding Pipeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[600px] overflow-y-auto">
              {onboardingEmployees.map((employee) => {
                const candidate = getCandidateById(employee.candidateId)
                const job = getJobById(employee.jobId)
                return (
                  <div
                    key={employee.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedEmployee?.id === employee.id ? "border-blue-500 bg-blue-50" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedEmployee(employee)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{employee.name}</p>
                          <p className="text-sm text-muted-foreground">{employee.position}</p>
                          <p className="text-xs text-blue-600">{employee.department}</p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          employee.status === "Completed"
                            ? "default"
                            : employee.status === "In Progress"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {employee.status}
                      </Badge>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="text-sm font-medium">{employee.progress}%</span>
                      </div>
                      <Progress value={employee.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">
                        {employee.completedTasks}/{employee.totalTasks} tasks completed
                      </p>
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Start: {employee.startDate}</span>
                      <span>Manager: {employee.manager}</span>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </div>

        {/* Employee Details */}
        <div className="md:col-span-2">
          {selectedEmployee ? (
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Employee Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-lg">{selectedEmployee.name}</h3>
                          <p className="text-muted-foreground">{selectedEmployee.position}</p>
                          <p className="text-sm text-blue-600">{selectedEmployee.department}</p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Start Date: {selectedEmployee.startDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Manager: {selectedEmployee.manager}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Buddy: {selectedEmployee.buddy}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Employee ID: {selectedEmployee.employeeId}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Salary: {selectedEmployee.salary}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg">Progress Overview</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-blue-600 mb-2">{selectedEmployee.progress}%</div>
                              <Progress value={selectedEmployee.progress} className="mb-2" />
                              <p className="text-sm text-muted-foreground">
                                {selectedEmployee.completedTasks} of {selectedEmployee.totalTasks} tasks completed
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <div>
                          <h4 className="font-medium mb-2">Status</h4>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(selectedEmployee.status)}
                            <span className={`font-medium ${getStatusColor(selectedEmployee.status)}`}>
                              {selectedEmployee.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {selectedEmployee.candidateId && (
                        <Link href={`/candidates?candidateId=${selectedEmployee.candidateId}`}>
                          <Button variant="outline">
                            <User className="h-4 w-4 mr-2" />
                            View Candidate Profile
                          </Button>
                        </Link>
                      )}
                      {selectedEmployee.status === "Completed" && (
                        <Link href={`/payroll?employeeId=${selectedEmployee.employeeId}`}>
                          <Button>
                            <ArrowRight className="h-4 w-4 mr-2" />
                            Add to Payroll
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tasks" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Onboarding Tasks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedEmployee.tasks.map((task, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(task.status)}
                            <div>
                              <p className="font-medium">{task.task}</p>
                              <p className="text-sm text-muted-foreground">Due: {task.dueDate}</p>
                              {task.completedDate && (
                                <p className="text-xs text-green-600">Completed: {task.completedDate}</p>
                              )}
                            </div>
                          </div>
                          <Badge
                            variant={
                              task.status === "Completed"
                                ? "default"
                                : task.status === "In Progress"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {task.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Document Checklist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {Object.entries(selectedEmployee.documents).map(([doc, status]) => (
                        <div key={doc} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium capitalize">{doc.replace(/([A-Z])/g, " $1")}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(status)}
                            <Badge
                              variant={
                                status === "Completed" ? "default" : status === "In Progress" ? "secondary" : "outline"
                              }
                            >
                              {status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="timeline" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Onboarding Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedEmployee.tasks
                        .filter((task) => task.status === "Completed")
                        .sort((a, b) => new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime())
                        .map((task, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-green-600" />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="font-medium">{task.task}</p>
                                <p className="text-sm text-muted-foreground">{task.completedDate}</p>
                              </div>
                              <Badge variant="outline" className="text-xs mt-1">
                                Completed
                              </Badge>
                            </div>
                          </div>
                        ))}
                      {selectedEmployee.tasks
                        .filter((task) => task.status !== "Completed")
                        .map((task, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div
                              className={`w-3 h-3 rounded-full ${
                                task.status === "In Progress" ? "bg-blue-600" : "bg-gray-300"
                              }`}
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="font-medium">{task.task}</p>
                                <p className="text-sm text-muted-foreground">Due: {task.dueDate}</p>
                              </div>
                              <Badge variant="outline" className="text-xs mt-1">
                                {task.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
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
                  <h3 className="text-lg font-medium mb-2">Select an Employee</h3>
                  <p className="text-muted-foreground">
                    Choose an employee from the list to view their onboarding progress and details.
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
