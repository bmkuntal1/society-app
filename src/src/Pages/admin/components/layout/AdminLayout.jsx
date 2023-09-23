import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'
import { auth } from '../../../../firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'

function AdminLayout() {
    const [user, loading, error] = useAuthState(auth);

    return !loading && user ? (
        <>
            <Navigation />
            <Outlet />
        </>
    ) : <Navigate to="/login" />
}

export default AdminLayout