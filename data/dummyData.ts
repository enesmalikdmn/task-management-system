import { User, Task } from "../types/appTypes";

export const userList: User[] = [
  {
    username: "john_doe",
    profilePicture: "/images/users/john_doe.jpg",
    accountId: "user-001",
    role: "Admin",
  },
  {
    username: "jane_smith",
    profilePicture: "/images/users/jane_smith.jpg",
    accountId: "user-002",
    role: "Developer",
  },
  {
    username: "mike_jordan",
    profilePicture: "/images/users/mike_jordan.jpg",
    accountId: "user-003",
    role: "Tester",
  },
  {
    username: "lisa_ray",
    profilePicture: "/images/users/lisa_ray.jpg",
    accountId: "user-004",
    role: "Product Owner",
  },
  {
    username: "david_lee",
    profilePicture: "/images/users/david_lee.jpg",
    accountId: "user-005",
    role: "Scrum Master",
  },
];

export const taskList: Task[] = [
  {
    id: "task-001",
    name: "Setup project structure",
    description: "Create the basic structure of the project using Next.js.",
    taskNumber: 101,
    storyPoint: 3,
    workflowStatus: "open",
    assignedTo: "john_doe",
    startDate: '2024-12-01',
    endDate: '2024-12-05'
  },
  {
    id: "task-002",
    name: "Design login page",
    description: "Create a responsive login page with validation.",
    taskNumber: 102,
    storyPoint: 5,
    workflowStatus: "in progress",
    assignedTo: "jane_smith",
    startDate: '2024-12-11',
    endDate: '2024-12-15'
  },
  {
    id: "task-003",
    name: "Implement authentication",
    description: "Setup JWT-based authentication for the application.",
    taskNumber: 103,
    storyPoint: 8,
    workflowStatus: "in review",
    assignedTo: "mike_jordan",
    startDate: '2024-12-16',
    endDate: '2024-12-18'
  },
  {
    id: "task-004",
    name: "Write unit tests",
    description: "Ensure 80% code coverage for the login feature.",
    taskNumber: 104,
    storyPoint: 5,
    workflowStatus: "done",
    assignedTo: "lisa_ray",
    startDate: '2024-12-19',
    endDate: '2024-12-22'
  },
  {
    id: "task-005",
    name: "Integrate CI/CD pipeline",
    description: "Setup GitHub Actions for automated testing and deployment.etup GitHub Actions for automated testing and deploymentetup GitHub Actions for automated testing and deploymentetup GitHub Actions for automated testing and deploymentetup GitHub Actions for automated testing and deploymentetup GitHub Actions for automated testing and deploymentetup GitHub Actions for automated testing and deploymentetup GitHub Actions for automated testing and deploymentetup GitHub Actions for automated testing and deploymentetup GitHub Actions for automated testing and deploymentetup GitHub Actions for automated testing and deployment",
    taskNumber: 105,
    storyPoint: 8,
    workflowStatus: "open",
    assignedTo: "david_lee",
    startDate: '2024-12-23',
    endDate: '2024-12-27'
  },
];
