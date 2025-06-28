import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Users, Calculator, FileText, Download, Filter, Search } from "lucide-react"
import { mockEmployees, mockPayrollData } from "@/lib/mock-data"

export default function Payroll() {
  const employees = mockEmployees

  const monthlyPayroll = mockPayrollData

  const payrollSummary = {
    totalEmployees: 4,
    totalSalaries: 9500000, // ₹95L total
    totalDeductions: 1425000, // ₹14.25L total
    totalNetPay: 8075000, // ₹80.75L total
    averageSalary: 2375000, // ₹23.75L average
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Payroll Management</h1>
        <p className="text-muted-foreground">Manage employee salaries, deductions, and generate payslips</p>
      </div>

      {/* Payroll Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{payrollSummary.totalEmployees}</div>
            <p className="text-xs text-muted-foreground">Active employees</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Salaries</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{(payrollSummary.totalSalaries / 100000).toFixed(1)}L</div>
            <p className="text-xs text-muted-foreground">Annual gross pay</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Deductions</CardTitle>
            <Calculator className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{(payrollSummary.totalDeductions / 100000).toFixed(1)}L</div>
            <p className="text-xs text-muted-foreground">Annual deductions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Payroll</CardTitle>
            <FileText className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{(payrollSummary.totalNetPay / 100000).toFixed(1)}L</div>
            <p className="text-xs text-muted-foreground">Annual net pay</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="employees" className="space-y-4">
        <TabsList>
          <TabsTrigger value="employees">Employee Payroll</TabsTrigger>
          <TabsTrigger value="monthly">Monthly Processing</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="employees" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Employee Payroll Overview</CardTitle>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search employees..." className="pl-10 w-64" />
                  </div>
                  <Select defaultValue="all-departments">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-departments">All Departments</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                    </SelectContent>
                  </Select>
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
                    <TableHead>Department</TableHead>
                    <TableHead>Annual Salary</TableHead>
                    <TableHead>Deductions</TableHead>
                    <TableHead>Net Pay</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{employee.name}</p>
                          <p className="text-sm text-muted-foreground">{employee.position}</p>
                        </div>
                      </TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>₹{(employee.salary / 100000).toFixed(1)}L</TableCell>
                      <TableCell>₹{(employee.deductions / 100000).toFixed(1)}L</TableCell>
                      <TableCell className="font-medium">₹{(employee.netPay / 100000).toFixed(1)}L</TableCell>
                      <TableCell>
                        <Badge variant={employee.status === "Active" ? "default" : "secondary"}>
                          {employee.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Payslip
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Payroll Processing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Pay Period</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jan-2024">January 2024</SelectItem>
                        <SelectItem value="feb-2024">February 2024</SelectItem>
                        <SelectItem value="mar-2024">March 2024</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Department</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All departments" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full">Process Payroll</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Export Payroll Data
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Employees to Process</span>
                  <span className="font-semibold">4</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Gross Pay</span>
                  <span className="font-semibold">₹5,21,667</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Deductions</span>
                  <span className="font-semibold">₹84,583</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-medium">Total Net Pay</span>
                  <span className="font-bold">₹4,37,084</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Payroll Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Base Salary</TableHead>
                    <TableHead>Overtime</TableHead>
                    <TableHead>Bonus</TableHead>
                    <TableHead>Gross Pay</TableHead>
                    <TableHead>Deductions</TableHead>
                    <TableHead>Net Pay</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {monthlyPayroll.map((payroll, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{payroll.employee}</TableCell>
                      <TableCell>₹{payroll.baseSalary.toLocaleString("en-IN")}</TableCell>
                      <TableCell>₹{payroll.overtime.toLocaleString("en-IN")}</TableCell>
                      <TableCell>₹{payroll.bonus.toLocaleString("en-IN")}</TableCell>
                      <TableCell>₹{payroll.grossPay.toLocaleString("en-IN")}</TableCell>
                      <TableCell>₹{payroll.totalDeductions.toLocaleString("en-IN")}</TableCell>
                      <TableCell className="font-medium">₹{payroll.netPay.toLocaleString("en-IN")}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Generate Payslip
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="cursor-pointer hover:bg-gray-50">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <h3 className="font-medium mb-2">Payroll Summary</h3>
                <p className="text-sm text-muted-foreground">Generate monthly payroll summary report</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:bg-gray-50">
              <CardContent className="p-6 text-center">
                <Calculator className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <h3 className="font-medium mb-2">Tax Report</h3>
                <p className="text-sm text-muted-foreground">Generate tax deduction and compliance report</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:bg-gray-50">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <h3 className="font-medium mb-2">Cost Analysis</h3>
                <p className="text-sm text-muted-foreground">Analyze payroll costs by department</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
