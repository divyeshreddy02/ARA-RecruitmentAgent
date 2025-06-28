import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, Clock, FileText, Upload, User, AlertCircle, Calendar } from "lucide-react"
import { mockOnboardingEmployees } from "@/lib/mock-data"

export default function Onboarding() {
  const onboardingEmployees = mockOnboardingEmployees

  const onboardingTasks = [
    { task: "Complete employment contract", required: true },
    { task: "Submit tax forms (Form 16, PAN, Aadhaar)", required: true },
    { task: "Read employee handbook", required: true },
    { task: "Set up equipment and accounts", required: true },
    { task: "Complete security training", required: true },
    { task: "Meet with direct manager", required: true },
    { task: "Complete benefits enrollment (PF, ESI)", required: false },
    { task: "Take company culture course", required: false },
    { task: "Set up salary account", required: true },
    { task: "Complete emergency contact form", required: true },
    { task: "Schedule IT orientation", required: true },
    { task: "Complete workspace setup", required: false },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Employee Onboarding</h1>
        <p className="text-muted-foreground">
          Track new employee onboarding progress and manage required documentation
        </p>
      </div>

      {/* Onboarding Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Currently onboarding</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Active onboarding</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Employee Onboarding Status */}
      <Card>
        <CardHeader>
          <CardTitle>Employee Onboarding Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {onboardingEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell className="font-medium">{employee.name}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {employee.startDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>
                          {employee.completedTasks}/{employee.totalTasks} tasks
                        </span>
                        <span>{employee.progress}%</span>
                      </div>
                      <Progress value={employee.progress} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>
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
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Document Upload Area */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Document Upload Center
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-sm text-muted-foreground mb-2">Upload onboarding documents</p>
              <Button variant="outline">Browse Files</Button>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Recent Uploads</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span className="text-sm">Sneha_Brown_Contract.pdf</span>
                  </div>
                  <Badge variant="outline">Verified</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span className="text-sm">Karthik_Lee_TaxForms.pdf</span>
                  </div>
                  <Badge variant="outline">Pending Review</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Onboarding Checklist Template */}
        <Card>
          <CardHeader>
            <CardTitle>Standard Onboarding Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {onboardingTasks.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 border rounded">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{item.task}</span>
                  </div>
                  <Badge variant={item.required ? "destructive" : "secondary"}>
                    {item.required ? "Required" : "Optional"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
