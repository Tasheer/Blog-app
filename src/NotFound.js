// notfound.js

import { Link } from "react-router-dom";

const NotFound = () => {
    return (

        <div className="not-found">
            <p>Page not found</p>
            {/* attaching a link to go back to home page */}
            <Link to = {'/'}> Back to home page </Link>
        </div>

    );
}
export default NotFound;