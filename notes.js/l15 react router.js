// app.js

// import Navbar from './Navbar'
// import Home from './Home'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// function App () {
// return (
    // <Router>
    // <div className='App'>
        {/* calling the  navbar */}
        {/* it is a self closing tag but you can use it in traditional way*/}
        // <Navbar />
        // <div className='content'>
          {/* replacing the below code with switch */}
          {/* < Home /> */}
        // <Switch>
            {/* here the path is the way where we wanna go */}
            {/* for about section we use path "/about", for contact we use "/contact", for home page it's "/" */}
            // <Route path='/'>
            {/* <Home /> */}
            {/* </Route> */}
        // </Switch>
        // </div>
    // </div>
    // </Router>
// )
// }

// export default App



// home.js

// React router
// usually when we visit a site and click on something the browser sends a request to the server to get the new page everytime
// but with react router the browser sends request to the server only once when we open the site and there after router will intercept when the browser try to send request to the server and will search for the page in the js file compilled to it making the process faster

// import { useState, useEffect } from "react";
// import BlogList from "./BlogList";
// import useFetch from "./useFetch";





// const Home = () => {
//     const {data:homeBlogs, pending, error} = useFetch('http://localhost:8000/homeBlogs')





//     return ( 
//         <div className="home">
//             {error && <div> {error} </div> }
//             {pending && <div> Loading...</div> }
//             {homeBlogs && <BlogList blogs = {homeBlogs} mainHeading = "All Blogs"  /> }
//         </div>
//     );
//     }
// export default Home;
