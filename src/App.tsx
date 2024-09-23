import React from 'react';
import './App.scss';
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/routes';

function App() {
  
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
