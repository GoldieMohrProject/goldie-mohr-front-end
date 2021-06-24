import React from 'react'
import Wrapper from '../../Components/Wrapper'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import Slider from '../../Components/Slider'
import './style.css'

const slides = [
    {
        city: '',
        country: '',
        img: 'https://user-images.githubusercontent.com/71358869/123189251-7980b780-d46b-11eb-890e-9aa502239796.jpg',
      },
    {
      city: '',
      country: '',
      img: 'https://user-images.githubusercontent.com/71358869/123189602-1e02f980-d46c-11eb-9b54-8423d5ab9956.JPG',
    },
    {
      city: '',
      country: '',
      img: 'https://user-images.githubusercontent.com/71358869/123189097-33c3ef00-d46b-11eb-859f-f4ea050c9702.jpg',
    },
   
    {
      city: '',
      country: '',
      img: 'https://user-images.githubusercontent.com/71358869/123189807-7639fb80-d46c-11eb-9a6c-2e09783ca62a.jpg',
    },
    {
        city: '',
        img: 'https://user-images.githubusercontent.com/71358869/123188992-02e3ba00-d46b-11eb-936b-9b0dd31dabcf.JPG',
      },
  ];
  
function Home() {
    return (
        <Wrapper>
            <Slider slides={slides} />
            {/* <div >
                <a class="container hideArrow" style={{ zIndex: '10', position: 'absolute', paddingLeft: '47%', bottom: '5%' }}>
                    <div class="content">
                        <svg id="more-arrows">
                            <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
                            <polygon class="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " />
                            <polygon class="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
                        </svg>
                    </div>
                </a>

            </div> */}
 
                <section class="row professional_builder backgroounnd"  >
                    <div class="container">
                        <div class="row builder_all">
                            <div class="tittle" style={{ marginBottom: '5%' }}>
                                <h2>About Us</h2>
                                <h1 style={{ marginTop: "5%" }}>PROVIDING MOHR VALUE </h1>
                                <h1>SINCE 1960</h1>
                            </div>
                            <div class="col-md-3 col-sm-6 builder">
                                <i class="fa fa-home" aria-hidden="true"></i>
                                <h4>Professional Build</h4>
                                <p>We provide the finest build quality to ensure our customers' satisfaction</p>
                            </div>
                            <div class="col-md-3 col-sm-6 builder">
                                <i class="fa fa-building" aria-hidden="true"></i>
                                <h4>We Deliver Quality</h4>
                                <p>We value your satisfaction and will work hard to surpass your expectations</p>
                            </div>
                            <div class="col-md-3 col-sm-6 builder">
                                <i class="fa fa-clock" aria-hidden="true"></i>
                                <h4>Always On Time</h4>
                                <p>Punctuality is of upmost importance when it comes to our workflow</p>
                            </div>
                            <div class="col-md-3 col-sm-6 builder">
                                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                                <h4>We Are Passionate</h4>
                                <p>We will work tirelessly to complete projects demanded by our customers</p>
                            </div>

                        </div>
                    </div>
                </section>
   


            <section class="our_feature_area">
                <div class="container">

                    <div class="feature_row row">
                        <div class="col-md-6 feature_img">

                            <section class="our_achievments_area" data-stellar-background-ratio="0.3" style={{ backgroundPosition: '50% 35.22px' }}>

                                <div class="tittle wow fadeInUp" >
                                    <h2>Our Achievements</h2>
                                    <h4 style={{ padding: '5%', paddingTop: '15%' }}>the signature blue trucks with the golden horseshoe on the door are now quite familiar sights throughout eastern Ontario and Western Quebec.</h4>
                                </div>
                                <div class="achievments_row row" >
                                    <div class="col-md-4 col-sm-6 p0 completed" style={{ margin: 'auto', paddingLeft: '5%' }}>
                                        <i class="fa fa-check-square" aria-hidden="true"></i>
                                        <CountUp end={800} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span style={{ color: 'white' }} class="counter" ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <h6>PROJECT COMPLETED</h6>
                                    </div>
                                    {/* <div class="col-md-3 col-sm-6 p0 completed">
                                        <i class="fa fa-home" aria-hidden="true"></i>
                                        <CountUp end={229} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span style={{ color: 'white' }} class="counter" ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <h6>HOUSE RENOVATIONS</h6>
                                    </div> */}
                                    <div class="col-md-6 col-sm-6 p0 completed rightPad">
                                        <i class="fa fa-child" aria-hidden="true"></i>
                                        <CountUp end={50} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span style={{ color: 'white' }} class="counter" ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <h6>WORKERS EMPLOYED</h6>
                                    </div>
                                    {/* <div class="col-md-3 col-sm-6 p0 completed">
                                        <i class="fa fa-trophy" aria-hidden="true"></i>
                                        <CountUp end={25} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span style={{ color: 'white' }} class="counter" ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <h6>AWARDS WON</h6>
                                    </div> */}
                                </div>
                            </section>




                        </div>
                        <div id="#whyus" class="col-md-6 feature_content">
                            <div class="container">
                                <div class="subtittle" style={{ marginTop: '3%' }}>
                                    <h3>WHY CHOOSE US</h3>
                                    <h6>Aside from our amazing staff,we take the time and care to make sure even the tiniest
                                         detail is managed, in every circumstance.</h6>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <h6>
                                            <i class="fa fa-wrench" aria-hidden="true"></i>
                                        </h6>
                                    </div>
                                    <div class="media-body">
                                        <h6>60+ YEARS OF EXPERIENCE</h6>
                                        <p>Our long experience means we have expertise which reaches across a number of services, as well as knowledge of specific protocol and local regulations. But we know that things change, and we are constantly striving to adapt and improve. </p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <h6>
                                            <i class="fa fa-users" aria-hidden="true"></i>
                                        </h6>
                                    </div>
                                    <div class="media-body">
                                        <h6>Best Customer Services</h6>
                                        <p>Our employees provide unmatched value, delivering top quality service for your business! All of our team members are committed to providing MOHR Value. In keeping with this desire, we are not satisfied with our work until you are as well.</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <h6>
                                            <i class="fa fa-rocket" aria-hidden="true"></i>
                                        </h6>
                                    </div>
                                    <div class="media-body">
                                        <h6 style={{ fontWeight: 'bold' }}>QUALIFIED EXPERTS</h6>
                                        <p>Our company and our team maintain our professional designations and continuous improvement.  You want results? Contact us today! There is really no other way. </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section class="row featured_works " data-stellar-background-ratio="0.3" style={{ backgroundPosition: ' 50% -0.36px', marginTop: '5%', marginBottom: '0.11%' }}>
                <div class="tittle wow fadeInUp">
                    <h2 >Safety</h2>
                    <div style={{ paddingLeft: '10%', paddingRight: '10%', marginTop: '5%', marginBottom: "4%", textTransform: 'none', color: 'white' }}>
                        <strong> As a member of the W.S.I.B Excellence Program,
                        Goldie Mohr Ltd. is able to reduce workplace
                        injuries and ensure safety at all job sites. The
                        main focus of the Goldie Mohr Ltd health safety
                        and environment department is creating an
                        inclusive culture and safest environment
                        possible, for all stakeholders (the public,
                        employees, sub-contractors and customers) by
                        maintaining the policies and standards
                        influenced by W.S.I.B. and I.H.S.A. Accident
                        prevention is what Goldie Mohr Ltd. strives for
                        through this program. Our team is committed to
                        achieving the Ontario Certificate or Recognition
                        – COR.</strong> </div>
                </div>
            </section>


        </Wrapper>

    )
}

export default Home