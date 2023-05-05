// home.js

// catch block


// import { useState, useEffect } from "react";
// import BlogList from "./BlogList";





// const Home = () => {
//     const [homeBlogs,setblogs] = useState(null);

//     const [pending,setPending] = useState(true);

//     const [error,setError] = useState(null);



//     useEffect(() => {
//         fetch('http://localhost:8000/homeBlogs')
//         doing this to get an error
//         fetch('http://localhost:8000/homeBlogss')

//         .then(res => {
//             when you see the result of the code written below in console then there is a line "ok: true" which means that there was no error while getting the data from the sever

//             console.log(res);
//             by using the below command we are throwing an error and making our own message which will be displayed
//             if(!res.ok){
//                 throw Error("Invalid request")
//             }
//             return res.json ();
//         })
//         .then (data => {
//             we don't want to have the error message when we there is no error that's why we put it as null
//             setError(null)
//             setblogs(data);
//             setPending(false);
            
//         })

//         the below code catches any kind of network error or connection error even if we cann't connect to the server
//         to check this we have to console out of the terminal by using ctrl+c and yes by doing this we will get a connection error
//         and in the console we will see the error which occured
//         .catch(err => {
//             we don't want the loading text when we have the error that's why we set it as false
//             setPending(false)
//             here we are setting up the message which will appear when we have an error
//             setError(err.message);
//         })

//     }, []);



//     return ( 
//         <div className="home">
//             this is the condition if we have an error then (lhs) then rhs will be applied  
//             {error && <div> {error} </div> }
//             {pending && <div> Loading...</div> }
//             {homeBlogs && <BlogList blogs = {homeBlogs} mainHeading = "All Blogs"  /> }
//         </div>
//     );
//     }
// export default Home;





// BlogList

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
