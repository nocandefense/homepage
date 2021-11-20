import { Link } from 'react-router-dom';

function Header({ children }) {
    return (
        <header className="grid place-items-center h-screen">
            <Link to="/"><h1 className="text-white text-5xl font-tech animate-bounce">brockcallahan.com</h1></Link>
            {children}
        </header>
    );
}

export default Header;
