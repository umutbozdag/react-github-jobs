import React, { Component } from 'react'

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


    displayJobDetail = () => {

    }
    render() {
        const job = this.state.job;
        return (
            <div>
                {this.state.loading ? <h3>Loading</h3> : <div>
                    <h1>Job Detail</h1>
                    <h1>{job.title}</h1>
                    <p>Location: {job.location}</p>
                    <p>Company: {job.company}</p>
                    <p>{job.description}</p>
                </div>}


            </div>
        )
    }
}
