import React from 'react'
import Player from "../../components/Player/"

const index = () => {
    return (
        <center>
            <div className="" style={{textAlign: "left", width: "90%"}}>
                <h4 style={{marginTop: "1em", color: "white"}}>Room [kasjnc121]</h4>
                <div className="row">
                    <div className="col-md-9">
                        <Player />
                    </div>
                    <div className="col-md-3">
                        .
                    </div>
                </div>
           </div>
        </center>
    )
}

export default index
