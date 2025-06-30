export interface Employee {
  id: string
  name: string
  email: string
  department: string
  position: string
  salary: number
  joinDate: string
  status: "active" | "inactive"
  avatar?: string
  phone?: string
  address?: string
  emergencyContact?: string
  bankAccount?: string
  panNumber?: string
  aadharNumber?: string
  pfNumber?: string
  esiNumber?: string
}

export interface Job {
  id: number
  title: string
  department: string
  location: string
  type: "full-time" | "part-time" | "contract" | "internship"
  status: "Active" | "Paused" | "Closed"
  postedDate: string
  applications: number
  resumesReceived: number
  description: string
  requirements: string[]
  salary: string
  experience: string
  skills: string[]
  urgency?: "High" | "Medium" | "Low"
}

export interface Candidate {
  id: number
  name: string
  email: string
  phone: string
  position: string
  experience: number
  status: "New" | "Initial Screening" | "Shortlisted" | "Interview Scheduled" | "Rejected" | "Hired"
  appliedDate: string
  appliedFor: string
  resumeUrl?: string
  skills: string[]
  education: string
  location: string
  expectedSalary: number
  noticePeriod: string
  source: string
  score: number
  jobId: number
}

export interface Interview {
  id: string
  candidateId: string
  candidateName: string
  position: string
  interviewer: string
  date: string
  time: string
  type: "phone" | "video" | "in-person" | "technical" | "hr"
  status: "scheduled" | "completed" | "cancelled" | "rescheduled"
  feedback?: string
  rating?: number
  duration: number
  location?: string
  meetingLink?: string
}

export interface AttendanceRecord {
  date: string
  checkIn: string | null
  checkOut: string | null
  hoursWorked: number
  overtime: number
  status: "present" | "absent" | "late" | "half-day" | "leave"
  remarks?: string
  deviceId?: string
  fingerprintType?: string
}

export interface BiometricLog {
  id: string
  employeeId: string
  employeeName: string
  timestamp: string
  type: "check-in" | "check-out"
  deviceId: string
  deviceLocation: string
  fingerprintType: "thumb" | "index" | "middle"
  success: boolean
  responseTime: number
}

export interface BiometricDevice {
  id: string
  name: string
  location: string
  status: "online" | "offline" | "maintenance"
  lastSync: string
  totalScans: number
  successRate: number
}

export interface PayrollData {
  employeeId: string
  employeeName: string
  basicSalary: number
  allowances: {
    hra: number
    transport: number
    medical: number
    special: number
  }
  deductions: {
    pf: number
    esi: number
    tax: number
    other: number
  }
  attendance: {
    workingDays: number
    present: number
    absent: number
    leaves: number
    overtime: number
    lateArrivals: number
    earlyDepartures: number
  }
  attendanceRecords: AttendanceRecord[]
  netSalary: number
  payPeriod: string
}

// Dashboard Stats
export const mockDashboardStats = {
  totalJobs: 45,
  activeJobs: 23,
  totalCandidates: 1247,
  interviewsScheduled: 18,
  onboardingInProgress: 7,
  totalEmployees: 156,
  presentToday: 142,
  attendanceRate: 91.0,
}

export const mockRecentActivity = [
  {
    id: 1,
    type: "interview",
    message: "Interview scheduled with Sarah Johnson for Senior Developer position",
    time: "2 hours ago",
    status: "scheduled",
  },
  {
    id: 2,
    type: "application",
    message: "New application received for Marketing Manager role",
    time: "4 hours ago",
    status: "new",
  },
  {
    id: 3,
    type: "onboarding",
    message: "John Smith completed onboarding documentation",
    time: "6 hours ago",
    status: "completed",
  },
  {
    id: 4,
    type: "interview",
    message: "Interview completed for UI/UX Designer position",
    time: "1 day ago",
    status: "completed",
  },
]

export const mockPipelineData = [
  { stage: "Applied", count: 245, color: "#3b82f6" },
  { stage: "Screening", count: 89, color: "#8b5cf6" },
  { stage: "Interview", count: 34, color: "#06b6d4" },
  { stage: "Offer", count: 12, color: "#10b981" },
  { stage: "Hired", count: 8, color: "#f59e0b" },
]

