import React from "react";
import { library, icon, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

class SplashFooter extends React.Component {
    componentDidMount() {
        library.add(fab)
        const github = findIconDefinition({ prefix: 'fab', iconName: 'github' });
        const githubIcon = icon(github);
        Array.from(githubIcon.node).map(n => document.getElementsByClassName('github')[0].appendChild(n))
    }

    render() {
        return(
            <footer className="footer">
                <div className="footer-icons">
                    <div className="github">

                    </div>
                </div>
            </footer>
        )
    }
}

export default SplashFooter;