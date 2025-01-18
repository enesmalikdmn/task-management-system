export interface User {
    username: string;
    profilePicture: string;
    accountId: string;
    role: string;
  }
  
  export interface Task {
    id: string;
    name: string;
    description: string;
    taskNumber: number;
    storyPoint: number;
    workflowStatus: "open" | "in progress" | "in review" | "done";
    assignedTo: string;
    startDate: string;
    endDate: string;
  }
  