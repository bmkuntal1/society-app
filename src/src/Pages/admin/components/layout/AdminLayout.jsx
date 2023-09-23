import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
    return (
        <>
            <Navigation />
            <Outlet/>
        </>
    )
}

export default AdminLayout