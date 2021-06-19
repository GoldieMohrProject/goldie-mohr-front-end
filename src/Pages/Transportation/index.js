import React from 'react';

import "./style.css"


import ImageGallery from 'react-image-gallery';





const transportation = [
  {
    original: 'Transportation/1.jpg',
    thumbnail: 'Transportation/1.jpg',
  },
  {
    original: 'Transportation/2.jpg',
    thumbnail: 'Transportation/2.jpg',
  },
  {
    original: 'Transportation/3.jpg',
    thumbnail: 'Transportation/3.jpg',
  },
  {
    original: 'Transportation/4.jpg',
    thumbnail: 'Transportation/4.jpg',
  },
  {
    original: 'Transportation/5.jpg',
    thumbnail: 'Transportation/5.jpg',
  },
  {
    original: 'Transportation/6.jpg',
    thumbnail: 'Transportation/6.jpg',
  },
  {
    original: 'Transportation/7.jpg',
    thumbnail: 'Transportation/7.jpg',
  },
  {
    original: 'Transportation/8.jpg',
    thumbnail: 'Transportation/8.jpg',
  },
  {
    original: 'Transportation/9.jpg',
    thumbnail: 'Transportation/9.jpg',
  },
  {
    original: 'Transportation/10.jpg',
    thumbnail: 'Transportation/10.jpg',
  },
  {
    original: 'Transportation/11.jpg',
    thumbnail: 'Transportation/11.jpg',
  },
  {
    original: 'Transportation/12.jpg',
    thumbnail: 'Transportation/12.jpg',
  },
  {
    original: 'Transportation/13.jpg',
    thumbnail: 'Transportation/13.jpg',
  },
  {
    original: 'Transportation/14.jpg',
    thumbnail: 'Transportation/14.jpg',
  },
  {
    original: 'Transportation/15.jpg',
    thumbnail: 'Transportation/15.jpg',
  },
  {
    original: 'Transportation/16.jpg',
    thumbnail: 'Transportation/16.jpg',
  },
  {
    original: 'Transportation/18.jpg',
    thumbnail: 'Transportation/18.jpg',
  }

];





function Transportation() {





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
                 
                  
                    <li><a style={{textAlign:"center"}} className="nounderline" href="#Transportation"><i class="fa fa-truck" aria-hidden="true"></i>Transportation</a></li>
                
                
                </ul>
              </div>
             

              <div className="row">

        

                <div className="row">


                  <div className="col">

                    <ImageGallery autoPlay="true" items={transportation} />

                  </div>

                </div>

                <div style={{ marginTop: '5%' }} className="row">

                  <div className="col-lg-2 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                   <li style={{ marginLeft: "5%", color:"black" }}>

                        TRACTORS

                      </li>
                    </ul>

                  </div>
                  <div className="col-lg-2 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                   <li style={{ marginLeft: "5%", color:"black" }}>

                        TRAILERS

                      </li>
                    </ul>

                  </div>
                  <div className="col-lg-2 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                   <li style={{ marginLeft: "5%", color:"black" }}>

                        ROAD BUILD

                      </li>
                    </ul>

                  </div>
                  <div className="col-lg-2 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                   <li style={{ marginLeft: "5%", color:"black" }}>

                        TANK TRAILERS

                      </li>
                    </ul>

                  </div>
                  <div className="col-lg-2 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                   <li style={{ marginLeft: "5%", color:"black" }}>

                        TRI-AXLE

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

export default Transportation;

