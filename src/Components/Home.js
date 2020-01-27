import React from 'react'
import changeDocumentTitle from '../helper';

export default function Home() {
    const TITLE = "Home";
    changeDocumentTitle(TITLE);
    return (
        <div className="Home">
            <div>
                <h1 className="text-light mb-3 home-title">Discover jobs!</h1>
                <img className="home-img" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Job_hunt_tinb.svg" alt="" />
                <p className="mt-3 home-text">It's easy!</p>
            </div>
        </div>
    )
}
