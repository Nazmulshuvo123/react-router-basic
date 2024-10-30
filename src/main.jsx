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
import Posts from './component/Posts/Posts.jsx';
import PostDetail from './component/Postdetail/PostDetail.jsx';
import ErrorPage from './component/Errorpage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
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
      },
      {
        path:"/posts",
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:"/post/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetail></PostDetail>
      }

    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
