import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "title by virgilio", body: "Lorem ipsum dolor sit amet consectetur", author: "virgilio", id: 1},
    {title: "title by Ari", body: "xxxxxxxxxxxxxx", author: "Ariadna", id: 2},
    {title: "title by Sele", body: "yyyyyyyyyyyyyy", author: "Selene", id: 3}
  ]);

  return ( 
    <BlogList blogs={blogs} title="All the blogs"/>
 );
}
 
export default Home;