import React from 'react'
import RoomItem from "../../components/RoomItem/"

const index = () => {
    return (
        <center>
            <div className="" style={{textAlign: "left", width: "85%"}}>
                <br/><br/><br/>
                <h2 style={{marginTop: "1em", color: "white"}}>Rooms List</h2>
                <hr/>
                <div style={{maxHeight: "70vh", overflow: "auto", overflowX: "hidden"}}>
                    <div className="row" >
                        <div className="col-md-3">
                            <RoomItem />
                        </div>
                        <div className="col-md-3">
                            <RoomItem />
                        </div>
                        <div className="col-md-3">
                            <RoomItem />
                        </div>
                        <div className="col-md-3">
                            <RoomItem />
                        </div>
                    </div>
                    <hr/>

                    <div className="row" >
                        <div className="col-md-3">
                            <RoomItem />
                        </div>
                        <div className="col-md-3">
                            <RoomItem />
                        </div>
                        <div className="col-md-3">
                            <RoomItem />
                        </div>
                        <div className="col-md-3">
                            <RoomItem />
                        </div>
                    </div>
                    <hr/>

                    <div className="row" >
                        <div className="col-md-3">
                            <RoomItem />
                        </div>
                        <div className="col-md-3">
                            <RoomItem />
                        </div>
                        <div className="col-md-3">
                            <RoomItem />
                        </div>
                        <div className="col-md-3">
                            <RoomItem />
                        </div>
                    </div>
                </div>
            </div>
        </center>
    )
}

export default index
