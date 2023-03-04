import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiShoppingBag } from 'react-icons/bi';
import { CiUser } from 'react-icons/ci';
import { MdFavoriteBorder } from 'react-icons/md';
import style from '../Styles/Navigation.module.css';

function Navigation() {
    return (
        <Navbar fixed="top" expand="md" className={`${style.navbar} mb-3 p-3-sm pt-4-sm`}>
            <div className="container">
                <Navbar.Brand href="#">মিরপুর শপ</Navbar.Brand>
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-md"
                    aria-labelledby="offcanvasNavbarLabel-expand-md"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                            মিরপুর শপ
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-center flex-grow-1 pe-3">
                            <Nav.Link href="#action1">হোম</Nav.Link>
                            <NavDropdown title="শপ" id="offcanvasNavbarDropdown-expand-md">
                                <NavDropdown.Item href="#action3">শপ</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action2">পরিচয়</Nav.Link>
                            <Nav.Link href="#action2">অফার</Nav.Link>
                            <Nav.Link href="#action2">যোগাযোগ</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <div className={`${style.icons}`}>
                    <CiUser />
                    <BiShoppingBag />
                    <MdFavoriteBorder />
                </div>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
            </div>
        </Navbar>
    );
}

export default Navigation;
