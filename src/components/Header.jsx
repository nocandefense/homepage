import { Link } from 'react-router-dom';

function Header({ children }) {
    return (
        <header className="align-middle">
            <Link to="/"><h1 title="brockcallahan.com" className="text-white text-5xl text-center font-tech scale-90 backdrop-hue-rotate-15 backdrop-invert">brockcallahan.com</h1></Link>
            {children}
        </header>
    );
}

export default Header;
