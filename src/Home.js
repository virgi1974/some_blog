import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    console.log('use effect was run');

    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("-- blogs from json file --");
        console.table(data);
        setBlogs(data);
      })
  }, [])

  const handleDelete = (id) => {
    console.log("deleting log - ", id);
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  return ( 
    <>
      {blogs && <BlogList blogs={blogs} 
                          title="All the blogs"
                          handleDelete={handleDelete}
      />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author == "Selene")} title="Selene's blogs"/> */}
    </>
 );
}
 
export default Home;