export const mockNotifications = [
  {
    id: 1,
    title: "Interview Reminder",
    message: "Interview with Sarah Johnson in 30 minutes",
    time: "30 min",
    type: "reminder",
    unread: true,
  },
  {
    id: 2,
    title: "New Application",
    message: "New application for Senior Developer position",
    time: "2 hours",
    type: "application",
    unread: true,
  },
  {
    id: 3,
    title: "Onboarding Complete",
    message: "John Smith completed all onboarding tasks",
    time: "4 hours",
    type: "success",
    unread: false,
  },
]

export const mockOnboardingEmployees = [
  {
    id: 1,
    name: "Alex Chen",
    position: "Frontend Developer",
    department: "Engineering",
    startDate: "2024-01-15",
    progress: 75,
    status: "in-progress",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    name: "Maria Garcia",
    position: "Product Manager",
    department: "Product",
    startDate: "2024-01-20",
    progress: 45,
    status: "in-progress",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 3,
    name: "David Kim",
    position: "Data Analyst",
    department: "Analytics",
    startDate: "2024-01-22",
    progress: 90,
    status: "in-progress",
    avatar: "/placeholder-user.jpg",
  },
]

// Mock Data
export const mockEmployees: Employee[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@company.com",
    department: "Engineering",
    position: "Senior Software Engineer",
    salary: 120000,
    joinDate: "2023-01-15",
    status: "active",
    phone: "+91-9876543210",
    address: "Bangalore, Karnataka",
    emergencyContact: "+91-9876543211",
    bankAccount: "HDFC-1234567890",
    panNumber: "ABCDE1234F",
    aadharNumber: "1234-5678-9012",
    pfNumber: "KA/BGE/12345/67890",
    esiNumber: "1234567890123456",
  },
  {
    id: "2",
    name: "Priya Sharma",
    email: "priya.sharma@company.com",
    department: "HR",
    position: "HR Manager",
    salary: 95000,
    joinDate: "2022-08-20",
    status: "active",
    phone: "+91-9876543220",
    address: "Mumbai, Maharashtra",
    emergencyContact: "+91-9876543221",
    bankAccount: "ICICI-2345678901",
    panNumber: "BCDEF2345G",
    aadharNumber: "2345-6789-0123",
    pfNumber: "MH/MUM/23456/78901",
    esiNumber: "2345678901234567",
  },
  {
    id: "3",
    name: "Amit Patel",
    email: "amit.patel@company.com",
    department: "Sales",
    position: "Sales Executive",
    salary: 75000,
    joinDate: "2023-03-10",
    status: "active",
    phone: "+91-9876543230",
    address: "Ahmedabad, Gujarat",
    emergencyContact: "+91-9876543231",
    bankAccount: "SBI-3456789012",
    panNumber: "CDEFG3456H",
    aadharNumber: "3456-7890-1234",
    pfNumber: "GJ/AMD/34567/89012",
    esiNumber: "3456789012345678",
  },
]

