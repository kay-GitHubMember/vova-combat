import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, parsePath, RouterProvider } from 'react-router-dom'
import { Registration } from '../components/Registration/Registration.jsx'
import { Authorization } from '../components/Authorization/Authorization.jsx'
import { AuthProvider } from './AuthContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/authorization",
    element: <Authorization />,
  },
  {
    path: "/app",
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
