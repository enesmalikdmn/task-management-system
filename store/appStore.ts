import { create } from 'zustand';
import { User, Task } from '../types/appTypes';
import { userList, taskList } from '../data/dummyData';

interface AppState {
  users: User[];
  tasks: Task[];
  setUsers: (users: User[]) => void;
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  updateTask: (taskId: string, updatedTask: Task) => void;
  deleteTask: (taskId: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  users: userList,
  tasks: taskList,
  setUsers: (users) => set(() => ({ users })),
  setTasks: (tasks) => set(() => ({ tasks })),
  addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
  updateTask: (taskId: string, updatedTask: Task) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? updatedTask : task,
      ),
    })),
  deleteTask: (taskId: string) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
}));