export const mockJobs: Job[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Bangalore, Karnataka",
    type: "full-time",
    status: "Active",
    postedDate: "2024-01-15",
    applications: 89,
    resumesReceived: 89,
    description: "We are looking for an experienced Full Stack Developer to join our engineering team.",
    requirements: ["5+ years experience", "React/Node.js", "TypeScript", "AWS"],
    salary: "₹15L - ₹25L",
    experience: "5-8 years",
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    urgency: "High",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "Mumbai, Maharashtra",
    type: "full-time",
    status: "Active",
    postedDate: "2024-01-12",
    applications: 67,
    resumesReceived: 67,
    description: "Join our product team to drive product strategy and roadmap.",
    requirements: ["3+ years PM experience", "Analytics", "User Research", "Agile"],
    salary: "₹18L - ₹30L",
    experience: "3-6 years",
    skills: ["Product Strategy", "Analytics", "User Research", "Agile", "Figma"],
  },
  {
    id: 3,
    title: "Senior UX Designer",
    department: "Design",
    location: "Pune, Maharashtra",
    type: "full-time",
    status: "Active",
    postedDate: "2024-01-10",
    applications: 45,
    resumesReceived: 45,
    description: "Create exceptional user experiences for our digital products.",
    requirements: ["4+ years UX experience", "Figma/Sketch", "User Research", "Prototyping"],
    salary: "₹12L - ₹20L",
    experience: "4-7 years",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Usability Testing"],
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Hyderabad, Telangana",
    type: "full-time",
    status: "Active",
    postedDate: "2024-01-08",
    applications: 78,
    resumesReceived: 78,
    description: "Manage our cloud infrastructure and deployment pipelines.",
    requirements: ["AWS/Azure", "Docker/Kubernetes", "CI/CD", "Terraform"],
    salary: "₹16L - ₹28L",
    experience: "4-8 years",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
  },
  {
    id: 5,
    title: "Data Scientist",
    department: "Analytics",
    location: "Chennai, Tamil Nadu",
    type: "full-time",
    status: "Paused",
    postedDate: "2024-01-05",
    applications: 34,
    resumesReceived: 34,
    description: "Analyze data to drive business insights and machine learning models.",
    requirements: ["Python/R", "Machine Learning", "SQL", "Statistics"],
    salary: "₹14L - ₹24L",
    experience: "3-6 years",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Statistics"],
  },
  {
    id: 6,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Delhi, NCR",
    type: "full-time",
    status: "Active",
    postedDate: "2024-01-03",
    applications: 56,
    resumesReceived: 56,
    description: "Lead marketing campaigns and brand strategy initiatives.",
    requirements: ["Digital Marketing", "Content Strategy", "Analytics", "Team Leadership"],
    salary: "₹10L - ₹18L",
    experience: "3-5 years",
    skills: ["Digital Marketing", "Content Strategy", "Google Analytics", "SEO", "Social Media"],
  },
]

export const mockCandidates: Candidate[] = [
  {
    id: 1,
    name: "Arjun Reddy",
    email: "arjun.reddy@email.com",
    phone: "+91-9876543240",
    position: "Senior Full Stack Developer",
    experience: 6,
    status: "Interview Scheduled",
    appliedDate: "2024-01-20",
    appliedFor: "Senior Full Stack Developer",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    education: "B.Tech Computer Science",
    location: "Hyderabad",
    expectedSalary: 2200000,
    noticePeriod: "30 days",
    source: "LinkedIn",
    score: 92,
    jobId: 1,
  },
  {
    id: 2,
    name: "Sneha Gupta",
    email: "sneha.gupta@email.com",
    phone: "+91-9876543250",
    position: "Product Manager",
    experience: 4,
    status: "Shortlisted",
    appliedDate: "2024-01-18",
    appliedFor: "Product Manager",
    skills: ["Product Strategy", "Analytics", "User Research"],
    education: "MBA Marketing",
    location: "Mumbai",
    expectedSalary: 2500000,
    noticePeriod: "45 days",
    source: "Naukri.com",
    score: 88,
    jobId: 2,
  },
  {
    id: 3,
    name: "Karthik Nair",
    email: "karthik.nair@email.com",
    phone: "+91-9876543260",
    position: "Senior UX Designer",
    experience: 5,
    status: "Initial Screening",
    appliedDate: "2024-01-16",
    appliedFor: "Senior UX Designer",
    skills: ["Figma", "User Research", "Prototyping"],
    education: "B.Des Visual Communication",
    location: "Pune",
    expectedSalary: 1800000,
    noticePeriod: "30 days",
    source: "Company Website",
    score: 85,
    jobId: 3,
  },
  {
    id: 4,
    name: "Priya Patel",
    email: "priya.patel@email.com",
    phone: "+91-9876543270",
    position: "DevOps Engineer",
    experience: 5,
    status: "New",
    appliedDate: "2024-01-14",
    appliedFor: "DevOps Engineer",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    education: "B.Tech Information Technology",
    location: "Hyderabad",
    expectedSalary: 2400000,
    noticePeriod: "60 days",
    source: "LinkedIn",
    score: 90,
    jobId: 4,
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.singh@email.com",
    phone: "+91-9876543280",
    position: "Data Scientist",
    experience: 4,
    status: "Rejected",
    appliedDate: "2024-01-12",
    appliedFor: "Data Scientist",
    skills: ["Python", "Machine Learning", "SQL"],
    education: "M.Tech Data Science",
    location: "Chennai",
    expectedSalary: 2000000,
    noticePeriod: "30 days",
    source: "Naukri.com",
    score: 75,
    jobId: 5,
  },
]

