import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <header>
            <nav className="NavBar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;