import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import spinner from './spinner.gif';


const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('use effect was run');

    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          console.log(res);
          if (!res.ok) {
            throw Error('could not fetch data from DB')
          }
          return res.json();
        })
        .then(data => {
          console.log("-- blogs from json file --");
          console.table(data);
          setBlogs(data);
          setisPending(false);
          setError(null);
        })
        .catch(err => {
          // console.error(err.message);
          setisPending(false);
          setError(err.message);
        })
    }, 1000)

  }, [])

  return ( 
    <>
      { error && <div style={{color: "red"}}>{error}</div> }
      { isPending && <div><img src={spinner} className="App-spinner" alt="spinner" /> Loading...</div> }
      {blogs && <BlogList blogs={blogs} 
                          title="All the blogs"
      />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author == "Selene")} title="Selene's blogs"/> */}
    </>
 );
}
 
export default Home;