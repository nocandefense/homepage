import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Games from './components/Games';
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Comforter+Brush&family=IBM+Plex+Mono:wght@200&family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="App h-full lg:w-3/6 p-4 mx-auto">
        <Header />
        <Main>
        </Main>
        <Footer>
          <p>* Under construction.</p>
        </Footer>
      </div>
    </>
  );
}

export default App;
