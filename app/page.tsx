"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
  Users,
  Briefcase,
  Calendar,
  UserCheck,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Target,
  Award,
  ArrowRight,
  Eye,
} from "lucide-react"
import { mockDashboardStats, mockRecentActivity, mockPipelineData, mockJobs, mockCandidates } from "@/lib/mock-data"
import Link from "next/link"

export default function Dashboard() {
  const stats = [
    {
      title: "Active Jobs",
      value: mockDashboardStats.activeJobs.toString(),
      change: "+12%",
      icon: Briefcase,
      color: "text-blue-600",
      subtitle: `${mockDashboardStats.totalJobs} total jobs`,
      link: "/jobs",
    },
    {
      title: "Candidates in Pipeline",
      value: mockDashboardStats.totalCandidates.toString(),
      change: "+8%",
      icon: Users,
      color: "text-green-600",
      subtitle: `${mockDashboardStats.newApplications} new this week`,
      link: "/candidates",
    },
    {
      title: "Interviews Scheduled",
      value: mockDashboardStats.interviewsScheduled.toString(),
      change: "+24%",
      icon: Calendar,
      color: "text-purple-600",
      subtitle: `${mockDashboardStats.interviewsToday} today`,
      link: "/interviews",
    },
    {
      title: "Onboarding in Progress",
      value: mockDashboardStats.onboardingInProgress.toString(),
      change: "-5%",
      icon: UserCheck,
      color: "text-orange-600",
      subtitle: `${mockDashboardStats.onboardingCompleted} completed`,
      link: "/onboarding",
    },
  ]

  const kpiStats = [
    {
      title: "Avg. Time to Hire",
      value: `${mockDashboardStats.averageTimeToHire} days`,
      icon: Clock,
      color: "text-blue-600",
    },
    {
      title: "Cost per Hire",
      value: `₹${(mockDashboardStats.averageCostPerHire / 1000).toFixed(0)}K`,
      icon: Target,
      color: "text-green-600",
    },
    {
      title: "Offer Acceptance Rate",
      value: `${mockDashboardStats.offerAcceptanceRate}%`,
      icon: Award,
      color: "text-purple-600",
    },
  ]

  const urgentJobs = mockJobs.filter((job) => job.urgency === "High" && job.status === "Active").slice(0, 3)
  const topCandidates = mockCandidates.filter((candidate) => candidate.score >= 90).slice(0, 3)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Recruitment Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your recruitment process.</p>
      </div>

      {/* Main Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.title} href={stat.link}>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}>{stat.change}</span>{" "}
                  from last month
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {kpiStats.map((kpi) => (
          <Card key={kpi.title}>
            <CardContent className="flex items-center p-6">
              <kpi.icon className={`h-8 w-8 ${kpi.color} mr-4`} />
              <div>
                <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                <p className="text-2xl font-bold">{kpi.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recruitment Pipeline */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Recruitment Pipeline
              </CardTitle>
              <Link href="/candidates">
                <Button variant="ghost" size="sm">
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockPipelineData.map((stage) => (
              <div key={stage.stage} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{stage.stage}</span>
                  <span className="font-medium">
                    {stage.count} candidates ({stage.percentage}%)
                  </span>
                </div>
                <Progress value={stage.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <Button variant="ghost" size="sm">
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockRecentActivity.slice(0, 5).map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className="mt-1">
                  {activity.status === "completed" && <CheckCircle className="h-4 w-4 text-green-600" />}
                  {activity.status === "pending" && <Clock className="h-4 w-4 text-orange-600" />}
                  {activity.status === "new" && <AlertCircle className="h-4 w-4 text-blue-600" />}
                  {activity.status === "active" && <Briefcase className="h-4 w-4 text-purple-600" />}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.description}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {activity.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Urgent Jobs & Top Candidates */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-red-600">🔥 Urgent Job Openings</CardTitle>
              <Link href="/jobs">
                <Button variant="ghost" size="sm">
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {urgentJobs.map((job) => (
              <div key={job.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{job.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {job.department} • {job.location}
                  </p>
                  <p className="text-sm text-green-600">{job.resumesReceived} applications</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Urgent</Badge>
                  <Link href={`/jobs?jobId=${job.id}`}>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-green-600">⭐ Top Candidates</CardTitle>
              <Link href="/candidates">
                <Button variant="ghost" size="sm">
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {topCandidates.map((candidate) => (
              <div key={candidate.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{candidate.name}</p>
                  <p className="text-sm text-muted-foreground">{candidate.position}</p>
                  <p className="text-sm text-blue-600">{candidate.score}% match</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default">{candidate.status}</Badge>
                  <Link href={`/candidates?candidateId=${candidate.id}`}>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Source Effectiveness */}
      <Card>
        <CardHeader>
          <CardTitle>Candidate Source Effectiveness</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5">
            {Object.entries(mockDashboardStats.sourceEffectiveness).map(([source, percentage]) => (
              <div key={source} className="text-center">
                <div className="text-2xl font-bold text-blue-600">{percentage}%</div>
                <p className="text-sm text-muted-foreground capitalize">{source}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/jobs">
              <div className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <Briefcase className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="font-medium">Post New Job</p>
                  <p className="text-sm text-muted-foreground">Create a new job posting</p>
                </div>
              </div>
            </Link>
            <Link href="/candidates">
              <div className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <Users className="h-8 w-8 text-green-600" />
                <div>
                  <p className="font-medium">Review Candidates</p>
                  <p className="text-sm text-muted-foreground">Screen pending applications</p>
                </div>
              </div>
            </Link>
            <Link href="/interviews">
              <div className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <Calendar className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="font-medium">Schedule Interview</p>
                  <p className="text-sm text-muted-foreground">Book interview slots</p>
                </div>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
