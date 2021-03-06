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
    original: 'Transportation/17.jpg',
    thumbnail: 'Transportation/17.jpg',
  },
  {
    original: 'Transportation/18.jpg',
    thumbnail: 'Transportation/18.jpg',
  }

];

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




function Services() {





  return (
    <>

      {/* Banner area */}
      <section className="banner_area" data-stellar-background-ratio="0.5">
        <h2>Our Services & Projects</h2>

      </section>




      <section className="building_construction_area">
        <div className="container">
          <div className="row building_construction_row">
            <div className="row constructing_laft ">


              <div className="row justify-content-center">


                <ul class="row painting">
                  <div className="col-lg-6 col-md-6 col-xs-12 ">
                    <li><a className="nounderline" href="#Building Construction"><i class="fas fa-building" aria-hidden="true"></i>Building & Road Construction</a></li>
                  </div>
                  <div className="col-lg-5=6 col-md-6 col-xs-12 ">
                    <li><a className="nounderline" href="#Winter Meintenance"><i class="fa fa-road" aria-hidden="true"></i>Winter Maintenance</a></li>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 ">
                    <li><a className="nounderline" href="#Transportation"><i class="fa fa-truck" aria-hidden="true"></i>Transportation</a></li>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 ">
                    <li><a className="nounderline" href="#Heavy Equipment Rental"><i class="fas fa-tools" aria-hidden="true"></i>Heavy Equipment Rental</a></li>
                  </div>
                </ul>
              </div>
              <div className="row">

                <a id="Building Construction" style={{ textAlign: "center", marginTop: "5%" }}>Building & Road Construction</a>

                <div className="row">
                  {/* <div className="col-1"></div> */}

                  <div className="col">

                    <ImageGallery autoPlay="true" items={construction} />

                  </div>

                </div>

                <div style={{ marginTop: '5%' }} className="row">
                  <div className="col">
                    <div style={{ textAlign: "center" }}>
                      <p style={{ fontSize: "25px" }}>  GRAVEL <span className="fas fa-square fa-1x decoration"></span> GRADING <span className="fas fa-square fa-1x decoration" ></span> ROAD BUILD <span className="fas fa-square fa-1x decoration"></span> ASPHALT MAINTANENCE <span className="fas fa-square fa-1x decoration"></span> PARKING LOT  </p>
                    </div>
                  </div>

                  {/* <div className="col-lg-2 col-md-3 col-xs-12 ">


                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                      GRAVEL

                    </a>
                  </div>
                  <div className="col-lg-2 col-md-3 col-xs-12 ">

                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        GRADING
                    </a>


                  </div>

                  <div className="col-lg-2 col-md-3 col-xs-12 ">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        ROAD BUILD
                    </a>

                  </div>
                  <div className="col-lg-3 col-md-3 col-xs-12 ">

                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        ASPHALT MAINTANENCE
                    </a>

                  </div>
                  <div className="col-lg-3 col-md-3 col-xs-12 ">

                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                     PARKING LOT
                  </a>

                  </div>


                </div> */}
                </div>
              </div>

              <div className="row">

                <a id="Transportation" style={{ textAlign: "center", marginTop: "5%" }}>Transportation</a>

                <div className="row">


                  <div className="col">

                    <ImageGallery autoPlay="true" items={transportation} />

                  </div>

                </div>

                <div style={{ marginTop: '5%' }} className="row">

                  <div className="col">
                    <div style={{ fontSize: "25px", textAlign: "center" }}>
                      <p style={{ fontSize: "25px" }}> TRACTORS <span className="fas fa-square fa-1x decoration"></span> TRAILERS <span className="fas fa-square fa-1x decoration" ></span> ROAD BUILD <span className="fas fa-square fa-1x decoration"></span> TANK TRAILERS <span className="fas fa-square fa-1x decoration"></span> TRI-AXLE
                    </p>
                    </div>
                  </div>

                  {/* <div className="col-lg-2 col-md-2 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        TRACTORS
                    </a>

                  </div>
                  <div className="col-lg-2 col-md-2 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        TRAILERS
                    </a>

                  </div>

                  <div className="col-lg-3 col-md-3 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        ROAD BUILD
                    </a>

                  </div>
                  <div className="col-lg-3 col-md-3 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        TANK TRAILERS
                    </a>

                  </div>
                  <div className="col-lg-2 col-md-3 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        TRI-AXLE
                    </a>

                  </div> */}

                </div>
              </div>

              <div className="row">

                <a id="Winter Meintenance" style={{ textAlign: "center", marginTop: "5%" }}>Winter Maintenance</a>

                <div className="row">


                  <div className="col">

                    <ImageGallery autoPlay="true" items={winter} />

                  </div>

                </div>

                <div style={{ marginTop: '5%' }} className="row">

                  <div className="col">
                    <div style={{ fontSize: "25px", textAlign: "center" }}>
                      <p style={{ fontSize: "25px" }}>  TRACTORS <span className="fas fa-square fa-1x decoration"></span> REMOVING SNOW <span className="fas fa-square fa-1x decoration" ></span> CLEANING SIDEWALKS <span className="fas fa-square fa-1x decoration"></span> DE-ICING
                    </p>
                    </div>
                  </div>

                  {/* <div className="col-lg-3 col-md-4 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        REMOVING SNOW
                    </a>

                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        CLEANING SIDEWALKS
                    </a>

                  </div>

                  <div className="col-lg-3 col-md-4 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                        DE-ICING
                    </a>

                  </div> */}

                </div>
              </div>



              <div className="row">

                <a id="Heavy Equipment Rental" style={{ textAlign: "center", marginTop: "5%" }}>Heavy Equipment Rental</a>

                <div className="row">

                  <div className="col">

                    <ImageGallery autoPlay="true" items={services} />

                  </div>

                </div>
                <div style={{ marginTop: '5%' }} className="row">

                  <div className="col">
                    <div style={{ fontSize: "25px", textAlign: "center" }}>
                      <p style={{ fontSize: "25px" }}>  TRACTORS <span className="fas fa-square fa-1x decoration"></span> TRACKTOR <span className="fas fa-square fa-1x decoration" ></span> GRADER <span className="fas fa-square fa-1x decoration"></span> TRUCK <span className="fas fa-square fa-1x decoration"></span> EXCAVATORS
                    </p>
                    </div>
                  </div>


                  {/* <div className="col-lg-3 col-md-4 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                      TRACKTOR
                    </a>


                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                      GREYDER
                    </a>


                  </div>

                  <div className="col-lg-3 col-md-4 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                      TRUCK
                    </a>

                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-12">
                    <a>
                      <ArrowRightOutlined style={{ fontSize: '25px', color: '#3178C6' }} />

                      EXCAVATORS
                    </a>

                  </div> */}

                </div>



              </div>
              {/* </div> */}




            </div>

          </div>
        </div>
      </section>



      {/* <div className="contact_us">
                <h4>Contact Us</h4>
                <a className="contac_namber">Phone: +1 613 838 5042</a>
                <a className="contac_namber">Toll Free: +1 800 267 55 13</a>
                <a className="contac_namber">Fax: +1 613 838 58 08</a>

                <p>Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. If you use this site regularly and would like to help keep</p>
                <a className="button_all">Contact Us</a>
              </div> */}






      {/* End Building Construction Area */}

        </>




  );
}

export default Services;

