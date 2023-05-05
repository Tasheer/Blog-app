
// import { useState } from "react";
// import BlogList from "./BlogList";
// 
// const Home = () => {
// 
    // const [homeBlogs,setblogs] = useState([
        // {title: "The Mind", Content: "lorem", author: "Tasheer", id:1 },
        // {title: "The Trauma", Content: "lorem", author: "Me", id:2 },
        // {title: "The Theory", Content: "lorem", author: "Someone", id:3 } 
    // ])
    // return ( 
        // <div className="home">
            {/* <BlogList blogs = {homeBlogs} mainHeading = "All Blogs" /> */}
                    {/* ^ */}
            {/* this is property name */}
            {/* we can have any name for the property */}
            // it is good to have the same property name as we have defined it
        // </div>
    // );
    // }
// export default Home;







// PROPS
// props help us in the reusability if the code

// from 180-267



// we use prop to extract an element from one component to another
// like here we extracted the homeblogs
// const BlogList = (props) => {
    // const homeBlogs = props.blogs;
    // const mainTitle = props.mainHeading;  
    
    
    
    // return (  
        // <div className="blog-list">
        {/* <h2> {mainTitle}</h2> */}
        // {homeBlogs.map((blog) => (
            // <div className="blog-preview" key={blog.id}>
            {/* <h2> {blog.title} </h2> */}
            // <p> written by {blog.author} </p>
            // </div>
            // ))}
            // </div>
            // );
            // }
            // }
            // export default BlogList;
            
            







        // another way



            // we can also use the properties in the following way
            
            
            // const BlogList = ({blogs, mainHeading}) => {
                
    // return (  
        // <div className="blog-list">
        {/* <h2> {mainHeading}</h2> */}
        // {blogs.map((blog) => (
            // <div className="blog-preview" key={blog.id}>
            {/* <h2> {blog.title} </h2> */}
            // <p> written by {blog.author} </p>
            // </div>
            // ))}
            // </div>
            // );
            // }
            // }
            // export default BlogList;











