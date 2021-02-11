import { Link } from 'react-router-dom'


const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Sorry</h2>
      <p style={{ marginBottom: '5px'}}>The page cannot be found</p>
      <Link to="/" style={{ color: ''}}>
        Back to Home page
      </Link>
    </div>
   );
}
 
export default NotFound;