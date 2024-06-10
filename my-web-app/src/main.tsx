import ReactDOM from 'react-dom/client'
// import './index.css'
import HomePage from '../views/HomePage.tsx'
import LandingPage from '../views/LandingPage.tsx'

import 'daisyui/dist/full.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={BrowserRouter} />
)
