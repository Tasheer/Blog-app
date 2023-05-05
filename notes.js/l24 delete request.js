// delete request



// import {useHistory, useParams} from 'react-router-dom';
// import useFetch from "./useFetch";


// const BlogDetails = () => {

//     const { id } = useParams();
//     const {data : homeBlogs, pending, error} = useFetch('http://localhost:8000/homeBlogs/' + id);
//     const history = useHistory();

//     const handleClick = () => {
//         fetching the endpoint and asking the json server to delete the blog with this id and setting up the delete method
//         fetch('http://localhost:8000/homeBlogs/' + homeBlogs.id, {
//             method : "DELETE"
//         })
//         .then (() => {
//             using this to get to the homepage once the above code is done
//             history.push('/');
//         })
//     }
    
//     return (  



//         <div className="blog-details">
//             {pending && <div> Loading... </div> }
//             {error && <div> { error } </div> }
//             {homeBlogs && (
//                 <article>
//                     <h2> {homeBlogs.title} </h2>
//                     <p> Written by - {homeBlogs.author} </p>
//                     <div>
//                         {homeBlogs.body}
//                     </div>
//                     <button onClick={handleClick}>Delete</button>
//                 </article>
//             )}
//         </div>
//     );
// }

// export default BlogDetails;