// Mock data for the recruitment system demonstration

export const mockJobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    salary: "₹18L - ₹28L",
    status: "Active",
    resumesReceived: 127,
    posted: "2024-01-10",
    platforms: ["LinkedIn", "Naukri.com", "Company Site"],
    description:
      "We are looking for a Senior Full Stack Developer with 5+ years of experience in React, Node.js, and cloud technologies. The ideal candidate will lead technical initiatives and mentor junior developers.",
    requirements: ["React.js", "Node.js", "MongoDB", "AWS", "TypeScript"],
    applicationsToday: 8,
    viewsToday: 45,
  },
  {
    id: 2,
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    salary: "₹12L - ₹18L",
    status: "Active",
    resumesReceived: 89,
    posted: "2024-01-08",
    platforms: ["LinkedIn", "Indeed", "Monster"],
    description:
      "Seeking an experienced Digital Marketing Manager to drive our online presence and lead performance marketing campaigns.",
    requirements: ["Digital Marketing", "SEO/SEM", "Analytics", "Social Media", "Content Strategy"],
    applicationsToday: 12,
    viewsToday: 67,
  },
  {
    id: 3,
    title: "Senior UX Designer",
    department: "Design",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    salary: "₹15L - ₹22L",
    status: "Active",
    resumesReceived: 64,
    posted: "2024-01-12",
    platforms: ["Dribbble", "LinkedIn", "AngelList"],
    description: "Join our design team to create exceptional user experiences for our fintech products.",
    requirements: ["Figma", "User Research", "Prototyping", "Design Systems", "Fintech Experience"],
    applicationsToday: 5,
    viewsToday: 32,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Pune, Maharashtra",
    type: "Full-time",
    salary: "₹16L - ₹24L",
    status: "Paused",
    resumesReceived: 43,
    posted: "2024-01-05",
    platforms: ["LinkedIn", "Stack Overflow Jobs"],
    description: "Looking for a DevOps Engineer to manage our cloud infrastructure and CI/CD pipelines.",
    requirements: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    applicationsToday: 0,
    viewsToday: 8,
  },
]

