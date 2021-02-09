import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "title-1 by virgilio", body: "Lorem ipsum dolor sit amet consectetur", author: "virgilio", id: 1},
    {title: "title-1 by Ari", body: "xxxxxxxxxxxxxx", author: "Ariadna", id: 2},
    {title: "title-1 by Sele", body: "yyyyyyyyyyyyyy", author: "Selene", id: 3},
    {title: "title-2 by Ari", body: "zzzzzzzzzzzzzzz", author: "Ariadna", id: 4},
    {title: "title-2 by Sele", body: "jjjjjjjjjjjjjj", author: "Selene", id: 5}
  ]);

  const handleDelete = (id) => {
    console.log("deleting log - ", id);
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  return ( 
    <>
      <BlogList blogs={blogs} 
                title="All the blogs"
                handleDelete={handleDelete}
      />
      {/* <BlogList blogs={blogs.filter((blog) => blog.author == "Selene")} title="Selene's blogs"/> */}
    </>
 );
}
 
export default Home;