export const mockInterviews: Interview[] = [
  {
    id: "1",
    candidateId: "1",
    candidateName: "Arjun Reddy",
    position: "Senior Full Stack Developer",
    interviewer: "Rajesh Kumar",
    date: "2024-01-25",
    time: "10:00 AM",
    type: "technical",
    status: "scheduled",
    duration: 60,
    meetingLink: "https://meet.google.com/abc-defg-hij",
  },
  {
    id: "2",
    candidateId: "2",
    candidateName: "Sneha Gupta",
    position: "Product Manager",
    interviewer: "Priya Sharma",
    date: "2024-01-26",
    time: "2:00 PM",
    type: "hr",
    status: "scheduled",
    duration: 45,
    location: "Conference Room A",
  },
]

export const mockBiometricDevices: BiometricDevice[] = [
  {
    id: "BIO001",
    name: "Main Entrance Scanner",
    location: "Ground Floor - Main Entrance",
    status: "online",
    lastSync: "2024-01-28T09:30:00Z",
    totalScans: 1247,
    successRate: 99.2,
  },
  {
    id: "BIO002",
    name: "Office Floor Scanner",
    location: "3rd Floor - Office Entrance",
    status: "online",
    lastSync: "2024-01-28T09:28:00Z",
    totalScans: 892,
    successRate: 98.8,
  },
  {
    id: "BIO003",
    name: "Cafeteria Scanner",
    location: "2nd Floor - Cafeteria",
    status: "maintenance",
    lastSync: "2024-01-27T18:45:00Z",
    totalScans: 456,
    successRate: 97.5,
  },
]

export const mockBiometricLogs: BiometricLog[] = [
  {
    id: "LOG001",
    employeeId: "1",
    employeeName: "Rajesh Kumar",
    timestamp: "2024-01-28T09:15:23Z",
    type: "check-in",
    deviceId: "BIO001",
    deviceLocation: "Main Entrance",
    fingerprintType: "thumb",
    success: true,
    responseTime: 1.2,
  },
  {
    id: "LOG002",
    employeeId: "2",
    employeeName: "Priya Sharma",
    timestamp: "2024-01-28T09:22:45Z",
    type: "check-in",
    deviceId: "BIO002",
    deviceLocation: "Office Entrance",
    fingerprintType: "index",
    success: true,
    responseTime: 0.9,
  },
  {
    id: "LOG003",
    employeeId: "1",
    employeeName: "Rajesh Kumar",
    timestamp: "2024-01-28T18:30:12Z",
    type: "check-out",
    deviceId: "BIO001",
    deviceLocation: "Main Entrance",
    fingerprintType: "thumb",
    success: true,
    responseTime: 1.1,
  },
  {
    id: "LOG004",
    employeeId: "3",
    employeeName: "Amit Patel",
    timestamp: "2024-01-28T09:45:15Z",
    type: "check-in",
    deviceId: "BIO002",
    deviceLocation: "Office Entrance",
    fingerprintType: "index",
    success: true,
    responseTime: 1.5,
  },
  {
    id: "LOG005",
    employeeId: "2",
    employeeName: "Priya Sharma",
    timestamp: "2024-01-28T18:15:30Z",
    type: "check-out",
    deviceId: "BIO001",
    deviceLocation: "Main Entrance",
    fingerprintType: "thumb",
    success: true,
    responseTime: 0.8,
  },
  {
    id: "LOG006",
    employeeId: "3",
    employeeName: "Amit Patel",
    timestamp: "2024-01-28T17:45:20Z",
    type: "check-out",
    deviceId: "BIO002",
    deviceLocation: "Office Entrance",
    fingerprintType: "index",
    success: false,
    responseTime: 3.2,
  },
]

