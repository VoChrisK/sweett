import React from "react";

class Splash extends React.Component {
    render() {
        return (
            <div className="splash">
                <img src="theoffice.jpg" id="bg" alt="splash" />
                <div className="splash-text boss-quote">
                    The best boss is yourself
                </div>
                <div className="hook">
                    Take matters into your own hands
                </div>
            </div>
        );
    }
}

export default Splash;
