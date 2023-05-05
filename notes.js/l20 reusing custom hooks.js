// blogdetails.js
// reusing custom hook

// import {useParams} from 'react-router-dom';
// imported usefetch
// import useFetch from "./useFetch";


// const BlogDetails = () => {

//     const { id } = useParams();
//     getting the properties, changing the url by adding / so that we can change the end point and get to the end using id
//     const {data : homeBlogs, pending, error} = useFetch('http://localhost:8000/homeBlogs/' + id);

//     return (  


//         <div className="blog-details">
//             {pending && <div> Loading... </div> }
//             {error && <div> { error } </div> }
//             {homeBlogs && (
//                 to get the body and other parts of the blog here we used article and injected all the parts
//                 <article>
//                     <h2> {homeBlogs.title} </h2>
//                     <p> Written by - {homeBlogs.author} </p>
//                     <br />
//                     <div>
//                         {homeBlogs.body}
//                     </div>
//                 </article>
//             )}
//         </div>
//     );
// }

// export default BlogDetails;