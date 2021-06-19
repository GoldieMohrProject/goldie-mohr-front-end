import React from 'react';

import "./style.css"


import ImageGallery from 'react-image-gallery';





const services = [
  {
    original: 'Rental-Equipment/rental-1.jpg',
    thumbnail: 'Rental-Equipment/rental-1.jpg'
  },
  {
    original: "Rental-Equipment/rental-2.jpg",
    thumbnail: "Rental-Equipment/rental-2.jpg"
  },
  {
    original: 'Rental-Equipment/rental-3.jpg',
    thumbnail: 'Rental-Equipment/rental-3.jpg',
  },
  {
    original: 'Rental-Equipment/rental-4.jpg',
    thumbnail: 'Rental-Equipment/rental-4.jpg',
  }

]




function EquipmentRental() {





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
                
                    <li><a style={{textAlign:"center"}} className="nounderline" href="#Heavy Equipment Rental"><i class="fas fa-tools" aria-hidden="true"></i>Heavy Equipment Rental</a></li>
                  
                </ul>
              </div>


              <div className="row">

         

                <div className="row">

                  <div className="col">

                    <ImageGallery autoPlay="true" items={services} />

                  </div>

                </div>
                <div style={{ marginTop: '5%' }} className="row">


                  <div className="col-lg-3 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                   <li style={{ marginLeft: "5%", color:"black" }}>

                        TRACTORS

                      </li>
                    </ul>

                  </div>
                  <div className="col-lg-3 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                   <li style={{ marginLeft: "5%", color:"black" }}>

                        GRADER

                      </li>
                    </ul>

                  </div>
                  <div className="col-lg-3 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                   <li style={{ marginLeft: "5%", color:"black" }}>

                        TRUCK

                      </li>
                    </ul>

                  </div>
                  <div className="col-lg-3 col-md-3 col-xs-12 ">

                    <ul class="list-group list-group-horizontal">
                      <li className="fas fa-square fa-1x decoration"></li>

                   <li style={{ marginLeft: "5%", color:"black" }}>

                        EXCAVATORS

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

export default EquipmentRental;

