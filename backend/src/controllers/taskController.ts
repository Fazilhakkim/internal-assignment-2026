import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../../../backend/src/models/task';

const app = express();
app.use(cors());
app.use(express.json());

// Auth Middleware for Deletion
const authGuard = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers['x-admin-token'] !== 'secure-app-secret') {
    return res.status(403).json({ error: 'Unauthorized: Missing secret header' });
  }
  next();
};

// In-memory store
let tasks: Task[] = [];

app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => {
  const newTask = { ...req.body, id: uuidv4(), completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});
app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== req.params.id);
  res.status(204).send();
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(5000, () => console.log('Server running on port 5000'));