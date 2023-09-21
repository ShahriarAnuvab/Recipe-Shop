import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Aboutus from './Components/Home/About Us/Aboutus';
import Contact from './Components/Home/Contact/Contact';
import Recepies from './Components/Recepies/Recepies';
import RecepieDetails from './Components/Recepie Details/RecepieDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children :[
      {
        path: '/about',
        element : <Aboutus></Aboutus>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/recepies',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'),
        element: <Recepies></Recepies>
      },
      {
        path: '/recepies/:idMeal',
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element: <RecepieDetails></RecepieDetails>
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
