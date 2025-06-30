import { Children, useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from "./Pages/Home";
import Login from './Pages/Login';
import Register from './Pages/Register';
import First from './Pages/First';


const router = createBrowserRouter([
  {
    path:'/',
    element: <First />,

    children: [
      {
        index: true,
        element:<Register />
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/Home",
        element: <Home />
      }
    ],
  }
]);

function App() {
  
  return <RouterProvider router={router}/>
}

export default App
