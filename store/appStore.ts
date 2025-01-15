import { create } from "zustand";
import { User, Task } from "../types/appTypes";
import { userList, taskList } from "../data/dummyData";

interface AppState {
  users: User[];
  tasks: Task[];
  setUsers: (users: User[]) => void;
  setTasks: (tasks: Task[]) => void;
}

export const useAppStore = create<AppState>((set) => ({
  users: userList,
  tasks: taskList,
  setUsers: (users) => set(() => ({ users })),
  setTasks: (tasks) => set(() => ({ tasks })),
}));
