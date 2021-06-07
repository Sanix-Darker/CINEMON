/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./index.css"

const index = () => {

    const closeWindow = () => {
        const remote = (window.require) ? window.require("electron").remote : null;
        if (remote !== null)
            remote.getCurrentWindow().close();
    }

    const minimizeWindow = () => {
        const remote = (window.require) ? window.require("electron").remote : null;
        if (remote !== null)
            remote.getCurrentWindow().minimize();
    }

    return (
        <nav id="head" className="mb-4 navbar navbar-expand-md navbar-dark lighten-1">

            <img alt="logo" style={{width: "3%", marginRight: "13px"}} src={window.location.origin + "/mini-logo.png"} />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-5" aria-controls="navbarSupportedContent-5" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-5" style={{"z-index": "1", "-webkit-app-region": "drag"}}>
                <ul className="navbar-nav mr-auto" style={{"z-index": "999"}}>
                    <li className="nav-item active" >
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Rooms</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
            </div>
            <div className="menuButton minimizeButton" onClick={minimizeWindow}>🗕︁</div>
            &nbsp; &nbsp;
            <div className="menuButton closeButton" onClick={closeWindow}>×︁</div>
        </nav>
    )
}

export default index;
