// Add a Not Found route that renders when a user navigates to a path that does not exist.

import { Link } from "react-router-dom";

export function NotFound() {

    return (
        <>
        <p>Page not found</p>
        <Link to="/">Go back</Link>
        </>
    )
}