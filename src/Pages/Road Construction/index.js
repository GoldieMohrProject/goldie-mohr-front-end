import React from 'react';

import "./style.css"


import ImageGallery from 'react-image-gallery';




const construction = [
  {
    original: 'Construction/road.jpg',
    thumbnail: 'Construction/road.jpg',
  },
  {
    original: 'Construction/road1.jpg',
    thumbnail: 'Construction/road1.jpg',
  },
  {
    original: 'Construction/1.jpg',
    thumbnail: 'Construction/1.jpg',
  },
  {
    original: 'Construction/2.jpg',
    thumbnail: 'Construction/2.jpg',
  },
  {
    original: 'Construction/3.jpg',
    thumbnail: 'Construction/3.jpg',
  },
  {
    original: 'Construction/4.jpg',
    thumbnail: 'Construction/4.jpg',
  },
  {
    original: 'Construction/5.JPG',
    thumbnail: 'Construction/5.JPG',
  },
  {
    original: 'Construction/6.jpg',
    thumbnail: 'Construction/6.jpg',
  },
  {
    original: 'Construction/7.JPG',
    thumbnail: 'Construction/7.JPG',
  },
  {
    original: 'Construction/8.jpg',
    thumbnail: 'Construction/8.jpg',
  },
  {
    original: 'Construction/9.jpg',
    thumbnail: 'Construction/9.jpg',
  },
  {
    original: 'Construction/10.jpg',
    thumbnail: 'Construction/10.jpg',
  },
  {
    original: 'Construction/11.jpg',
    thumbnail: 'Construction/11.jpg',
  },
  {
    original: 'Construction/12.jpg',
    thumbnail: 'Construction/12.jpg',
  },
  {
    original: 'Construction/13.jpg',
    thumbnail: 'Construction/13.jpg',
  },
  {
    original: 'Construction/14.jpg',
    thumbnail: 'Construction/14.jpg',
  },
  {
    original: 'Construction/15.jpg',
    thumbnail: 'Construction/15.jpg',
  },
  {
    original: 'Construction/16.jpg',
    thumbnail: 'Construction/16.jpg',
  },
  {
    original: 'Construction/17.jpg',
    thumbnail: 'Construction/17.jpg',
  },
  {
    original: 'Construction/18.jpg',
    thumbnail: 'Construction/18.jpg',
  },
  {
    original: 'Construction/19.jpg',
    thumbnail: 'Construction/19.jpg',
  }
];




function RoadConstruction() {





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
                  <div className=" col " >
                    <li ><a style={{textAlign:"center"}} className="nounderline" href="#Building Construction"><i class="fas fa-building" aria-hidden="true"></i>Road Construction</a></li>
                  </div>
                </ul>
              </div>
              <div className="row">

     

                <div className="row">
                  {/* <div className="col-1"></div> */}

                  <div className="col">

                    <ImageGallery autoPlay="true" items={construction} />

                  </div>

                </div>

                <div style={{ marginTop: '5%' }} className="row">


                  <div className="col-lg-2 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                      <li style={{ marginLeft: "5%" }}>


                        GRAVEL

                      </li>
                    </ul>

                  </div>

                  <div className="col-lg-2 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                      <li style={{ marginLeft: "5%" }}>


                        GRADING

                      </li>
                    </ul>

                  </div>


                  <div className="col-lg-2 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                      <li style={{ marginLeft: "5%" }}>


                        ROAD BUILD

                      </li>
                    </ul>

                  </div>

                  <div className="col-lg-3 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                      <li style={{ marginLeft: "5%" }}>


                        ASPHALT MAINTANENCE

                      </li>
                    </ul>

                  </div>

                  <div className="col-lg-2 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                      <li style={{ marginLeft: "5%" }}>

                        PARKING LOT

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

export default RoadConstruction;

