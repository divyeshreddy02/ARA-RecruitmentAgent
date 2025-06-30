"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Filter,
  Download,
  Eye,
  Clock,
  Users,
  IndianRupee,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Fingerprint,
  MapPin,
} from "lucide-react"
import { mockPayrollData, mockBiometricDevices, mockBiometricLogs } from "@/lib/mock-data"

export default function PayrollPage() {
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null)
  const [attendanceModalOpen, setAttendanceModalOpen] = useState(false)

  const totalPayroll = mockPayrollData.reduce((sum, emp) => sum + emp.netSalary, 0)
  const avgAttendance =
    mockPayrollData.reduce((sum, emp) => sum + (emp.attendance.present / emp.attendance.workingDays) * 100, 0) /
    mockPayrollData.length

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const formatTime = (timeString: string) => {
    return new Date(`2024-01-01T${timeString}`).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Payroll & Attendance</h1>
          <p className="text-muted-foreground">Manage employee payroll and biometric attendance tracking</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Payroll
          </Button>
          <Button>Process Payroll</Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Payroll</p>
                <p className="text-2xl font-bold">{formatCurrency(totalPayroll)}</p>
              </div>
              <IndianRupee className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Employees</p>
                <p className="text-2xl font-bold">{mockPayrollData.length}</p>
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
                <p className="text-sm font-medium text-muted-foreground">Avg. Attendance</p>
                <p className="text-2xl font-bold">{avgAttendance.toFixed(1)}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Devices Online</p>
                <p className="text-2xl font-bold">
                  {mockBiometricDevices.filter((d) => d.status === "online").length}/{mockBiometricDevices.length}
                </p>
              </div>
              <Fingerprint className="h-8 w-8 text-orange-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Biometric scanners</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="payroll" className="space-y-4">
        <TabsList>
          <TabsTrigger value="payroll">Payroll Management</TabsTrigger>
          <TabsTrigger value="attendance">Attendance Tracking</TabsTrigger>
          <TabsTrigger value="devices">Biometric Devices</TabsTrigger>
        </TabsList>

        <TabsContent value="payroll" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Employee Payroll</CardTitle>
                  <CardDescription>January 2024 payroll summary</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search employees..." className="pl-10 w-64" />
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
                    <TableHead>Employee</TableHead>
                    <TableHead>Basic Salary</TableHead>
                    <TableHead>Allowances</TableHead>
                    <TableHead>Deductions</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead>Net Salary</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockPayrollData.map((employee) => {
                    const totalAllowances = Object.values(employee.allowances).reduce((sum, val) => sum + val, 0)
                    const totalDeductions = Object.values(employee.deductions).reduce((sum, val) => sum + val, 0)
                    const attendancePercentage = (employee.attendance.present / employee.attendance.workingDays) * 100

                    return (
                      <TableRow key={employee.employeeId}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder-user.jpg" />
                              <AvatarFallback>
                                {employee.employeeName
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{employee.employeeName}</p>
                              <p className="text-sm text-muted-foreground">ID: {employee.employeeId}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{formatCurrency(employee.basicSalary)}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{formatCurrency(totalAllowances)}</p>
                            <p className="text-xs text-muted-foreground">
                              HRA: {formatCurrency(employee.allowances.hra)}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{formatCurrency(totalDeductions)}</p>
                            <p className="text-xs text-muted-foreground">
                              PF: {formatCurrency(employee.deductions.pf)}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-16">
                              <Progress value={attendancePercentage} className="h-2" />
                            </div>
                            <span className="text-sm font-medium">{attendancePercentage.toFixed(1)}%</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {employee.attendance.present}/{employee.attendance.workingDays} days
                          </p>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium text-green-600">{formatCurrency(employee.netSalary)}</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setSelectedEmployee(employee.employeeId)}
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle>Payroll Details - {employee.employeeName}</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-6 md:grid-cols-2">
                                  <Card>
                                    <CardHeader>
                                      <CardTitle className="text-lg">Salary Breakdown</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                      <div className="flex justify-between">
                                        <span>Basic Salary</span>
                                        <span className="font-medium">{formatCurrency(employee.basicSalary)}</span>
                                      </div>
                                      <div className="space-y-2">
                                        <p className="font-medium text-green-600">Allowances</p>
                                        <div className="pl-4 space-y-1">
                                          <div className="flex justify-between text-sm">
                                            <span>HRA</span>
                                            <span>{formatCurrency(employee.allowances.hra)}</span>
                                          </div>
                                          <div className="flex justify-between text-sm">
                                            <span>Transport</span>
                                            <span>{formatCurrency(employee.allowances.transport)}</span>
                                          </div>
                                          <div className="flex justify-between text-sm">
                                            <span>Medical</span>
                                            <span>{formatCurrency(employee.allowances.medical)}</span>
                                          </div>
                                          <div className="flex justify-between text-sm">
                                            <span>Special</span>
                                            <span>{formatCurrency(employee.allowances.special)}</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="space-y-2">
                                        <p className="font-medium text-red-600">Deductions</p>
                                        <div className="pl-4 space-y-1">
                                          <div className="flex justify-between text-sm">
                                            <span>PF</span>
                                            <span>{formatCurrency(employee.deductions.pf)}</span>
                                          </div>
                                          <div className="flex justify-between text-sm">
                                            <span>ESI</span>
                                            <span>{formatCurrency(employee.deductions.esi)}</span>
                                          </div>
                                          <div className="flex justify-between text-sm">
                                            <span>Tax</span>
                                            <span>{formatCurrency(employee.deductions.tax)}</span>
                                          </div>
                                          <div className="flex justify-between text-sm">
                                            <span>Other</span>
                                            <span>{formatCurrency(employee.deductions.other)}</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-t pt-4">
                                        <div className="flex justify-between font-bold text-lg">
                                          <span>Net Salary</span>
                                          <span className="text-green-600">{formatCurrency(employee.netSalary)}</span>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>

                                  <Card>
                                    <CardHeader>
                                      <CardTitle className="text-lg">Attendance Summary</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center p-3 bg-green-50 rounded-lg">
                                          <p className="text-2xl font-bold text-green-600">
                                            {employee.attendance.present}
                                          </p>
                                          <p className="text-sm text-muted-foreground">Present Days</p>
                                        </div>
                                        <div className="text-center p-3 bg-red-50 rounded-lg">
                                          <p className="text-2xl font-bold text-red-600">
                                            {employee.attendance.absent}
                                          </p>
                                          <p className="text-sm text-muted-foreground">Absent Days</p>
                                        </div>
                                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                                          <p className="text-2xl font-bold text-orange-600">
                                            {employee.attendance.lateArrivals}
                                          </p>
                                          <p className="text-sm text-muted-foreground">Late Arrivals</p>
                                        </div>
                                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                                          <p className="text-2xl font-bold text-blue-600">
                                            {employee.attendance.overtime}
                                          </p>
                                          <p className="text-sm text-muted-foreground">Overtime Hours</p>
                                        </div>
                                      </div>

                                      <div className="space-y-2">
                                        <div className="flex justify-between">
                                          <span>Working Days</span>
                                          <span className="font-medium">{employee.attendance.workingDays}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span>Attendance Rate</span>
                                          <span className="font-medium">{attendancePercentage.toFixed(1)}%</span>
                                        </div>
                                        <Progress value={attendancePercentage} className="h-3" />
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>

                                <Card className="mt-6">
                                  <CardHeader>
                                    <CardTitle className="text-lg">Daily Attendance Records</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="max-h-60 overflow-y-auto">
                                      <Table>
                                        <TableHeader>
                                          <TableRow>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Check In</TableHead>
                                            <TableHead>Check Out</TableHead>
                                            <TableHead>Hours</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Device</TableHead>
                                          </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                          {employee.attendanceRecords.slice(0, 10).map((record, index) => (
                                            <TableRow key={index}>
                                              <TableCell>{record.date}</TableCell>
                                              <TableCell>{record.checkIn ? formatTime(record.checkIn) : "-"}</TableCell>
                                              <TableCell>
                                                {record.checkOut ? formatTime(record.checkOut) : "-"}
                                              </TableCell>
                                              <TableCell>{record.hoursWorked.toFixed(2)}h</TableCell>
                                              <TableCell>
                                                <Badge
                                                  variant={
                                                    record.status === "present"
                                                      ? "default"
                                                      : record.status === "late"
                                                        ? "destructive"
                                                        : "secondary"
                                                  }
                                                >
                                                  {record.status}
                                                </Badge>
                                              </TableCell>
                                              <TableCell>
                                                <div className="flex items-center gap-1">
                                                  <Fingerprint className="h-3 w-3" />
                                                  <span className="text-xs">{record.deviceId || "-"}</span>
                                                </div>
                                              </TableCell>
                                            </TableRow>
                                          ))}
                                        </TableBody>
                                      </Table>
                                    </div>
                                  </CardContent>
                                </Card>
                              </DialogContent>
                            </Dialog>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
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
        </TabsContent>

        <TabsContent value="attendance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Today's Attendance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Present</span>
                    <Badge variant="default" className="bg-green-600">
                      {mockPayrollData.length - 1}/{mockPayrollData.length}
                    </Badge>
                  </div>
                  <Progress value={((mockPayrollData.length - 1) / mockPayrollData.length) * 100} className="h-3" />
                  <div className="text-sm text-muted-foreground">1 employee absent today</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Late Arrivals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">2 employees late today</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Average late time: 25 minutes</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Overtime</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">15.5 hours this week</span>
                  </div>
                  <div className="text-xs text-muted-foreground">3 employees working overtime</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Live Attendance Activity</CardTitle>
                <Button variant="outline" onClick={() => setAttendanceModalOpen(true)}>
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockBiometricLogs.slice(0, 5).map((log) => (
                  <div key={log.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${log.success ? "bg-green-500" : "bg-red-500"}`} />
                      <div>
                        <p className="font-medium">{log.employeeName}</p>
                        <p className="text-sm text-muted-foreground">
                          {log.type === "check-in" ? "Checked In" : "Checked Out"} • {log.deviceLocation}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {new Date(log.timestamp).toLocaleTimeString("en-IN", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {log.success ? "Success" : "Failed"} • {log.responseTime}s
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="devices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Biometric Device Status</CardTitle>
              <CardDescription>Monitor and manage biometric attendance devices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {mockBiometricDevices.map((device) => (
                  <Card key={device.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Fingerprint className="h-5 w-5" />
                          <span className="font-medium">{device.name}</span>
                        </div>
                        <Badge
                          variant={
                            device.status === "online"
                              ? "default"
                              : device.status === "offline"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {device.status}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{device.location}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <p className="text-muted-foreground">Today's Scans</p>
                            <p className="font-medium">{device.totalScans}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Success Rate</p>
                            <p className="font-medium">{device.successRate}%</p>
                          </div>
                        </div>

                        <div className="text-xs text-muted-foreground">
                          Last sync: {new Date(device.lastSync).toLocaleString("en-IN")}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Attendance Details Modal */}
      <Dialog open={attendanceModalOpen} onOpenChange={setAttendanceModalOpen}>
        <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Daily Attendance Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Present</p>
                      <p className="text-2xl font-bold text-green-600">{mockPayrollData.length - 1}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">Absent</p>
                      <p className="text-2xl font-bold text-red-600">1</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium">Late</p>
                      <p className="text-2xl font-bold text-orange-600">2</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Check In</TableHead>
                  <TableHead>Check Out</TableHead>
                  <TableHead>Working Hours</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Device</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockPayrollData.map((employee) => {
                  const todayRecord = employee.attendanceRecords[0] // Most recent record
                  return (
                    <TableRow key={employee.employeeId}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>
                              {employee.employeeName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{employee.employeeName}</span>
                        </div>
                      </TableCell>
                      <TableCell>{todayRecord?.checkIn ? formatTime(todayRecord.checkIn) : "-"}</TableCell>
                      <TableCell>{todayRecord?.checkOut ? formatTime(todayRecord.checkOut) : "-"}</TableCell>
                      <TableCell>{todayRecord ? `${todayRecord.hoursWorked.toFixed(2)}h` : "-"}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            todayRecord?.status === "present"
                              ? "default"
                              : todayRecord?.status === "late"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {todayRecord?.status || "absent"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Fingerprint className="h-3 w-3" />
                          <span className="text-xs">{todayRecord?.deviceId || "-"}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
