import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import SiteInfo from "./components/SiteInfo";
import Copyright from './components/Copyright';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-dark-pink text-white h-full lg:w-3/6 p-4 mx-auto">
      <Header>
        <Nav />
      </Header>
      <Main>
        <SiteInfo />
      </Main>
      <Footer>
        <Copyright />
      </Footer>
    </div>
  );
}

export default App;
