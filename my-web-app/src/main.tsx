import ReactDOM from 'react-dom/client'
import './index.css'
// import HomePage from '../views/HomePage.tsx'
// import LandingPage from '../views/LandingPage.tsx'
import AboutPage from '../views/AboutPage.tsx'
import GalleryPage from '../views/GalleryPage.tsx'
import ContactPage from '../views/ContactPage.tsx'
import RootLayout from '../views/RootLayout.tsx'

import 'daisyui/dist/full.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainScreen from '../views/HomePage.tsx'

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <MainScreen />,
      },
      {
        path: '/about-me',
        element: <AboutPage />
      },
      {
        path: '/gallery',
        element: <GalleryPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={BrowserRouter} />
)
