import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './taskSlice';

export const AddTaskForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(addTask({ id: Date.now().toString(), title, description: '', priority: 'Medium', completed: false }));
      setTitle('');
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input 
          className="border p-2 rounded w-full border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Enter task title..."
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add</button>
      </form>
    );
  };
  