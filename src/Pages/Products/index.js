

import React from 'react';
import './style.css'
import aggregates from "../Products/aggregates.jpg"
import topsoil from "../Products/topsoil.jpeg"


function Product() {
    return (

        <>

            <div id="products">
                <h2 id="productTitle">PRODUCTS</h2>
            </div>


            <div className="container ">
                <div style={{ marginBottom: "40px", marginTop: "40px" }}>
                    <div className="row justify-content-center">
                        <div className="card col-12 col-lg-5 col-xl-5 col-md-5 m-3" style={{ width: "24rem", borderTop: "5px solid #3178C6", borderRadius: "0px" }}>
                            <img style={{ marginTop: "20px" }} src={aggregates} height="300px" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", margin: "5%" }}>AGGREGATES</h5>
                                <p className="card-text">An array of beautifully-coloured river stone in a variety of sizes has now been made available by Goldie Mohr Ltd and Dwyer Pit.

</p>
                            </div>
                        </div>
                        <div className="card col-12 col-lg-5 col-xl-5 col-md-5 m-3" style={{ width: "24rem", borderTop: "5px solid #3178C6", borderRadius: "0px" }}>
                            <img style={{ marginTop: "20px" }} src={topsoil} height="300px" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", margin: "5%" }}>TOPSOIL</h5>
                                <p className="card-text">We will custom blend soils to suit your application. We will use mushroom compost, peat, organic matter and clean sand. We deliver loads as small as 1 cubic yard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Product;