export const mockCandidates = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91 98765 43210",
    position: "Senior Full Stack Developer",
    appliedFor: "Senior Full Stack Developer",
    experience: "6 years",
    location: "Bangalore, Karnataka",
    currentCompany: "TechCorp Solutions",
    currentSalary: "₹16L",
    expectedSalary: "₹22L",
    noticePeriod: "2 months",
    score: 92,
    status: "Interview Scheduled",
    appliedDate: "2024-01-15",
    source: "LinkedIn",
    resumeText:
      "Experienced full-stack developer with 6 years in building scalable web applications. Led a team of 4 developers at TechCorp, architected microservices handling 1M+ daily requests. Expert in React, Node.js, AWS, and MongoDB.",
    skills: ["React.js", "Node.js", "MongoDB", "AWS", "TypeScript", "Docker", "GraphQL"],
    education: "B.Tech Computer Science - IIT Bangalore (2018)",
    summary:
      "Strong technical leader with proven track record in full-stack development. Excellent problem-solving skills and experience in scaling applications.",
    matchPercentage: 94,
    interviewSummary:
      "Exceptional candidate with strong technical skills and leadership experience. Recommended for technical round with CTO.",
    keyStrengths: [
      "6+ years full-stack development experience",
      "Team leadership and mentoring experience",
      "Microservices architecture expertise",
      "Strong system design skills",
    ],
    areasToExplore: [
      "Experience with our specific tech stack",
      "Approach to code reviews and quality",
      "Long-term career aspirations",
      "Salary expectations and joining timeline",
    ],
    interviewQuestions: [
      {
        question: "Why are you looking for a change?",
        answer:
          "Looking for more challenging projects and opportunity to work with cutting-edge technologies. Want to contribute to a product that impacts millions of users.",
      },
      {
        question: "Describe your biggest technical achievement",
        answer:
          "Led the migration from monolithic to microservices architecture, reducing deployment time by 80% and improving system reliability to 99.9% uptime.",
      },
    ],
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya.patel@email.com",
    phone: "+91 87654 32109",
    position: "Digital Marketing Manager",
    appliedFor: "Digital Marketing Manager",
    experience: "5 years",
    location: "Mumbai, Maharashtra",
    currentCompany: "Digital Dynamics",
    currentSalary: "₹12L",
    expectedSalary: "₹16L",
    noticePeriod: "1 month",
    score: 88,
    status: "Technical Round",
    appliedDate: "2024-01-12",
    source: "Naukri.com",
    resumeText:
      "Digital marketing professional with 5 years of experience in performance marketing, SEO, and brand management. Managed campaigns with ₹50L+ annual budgets, achieving 40% improvement in ROAS.",
    skills: [
      "Performance Marketing",
      "Google Ads",
      "Facebook Ads",
      "SEO",
      "Analytics",
      "Content Marketing",
      "Marketing Automation",
    ],
    education: "MBA Marketing - IIM Ahmedabad (2019)",
    summary:
      "Results-driven marketing professional with strong analytical skills and proven track record in digital campaigns.",
    matchPercentage: 89,
    interviewSummary:
      "Strong candidate with excellent campaign management experience. Good cultural fit with data-driven approach.",
    keyStrengths: [
      "5+ years performance marketing experience",
      "Strong ROI improvement track record",
      "Multi-channel campaign expertise",
      "Data-driven decision making",
    ],
    areasToExplore: [
      "Experience with B2B vs B2C marketing",
      "Team management capabilities",
      "Knowledge of marketing automation tools",
      "Understanding of our target market",
    ],
    interviewQuestions: [
      {
        question: "What's your approach to campaign optimization?",
        answer:
          "I use a data-driven approach with A/B testing, continuous monitoring of key metrics, and regular optimization based on performance insights.",
      },
    ],
  },
  {
    id: 3,
    name: "Arjun Mehta",
    email: "arjun.mehta@email.com",
    phone: "+91 76543 21098",
    position: "Senior UX Designer",
    appliedFor: "Senior UX Designer",
    experience: "4 years",
    location: "Hyderabad, Telangana",
    currentCompany: "Design Studio Pro",
    currentSalary: "₹14L",
    expectedSalary: "₹18L",
    noticePeriod: "1 month",
    score: 85,
    status: "Portfolio Review",
    appliedDate: "2024-01-14",
    source: "Dribbble",
    resumeText:
      "UX Designer with 4 years of experience in fintech and e-commerce. Led design for mobile apps with 2M+ downloads. Expert in user research, prototyping, and design systems.",
    skills: [
      "Figma",
      "User Research",
      "Prototyping",
      "Design Systems",
      "Usability Testing",
      "Wireframing",
      "Mobile Design",
    ],
    education: "M.Des Interaction Design - NID Ahmedabad (2020)",
    summary: "Creative designer with strong user-centric approach and experience in fintech domain.",
    matchPercentage: 87,
    interviewSummary:
      "Talented designer with relevant fintech experience. Strong portfolio showcasing user-centered design process.",
    keyStrengths: [
      "4+ years UX design experience",
      "Fintech domain expertise",
      "Strong portfolio with measurable impact",
      "User research and testing experience",
    ],
    areasToExplore: [
      "Collaboration with engineering teams",
      "Design system creation and maintenance",
      "Handling design critiques and feedback",
      "Understanding of accessibility standards",
    ],
    interviewQuestions: [
      {
        question: "How do you approach user research?",
        answer:
          "I start with understanding business goals, then conduct user interviews, surveys, and usability testing to gather insights that inform design decisions.",
      },
    ],
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "sneha.reddy@email.com",
    phone: "+91 65432 10987",
    position: "DevOps Engineer",
    appliedFor: "DevOps Engineer",
    experience: "3 years",
    location: "Pune, Maharashtra",
    currentCompany: "CloudTech Solutions",
    currentSalary: "₹12L",
    expectedSalary: "₹18L",
    noticePeriod: "2 months",
    score: 78,
    status: "Initial Screening",
    appliedDate: "2024-01-16",
    source: "LinkedIn",
    resumeText:
      "DevOps engineer with 3 years of experience in AWS, Docker, and Kubernetes. Managed infrastructure for applications serving 500K+ users. Strong background in automation and CI/CD.",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Python", "Linux"],
    education: "B.Tech Information Technology - BITS Pilani (2021)",
    summary: "Skilled DevOps engineer with cloud expertise and automation focus.",
    matchPercentage: 82,
    interviewSummary: "Good technical skills but needs more experience with large-scale systems. Potential for growth.",
    keyStrengths: [
      "3+ years DevOps experience",
      "Strong AWS and containerization skills",
      "Automation and scripting expertise",
      "CI/CD pipeline experience",
    ],
    areasToExplore: [
      "Experience with high-traffic applications",
      "Monitoring and alerting setup",
      "Security best practices",
      "Incident response and troubleshooting",
    ],
    interviewQuestions: [
      {
        question: "Describe your experience with Kubernetes",
        answer:
          "I've worked with Kubernetes for 2 years, managing deployments, services, and ingress controllers. I've set up monitoring with Prometheus and handled scaling challenges.",
      },
    ],
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.singh@email.com",
    phone: "+91 54321 09876",
    position: "Senior Full Stack Developer",
    appliedFor: "Senior Full Stack Developer",
    experience: "7 years",
    location: "Delhi, NCR",
    currentCompany: "Enterprise Solutions Ltd",
    currentSalary: "₹18L",
    expectedSalary: "₹25L",
    noticePeriod: "3 months",
    score: 89,
    status: "Offer Extended",
    appliedDate: "2024-01-08",
    source: "Company Site",
    resumeText:
      "Senior full-stack developer with 7 years of experience in enterprise applications. Led multiple projects from conception to deployment. Expert in React, Java Spring Boot, and cloud technologies.",
    skills: ["React.js", "Java", "Spring Boot", "PostgreSQL", "AWS", "Redis", "Microservices"],
    education: "M.Tech Computer Science - IIT Delhi (2017)",
    summary: "Experienced technical lead with strong enterprise development background and team management skills.",
    matchPercentage: 91,
    interviewSummary:
      "Excellent candidate with strong technical and leadership skills. Perfect fit for senior role. Offer extended.",
    keyStrengths: [
      "7+ years enterprise development",
      "Strong technical leadership",
      "Full project lifecycle experience",
      "Excellent communication skills",
    ],
    areasToExplore: ["Salary negotiation", "Start date flexibility", "Team preferences", "Career growth expectations"],
    interviewQuestions: [
      {
        question: "How do you handle technical debt?",
        answer:
          "I prioritize technical debt based on business impact, allocate dedicated time in sprints for refactoring, and ensure team awareness of long-term consequences.",
      },
    ],
  },
]

