import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import payphone from './img/pay-phone.png';

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="App h-full lg:w-3/6 p-4 mx-auto">
        <Header />
        <Footer>
          <p className="animate-ping grid place-items-bottom h-screen">* Under construction.</p>
        </Footer>
      </div>
    </>
  );
}

export default App;
