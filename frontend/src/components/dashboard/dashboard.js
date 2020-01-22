import React from 'react';
import { withRouter } from 'react-router-dom'
import {
  library,
  icon,
  findIconDefinition
} from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

class Dashboard extends React.Component {
    // constructor(props) {
    //     super(props)
    //     // console.log(props, 'props')
    // }

    clickPlus() {
        console.log('henlo')
    }


class Dashboard extends React.Component {
    componentDidMount() {
        library.add(fas)
        const plus = findIconDefinition({ prefix: 'fas', iconName: 'plus-circle'})
        const plusIcon = icon(plus)
        Array.from(plusIcon.node).map(n => document.getElementsByClassName('plus-sign')[0].appendChild(n))
    }

    render() {
        return(
            <div className="dashboard">
                <h1 className="dash-header">Tathkth</h1>
                <div className="catIndex">
                    <div id="cat1"></div>
                    <div id="cat2"></div>
                    <div id="cat3"></div>
                    <div id="cat4"></div>
                    <div id="cat5"></div>
                    <div id="cat6"></div>
                    <div id="cat7"></div>
                    <div id="cat8"></div>
                    <div id="cat9"></div>
                    <div id="cat10"></div>
                    <div id="cat11"></div>
                    <div id="cat12"></div>
                    <div className="plus-box">
                        <div onClick={this.clickPlus.bind(this)} className="plus-sign"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard);