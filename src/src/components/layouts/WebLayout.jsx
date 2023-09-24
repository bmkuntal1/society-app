import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

function WebLayout() {
    return (
        <>
            <main className="flex-shrink-0">
                <Navigation />
                <Outlet />
            </main >
            <Footer />
        </>
    )
}

export default WebLayout