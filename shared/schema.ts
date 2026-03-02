import { z } from 'zod';

export const TaskPriority = z.enum(['Low', 'Medium', 'High']);
export const TaskStatus = z.enum(['Todo', 'In Progress', 'Done']);

export interface TaskContextType {
    tasks: Task[];
    loading: boolean;
    addTask: (task: Task) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    setSearchTerm: (term: string) => void;
    filteredTasks: Task[];
  }

export const TaskSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(5, "Description is too short"),
  priority: TaskPriority,
  status: TaskStatus,
});

export type Task = z.infer<typeof TaskSchema>;
