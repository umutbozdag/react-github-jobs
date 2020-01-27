import React, { Component } from 'react'
import changeDocumentTitle from '../helper';

export default class JobDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            job: {},
            jobId: this.props.match.params.jobId,
            loading: true
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${this.state.jobId}.json?markdown=true`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ job: data });
                this.setState({ loading: false });
            })
    }

    displaySpinner = () => {
        return <div className="spinner">
            <div className="spinner-grow spinner-grow-lg" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }

    displayJobDetail = () => {
        const job = this.state.job;
        const TITLE = job.title;
        changeDocumentTitle(TITLE);

        return (
            <div className="JobDetail container-md">
                <div className="card mt-3">
                    <div className="img-holder">
                        <img src={job.company_logo} className="card-img-top" alt="Company logo" />
                    </div>
                    <div className="card-body job-detail">
                        <h3 className="card-title job-detail-title">{job.title}</h3>

                        <div className="card-tags">
                            <p className="card-text card-tag">
                                <i className="far fa-building"></i>
                                <a href={job.company_url} target="_blank" rel="noopener noreferrer">{job.company}</a>
                            </p>
                            <p className="card-text card-tag">
                                <i className="fas fa-map-marker-alt"></i>
                                <a href={`https://www.google.com.tr/maps/search/${job.location}`} target="_blank" rel="noopener noreferrer">{job.location}</a>
                            </p>
                        </div>

                        <details open>
                            <summary>Description</summary>
                            <p className="card-text mt-3">{job.description}</p>
                        </details>
                        <details>
                            <summary>How to apply?</summary>
                            <p> {job.how_to_apply}</p>
                        </details>

                        <p className="card-text mt-3"><small className="text-muted">{job.created_at}</small></p>
                    </div>
                </div>

            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state.loading ? this.displaySpinner() : this.displayJobDetail()}


            </div>
        )
    }
}
