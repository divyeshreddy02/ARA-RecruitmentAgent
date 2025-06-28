import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, Key, Bell, Users, Mail, Database, Shield } from "lucide-react"

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your recruitment system configuration and preferences</p>
      </div>

      <Tabs defaultValue="company" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="company" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Company Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="Acme Corporation" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select defaultValue="technology">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-size">Company Size</Label>
                  <Select defaultValue="50-200">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="50-200">50-200 employees</SelectItem>
                      <SelectItem value="200+">200+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="ist">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ist">Indian Standard Time</SelectItem>
                      <SelectItem value="pst">Pacific Standard Time</SelectItem>
                      <SelectItem value="est">Eastern Standard Time</SelectItem>
                      <SelectItem value="cst">Central Standard Time</SelectItem>
                      <SelectItem value="mst">Mountain Standard Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Company Address</Label>
                <Textarea
                  id="address"
                  defaultValue="123 Business Park, Whitefield, Bangalore, Karnataka 560066"
                  className="min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Company Website</Label>
                <Input id="website" defaultValue="https://acme.co.in" />
              </div>

              <Button>Save Company Information</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                API Integrations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Database className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn Integration</h3>
                      <p className="text-sm text-muted-foreground">
                        Connect to LinkedIn for job posting and candidate sourcing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch defaultChecked />
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-green-600 rounded-lg flex items-center justify-center">
                      <Database className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">Indeed Integration</h3>
                      <p className="text-sm text-muted-foreground">Post jobs and receive applications from Indeed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Service (SMTP)</h3>
                      <p className="text-sm text-muted-foreground">
                        Configure email service for automated communications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch defaultChecked />
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Database className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">Calendar Integration</h3>
                      <p className="text-sm text-muted-foreground">
                        Connect Google Calendar or Outlook for interview scheduling
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">New Resume Notifications</h3>
                    <p className="text-sm text-muted-foreground">Get notified when new resumes are received</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Interview Reminders</h3>
                    <p className="text-sm text-muted-foreground">Receive reminders for upcoming interviews</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Onboarding Updates</h3>
                    <p className="text-sm text-muted-foreground">Get updates on employee onboarding progress</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Payroll Notifications</h3>
                    <p className="text-sm text-muted-foreground">Notifications for payroll processing and approvals</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">System Updates</h3>
                    <p className="text-sm text-muted-foreground">
                      Important system updates and maintenance notifications
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium mb-4">Email Notification Settings</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="notification-email">Notification Email</Label>
                    <Input id="notification-email" type="email" defaultValue="admin@acme.co.in" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="frequency">Notification Frequency</Label>
                    <Select defaultValue="immediate">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="hourly">Hourly Digest</SelectItem>
                        <SelectItem value="daily">Daily Digest</SelectItem>
                        <SelectItem value="weekly">Weekly Digest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button>Save Notification Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  User Management
                </CardTitle>
                <Button>Add New User</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">AD</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Admin User</h3>
                      <p className="text-sm text-muted-foreground">admin@acme.co.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Super Admin</span>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">HR</span>
                    </div>
                    <div>
                      <h3 className="font-medium">HR Manager</h3>
                      <p className="text-sm text-muted-foreground">hr@acme.co.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">HR Admin</span>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">RM</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Recruiter</h3>
                      <p className="text-sm text-muted-foreground">recruiter@acme.co.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Recruiter</span>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Session Timeout</h3>
                    <p className="text-sm text-muted-foreground">Automatically log out inactive users</p>
                  </div>
                  <Select defaultValue="30">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Password Requirements</h3>
                    <p className="text-sm text-muted-foreground">Enforce strong password policies</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Login Attempt Limits</h3>
                    <p className="text-sm text-muted-foreground">Lock accounts after failed login attempts</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium mb-4">Data Security</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Data Encryption</h4>
                      <p className="text-sm text-muted-foreground">Encrypt sensitive data at rest and in transit</p>
                    </div>
                    <Switch defaultChecked disabled />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Audit Logging</h4>
                      <p className="text-sm text-muted-foreground">Log all user actions for security auditing</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Data Backup</h4>
                      <p className="text-sm text-muted-foreground">Automatic daily backups of all system data</p>
                    </div>
                    <Switch defaultChecked disabled />
                  </div>
                </div>
              </div>

              <Button>Save Security Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
