import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '/src/assets/images/tarang_logo.jpg'
import avatar from '/src/assets/images/avatar.png'

function Navigation() {
    return (
        <Navbar expand="lg" className="navbar-light bg-white py-3">
            <Container className="px-5">
                <Navbar.Brand>
                    <img src={logo} alt="..." className="navbar-brand-img" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mb-2 mb-lg-0 small fw-bolder">
                        {/* All menu with rounded pill button menu and dark on active bootstrap-5*/}
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about-us">About</Link>
                        <Link className="nav-link" to="/election-2023">Election 2023</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Navigation