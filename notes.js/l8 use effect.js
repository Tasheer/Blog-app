// use effect

// import { useState, useEffect } from "react";
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
//         const delteBlog = homeBlogs.filter (blog => blog.id !== id)
//         setblogs(delteBlog)
//     }

//     we do not store it as a constant as it doesnot return anything all we do is pass function as an argument
//     we use it to remove the side effects while updating dom, timers, etc. which 
//     it runs everytime the code is rerendered
//     it will run everytime the data changes
//     the usestate and useeffect runs a continuous loop coz once the data is rendered it will trigger useeffect which will update state due to which code will be rerendered and will again trigger effect and update state resulting in a continuous loop
// we can pass 2 arguments in use effect
//     useEffect(() => {
//         console.log("use effect run")
//     })


//     return ( 
//         <div className="home">
//             <BlogList blogs = {homeBlogs} mainHeading = "All Blogs" handleDelete={handleDelete} />

//             <BlogList blogs = {homeBlogs.filter ((blog) => blog.author === "Tasheer")} mainHeading = "Blogs by Tasheer" handleDelete={handleDelete}/>
//         </div>
//     );
//     }
// export default Home;