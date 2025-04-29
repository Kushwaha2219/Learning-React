import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from './components/Home';
import About from './components/about';
import Navbar from './components/Navbar';
import DashBoard from './components/DashBoard';
import Courses from './components/Courses';
import Mocktest from './components/Mocktest';
import NotFound from './components/NotFound';
import ParaComp from './components/ParaComp';
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
        < Navbar />
        <Home/>
        </div>
    },
    {
      path:"/about",
      element: 
      <div>
        < Navbar />
        <About/>
        </div>
    },
    {
      path:'/dashboard',
      element: <div>
        <Navbar/>
        <DashBoard/>
      </div>,
      children:
      [
        {
          path:'courses',
          element: <Courses />
        },
        {
          path:'mocktest',
          element: < Mocktest/>
        },
      ]
    },
    {
      path:'*',
      element:< NotFound/>
    },
    {
      path:'/student/:id',
      element: <ParaComp/>
    }
  ]
);
function App() {
  

  return (
    <> 
       
      <RouterProvider router={router} />
    </>
  )
}

export default App
