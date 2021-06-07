import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPaw } from '@fortawesome/fontawesome-free-solid'

const index = () => {

    const bottomStyle = {
        width: "100%",
        textAlign: "center",
        position: "fixed",
        bottom: "0px",
        color: "white",
        fontSize: "10px"
    }

    return (
        <div style={bottomStyle}>
            By <FontAwesomeIcon icon={faPaw} /> &nbsp;
            <span >
                Sanix-darker
            </span>
        </div>
    )
}

export default index;