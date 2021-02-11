import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import spinner from './spinner.gif';

const BlogDetails = () => {
  const{ id } = useParams();
  const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);


  return ( 
    <div className="blog-details">
      { isPending && <div><img src={spinner} className="App-spinner" alt="spinner" /> Loading...</div> }
      { error && <div>{ error }</div>}

      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by: { blog.author }</p>
          <div>{ blog.body }</div>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;