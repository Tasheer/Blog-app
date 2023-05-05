
// create.js
// forms and submit

// import { useState } from "react";


// const Create = () => {

//     making a function and an empty state string
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [author, setAuthor] = useState('Tasheer');

//     creating a new submit function
//     const handleSubmit = (e) => {
//         this code prevents the page from refreshing when submited
//         e.preventDefault();

//         new object
//         with the help of this we will get all the entered details
//         const blog = { title, body, author };
//         in the code below we are checking if the above code is working
//         console.log(blog);
//     }

//     return ( 
//         <div className="create">
//             <h2>
//                 Add a new Blog
//             </h2>
//             creating the form
//             <form onSubmit={handleSubmit} >
//                 <label>
//                     Blog title
//                 </label>
//                 <input 
//                     type="text" 
//                     adding the below code so that the field is not empty
//                     required
//                     the below code is used to associate the value in the title box to {title}
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
//                 adding the below code to check if it's working
//                 <p> {title} </p>
//                 <p> {body} </p>
//                 <p> {author} </p>
//             </form>
//         </div>
//     );
// }

// export default Create;