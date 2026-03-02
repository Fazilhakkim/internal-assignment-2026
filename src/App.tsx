
import { Provider } from 'react-redux';
import './App.css'
import { Dashboard } from './dashboard';
import { type Task } from '../backend/src/models/task';
import { store } from './store';

function App() {
  
  return (
    <>
    <Provider store={store}>
    <Dashboard />
    </Provider>
    
    </>
  )
}

export default App
