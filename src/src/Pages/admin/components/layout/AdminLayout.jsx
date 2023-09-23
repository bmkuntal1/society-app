import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'
import { auth } from '../../../../firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'

function AdminLayout() {
    const [user, loading, error] = useAuthState(auth);

    return (
        <>
            {user ? <Navigate to="/admin" /> : <Navigate to="/login" />}
            <Navigation />
            <Outlet />
        </>
    )
}

export default AdminLayout