export const mockPayrollData: PayrollData[] = [
  {
    employeeId: "1",
    employeeName: "Rajesh Kumar",
    basicSalary: 120000,
    allowances: {
      hra: 48000,
      transport: 12000,
      medical: 15000,
      special: 10000,
    },
    deductions: {
      pf: 14400,
      esi: 2100,
      tax: 18000,
      other: 1000,
    },
    attendance: {
      workingDays: 22,
      present: 21,
      absent: 1,
      leaves: 2,
      overtime: 15,
      lateArrivals: 3,
      earlyDepartures: 1,
    },
    attendanceRecords: [
      {
        date: "2024-01-28",
        checkIn: "09:15:23",
        checkOut: "18:30:12",
        hoursWorked: 9.25,
        overtime: 1.25,
        status: "present",
        deviceId: "BIO001",
        fingerprintType: "thumb",
      },
      {
        date: "2024-01-27",
        checkIn: "09:45:15",
        checkOut: "18:15:30",
        hoursWorked: 8.5,
        overtime: 0.5,
        status: "late",
        remarks: "Late arrival - Traffic",
        deviceId: "BIO001",
        fingerprintType: "thumb",
      },
      {
        date: "2024-01-26",
        checkIn: "09:00:00",
        checkOut: "17:30:45",
        hoursWorked: 8.5,
        overtime: 0.5,
        status: "present",
        deviceId: "BIO002",
        fingerprintType: "index",
      },
      {
        date: "2024-01-25",
        checkIn: "09:10:30",
        checkOut: "19:00:15",
        hoursWorked: 9.83,
        overtime: 1.83,
        status: "present",
        deviceId: "BIO001",
        fingerprintType: "thumb",
      },
      {
        date: "2024-01-24",
        checkIn: "09:30:45",
        checkOut: "17:45:20",
        hoursWorked: 8.25,
        overtime: 0.25,
        status: "late",
        remarks: "Late arrival",
        deviceId: "BIO001",
        fingerprintType: "thumb",
      },
      {
        date: "2024-01-23",
        checkIn: "09:05:12",
        checkOut: "18:20:30",
        hoursWorked: 9.25,
        overtime: 1.25,
        status: "present",
        deviceId: "BIO002",
        fingerprintType: "thumb",
      },
      {
        date: "2024-01-22",
        checkIn: null,
        checkOut: null,
        hoursWorked: 0,
        overtime: 0,
        status: "absent",
        remarks: "Sick leave",
      },
      {
        date: "2024-01-21",
        checkIn: "09:00:00",
        checkOut: "17:00:00",
        hoursWorked: 8,
        overtime: 0,
        status: "present",
        deviceId: "BIO001",
        fingerprintType: "thumb",
      },
      {
        date: "2024-01-20",
        checkIn: "09:15:30",
        checkOut: "18:45:15",
        hoursWorked: 9.5,
        overtime: 1.5,
        status: "present",
        deviceId: "BIO001",
        fingerprintType: "index",
      },
      {
        date: "2024-01-19",
        checkIn: "09:20:45",
        checkOut: "17:30:20",
        hoursWorked: 8.17,
        overtime: 0.17,
        status: "late",
        remarks: "Late arrival - Personal",
        deviceId: "BIO002",
        fingerprintType: "thumb",
      },
    ],
    netSalary: 169500,
    payPeriod: "January 2024",
  },
  {
    employeeId: "2",
    employeeName: "Priya Sharma",
    basicSalary: 95000,
    allowances: {
      hra: 38000,
      transport: 10000,
      medical: 12000,
      special: 8000,
    },
    deductions: {
      pf: 11400,
      esi: 1663,
      tax: 14000,
      other: 500,
    },
    attendance: {
      workingDays: 22,
      present: 22,
      absent: 0,
      leaves: 1,
      overtime: 8,
      lateArrivals: 1,
      earlyDepartures: 0,
    },
    attendanceRecords: [
      {
        date: "2024-01-28",
        checkIn: "09:22:45",
        checkOut: "18:15:30",
        hoursWorked: 8.88,
        overtime: 0.88,
        status: "present",
        deviceId: "BIO002",
        fingerprintType: "index",
      },
      {
        date: "2024-01-27",
        checkIn: "09:00:00",
        checkOut: "17:30:00",
        hoursWorked: 8.5,
        overtime: 0.5,
        status: "present",
        deviceId: "BIO002",
        fingerprintType: "index",
      },
      {
        date: "2024-01-26",
        checkIn: "09:10:15",
        checkOut: "18:00:45",
        hoursWorked: 8.83,
        overtime: 0.83,
        status: "present",
        deviceId: "BIO001",
        fingerprintType: "thumb",
      },
      {
        date: "2024-01-25",
        checkIn: "09:05:30",
        checkOut: "17:45:20",
        hoursWorked: 8.67,
        overtime: 0.67,
        status: "present",
        deviceId: "BIO002",
        fingerprintType: "index",
      },
      {
        date: "2024-01-24",
        checkIn: "09:00:00",
        checkOut: "18:30:15",
        hoursWorked: 9.5,
        overtime: 1.5,
        status: "present",
        deviceId: "BIO002",
        fingerprintType: "index",
      },
      {
        date: "2024-01-23",
        checkIn: "09:15:45",
        checkOut: "17:30:30",
        hoursWorked: 8.25,
        overtime: 0.25,
        status: "present",
        deviceId: "BIO001",
        fingerprintType: "thumb",
      },
      {
        date: "2024-01-22",
        checkIn: "09:00:00",
        checkOut: "17:00:00",
        hoursWorked: 8,
        overtime: 0,
        status: "present",
        deviceId: "BIO002",
        fingerprintType: "index",
      },
      {
        date: "2024-01-21",
        checkIn: "09:30:20",
        checkOut: "18:15:45",
        hoursWorked: 8.75,
        overtime: 0.75,
        status: "late",
        remarks: "Late arrival - Meeting",
        deviceId: "BIO002",
        fingerprintType: "index",
      },
      {
        date: "2024-01-20",
        checkIn: "09:00:00",
        checkOut: "17:30:00",
        hoursWorked: 8.5,
        overtime: 0.5,
        status: "present",
        deviceId: "BIO001",
        fingerprintType: "thumb",
      },
      {
        date: "2024-01-19",
        checkIn: "09:05:15",
        checkOut: "18:00:30",
        hoursWorked: 8.92,
        overtime: 0.92,
        status: "present",
        deviceId: "BIO002",
        fingerprintType: "index",
      },
    ],
    netSalary: 136437,
    payPeriod: "January 2024",
  },
  {
    employeeId: "3",
    employeeName: "Amit Patel",
    basicSalary: 75000,
    allowances: {
      hra: 22500,
      transport: 8000,
      medical: 10000,
      special: 5000,
    },
    deductions: {
      pf: 9000,
      esi: 1313,
      tax: 8500,
      other: 300,
    },
    attendance: {
      workingDays: 22,
      present: 20,
      absent: 2,
      leaves: 1,
      overtime: 5,
      lateArrivals: 4,
      earlyDepartures: 2,
    },
    attendanceRecords: [
      {
        date: "2024-01-28",
        checkIn: "09:45:15",
        checkOut: "17:45:20",
        hoursWorked: 8.0,
        overtime: 0,
        status: "late",
        remarks: "Late arrival - Traffic",
        deviceId: "BIO002",
        fingerprintType: "index",
      },
      {
        date: "2024-01-27",
        checkIn: "09:30:00",
        checkOut: "18:00:00",
        hoursWorked: 8.5,
        overtime: 0.5,
        status: "late",
        deviceId: "BIO001",
        fingerprintType: "thumb",
      },
      {
        date: "2024-01-26",
        checkIn: "09:00:00",
        checkOut: "17:30:00",
        hoursWorked: 8.5,
        overtime: 0.5,
        status: "present",
        deviceId: "BIO002",
        fingerprintType: "index",
      },
      {
        date: "2024-01-25",
        checkIn: null,
        checkOut: null,
        hoursWorked: 0,
        overtime: 0,
        status: "absent",
        remarks: "Personal leave",
      },
      {
        date: "2024-01-24",
        checkIn: "09:15:30",
        checkOut: "18:30:45",
        hoursWorked: 9.25,
        overtime: 1.25,
        status: "present",
        deviceId: "BIO001",
        fingerprintType: "thumb",
      },
    ],
    netSalary: 101887,
    payPeriod: "January 2024",
  },
]

// Helper function to get candidates by job ID
export function getCandidatesByJobId(jobId: number): Candidate[] {
  return mockCandidates.filter((candidate) => candidate.jobId === jobId)
}
