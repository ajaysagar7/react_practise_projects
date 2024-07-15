import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TodoScreen from './Pages/Project1/TodoScreen.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
   
    ]
  },
  {
    path: "/project1",
    element : <TodoScreen/>
  },
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