export const mockInterviews = [
  {
    id: 1,
    candidateId: 1,
    candidateName: "Rahul Sharma",
    position: "Senior Full Stack Developer",
    date: "2024-01-25",
    time: "2:00 PM",
    mode: "Virtual",
    interviewer: "Amit Kumar (CTO)",
    interviewerEmail: "amit.kumar@company.com",
    status: "Scheduled",
    type: "Technical Round",
    duration: "60 minutes",
    meetingLink: "https://meet.google.com/abc-defg-hij",
    notes: "Focus on system design and React expertise",
    round: 2,
    totalRounds: 3,
  },
  {
    id: 2,
    candidateId: 2,
    candidateName: "Priya Patel",
    position: "Digital Marketing Manager",
    date: "2024-01-25",
    time: "4:00 PM",
    mode: "In-Person",
    interviewer: "Kavya Sharma (Marketing Head)",
    interviewerEmail: "kavya.sharma@company.com",
    status: "Confirmed",
    type: "Final Round",
    duration: "45 minutes",
    location: "Conference Room A, 3rd Floor",
    notes: "Present campaign case study",
    round: 3,
    totalRounds: 3,
  },
  {
    id: 3,
    candidateId: 3,
    candidateName: "Arjun Mehta",
    position: "Senior UX Designer",
    date: "2024-01-26",
    time: "10:00 AM",
    mode: "Virtual",
    interviewer: "Ravi Gupta (Design Lead)",
    interviewerEmail: "ravi.gupta@company.com",
    status: "Pending Confirmation",
    type: "Portfolio Review",
    duration: "90 minutes",
    meetingLink: "https://meet.google.com/xyz-abcd-efg",
    notes: "Portfolio presentation and design process discussion",
    round: 2,
    totalRounds: 3,
  },
  {
    id: 4,
    candidateId: 4,
    candidateName: "Sneha Reddy",
    position: "DevOps Engineer",
    date: "2024-01-27",
    time: "11:00 AM",
    mode: "Phone",
    interviewer: "Suresh Patel (DevOps Lead)",
    interviewerEmail: "suresh.patel@company.com",
    status: "Scheduled",
    type: "Technical Screening",
    duration: "30 minutes",
    notes: "AWS and Kubernetes knowledge assessment",
    round: 1,
    totalRounds: 2,
  },
]

