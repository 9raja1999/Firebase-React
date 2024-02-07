import React from 'react'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
// Router Mechanism Import
import PrivateRoute from './PrivateRoute'
// imports Layouts
import AuthLayout from '../layouts/AuthLayout'
// imports Pages
import App from '../App'
import Login from '../pages/Login'
import Register from '../pages/Register'
import DashboardLayout from '../layouts/DashboardLayout'
import Posts from '../pages/POsts'
import NotFound from '../pages/NotFound'


const router = createBrowserRouter([
    {
        path : '/',
        element : <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>,
        children : [
            {
                path : '',
                element : <App />
            },
            {
                path : '/posts',
                element : <Posts />
            },
        ]
    },
    {
        path : '/auth',
        element : <AuthLayout />,
        children : [
            {
                path : '',
                element : <Login />
            },
        ]
    },
    {
        path : '*',
        element : <NotFound />,
    }
])


function Navigation() {
  return (
    <RouterProvider
        router={router}
    />
  )
}

export default Navigation