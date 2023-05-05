// home.js

// fetching data using use effect

// import { useState, useEffect } from "react";
// import BlogList from "./BlogList";





// const Home = () => {
//     we have to set the initial state value to null so that we can fetch and return the data through api
//     const [homeBlogs,setblogs] = useState(null)



//     useEffect(() => {
//         first we have to fetch the api like this
//         fetch('http://localhost:8000/homeBlogs')

//         .then(res => {
//             return res.json ();
//         })
//         here we are converting data to the js object
//         .then (data => {
//             setblogs(data);
//             console.log(data)
//         });

//     }, []);



//     return ( 
//         <div className="home">
// this is a conditional template
//             {homeBlogs && <BlogList blogs = {homeBlogs} mainHeading = "All Blogs"  /> }
//             ^
//             we are using logical and operator so that if the lhs of it is true only then we go to the rhs, otherwise it will give error
//         </div>
//     );
//     }
// export default Home;


// const BlogList = ({blogs, mainHeading}) => {



    
//     return (  
//         <div className="blog-list">
//             <h2> {mainHeading}</h2>
//             {blogs.map((blog) => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2> {blog.title} </h2>
//                     <p> written by {blog.author} </p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default BlogList;
