import { Link } from 'react-router-dom';

function Header(){
    return (
        <nav className="navbar">
            <a className="logo" href="#">
                LOGO
            </a>
            <ul className="navbar-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;