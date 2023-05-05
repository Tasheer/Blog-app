
import BlogList from "./BlogList";
import useFetch from "./useFetch";





const Home = () => {
    const {data:homeBlogs, pending, error} = useFetch('http://localhost:8000/homeBlogs');





    return ( 
        <div className="home">
            {error && <div> {error} </div> }
            {pending && <div> Loading...</div> }
            {homeBlogs && <BlogList blogs = {homeBlogs} mainHeading = "All Blogs"  /> }
        </div>
    );
    }
export default Home;

