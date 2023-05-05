// Submit and redirect

// import { useState } from "react";
// import { useHistory } from "react-router-dom";


// const Create = () => {

//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [author, setAuthor] = useState('Tasheer');
//     const history = useHistory();

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const blog = { title, body, author };

//         fetch('http://localhost:8000/homeBlogs' , {

//         method : "POST",
//         headers : {"Content-Type" : "application/json"},
//         body : JSON.stringify(blog)
//         })
//         .then(() => {
//             console.log("New blog is added")
//             after submitting if we want to go back 1 step we will use the following code
//             history.push(-1);
//             after submitting if we want to go 1 step ahead we will use the following code
//             history.push(+1);
//             in ths case we want to go to homepage whose path is defined as / in app.js
//             history.push('/');

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

// export default Create;