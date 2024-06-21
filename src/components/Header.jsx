function Header(){
    return (
        <nav className="navbar">
            <a className="logo" href="#">
                LOGO
            </a>
            <ul className="navbar-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    );
}

export default Header;