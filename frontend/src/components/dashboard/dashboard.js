import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        console.log(props, 'props')
    }

    componentDidMount() {
        return (
            <div>henlo</div>
        )
    }

    render() {
        return(
            <div className="dashboard">
                <header>
                    <h1>dashboard</h1>
                </header>
                <div className="catIndex">
                    <div className="cat"></div>
                    <div className="cat"></div>
                    <div className="cat"></div>
                    <div className="cat"></div>
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard);