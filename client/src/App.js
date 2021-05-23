import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Google Books</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Search</Nav.Link>
          <Nav.Link href="#features">Saved</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default App;
