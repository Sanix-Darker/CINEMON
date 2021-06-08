import React from 'react'

const index = () => {
    return (
        <div className="card" style={{color: "black"}}>
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img alt="img"
                    src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                    className="img-fluid" />
            </div>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
            </div>
        </div>
    )
}

export default index;
