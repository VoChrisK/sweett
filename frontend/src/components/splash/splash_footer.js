import React from "react";
import { library, icon, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

class SplashFooter extends React.Component {
    constructor(props) {
        super(props)

        this.handleGithub = this.handleGithub.bind(this);
    }

    handleGithub(e) {
        e.preventDefault();
        window.open("https://github.com/VoChrisK/sweett", '_blank');
    }

    componentDidMount() {
        library.add(fab)
        const github = findIconDefinition({ prefix: 'fab', iconName: 'github' });
        const githubIcon = icon(github);
        Array.from(githubIcon.node).map(n => document.getElementsByClassName('github')[0].appendChild(n))
        // Add linkedIn when ready
        // const linkedIn = findIconDefinition({ prefix: 'fab', iconName: 'linkedin' });
        // const linkedInIcon = icon(linkedIn);
        // Array.from(linkedInIcon.node).map(n => document.getElementsByClassName('linkedIn')[0].appendChild(n))
    }

    render() {
        return(
            <footer className="footer">
                <div className="footer-icons">
                    <div onClick={this.handleGithub} className="github footer-icon"></div>
                    <div className='linkedIn footer-icon'></div>
                </div>
            </footer>
        )
    }
}

export default SplashFooter;