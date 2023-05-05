// conditional loading message
// this is the message which will be shown when we load the site, we use it on our computer that's why we don't have to wait but when some user uses this it will take time
// import { useState, useEffect } from "react";
// import BlogList from "./BlogList";





// const Home = () => {
//     const [homeBlogs,setblogs] = useState(null);

//     here we added another state which is true 
//     const [pending,setPending] = useState(true);


    // useEffect(() => {
        // we set a timer of 1000 miliseconds so that we can clearly see the loading screen
    //     setTimeout(() => {
    //                 fetch('http://localhost:8000/homeBlogs')
            
    //                 .then(res => {
    //                     return res.json ();
    //                 })
    //                 .then (data => {
    //                     setblogs(data);
    //                     we only want the message till the data is being processed so once the data is processed we are setting the message as false 
    //                     setPending(false);
    //                 });
            
            
    //             }, 1000);
    //         }, []);



//     return ( 
//         <div className="home">
//             here we are setting up the conditional template due to which the message will only be shown when its true
//             {pending && <div> Loading...</div> }
//             {homeBlogs && <BlogList blogs = {homeBlogs} mainHeading = "All Blogs"  /> }
//         </div>
//     );
//     }
// export default Home;