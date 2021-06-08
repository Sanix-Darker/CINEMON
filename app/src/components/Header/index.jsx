/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import { Link, Router } from "react-router-dom"
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
        <nav id="head" className="mb-4 navbar navbar-expand-md navbar-dark lighten-1 drag">

            <img alt="logo" style={{width: "3%", marginRight: "13px"}} src={window.location.origin + "/mini-logo.png"} />
            {/*
            <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent-5"
                    aria-controls="navbarSupportedContent-5"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */ }

            <div className="collapse navbar-collapse" id="navbarSupportedContent-5" >
                { /*<ul className="navbar-nav mr-auto" style={{"-webkit-app-region": "no-drag"}}>
                    <li className="nav-item active" >
                        <Link to="/">
                            <a className="nav-link" href="#">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/rooms">
                            <a className="nav-link" href="#">Rooms</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">
                            <a className="nav-link" href="#">About</a>
                        </Link>
                    </li>
                </ul> */ }
            </div>

            <div className="menuButton minimizeButton" onClick={minimizeWindow}>🗕︁</div>
            &nbsp; &nbsp;
            <div className="menuButton closeButton" onClick={closeWindow}>×︁</div>
        </nav>
    )
}

export default index;
