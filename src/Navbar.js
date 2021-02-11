import logo from './logo.svg';
import { Link } from 'react-router-dom';

// scf -> stateless functional component
const Navbar = () => {
  return ( 
    <nav className="navbar">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Virgi Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;