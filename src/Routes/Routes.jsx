import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Details from '../components/Details/Details';
import AllApps from '../components/AllApps/AllApps';

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      // errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          index:true,
          loader:()=>fetch('/appData.json'),
          Component:Home
        },
        {
          path:'/appDetails/:id',
          loader: () =>fetch('/appData.json'),
           Component:Details
        },
        {
          path:'/allApps',
          loader: () => fetch('/appData.json'),
          Component:AllApps,
        },
        {
          path:'*',
          Component:ErrorPage,
        }
      ]
    }
  ]);