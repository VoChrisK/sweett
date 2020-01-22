import React from 'react';
import { withRouter } from 'react-router-dom'

class Dashboard extends React.Component {
    // constructor(props) {
    //     super(props)
    //     // console.log(props, 'props')
    // }

    render() {
        return(
            <div className="dashboard">
                <header className="title">
                    <h1>Tasks</h1>
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