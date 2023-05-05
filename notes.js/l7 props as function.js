// how to use props as a function


// home.js

// import { useState } from "react";
// import BlogList from "./BlogList";
// // 
// const Home = () => {
// // 
//     const [homeBlogs,setblogs] = useState([
//         {title: "The Mind", Content: "lorem", author: "Tasheer", id:1 },
//         {title: "The Trauma", Content: "lorem", author: "Me", id:2 },
//         {title: "The Theory", Content: "lorem", author: "Tasheer", id:3 } 
//     ])



//     const handleDelete = (id) => {
    // here the operation works this way 
    // it will check the id and if the id is not same then it will add it to the list of array as while we click on the delete button then it refreshes and returns only those objects which donot have the id 
//         const delteBlog = homeBlogs.filter (blog => blog.id !== id)
//         setblogs(delteBlog)
//     }



//     return ( 
//         <div className="home">
//             <BlogList blogs = {homeBlogs} mainHeading = "All Blogs" handleDelete={handleDelete} hideDelete={true} />



//             <BlogList blogs = {homeBlogs.filter ((blog) => blog.author === "Tasheer")} mainHeading = "Blogs by Tasheer" handleDelete={handleDelete}/>
//         </div>
//     );
//     }
// export default Home;





// const BlogList = ({blogs, mainHeading, handleDelete,hideDelete }) => {



    
//     return (  
//         <div className="blog-list">
//             <h2> {mainHeading}</h2>
//             {blogs.map((blog) => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2> {blog.title} </h2>
//                     <p> written by {blog.author} </p>
//                     {!hideDelete && (

//                 <button onClick = { () => handleDelete(blog.id)} >
//                     Delete Blog
//                 </button>
//                     ) }
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default BlogList;
