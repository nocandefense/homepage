import { Link } from 'react-router-dom';

function Header({ children }) {
    return (
        <header>
            <Link to="/"><h1 className="text-white text-5xl text-center">brockcallahan.com</h1></Link>
            {children}
        </header>
    );
}

export default Header;
