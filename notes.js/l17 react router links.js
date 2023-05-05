// navbar.js


// till now the react router is not interfering while the request is being send to the server 
// so this is what we do 

// import { Link } from 'react-router-dom';
// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <h1>The Blogs</h1>
//             <div className="links">
//                 for doing so we have to change the below code
//                 <a href="/">Home</a>
//                 even though we changed a to link it still act as an anchor tag (check console for the same) but has a special property to make router intercept the request which is being send to the server and check it in the switch >> route
//                 <Link to = "/">Home</Link>

//                 <Link to="/create">New Blog</Link>
                
//             </div>
//         </nav>
//     );
// }
// export default Navbar;