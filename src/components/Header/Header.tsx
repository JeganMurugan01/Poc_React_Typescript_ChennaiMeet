import { AdminHeaderLable, UserHeaderLable } from "../../constants";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>Online Compiler</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="d-flex flex-row-reverse">
          <Nav className="ml-auto">
            {localStorage.getItem("USERTYPE") === "ADMIN" &&
              AdminHeaderLable?.map((value, i) => (
                <Nav.Item key={i}>
                  <label
                    className="nav-link"
                    onClick={() => {
                      nav(value?.pathName);
                    }}
                  >
                    {value.label}
                  </label>
                </Nav.Item>
              ))}
            {localStorage.getItem("USERTYPE") === "USER" &&
              UserHeaderLable?.map((value, i) => (
                <Nav.Item key={i}>
                  <label
                    className="nav-link"
                    onClick={() => {
                      nav(value?.pathName);
                    }}
                  >
                    {value.label}
                  </label>
                </Nav.Item>
              ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
