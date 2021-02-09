import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "title by virgilio", body: "Lorem ipsum dolor sit amet consectetur", author: "virgilio", id: 1},
    {title: "title by Ari", body: "xxxxxxxxxxxxxx", author: "Ariadna", id: 2},
    {title: "title by Sele", body: "yyyyyyyyyyyyyy", author: "Selene", id: 3}
  ]);

  return ( 
    <div className="home">
      {blogs.map((blog) => {
        return <div className="blog-preview" key={blog.id}>
                  <h2>{ blog.title}  </h2>
                  <p>written by { blog.author }</p>
                </div>
      })}
    </div>
 );
}
 
export default Home;