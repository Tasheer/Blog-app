import { Link } from "react-router-dom";


const BlogList = ({blogs, mainHeading}) => {


    
    return (  
        <div className="blog-list">
            <h2> {mainHeading}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>

                    <Link to = {`/homeBlogs/${blog.id}`}>

                        <h2> {blog.title} </h2>

                    </Link>

                        <p> written by {blog.author} </p>

                </div>
            ))}
        </div>
    );
}

export default BlogList;
