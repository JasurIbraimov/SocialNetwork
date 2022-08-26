import {Navbar, NavItem, Nav, NavLink, NavbarBrand, NavbarText, Container} from 'reactstrap'
function AppNav() {
    return (
    <div>
       <Container>
            <Navbar>
                <NavbarBrand href="/">Social Network</NavbarBrand>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="api/users/2">Profile</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>Welcome</NavbarText>
            </Navbar>
        </Container> 
    </div>
    )
}

export default AppNav