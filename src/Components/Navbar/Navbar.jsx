import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <header className="header">
        <h1>PREETIKA GUPTA</h1>
      </header>
      <nav className="navbar">
        <NavLink to="/about" activeClassName="active">ABOUT</NavLink>
        <NavLink to="/research" activeClassName="active">RESEARCH</NavLink>
        <NavLink to="/teaching" activeClassName="active">TEACHING</NavLink>
        <NavLink to="/cv" activeClassName="active">CONTACT AND CV</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
