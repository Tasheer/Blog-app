//  making a post request

// import { useState } from "react";


// const Create = () => {

//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [author, setAuthor] = useState('Tasheer');
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const blog = { title, body, author };
//         now we want that when we submit the blog it goes to the data file
//         so here we are making a request
//         fetch('http://localhost:8000/homeBlogs' , {

//         this shows what type of request we are sending in this case it is a post request
//         method : "POST",
//         the below code tells which type of data we are sending which in this case is json data
//         headers : {"Content-Type" : "application/json"},
//         this is the actual data we are sending i.e. blog but it is an object so we have to convert it into a json string
//         body : JSON.stringify(blog)
//         })
//         checking if its working
//         .then(() => {
//             console.log("New blog is added")
//         })
//     }

//     return ( 
//         <div className="create">
//             <h2>
//                 Add a new Blog
//             </h2>
//             <form onSubmit={handleSubmit} >
//                 <label>
//                     Blog title
//                 </label>
//                 <input 
//                     type="text" 
//                     required
//                     value = {title}
//                     onChange = { (e) => setTitle(e.target.value) }
//                 />
//                 <label>
//                     Blog body
//                 </label>
//                 <textarea 
//                     required
//                     value = {body}
//                     onChange = { (e) => setBody(e.target.value)}
//                 ></textarea>
//                 <label>
//                     Blog author
//                 </label>
//                 <select 
//                     value={author}
//                     onChange = { (e) => setAuthor(e.target.value) }
//                 >
//                 <option value="Tasheer">Tasheer</option>
//                 <option value="Ahmad">Ahmad</option>
//                 <option value="Khan">Khan</option>
//                 </select>
//                 <button>
//                     Add Blog
//                 </button>
//             </form>
//         </div>
//     );
// }

// // export default Create;