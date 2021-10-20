import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import './Main.css';
import { Container, Menu } from "semantic-ui-react";

function Header({ children }) {
  return (
    <header>
      <h1>brockcallahan.com</h1>
      {children}
    </header>
  );
}

function Nav() {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const menuItems = ["home", "about", "notes", "projects", "games",
    "contact"];
  return (
    <Menu inverted>
      {menuItems.map((item, index) => (<Menu.Item name={item} active={activeItem === item}
        onClick={handleItemClick} />))}
    </Menu>
  );
}

function Main({ children }) {
  return (
    <section>

      <p>Welcome to my homepage.</p>
      <p>I was working on a project with React JS, so I decided to
        rebuild my homepage with it for the heck of it (and for
        the practice.)</p>
      {children}
    </section>
  );
}

function Copyright() {
  let d = new Date();

  return (
    <>
      <p>
        <span>&#169;</span> Brock Callahan {d.getFullYear()}
      </p>
      <p>This page is licensed under the <a
        href="https://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)</a></p>
    </>
  );
}

function Footer({ children }) {
  return (
    <footer>
      {children}
    </footer>
  );
}

function SiteInfo() {
  return (
    <section>
      <p>This site was built with
        <a href="http://reactjs.com">ReactJS</a>
        <span> and </span>
        <a href="https://react.semantic-ui.com/">SemanticUI.</a></p>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Container>
        <Header>
          <Nav />
        </Header>
        <Main>
          <SiteInfo />
        </Main>
        <Footer>
          <img className="App-logo" src={logo} />
          <Copyright />
        </Footer>
      </Container>
    </div>
  );
}

export default App;
