// use effect dependencies
// we use dependencies to control when the use effect comes in play


// import { useState, useEffect } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
    
    // const [homeBlogs,setblogs] = useState([
        // {title: "The Mind", Content: "lorem", author: "Tasheer", id:1 },
        // {title: "The Trauma", Content: "lorem", author: "Me", id:2 },
        // {title: "The Theory", Content: "lorem", author: "Tasheer", id:3 } 
    // ])

    // here we made a state dependency at which the effect will trigger
    // const [name,changeName] = useState("Ahmad")

    // const handleDelete = (id) => {
        // const delteBlog = homeBlogs.filter (blog => blog.id !== id)
        // setblogs(delteBlog)
    // }

     // we don't always want the effect to trigger that's where the dependencies come in play we can add an empty array like the below command due to which the effect will only occur on the first render but it is not that usefull as it work only the first time by default and not when we want it to trigger
    // useEffect(() => {
    //     console.log("use effect run");
    //     console.log(homeBlogs);  
    // }, []);

    // here we used [name] argument from the stored data above
    // the only change will occur in the [name] and not while we delete the blogs i.e. changing the data, as nothing else is there in the dependency
    // useEffect(() => {
        // console.log("use effect run");
        // console.log(name);  
    // }, [name]);


    // return ( 
        // <div className="home">
            {/* <BlogList blogs = {homeBlogs} mainHeading = "All Blogs" handleDelete={handleDelete} /> */}

            // <BlogList blogs = {homeBlogs.filter ((blog) => blog.author === "Tasheer")} mainHeading = "Blogs by Tasheer" handleDelete={handleDelete}/>

            {/* here we are using a onclick event to change the name using a function */}
            {/* the name will change only once as the we have already updated the state */}
            // <button onClick={() => changeName("Tasheer")}> Change name </button>
            // <p> {name} </p>
        // </div>
    // );
    // }
// export default Home;