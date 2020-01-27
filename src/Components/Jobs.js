import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import changeDocumentTitle from '../helper';

export default class Jobs extends Component {

    state = {
        jobs: [],
        loading: true
    }

    componentDidMount() {
        this.getData();
        const TITLE = "Jobs";
        changeDocumentTitle(TITLE);
    }

    getData = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code`, {
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ jobs: data });
                this.setState({ loading: false });
            });
    }

    displaySpinner = () => {
        return <div className="spinner">
            <div className="spinner-grow spinner-grow-lg" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }

    stripHtml = (html, str, length) => {

        var temporalDivElement = document.createElement("div");
        // Set the HTML content with the providen
        temporalDivElement.innerHTML = html;
        // Retrieve the text property of the element (cross-browser support)
        return temporalDivElement.textContent || temporalDivElement.innerText || "";

    }

    displayJobs = () => {


        return (
            <div className="container">
                {this.state.jobs.map(job => (
                    <div key={job.id} className="card d-flex bg-light">
                        <div className="card-body">
                            <div className="card-left">
                                <h5 key={job.id} className="card-title"><Link to={`/jobs/${job.id}`}>{job.title}</Link></h5>
                                <p>Company: <a href={job.company_url} target="_blank" rel="noopener noreferrer">{job.company}</a></p>
                                <p className="card-text"> Location: <a href={`https://www.google.com.tr/maps/search/${job.location}`} target="_blank" rel="noopener noreferrer">{job.location}</a> </p>
                                <details>
                                    <summary>Details</summary>
                                    <p>{this.stripHtml(job.description)}</p>
                                </details>
                                <div className="card-bottom mt-4">
                                    <p className="card-text text-muted">{job.created_at}</p>
                                </div>
                            </div>

                            <div className="card-right">
                                <img className="card-image" src={job.company_logo} alt="" />
                            </div>

                        </div>
                    </div>
                ))
                }
            </div>
        )
    }

    render() {
        return (
            <div className="p-5 Jobs">
                <h1 className="mb-5 text-center">Latest Jobs</h1>

                {this.state.loading ? this.displaySpinner() : this.displayJobs()}
            </div>
        )
    }
}
