import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return ( 
    <div className="home">
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return <div className="blog-preview" key={blog.id}>
                  <Link to={`/blogs/${blog.id}`}>
                    <h2>{ blog.title}  </h2>
                    <p>written by { blog.author }</p>
                  </Link>
                </div>
      })}
    </div>
  );
}
 
export default BlogList;