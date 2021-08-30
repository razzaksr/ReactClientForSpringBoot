import { Container } from "@material-ui/core";
import { Nav, Navbar } from "react-bootstrap";


const Menu=()=>{


    return(<>
        <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Brand href="#">Dlithe E - Buddy</Navbar.Brand>
                    <Navbar.Toggle aria-control="logitems"></Navbar.Toggle>
                    <Navbar.Collapse id="logitems">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className="me-3 text-dark btn btn-outline-primary">
                                Home
                            </Nav.Link>
                            <Nav.Link href="/new" className="me-3 text-dark btn btn-outline-primary">
                                New
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>)
}
export default Menu;