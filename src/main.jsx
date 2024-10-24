import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider , createBrowserRouter} from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import Content from './Pages/Content.jsx'
import Singleproduct from './Pages/Singleproduct.jsx'
import Layout from './layout.jsx'


const router = createBrowserRouter([
  {


    path :'/',
    element:<Layout/>,
    children:[
   {
    path:'Login',
    element:<Login/>
   },
   {
    path:'Home',
    element:<Home/>
   },
   {
     path:'Product',
     element:<Products/>
   },
   {
    path:'content',
    element:<Content/>
   },
   {
    path:'SingleProduct',
    element:<Singleproduct/>
   }
    ]
}
])

createRoot(document.getElementById('root')).render(


  <StrictMode>

  <RouterProvider router={ router} />

    
  </StrictMode>,
)
