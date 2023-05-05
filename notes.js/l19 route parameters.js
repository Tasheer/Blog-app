// app.js

// import Navbar from './Navbar'
// import Home from './Home'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Create from './Create'
// import BlogDetails from './BlogDetails'

// function App () {
//   return (
//     <Router>


//     <div className='App'>

//         <Navbar />
//         <div className='content'>

//         <Switch>
//             <Route exact path='/'>
//               <Home />
//             </Route>
//           </Switch>

//           <Switch>
//             <Route path='/create'>
//               <Create />
//             </Route>
//           </Switch>

//           when we want to get a blog with id then we do this
//           id could be anything
//           <Switch>
//             <Route path="/homeBlogs/:id">
//               <BlogDetails />
//             </Route>
//           </Switch>

//         </div>

//       </div>


//     </Router>
//  )
// }

// export default App






// blogdeatail.js


// import {useParams} from 'react-router-dom';


// const BlogDetails = () => {

//     this helps us to grab parameter from route
//     const { id } = useParams();

//     return (  

//         <div className="blog-details">
//             <h2>Blog details - {id} </h2>
//         </div>
//     );
// }

// export default BlogDetails;




// bloglist.js

// import { Link } from "react-router-dom";


// const BlogList = ({blogs, mainHeading}) => {


    
//     return (  
//         <div className="blog-list">
//             <h2> {mainHeading}</h2>
//             {blogs.map((blog) => (
//                 <div className="blog-preview" key={blog.id}>

//                     here we are using template string which helps us to add variable in it
//                     to add a variable we use $ with {} and then add the variable which in this case is blog which we have access to and add the id property
//                     <Link to = {`/homeBlogs/${blog.id}`}>

//                         <h2> {blog.title} </h2>

//                     </Link>

//                         <p> written by {blog.author} </p>

//                 </div>
//             ))}
//         </div>
//     );
// }

// export default BlogList;
