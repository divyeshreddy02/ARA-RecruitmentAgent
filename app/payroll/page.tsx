"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DollarSign,
  Users,
  Calculator,
  FileText,
  Download,
  Eye,
  TrendingUp,
  Building,
  CreditCard,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import { mockEmployees, mockPayrollData, getCandidateById } from "@/lib/mock-data"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function PayrollManagement() {
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [isProcessPayrollOpen, setIsProcessPayrollOpen] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    const employeeId = searchParams.get("employeeId")
    if (employeeId) {
      const employee = mockEmployees.find((e) => e.employeeId === employeeId)
      if (employee) setSelectedEmployee(employee)
    }
  }, [searchParams])

  const employees = mockEmployees
  const payrollData = mockPayrollData

  const totalPayroll = payrollData.reduce((sum, emp) => sum + emp.netPay, 0)
  const totalDeductions = payrollData.reduce((sum, emp) => sum + emp.totalDeductions, 0)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Payroll Management</h1>
          <p className="text-muted-foreground">Manage employee salaries, deductions, and payroll processing</p>
        </div>
        <Dialog open={isProcessPayrollOpen} onOpenChange={setIsProcessPayrollOpen}>
          <DialogTrigger asChild>
            <Button>
              <Calculator className="h-4 w-4 mr-2" />
              Process Payroll
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Process Monthly Payroll</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Pay Period</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pay period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="feb-2024">February 2024</SelectItem>
                    <SelectItem value="jan-2024">January 2024</SelectItem>
                    <SelectItem value="dec-2023">December 2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Department</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All departments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="product">Product</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Payroll Summary</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Total Employees:</span>
                    <span className="font-medium">{employees.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gross Payroll:</span>
                    <span className="font-medium">{formatCurrency(totalPayroll + totalDeductions)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Deductions:</span>
                    <span className="font-medium">{formatCurrency(totalDeductions)}</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Net Payroll:</span>
                    <span>{formatCurrency(totalPayroll)}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsProcessPayrollOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsProcessPayrollOpen(false)}>Process Payroll</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Payroll Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Employees</p>
                <p className="text-2xl font-bold">{employees.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Active payroll</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Payroll</p>
                <p className="text-2xl font-bold">{formatCurrency(totalPayroll).replace("₹", "₹")}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Net amount</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Deductions</p>
                <p className="text-2xl font-bold">{formatCurrency(totalDeductions).replace("₹", "₹")}</p>
              </div>
              <Calculator className="h-8 w-8 text-orange-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">PF, ESI, Tax</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Salary</p>
                <p className="text-2xl font-bold">
                  {formatCurrency(totalPayroll / employees.length).replace("₹", "₹")}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Per employee</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="employees" className="space-y-4">
        <TabsList>
          <TabsTrigger value="employees">Employee Payroll</TabsTrigger>
          <TabsTrigger value="payslips">Payslips</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="employees" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employee Payroll Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Base Salary</TableHead>
                    <TableHead>Deductions</TableHead>
                    <TableHead>Net Pay</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => {
                    const candidate = getCandidateById(employee.candidateId)
                    return (
                      <TableRow key={employee.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{employee.name}</p>
                            <p className="text-sm text-muted-foreground">{employee.employeeId}</p>
                            <p className="text-xs text-blue-600">{employee.position}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Building className="h-3 w-3" />
                            {employee.department}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            {formatCurrency(employee.salary)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Calculator className="h-3 w-3" />
                            {formatCurrency(employee.deductions)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <CreditCard className="h-3 w-3" />
                            <span className="font-medium">{formatCurrency(employee.netPay)}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={employee.status === "Active" ? "default" : "secondary"}>
                            {employee.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm" onClick={() => setSelectedEmployee(employee)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                            {candidate && (
                              <Link href={`/candidates?candidateId=${candidate.id}`}>
                                <Button variant="ghost" size="sm">
                                  Profile
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
        </TabsContent>

        <TabsContent value="payslips" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Payslips - January 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Base Salary</TableHead>
                    <TableHead>Allowances</TableHead>
                    <TableHead>Overtime</TableHead>
                    <TableHead>Gross Pay</TableHead>
                    <TableHead>Deductions</TableHead>
                    <TableHead>Net Pay</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payrollData.map((payroll, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{payroll.employee}</p>
                          <p className="text-sm text-muted-foreground">{payroll.employeeId}</p>
                        </div>
                      </TableCell>
                      <TableCell>{formatCurrency(payroll.baseSalary)}</TableCell>
                      <TableCell>{formatCurrency(payroll.allowances)}</TableCell>
                      <TableCell>{formatCurrency(payroll.overtime)}</TableCell>
                      <TableCell className="font-medium">{formatCurrency(payroll.grossPay)}</TableCell>
                      <TableCell className="text-red-600">{formatCurrency(payroll.totalDeductions)}</TableCell>
                      <TableCell className="font-bold text-green-600">{formatCurrency(payroll.netPay)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          {payroll.candidateId && (
                            <Link href={`/candidates?candidateId=${payroll.candidateId}`}>
                              <Button variant="ghost" size="sm">
                                Profile
                              </Button>
                            </Link>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Department-wise Payroll</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(
                  employees.reduce(
                    (acc, emp) => {
                      acc[emp.department] = (acc[emp.department] || 0) + emp.netPay
                      return acc
                    },
                    {} as Record<string, number>,
                  ),
                )
                  .sort(([, a], [, b]) => b - a)
                  .map(([department, total]) => (
                    <div key={department} className="flex items-center justify-between">
                      <span className="font-medium">{department}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-blue-600 rounded-full"
                            style={{
                              width: `${
                                (total /
                                  Math.max(
                                    ...Object.values(
                                      employees.reduce(
                                        (acc, emp) => {
                                          acc[emp.department] = (acc[emp.department] || 0) + emp.netPay
                                          return acc
                                        },
                                        {} as Record<string, number>,
                                      ),
                                    ),
                                  )) *
                                100
                              }%`,
                            }}
                          />
                        </div>
                        <span className="font-bold text-sm">{formatCurrency(total)}</span>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payroll Trends</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>January 2024</span>
                  <span className="font-bold">{formatCurrency(totalPayroll)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>December 2023</span>
                  <span className="font-bold">{formatCurrency(totalPayroll * 0.95)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>November 2023</span>
                  <span className="font-bold">{formatCurrency(totalPayroll * 0.92)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>October 2023</span>
                  <span className="font-bold">{formatCurrency(totalPayroll * 0.88)}</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center text-green-600">
                    <span className="font-medium">Growth Rate</span>
                    <span className="font-bold">+8.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Payroll Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-medium">Monthly Payroll Report</p>
                    <p className="text-sm text-muted-foreground">Detailed breakdown by employee</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <Calculator className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="font-medium">Tax Deduction Report</p>
                    <p className="text-sm text-muted-foreground">TDS and tax calculations</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <Building className="h-8 w-8 text-purple-600" />
                  <div>
                    <p className="font-medium">PF & ESI Report</p>
                    <p className="text-sm text-muted-foreground">Statutory compliance report</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Compliance Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">PF Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                      <p className="text-sm text-muted-foreground">All employees enrolled</p>
                      <Badge variant="default" className="mt-2">
                        Compliant
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">ESI Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                      <p className="text-sm text-muted-foreground">All eligible employees</p>
                      <Badge variant="default" className="mt-2">
                        Compliant
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">TDS Filing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-2">Pending</div>
                      <p className="text-sm text-muted-foreground">Due: 15th Feb</p>
                      <Badge variant="destructive" className="mt-2">
                        Action Required
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h4 className="font-medium mb-4">Statutory Requirements</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Form 16 Generation</span>
                    </div>
                    <Badge variant="default">Completed</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>PF Monthly Returns</span>
                    </div>
                    <Badge variant="default">Filed</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-4 w-4 text-orange-600" />
                      <span>ESI Monthly Returns</span>
                    </div>
                    <Badge variant="destructive">Due Soon</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Professional Tax</span>
                    </div>
                    <Badge variant="default">Paid</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Employee Detail Modal */}
      {selectedEmployee && (
        <Dialog open={!!selectedEmployee} onOpenChange={() => setSelectedEmployee(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Payroll Details - {selectedEmployee.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Employee Information</Label>
                  <div className="bg-gray-50 p-3 rounded">
                    <p>
                      <strong>Name:</strong> {selectedEmployee.name}
                    </p>
                    <p>
                      <strong>ID:</strong> {selectedEmployee.employeeId}
                    </p>
                    <p>
                      <strong>Position:</strong> {selectedEmployee.position}
                    </p>
                    <p>
                      <strong>Department:</strong> {selectedEmployee.department}
                    </p>
                    <p>
                      <strong>Joining Date:</strong> {selectedEmployee.joiningDate}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Salary Breakdown</Label>
                  <div className="bg-gray-50 p-3 rounded">
                    <p>
                      <strong>Base Salary:</strong> {formatCurrency(selectedEmployee.salary)}
                    </p>
                    <p>
                      <strong>Deductions:</strong> {formatCurrency(selectedEmployee.deductions)}
                    </p>
                    <p>
                      <strong>Net Pay:</strong> {formatCurrency(selectedEmployee.netPay)}
                    </p>
                    <p>
                      <strong>Bank Account:</strong> {selectedEmployee.bankAccount}
                    </p>
                    <p>
                      <strong>PAN:</strong> {selectedEmployee.panNumber}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Payslip
                </Button>
                <Button variant="outline" onClick={() => setSelectedEmployee(null)}>
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
