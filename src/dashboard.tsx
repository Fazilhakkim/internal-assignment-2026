import type { RootState } from "@reduxjs/toolkit/query";
import { AddTaskForm } from "./addTask";
import { deleteTask, toggleTask } from "./taskSlice";
import {useDispatch,useSelector} from 'react-redux'

export const Dashboard = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const dispatch = useDispatch();
  
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Task Dashboard</h1>
        <AddTaskForm />
        <div className="grid gap-4">
          {tasks.map(task => (
            <div key={task.id} className="flex items-center justify-between p-4 bg-white shadow rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  onChange={() => dispatch(toggleTask(task.id))}
                />
                <span className={task.completed ? 'line-through text-gray-400' : ''}>
                  {task.title}
                </span>
              </div>
              <button 
                onClick={() => dispatch(deleteTask(task.id))}
                className="text-red-500 hover:bg-red-50 px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  