export const mockCompletedInterviews = [
  {
    id: 1,
    candidateId: 5,
    candidateName: "Vikram Singh",
    position: "Senior Full Stack Developer",
    date: "2024-01-22",
    interviewer: "Amit Kumar (CTO)",
    result: "Passed",
    score: 9.2,
    notes: "Excellent technical skills, strong system design knowledge, great cultural fit. Recommended for offer.",
    feedback: {
      technical: 9,
      communication: 9,
      problemSolving: 10,
      culturalFit: 9,
    },
    nextSteps: "Offer extended - awaiting response",
    round: "Final Round",
  },
  {
    id: 2,
    candidateId: 6,
    candidateName: "Anita Joshi",
    position: "Digital Marketing Manager",
    date: "2024-01-20",
    interviewer: "Kavya Sharma (Marketing Head)",
    result: "Rejected",
    score: 6.5,
    notes:
      "Good marketing knowledge but lacks experience in B2B campaigns. Not suitable for current role requirements.",
    feedback: {
      technical: 7,
      communication: 8,
      problemSolving: 6,
      culturalFit: 7,
    },
    nextSteps: "Candidate informed about decision",
    round: "Second Round",
  },
  {
    id: 3,
    candidateId: 7,
    candidateName: "Karthik Nair",
    position: "Senior UX Designer",
    date: "2024-01-18",
    interviewer: "Ravi Gupta (Design Lead)",
    result: "Passed",
    score: 8.7,
    notes: "Strong design portfolio, excellent user research skills. Moving to final round with Head of Product.",
    feedback: {
      technical: 9,
      communication: 8,
      problemSolving: 9,
      culturalFit: 8,
    },
    nextSteps: "Final round scheduled for next week",
    round: "Portfolio Review",
  },
]

