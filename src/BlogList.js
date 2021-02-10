const BlogList = ({ blogs, title, handleDelete }) => {
  return ( 
    <div className="home">
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return <div className="blog-preview" key={blog.id}>
                  <h2>{ blog.title}  </h2>
                  <p>written by { blog.author }</p>
                  <button onClick={() => handleDelete(blog.id)}
                          style={{
                            backgroundColor: "#c9ccf4",
                            padding: "5px 10px",
                            marginTop: "6px",
                            fontSize: "15px"
                          }}>Delete Blog</button>
                </div>
      })}
    </div>
  );
}
 
export default BlogList;