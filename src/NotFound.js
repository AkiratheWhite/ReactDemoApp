import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="NotFound">
            <h2>Error</h2>
            <p>Page cannot be found.</p>
            <Link to="/">Back to Homepage</Link>
        </div>
    );
}
 
export default NotFound;