export const mockOnboardingEmployees = [
  {
    id: 1,
    name: "Vikram Singh",
    position: "Senior Full Stack Developer",
    department: "Engineering",
    startDate: "2024-02-01",
    joiningDate: "2024-02-01",
    status: "In Progress",
    progress: 75,
    completedTasks: 9,
    totalTasks: 12,
    manager: "Amit Kumar",
    buddy: "Rahul Sharma",
    salary: "₹25L",
    employeeId: "EMP001",
    documents: {
      contract: "Completed",
      taxForms: "Completed",
      handbook: "Completed",
      equipment: "In Progress",
      bankDetails: "Completed",
      backgroundCheck: "Completed",
    },
    tasks: [
      { task: "Sign employment contract", status: "Completed", dueDate: "2024-01-30" },
      { task: "Submit PAN and Aadhaar", status: "Completed", dueDate: "2024-02-01" },
      { task: "Complete Form 16 submission", status: "Completed", dueDate: "2024-02-01" },
      { task: "Read employee handbook", status: "Completed", dueDate: "2024-02-02" },
      { task: "IT equipment setup", status: "In Progress", dueDate: "2024-02-03" },
      { task: "Security training completion", status: "Pending", dueDate: "2024-02-05" },
      { task: "Meet with direct manager", status: "Completed", dueDate: "2024-02-01" },
      { task: "PF and ESI enrollment", status: "Completed", dueDate: "2024-02-02" },
      { task: "Set up salary account", status: "Completed", dueDate: "2024-02-01" },
      { task: "Emergency contact form", status: "Completed", dueDate: "2024-02-01" },
      { task: "Workspace setup", status: "Pending", dueDate: "2024-02-05" },
      { task: "Team introduction meeting", status: "Pending", dueDate: "2024-02-06" },
    ],
  },
  {
    id: 2,
    name: "Meera Krishnan",
    position: "Product Manager",
    department: "Product",
    startDate: "2024-01-28",
    joiningDate: "2024-01-28",
    status: "Completed",
    progress: 100,
    completedTasks: 12,
    totalTasks: 12,
    manager: "Priya Sharma",
    buddy: "Arjun Patel",
    salary: "₹20L",
    employeeId: "EMP002",
    documents: {
      contract: "Completed",
      taxForms: "Completed",
      handbook: "Completed",
      equipment: "Completed",
      bankDetails: "Completed",
      backgroundCheck: "Completed",
    },
    tasks: [
      { task: "Sign employment contract", status: "Completed", dueDate: "2024-01-26" },
      { task: "Submit PAN and Aadhaar", status: "Completed", dueDate: "2024-01-28" },
      { task: "Complete Form 16 submission", status: "Completed", dueDate: "2024-01-28" },
      { task: "Read employee handbook", status: "Completed", dueDate: "2024-01-29" },
      { task: "IT equipment setup", status: "Completed", dueDate: "2024-01-30" },
      { task: "Security training completion", status: "Completed", dueDate: "2024-02-01" },
      { task: "Meet with direct manager", status: "Completed", dueDate: "2024-01-28" },
      { task: "PF and ESI enrollment", status: "Completed", dueDate: "2024-01-29" },
      { task: "Set up salary account", status: "Completed", dueDate: "2024-01-28" },
      { task: "Emergency contact form", status: "Completed", dueDate: "2024-01-28" },
      { task: "Workspace setup", status: "Completed", dueDate: "2024-02-01" },
      { task: "Team introduction meeting", status: "Completed", dueDate: "2024-02-02" },
    ],
  },
  {
    id: 3,
    name: "Rohit Agarwal",
    position: "Marketing Specialist",
    department: "Marketing",
    startDate: "2024-02-05",
    joiningDate: "2024-02-05",
    status: "Pending",
    progress: 25,
    completedTasks: 3,
    totalTasks: 12,
    manager: "Kavya Sharma",
    buddy: "Priya Patel",
    salary: "₹12L",
    employeeId: "EMP003",
    documents: {
      contract: "Completed",
      taxForms: "Pending",
      handbook: "Pending",
      equipment: "Pending",
      bankDetails: "Pending",
      backgroundCheck: "In Progress",
    },
    tasks: [
      { task: "Sign employment contract", status: "Completed", dueDate: "2024-02-03" },
      { task: "Submit PAN and Aadhaar", status: "Completed", dueDate: "2024-02-05" },
      { task: "Complete Form 16 submission", status: "Pending", dueDate: "2024-02-05" },
      { task: "Read employee handbook", status: "Pending", dueDate: "2024-02-06" },
      { task: "IT equipment setup", status: "Pending", dueDate: "2024-02-07" },
      { task: "Security training completion", status: "Pending", dueDate: "2024-02-09" },
      { task: "Meet with direct manager", status: "Completed", dueDate: "2024-02-05" },
      { task: "PF and ESI enrollment", status: "Pending", dueDate: "2024-02-06" },
      { task: "Set up salary account", status: "Pending", dueDate: "2024-02-05" },
      { task: "Emergency contact form", status: "Pending", dueDate: "2024-02-05" },
      { task: "Workspace setup", status: "Pending", dueDate: "2024-02-09" },
      { task: "Team introduction meeting", status: "Pending", dueDate: "2024-02-10" },
    ],
  },
]

