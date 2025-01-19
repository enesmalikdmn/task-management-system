import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Task } from '../types/appTypes';
import { userList, taskList } from '../data/dummyData';

interface AppState {
  users: User[];
  tasks: Task[];
  focusedTask: Task | null;
  setUsers: (users: User[]) => void;
  setTasks: (tasks: Task[]) => void;
  setFocusedTask: (task: Task | null) => void;
  addTask: (task: Task) => void;
  updateTask: (taskId: string, updatedTask: Task) => void;
  updateTaskOrder: (taskId: string, overId: string) => void;
  deleteTask: (taskId: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      users: userList,
      tasks: [],
      focusedTask: null,
      setUsers: (users) => set(() => ({ users })),
      setTasks: (tasks) => set(() => ({ tasks })),
      setFocusedTask: (task) => set(() => ({ focusedTask: task })),
      addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
      updateTask: (taskId: string, updatedTask: Task) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, ...updatedTask } : task
          ),
          focusedTask:
            state.focusedTask?.id === taskId
              ? { ...state.focusedTask, ...updatedTask }
              : state.focusedTask,
        })),
      updateTaskOrder: (taskId: string, overId: string) =>
        set((state) => {
          const tasks = [...state.tasks];
          const sourceIndex = tasks.findIndex((task) => task.id === taskId);
          const destinationIndex = tasks.findIndex((task) => task.id === overId);

          if (sourceIndex === -1 || destinationIndex === -1) {
            console.warn('Invalid task or destination ID');
            return { tasks };
          }

          const [movedTask] = tasks.splice(sourceIndex, 1);

          tasks.splice(destinationIndex, 0, movedTask);

          return { tasks };
        }),
      deleteTask: (taskId: string) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        })),
    }),
    {
      name: 'app-store', // LocalStorage key
      partialize: (state) => ({ tasks: state.tasks, users: state.users }),
      merge: (persistedState, currentState) => ({
        ...currentState,
        focusedTask: persistedState?.tasks[0] || null,
        tasks: persistedState?.tasks || taskList,
        users: persistedState?.users || userList,
      }),
    }
  )
);
