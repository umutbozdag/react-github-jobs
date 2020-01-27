import React from 'react'
import changeDocumentTitle from '../helper';

export default function NotFound() {
    const TITLE = "Not Found";
    changeDocumentTitle(TITLE);

    const style = { width: 700 };
    return (
        <div className="container NotFound">
            <h1 className="mt-5" >Page Not Found</h1>
            <img className="not-found-img mt-5"
                src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/page_not_found_su7k.svg"
                alt="Not found"
                style={style} />
        </div>
    )
}
