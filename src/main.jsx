import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './component/Home/Home.jsx';

import About from './component/About/About.jsx';
import Contract from './component/contract/Contract.jsx';
import Users from './component/Users/Users.jsx';
import UserDetails from './component/Users/UsersDetails/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
     
      {
        path: "/about",
        element:<About></About>
      },
      {
        path: "/contract",
        element:<Contract></Contract>
      },
      {
        path:"/users",
        // fetch the data
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:"/user/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      }

    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
