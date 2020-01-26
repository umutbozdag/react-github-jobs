import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Jobs extends Component {

    state = {
        jobs: [],
        loading: true
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`, {
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ jobs: data });
                this.setState({ loading: false })

            });
    }

    render() {
        return (
            <div>
                <h1>Jobs</h1>

                {this.state.loading ? <h3>Loading</h3> : this.state.jobs.map(job => (
                    <p key={job.id}>
                        <Link to={`/jobs/${job.id}`}>
                            {job.title}
                        </Link></p>
                ))}



            </div>
        )
    }
}
