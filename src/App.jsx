import {   createBrowserRouter,RouterProvider,} from "react-router-dom"
import Home from './pages/home/HomePage'
import LayoutPage from './layout/LayoutPage'
import About  from './pages/about/AboutPage'
import Shop  from './pages/Shop/ShopPage'
import Service  from './pages/Services/ServicePage'
import Blog  from './pages/Blog/BlogPage'
import Contact  from './pages/Contact/ContactPage'
import Cart  from './pages/Cart/CartPage'
import { colors } from "./utils/colors"


const router = createBrowserRouter([
  {
    path:"/",
    element:<LayoutPage/>,
    errorElement:<h1 style={colors.black}>Ohh Sorry Try Again</h1>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path:"shop",
        element:<Shop/>
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path:"services",
        element:<Service/>
      },
      {
        path:"blog",
        element:<Blog/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
      
    ],
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
