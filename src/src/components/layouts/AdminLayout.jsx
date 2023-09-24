import { useAuthState } from 'react-firebase-hooks/auth';
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { auth } from '../../firebase.config'

function AdminLayout() {
    const [user, loading] = useAuthState(auth);

    if (loading) return <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>

    if (!user) return <Navigate to="/login" />

    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default AdminLayout;