import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Newapp from './Newapp.jsx';
// import HabitForm from './Habittracker/HabitForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Newapp/>
  </StrictMode>
);
