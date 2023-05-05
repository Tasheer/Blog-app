
// home.js
// import { useState, useEffect } from "react";
// import BlogList from "./BlogList";
// import useFetch from "./useFetch";





// const Home = () => {
    // while we import usefetch here we are adding the link in place of url
    // const {data:homeBlogs, pending, error} = useFetch('http://localhost:8000/homeBlogs')
//              ^
// we used this to get the data from homeBlogs





    // return ( 
        // <div className="home">
            {/* {error && <div> {error} </div> } */}
            {/* {pending && <div> Loading...</div> } */}
            {/* {homeBlogs && <BlogList blogs = {homeBlogs} mainHeading = "All Blogs"  /> } */}
        {/* </div> */}
    // );
    // }
// export default Home;




// usefetch.js




// custom hook
// custom hooks are used for code reuseability 

// import { useState, useEffect } from "react";

// first we have to make a function
// the function must start with "use" otherwise it won't work
// const useFetch = (url) => {

    // we changed setblogs to setData as we will set the name according to the demand
    // const [data,setData] = useState(null);

    // const [pending,setPending] = useState(true);

    // const [error,setError] = useState(null);


    
    // useEffect(() => {
        // we don't want to hard code this link as when we use this hook there is a possibility that the end point is not the same
        // we will be fetching the url which is passed as parameter
        // fetch('http://localhost:8000/homeBlogs')
        // fetch(url)

        // .then(res => {

            // if(!res.ok){
                // throw Error("Cann't process your request right now")
            // }
            // return res.json ();
        // })
        // .then (data => {
            // setError(null)
            // setData(data);
            // setPending(false);
            
        // })

        // .catch(err => {
            // setPending(false)
            // setError(err.message);
        // })

    // }, [url]);

    // the return value could be an array, object, string, boolean
    // here we are returning an object consisting of the properties data, pending, error coz when we use this hook somewhere we want to grab these properties
    // return {data, pending, error}

// }

// export default useFetch;