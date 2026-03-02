import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Task } from '../backend/src/models/task';

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = { tasks: [] };

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    }
  }
});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
