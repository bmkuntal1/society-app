import React from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'

function ProtectedRoute() {
    const [user, loading, error] = useAuthState(auth, { initialData: true, initialError: true });

    return (
        <>
            {!loading && user ? <Navigate to="/admin" /> : <Navigate to="/login" />}
        </>
    )
}

export default ProtectedRoute