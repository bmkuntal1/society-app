import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
                <h1 className="display-1 fw-bold">404</h1>
                <div className="lead ms-2">Page not found</div>
                <Link className="btn btn-link text-decoration-none" to="/">Back to Home</Link>
            </div>
        </>
    )
}

export default NotFoundPage