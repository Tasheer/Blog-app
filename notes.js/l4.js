
// import { useState } from "react";

// const Home = () => {

//     what is the use of setblogs here?
//     const [blogs,setblogs] = useState([
//         he used body instead of content is it wrong?
//         {title: "The Mind", Content: "lorem", author: "Tasheer", id:1 },
//         {title: "The Trauma", Content: "lorem", author: "Me", id:2 },
//         {title: "The Theory", Content: "lorem", author: "Someone", id:3 } 
//     ])
//     return ( 
//         <div className="home">
//             we use .map to access the objects of a component
//             {blogs.map((blog) => (
//                 key is used so that whenever the data changes react could detect it and also it helps in differentitating between the list items 
//                 <div className="blog-preview" key={blog.id}>
//                     <h2> {blog.title} </h2>
//                     <p> written by {blog.author} </p>
//                 </div>
//             ))}
//         </div>
//     );
//     }
// export default Home;