import {Link} from "react-router-dom";

function Header(props) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };
    return (
    <header>
      <nav style={navStyle}>
          <a href="/" className="logo">ND</a>
          <ul className="link">
              <a className="project" href="/projects">My Work</a>
              <a className="about" href="/about">About</a>
              <a className="contact" href="/contact">Contact</a>
              <a className="resume" href='https://docs.google.com/document/d/1_GA1E4VOXxVk1QKdjY5BP3_uWV0lvLBOCfoTxEh146I'>Resume</a>
          </ul>
      </nav>
    </header>)
  }
  
  export default Header;