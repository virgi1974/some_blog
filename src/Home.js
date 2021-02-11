import useFetch from "./useFetch";
import BlogList from "./BlogList";
import spinner from './spinner.gif';


const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
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