export const mockEmployees = [
  {
    id: 1,
    name: "Vikram Singh",
    position: "Senior Full Stack Developer",
    department: "Engineering",
    employeeId: "EMP001",
    joiningDate: "2024-02-01",
    salary: 2500000, // ₹25L
    deductions: 375000, // ₹3.75L
    netPay: 2125000, // ₹21.25L
    status: "Active",
    lastPayroll: "2024-01-31",
    manager: "Amit Kumar",
    level: "Senior",
    bankAccount: "HDFC Bank - ****1234",
    panNumber: "ABCDE1234F",
    pfNumber: "KA/BGE/12345/67890",
  },
  {
    id: 2,
    name: "Meera Krishnan",
    position: "Product Manager",
    department: "Product",
    employeeId: "EMP002",
    joiningDate: "2024-01-28",
    salary: 2000000, // ₹20L
    deductions: 300000, // ₹3L
    netPay: 1700000, // ₹17L
    status: "Active",
    lastPayroll: "2024-01-31",
    manager: "Priya Sharma",
    level: "Senior",
    bankAccount: "SBI - ****5678",
    panNumber: "FGHIJ5678K",
    pfNumber: "KA/BGE/12345/67891",
  },
  {
    id: 3,
    name: "Rohit Agarwal",
    position: "Marketing Specialist",
    department: "Marketing",
    employeeId: "EMP003",
    joiningDate: "2024-02-05",
    salary: 1200000, // ₹12L
    deductions: 180000, // ₹1.8L
    netPay: 1020000, // ₹10.2L
    status: "Active",
    lastPayroll: "2024-01-31",
    manager: "Kavya Sharma",
    level: "Mid",
    bankAccount: "ICICI Bank - ****9012",
    panNumber: "KLMNO9012P",
    pfNumber: "KA/BGE/12345/67892",
  },
  {
    id: 4,
    name: "Ananya Iyer",
    position: "Senior UX Designer",
    department: "Design",
    employeeId: "EMP004",
    joiningDate: "2023-11-15",
    salary: 1800000, // ₹18L
    deductions: 270000, // ₹2.7L
    netPay: 1530000, // ₹15.3L
    status: "On Leave",
    lastPayroll: "2024-01-31",
    manager: "Ravi Gupta",
    level: "Senior",
    bankAccount: "Axis Bank - ****3456",
    panNumber: "PQRST3456U",
    pfNumber: "KA/BGE/12345/67893",
  },
]

export const mockPayrollData = [
  {
    employee: "Vikram Singh",
    employeeId: "EMP001",
    baseSalary: 208333, // ₹2.08L monthly
    overtime: 0,
    bonus: 25000, // ₹25,000
    allowances: 15000, // ₹15,000 (HRA, Transport)
    grossPay: 248333, // ₹2.48L
    taxes: 37250, // ₹37,250 (15% TDS)
    pf: 12450, // ₹12,450 (12% of basic)
    esi: 1242, // ₹1,242 (0.75% of gross)
    insurance: 2500, // ₹2,500
    totalDeductions: 53442, // ₹53,442
    netPay: 194891, // ₹1.95L
    payPeriod: "January 2024",
  },
  {
    employee: "Meera Krishnan",
    employeeId: "EMP002",
    baseSalary: 166667, // ₹1.67L monthly
    overtime: 0,
    bonus: 20000, // ₹20,000
    allowances: 12000, // ₹12,000
    grossPay: 198667, // ₹1.99L
    taxes: 29800, // ₹29,800
    pf: 10000, // ₹10,000
    esi: 994, // ₹994
    insurance: 2000, // ₹2,000
    totalDeductions: 42794, // ₹42,794
    netPay: 155873, // ₹1.56L
    payPeriod: "January 2024",
  },
  {
    employee: "Rohit Agarwal",
    employeeId: "EMP003",
    baseSalary: 100000, // ₹1L monthly
    overtime: 5000, // ₹5,000
    bonus: 8000, // ₹8,000
    allowances: 8000, // ₹8,000
    grossPay: 121000, // ₹1.21L
    taxes: 12100, // ₹12,100 (10% TDS)
    pf: 6000, // ₹6,000
    esi: 605, // ₹605
    insurance: 1500, // ₹1,500
    totalDeductions: 20205, // ₹20,205
    netPay: 100795, // ₹1.01L
    payPeriod: "January 2024",
  },
  {
    employee: "Ananya Iyer",
    employeeId: "EMP004",
    baseSalary: 150000, // ₹1.5L monthly
    overtime: 0,
    bonus: 15000, // ₹15,000
    allowances: 10000, // ₹10,000
    grossPay: 175000, // ₹1.75L
    taxes: 26250, // ₹26,250
    pf: 9000, // ₹9,000
    esi: 875, // ₹875
    insurance: 2000, // ₹2,000
    totalDeductions: 38125, // ₹38,125
    netPay: 136875, // ₹1.37L
    payPeriod: "January 2024",
  },
]

