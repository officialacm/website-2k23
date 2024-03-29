import React from 'react'
import { Link, useRouteError } from "react-router-dom";
import "../../styles/PageNotFound.css"

export default function PageNotFound() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page-404">
            <div className='pageContainer'>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to="/">Go Back Home</Link>
            </div>
        </div>
    );
}