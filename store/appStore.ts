import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Task } from '../types/appTypes';
import { userList, taskList } from '../data/dummyData';

interface AppState {
  users: User[];
  tasks: Task[];
  focusedTask: Task | null;
  filteredTasks: Task[];
  setUsers: (users: User[]) => void;
  setTasks: (tasks: Task[]) => void;
  setFilteredTasks: (tasks: Task[]) => void;
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
      filteredTasks: [],
      setUsers: (users) => set(() => ({ users })),
      setTasks: (tasks) => set(() => ({ tasks })),
      setFilteredTasks: (filteredTasks) => set(() => ({ filteredTasks })),
      setFocusedTask: (task) => set(() => ({ focusedTask: task })),
      addTask: (task: Task) => set((state) => ({ filteredTasks: [...state.filteredTasks, task] })),
      updateTask: (taskId: string, updatedTask: Task) =>
        set((state) => ({
          filteredTasks: state.filteredTasks.map((task) =>
            task.id === taskId ? { ...task, ...updatedTask } : task
          ),
          focusedTask:
            state.focusedTask?.id === taskId
              ? { ...state.focusedTask, ...updatedTask }
              : state.focusedTask,
        })),
      updateTaskOrder: (taskId: string, overId: string) =>
        set((state) => {
          const filteredTasks = [...state.filteredTasks];
          const sourceIndex = filteredTasks.findIndex((task) => task.id === taskId);
          const destinationIndex = filteredTasks.findIndex((task) => task.id === overId);

          if (sourceIndex === -1 || destinationIndex === -1) {
            console.warn('Invalid task or destination ID');
            return { filteredTasks };
          }

          const [movedTask] = filteredTasks.splice(sourceIndex, 1);

          filteredTasks.splice(destinationIndex, 0, movedTask);

          return { filteredTasks };
        }),
      deleteTask: (taskId: string) =>
        set((state) => ({
          filteredTasks: state.filteredTasks.filter((task) => task.id !== taskId),
        })),
    }),
    {
      name: 'app-store', // LocalStorage key
      partialize: (state) => ({ filteredTasks: state.filteredTasks, users: state.users }),
      merge: (persistedState, currentState) => ({
        ...currentState,
        focusedTask:
          persistedState?.focusedTask || taskList[0], // Varsayılan görev
        filteredTasks:
          persistedState?.filteredTasks?.length > 0
            ? persistedState.filteredTasks
            : taskList, // Varsayılan liste
        tasks: persistedState?.tasks || taskList, // Varsayılan tüm görevler
        users: persistedState?.users || userList, // Varsayılan kullanıcılar
      }),
    }
  )
);
