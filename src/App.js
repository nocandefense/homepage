import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Games from './components/Games';

function App() {
  return (
    <div className="App bg-gray-400 text-white h-full lg:w-3/6 p-4 mx-auto">
      <Header>
        <Nav />
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </Main>
      <Footer>
        <Copyright />
      </Footer>
    </div>
  );
}

export default App;
