import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import logo from '/src/assets/images/tarang_logo.jpg'
import { auth } from '/src/firebase.config'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import HomePopup from '../../components/website/HomPopup'

function Navigation() {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [signOut, loading] = useSignOut(auth);

    const handleSignOut = async () => {
        if (user) {
            await signOut(auth);
            navigate("/");
            return
        }
        navigate("/login");
    }

    return (
        <Navbar expand="lg" className="navbar-light bg-white py-3">
            <Container className="px-5">
                <Navbar.Brand>
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="..." className="navbar-brand-img" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mb-2 mb-lg-0 small fw-bolder">
                        {/* All menu with rounded pill button menu and dark on active bootstrap-5*/}
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about-us">About</Link>
                        <Link className="nav-link" to="/election-2023">Election 2023</Link>
                        {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> :
                            <button onClick={handleSignOut} className="nav-link btn btn-link text-decoration-none text-start" to="/login">
                                <i className="bi bi-person-circle me-1"></i><span>{user ? user.email : 'Login'}</span>
                            </button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <HomePopup/>
        </Navbar>
    )
}


export default Navigation