export const mockNotifications = [
  {
    id: 1,
    type: "interview",
    title: "Interview scheduled with Rahul Sharma",
    message: "Technical round for Senior Full Stack Developer position at 2:00 PM today",
    time: "2 hours ago",
    status: "unread",
    priority: "high",
    actionRequired: true,
    link: "/interviews",
  },
  {
    id: 2,
    type: "application",
    title: "New resume received",
    message: "Priya Patel applied for Digital Marketing Manager position",
    time: "4 hours ago",
    status: "unread",
    priority: "medium",
    actionRequired: true,
    link: "/candidates",
  },
  {
    id: 3,
    type: "onboarding",
    title: "Onboarding task pending",
    message: "Vikram Singh needs to complete security training by tomorrow",
    time: "6 hours ago",
    status: "read",
    priority: "medium",
    actionRequired: true,
    link: "/onboarding",
  },
  {
    id: 4,
    type: "offer",
    title: "Offer response received",
    message: "Vikram Singh accepted the offer for Senior Full Stack Developer position",
    time: "1 day ago",
    status: "read",
    priority: "high",
    actionRequired: false,
    link: "/candidates",
  },
  {
    id: 5,
    type: "payroll",
    title: "Payroll processing reminder",
    message: "Monthly payroll processing due in 3 days",
    time: "2 days ago",
    status: "read",
    priority: "medium",
    actionRequired: true,
    link: "/payroll",
  },
]

export const mockDashboardStats = {
  totalJobs: 24,
  activeJobs: 18,
  pausedJobs: 6,
  totalCandidates: 156,
  newApplications: 23,
  inReview: 45,
  shortlisted: 34,
  rejected: 54,
  interviewsScheduled: 18,
  interviewsToday: 4,
  interviewsThisWeek: 12,
  onboardingInProgress: 3,
  onboardingCompleted: 8,
  onboardingPending: 2,
  totalEmployees: 47,
  newHires: 3,
  averageTimeToHire: 18, // days
  averageCostPerHire: 45000, // ₹45,000
  offerAcceptanceRate: 85, // %
  sourceEffectiveness: {
    linkedin: 35,
    naukri: 28,
    companyWebsite: 20,
    referrals: 12,
    others: 5,
  },
}

export const mockRecentActivity = [
  {
    id: 1,
    type: "interview",
    title: "Interview completed with Karthik Nair",
    description: "Portfolio review for Senior UX Designer - Passed to final round",
    time: "30 minutes ago",
    status: "completed",
    user: "Ravi Gupta",
  },
  {
    id: 2,
    type: "application",
    title: "New application received",
    description: "Sneha Reddy applied for DevOps Engineer position",
    time: "2 hours ago",
    status: "new",
    user: "System",
  },
  {
    id: 3,
    type: "offer",
    title: "Offer extended to Vikram Singh",
    description: "Senior Full Stack Developer position - ₹25L package",
    time: "4 hours ago",
    status: "pending",
    user: "Amit Kumar",
  },
  {
    id: 4,
    type: "onboarding",
    title: "Onboarding completed",
    description: "Meera Krishnan completed all onboarding tasks",
    time: "1 day ago",
    status: "completed",
    user: "HR Team",
  },
  {
    id: 5,
    type: "job",
    title: "New job posted",
    description: "Senior UX Designer position posted on LinkedIn and Dribbble",
    time: "2 days ago",
    status: "active",
    user: "Kavya Sharma",
  },
]

// Recruitment Pipeline Data
export const mockPipelineData = [
  { stage: "Applied", count: 156, percentage: 100, color: "#3b82f6" },
  { stage: "Screened", count: 89, percentage: 57, color: "#8b5cf6" },
  { stage: "Interviewed", count: 34, percentage: 22, color: "#06b6d4" },
  { stage: "Offered", count: 12, percentage: 8, color: "#10b981" },
  { stage: "Hired", count: 8, percentage: 5, color: "#059669" },
]

// Company Settings
export const mockCompanySettings = {
  name: "TechVantage Solutions",
  industry: "Technology",
  size: "50-200 employees",
  timezone: "Asia/Kolkata",
  address: "Tech Park, Whitefield, Bangalore, Karnataka 560066",
  website: "https://techvantage.co.in",
  email: "hr@techvantage.co.in",
  phone: "+91 80 4567 8900",
  logo: "/company-logo.png",
  founded: "2018",
  description:
    "Leading technology solutions provider specializing in web applications, mobile apps, and cloud services.",
}
