"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DollarSign,
  Users,
  Clock,
  TrendingUp,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Download,
  Filter,
  Search,
  Fingerprint,
  Wifi,
  WifiOff,
  Settings,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { mockPayrollData, mockBiometricDevices, mockBiometricLogs } from "@/lib/mock-data"

export default function PayrollPage() {
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null)
  const [attendanceModalOpen, setAttendanceModalOpen] = useState(false)

  const totalEmployees = mockPayrollData.length
  const totalPayroll = mockPayrollData.reduce((sum, emp) => sum + emp.netSalary, 0)
  const avgAttendance =
    mockPayrollData.reduce((sum, emp) => sum + (emp.attendance.present / emp.attendance.workingDays) * 100, 0) /
    totalEmployees

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present":
        return "bg-green-100 text-green-800"
      case "late":
        return "bg-yellow-100 text-yellow-800"
      case "absent":
        return "bg-red-100 text-red-800"
      case "leave":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getDeviceStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "text-green-600"
      case "offline":
        return "text-red-600"
      case "maintenance":
        return "text-yellow-600"
      default:
        return "text-gray-600"
    }
  }

  const selectedEmployeeData = selectedEmployee
    ? mockPayrollData.find((emp) => emp.employeeId === selectedEmployee)
    : null

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Payroll & Attendance</h1>
          <p className="text-muted-foreground">Manage employee payroll and track attendance</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">Process Payroll</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalEmployees}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Payroll</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{(totalPayroll / 100000).toFixed(1)}L</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Attendance</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgAttendance.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overtime Hours</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockPayrollData.reduce((sum, emp) => sum + emp.attendance.overtime, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">+15%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="payroll" className="space-y-4">
        <TabsList>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="biometric">Biometric Logs</TabsTrigger>
        </TabsList>

        {/* Payroll Tab */}
        <TabsContent value="payroll" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employee Payroll</CardTitle>
              <CardDescription>January 2024 payroll summary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search employees..." className="pl-8" />
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Basic Salary</TableHead>
                      <TableHead>Allowances</TableHead>
                      <TableHead>Deductions</TableHead>
                      <TableHead>Net Salary</TableHead>
                      <TableHead>Attendance</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockPayrollData.map((employee) => (
                      <TableRow key={employee.employeeId}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>
                                {employee.employeeName
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{employee.employeeName}</p>
                              <p className="text-sm text-muted-foreground">{employee.employeeId}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>₹{employee.basicSalary.toLocaleString()}</TableCell>
                        <TableCell>
                          ₹
                          {(
                            employee.allowances.hra +
                            employee.allowances.transport +
                            employee.allowances.medical +
                            employee.allowances.special
                          ).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          ₹
                          {(
                            employee.deductions.pf +
                            employee.deductions.esi +
                            employee.deductions.tax +
                            employee.deductions.other
                          ).toLocaleString()}
                        </TableCell>
                        <TableCell className="font-medium">₹{employee.netSalary.toLocaleString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress
                              value={(employee.attendance.present / employee.attendance.workingDays) * 100}
                              className="w-16 h-2"
                            />
                            <span className="text-sm">
                              {((employee.attendance.present / employee.attendance.workingDays) * 100).toFixed(0)}%
                            </span>
                          </div>
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
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Attendance Tab */}
        <TabsContent value="attendance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Overview</CardTitle>
              <CardDescription>Employee attendance tracking with biometric data</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Working Days</TableHead>
                    <TableHead>Present</TableHead>
                    <TableHead>Absent</TableHead>
                    <TableHead>Late Arrivals</TableHead>
                    <TableHead>Overtime (hrs)</TableHead>
                    <TableHead>Attendance %</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockPayrollData.map((employee) => (
                    <TableRow key={employee.employeeId}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>
                              {employee.employeeName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{employee.employeeName}</p>
                            <p className="text-sm text-muted-foreground">{employee.employeeId}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{employee.attendance.workingDays}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          {employee.attendance.present}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-red-50 text-red-700">
                          {employee.attendance.absent}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
                          {employee.attendance.lateArrivals}
                        </Badge>
                      </TableCell>
                      <TableCell>{employee.attendance.overtime}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress
                            value={(employee.attendance.present / employee.attendance.workingDays) * 100}
                            className="w-16 h-2"
                          />
                          <span className="text-sm font-medium">
                            {((employee.attendance.present / employee.attendance.workingDays) * 100).toFixed(0)}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Dialog
                          open={attendanceModalOpen && selectedEmployee === employee.employeeId}
                          onOpenChange={(open) => {
                            setAttendanceModalOpen(open)
                            if (!open) setSelectedEmployee(null)
                          }}
                        >
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" onClick={() => setSelectedEmployee(employee.employeeId)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Daily Attendance - {employee.employeeName}</DialogTitle>
                              <DialogDescription>Detailed attendance records for the last 10 days</DialogDescription>
                            </DialogHeader>

                            {selectedEmployeeData && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-4 gap-4 p-4 bg-muted rounded-lg">
                                  <div className="text-center">
                                    <p className="text-2xl font-bold text-green-600">
                                      {selectedEmployeeData.attendance.present}
                                    </p>
                                    <p className="text-sm text-muted-foreground">Present Days</p>
                                  </div>
                                  <div className="text-center">
                                    <p className="text-2xl font-bold text-red-600">
                                      {selectedEmployeeData.attendance.absent}
                                    </p>
                                    <p className="text-sm text-muted-foreground">Absent Days</p>
                                  </div>
                                  <div className="text-center">
                                    <p className="text-2xl font-bold text-yellow-600">
                                      {selectedEmployeeData.attendance.lateArrivals}
                                    </p>
                                    <p className="text-sm text-muted-foreground">Late Arrivals</p>
                                  </div>
                                  <div className="text-center">
                                    <p className="text-2xl font-bold text-blue-600">
                                      {selectedEmployeeData.attendance.overtime}h
                                    </p>
                                    <p className="text-sm text-muted-foreground">Overtime</p>
                                  </div>
                                </div>

                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>Date</TableHead>
                                      <TableHead>Check In</TableHead>
                                      <TableHead>Check Out</TableHead>
                                      <TableHead>Hours</TableHead>
                                      <TableHead>Overtime</TableHead>
                                      <TableHead>Status</TableHead>
                                      <TableHead>Device</TableHead>
                                      <TableHead>Remarks</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    {selectedEmployeeData.attendanceRecords.map((record, index) => (
                                      <TableRow key={index}>
                                        <TableCell className="font-medium">
                                          {new Date(record.date).toLocaleDateString()}
                                        </TableCell>
                                        <TableCell>
                                          {record.checkIn ? (
                                            <div className="flex items-center gap-2">
                                              <CheckCircle className="h-4 w-4 text-green-600" />
                                              {record.checkIn}
                                            </div>
                                          ) : (
                                            <div className="flex items-center gap-2">
                                              <XCircle className="h-4 w-4 text-red-600" />
                                              --
                                            </div>
                                          )}
                                        </TableCell>
                                        <TableCell>
                                          {record.checkOut ? (
                                            <div className="flex items-center gap-2">
                                              <CheckCircle className="h-4 w-4 text-green-600" />
                                              {record.checkOut}
                                            </div>
                                          ) : (
                                            <div className="flex items-center gap-2">
                                              <XCircle className="h-4 w-4 text-red-600" />
                                              --
                                            </div>
                                          )}
                                        </TableCell>
                                        <TableCell>{record.hoursWorked.toFixed(2)}</TableCell>
                                        <TableCell>
                                          {record.overtime > 0 ? (
                                            <Badge variant="outline" className="bg-blue-50 text-blue-700">
                                              +{record.overtime.toFixed(2)}h
                                            </Badge>
                                          ) : (
                                            "--"
                                          )}
                                        </TableCell>
                                        <TableCell>
                                          <Badge className={getStatusColor(record.status)}>{record.status}</Badge>
                                        </TableCell>
                                        <TableCell>
                                          {record.deviceId ? (
                                            <div className="flex items-center gap-1">
                                              <Fingerprint className="h-3 w-3" />
                                              <span className="text-xs">{record.deviceId}</span>
                                            </div>
                                          ) : (
                                            "--"
                                          )}
                                        </TableCell>
                                        <TableCell className="text-sm text-muted-foreground">
                                          {record.remarks || "--"}
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Biometric Logs Tab */}
        <TabsContent value="biometric" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {mockBiometricDevices.map((device) => (
              <Card key={device.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{device.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    {device.status === "online" ? (
                      <Wifi className={`h-4 w-4 ${getDeviceStatusColor(device.status)}`} />
                    ) : device.status === "offline" ? (
                      <WifiOff className={`h-4 w-4 ${getDeviceStatusColor(device.status)}`} />
                    ) : (
                      <Settings className={`h-4 w-4 ${getDeviceStatusColor(device.status)}`} />
                    )}
                    <Badge variant={device.status === "online" ? "default" : "secondary"}>{device.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{device.location}</p>
                    <div className="flex justify-between text-sm">
                      <span>Total Scans:</span>
                      <span className="font-medium">{device.totalScans}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Success Rate:</span>
                      <span className="font-medium">{device.successRate}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Last Sync:</span>
                      <span className="font-medium">{new Date(device.lastSync).toLocaleTimeString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Biometric Activity</CardTitle>
              <CardDescription>Live feed of check-in/check-out events</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Device</TableHead>
                    <TableHead>Fingerprint</TableHead>
                    <TableHead>Response Time</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockBiometricLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>
                              {log.employeeName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{log.employeeName}</p>
                            <p className="text-sm text-muted-foreground">{log.employeeId}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={log.type === "check-in" ? "default" : "secondary"}>{log.type}</Badge>
                      </TableCell>
                      <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Fingerprint className="h-4 w-4" />
                          {log.deviceLocation}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{log.fingerprintType}</Badge>
                      </TableCell>
                      <TableCell>{log.responseTime}s</TableCell>
                      <TableCell>
                        {log.success ? (
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-green-600">Success</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-red-600" />
                            <span className="text-red-600">Failed</span>
                          </div>
                        )}
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
