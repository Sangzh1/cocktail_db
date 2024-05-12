// RRD
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// PAGES
import Home from './pages/Home'
import About from './pages/About'
// LAYOUT
import RootLayout from "./layout/RootLayout"
import SingleCocktail from "./pages/SingleCocktail"


function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children:[
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/cocktail/:id',
          element: <SingleCocktail/>
        }
      ]
    }
  ])
  return <RouterProvider router={routes} />
}

export default App