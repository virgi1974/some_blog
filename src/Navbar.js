import logo from './logo.svg';
// scf -> stateless functional component
const Navbar = () => {
  return ( 
    <nav className="navbar">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Virgi Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;