import { User, Task } from "../types/appTypes";
import { v4 as uuidv4 } from "uuid";

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
    id: uuidv4(),
    name: "Setup project structure",
    description: "Create the basic structure of the project using Next.js.",
    taskNumber: 101,
    storyPoint: 3,
    workflowStatus: "open",
    assignedTo: "john_doe",
    startDate: '01.12.2024',
    endDate: '02.12.2024'
  },
  {
    id: uuidv4(),
    name: "Design login page",
    description: "Create a responsive login page with validation.",
    taskNumber: 102,
    storyPoint: 5,
    workflowStatus: "in progress",
    assignedTo: "jane_smith",
    startDate: '11.12.2024',
    endDate: '15.12.2024'
  },
  {
    id: uuidv4(),
    name: "Implement authentication",
    description: "Setup JWT-based authentication for the application.",
    taskNumber: 103,
    storyPoint: 8,
    workflowStatus: "in review",
    assignedTo: "mike_jordan",
    startDate: '16.12.2024',
    endDate: '18.12.2024'
  },
  {
    id: uuidv4(),
    name: "Write unit tests",
    description: "Ensure 80% code coverage for the login feature.",
    taskNumber: 104,
    storyPoint: 5,
    workflowStatus: "done",
    assignedTo: "lisa_ray",
    startDate: '19.12.2024',
    endDate: '22.12.2024'
  },
  {
    id: uuidv4(),
    name: "Integrate CI/CD pipeline",
    description: "Setup GitHub Actions for automated testing and deployment.",
    taskNumber: 105,
    storyPoint: 8,
    workflowStatus: "open",
    assignedTo: "david_lee",
    startDate: '23.12.2024',
    endDate: '27.12.2024'
  },
];
