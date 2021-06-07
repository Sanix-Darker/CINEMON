import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPlus, faVideo } from '@fortawesome/fontawesome-free-solid'
import {Link} from "react-router-dom"

import "./index.css"


const index = () => {
    return (
        <div>
            <img alt="logo" style={{width: "170px"}} src={window.location.origin +"/logo.png"} />
            <h1 style={{fontSize: "70px"}}>CINEMON</h1>
            <p style={{fontSize: "15px"}}>
                Watch movies on your laptop with your homies.
            </p><br/>

            <Link to="/">
                <button className="btn btn-primary">
                    <FontAwesomeIcon icon={faPlus} /> NEW SESSION
                </button>
            </Link>&nbsp; &nbsp; &nbsp;
            <Link to="/new">
                <button className="btn" style={{backgroundColor: "#282c34"}}>
                    <FontAwesomeIcon icon={faVideo} /> WATCH DEMO
                </button>
            </Link>
        </div>
    )
}

export default index;