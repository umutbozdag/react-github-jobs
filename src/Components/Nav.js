import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className="Nav">

            <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">
                    <li>ReactJobs</li>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <Link className="nav-link" to="/jobs">
                            <li>Jobs</li>
                        </Link>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                <li>About</li>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
