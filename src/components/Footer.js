import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/jt (1).png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github_logo.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jatin-tomar-440216202/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/TomarJatin"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright {year}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;