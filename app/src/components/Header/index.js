import React from 'react'
import "./index.css"

const index = () => {

    return (
        <nav id="head" className="mb-4 navbar navbar-expand-md navbar-dark lighten-1 drag">
            <img alt="logo" style={{width: "3%", marginRight: "13px"}} src={window.location.origin + "/mini-logo.png"} />
            <div className="collapse navbar-collapse" ></div>
        </nav>
    )
}

export default index;
