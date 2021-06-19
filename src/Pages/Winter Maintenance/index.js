import React from 'react';

import "./style.css"


import ImageGallery from 'react-image-gallery';


const winter = [
  {
    original: 'winter/1.jpg',
    thumbnail: 'winter/1.jpg',
  },
  {
    original: 'winter/2.jpg',
    thumbnail: 'winter/2.jpg',
  },
  {
    original: 'winter/3.jpg',
    thumbnail: 'winter/3.jpg',
  }
]




function WinterMaintenance() {





  return (
    <>



      <div id="Services">
        <h2 id="ServicesTitle">Our Services & Projects</h2>
      </div>




      <section className="building_construction_area">
        <div className="container">
          <div className="row building_construction_row">
            <div className="row constructing_laft ">


              <div className="row justify-content-center">




                <ul class="row painting">
                 
                    <li><a style={{textAlign:"center"}} className="nounderline" href="#Winter Meintenance"><i class="fa fa-road" aria-hidden="true"></i>Winter Maintenance</a></li>
               

                </ul>
              </div>

              <div className="row">

              

                <div className="row">


                  <div className="col">

                    <ImageGallery autoPlay="true" items={winter} />

                  </div>

                </div>

                <div style={{ marginTop: '5%', }} className="row">


                  <div className="col-lg-3 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                      <li style={{ marginLeft: "5%" }}>

                        TRACTORS

                      </li>
                    </ul>

                  </div>
                  <div className="col-lg-3 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                      <li style={{ marginLeft: "5%" }}>

                        REMOVING SNOW

                      </li>
                    </ul>

                  </div>
                  <div className="col-lg-3 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                      <li style={{ marginLeft: "5%" }}>

                        CLEANING SIDEWALKS

                      </li>
                    </ul>

                  </div>
                  <div className="col-lg-3 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                      <li style={{ marginLeft: "5%" }}>

                        DE-ICING

                      </li>
                    </ul>

                  </div>


                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </>




  );
}

export default WinterMaintenance;

