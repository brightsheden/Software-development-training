import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <HomePage/>,
  },
  {
    path: '/about',
    element: <AboutPage/>
  },
  {
    path:"/contactus",
    element:<ContactUsPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
