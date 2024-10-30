import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Oops...!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Sorry, An Unexpected Error Is Occurred</p>
                    <p>Go Back</p>
                    <Link to="/">Go Back Home</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;