import "./style.css"

import React from 'react';
import './style.css';
import { Link } from "react-router-dom";
import { Image } from 'antd';


// history photos
import history1 from '../About/history/1.jpg'
import history2 from '../About/history/2.jpg'
import history3 from '../About/history/3.jpg'
import history4 from '../About/history/4.jpg'
import history5 from '../About/history/5.jpg'
import history6 from '../About/history/6.jpg'
import history7 from '../About/history/7.jpg'
import history8 from '../About/history/8.jpg'
import history9 from '../About/history/9.jpg'
import history10 from '../About/history/10.jpg'
import history11 from '../About/history/11.jpg'
import history12 from '../About/history/12.jpg'
import history13 from '../About/history/13.jpg'
import history14 from '../About/history/14.jpg'
import history15 from '../About/history/15.jpg'
import history16 from '../About/history/16.jpg'
import history17 from '../About/history/17.jpg'


// membership photos
import CAFE from '../../assets/CAFE.png'
import Dig from '../../assets/Dig.png'
import ISHA from '../../assets/ISHA.png'
import NCHCA from '../../assets/NCHCA.png'
import OCA from '../../assets/OCA.png'
import OSWCA from '../../assets/OSWCA.png'
import OTA from '../../assets/OTA.png'
import WSIB from '../../assets/WSIB.png'


function About() {



  return (
    <>
      <section className="aboutbanner" data-stellar-background-ratio="0.5">
        <h2>ABOUT US</h2>
      </section>

      {/* <hr className="titleline"></hr> */}

      <section className="about_us_area about_us_2 row">
        <div className="container">
          <div className="row about_row about_us2_pages">
            <div className="col-md-7">
              <div className="subtittle">
                <h2>WHO WE ARE</h2>
              </div>
              <p>
                In 1960, at a tender young age, Goldie Mohr bought his first truck after a career working with
                Thomas G. Fuller and other local contractors. Goldie would work as an owner operator hauling
                whatever payload he could get. In the winter months, it was logs up north, in the spring and summer
                it was aggregates and asphalt, and in the fall it was road salt. With a backhoe and a dump truck and
                lots of hard work, Goldie began helping people build their dreams: homes, cottages, businesses,
                churches, farms and roads.
                Goldie and Mary built this company into a very viable, respected corporation.
                Soon the area serviced grew and eventually, so did the fleet of equipment, trucks and employees at
                Goldie Mohr Ltd. The scope of work has evolved to include site preparation, custom trucking, float
                service, topsoil manufacture, aggregates and winter maintenance. We are a heavy civil construction
                company.
        </p>
            </div>

            <div className="col-md-5 our_skill_inner">
              <div className="subtittle">
                <h2>WHAT WE DO</h2>
              </div>
              <br></br>
              <div className="single_skill">
                <h3>Heavy Civil Construction</h3>

              </div>
              <div className="single_skill">
                <h3>Demolition</h3>

              </div>
              <div className="single_skill">
                <h3>Road Construction</h3>

              </div>
              <div className="single_skill">
                <h3>Building Construction</h3>

              </div>
              <div className="single_skill">
                <h3>Transportation</h3>

              </div>
              <div className="single_skill">
                <h3>Heavy Equipment Rental</h3>

              </div>
              <div className="single_skill">
                <h3>Topsoil &amp; Aggregates</h3>

              </div>
              <div className="single_skill">
                <h3>Winter Maintenance</h3>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* HISTORY IMAGES SECTION */}
      <div className="history-container justify-content-center">

        <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-6">
            <Image width={200} src={history1} alt="old photo" />
            </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <Image className="demo cursor" src={history1} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <Image className="demo cursor" src={history2} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <Image className="demo cursor" src={history3} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history4} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history5} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history6} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history7} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history8} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history9} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history10} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history11} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history12} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history13} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history14} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history15} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history16} style={{ width: '100%' }} alt="old photo" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <img className="demo cursor" src={history17} style={{ width: '100%' }} alt="old photo" />
          </div>
               </div>
      </div>

      <section>
        <div className="container">
          <div className="subtittle">
            <h2>WE GOT YOUR BACK</h2>
          </div>
          <div className="profile">
            <p>
              After many years of service in the Ottawa community, we feel confident that we can cater to your
              needs. We get the job done and we don’t just meet expectations; we exceed them. Our customers
              keep coming back because we are dependable, knowledgeable and pleasant to work with.
              </p>
            <p>
              Our employees provide unmatched service, delivering top quality service for your business! All of
              our team members are committed to providing MOHR Value to you. In keeping with this desire, we
              are not satisfied with our work until you are as well.
              Aside from our amazing staff, we take the time and care to make sure even the tiniest detail is
              managed, in every circumstance. There really is no other way. Contact us today and find out how we
              can help you. It is our pleasure!</p>
          </div>
          <Link to="/contact" type="button" className="contactbtn">Contact Now</Link>
          <br></br>

        </div>
      </section>

      {/* Community Area */}
      <br></br>
      <section className="our_partners_area">
        <div className="book_now_aera">
          <div className="container">
            <div className="col-md-10">
              <h4 style={{ color: "white" }}>Our community is important to us</h4>

              <p className="communityarea">
                As a company we truly believe that we have a genuine responsibility to help better the communities we do business in.
                </p>
              <p className="communityarea">
                Over the years GOLDIE MOHR LTD. has supported many local charity groups, charity events, sports teams, service clubs and organizations. As a team, we believe a place should be left better than found and we strive to make this possible through our community involvement.
                </p>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      {/* End Community Area */}


      <section className="our_feature_area">
        <div className="container">
          <div className="tittle wow fadeInUp">
            <div>
              <h2>Memberships</h2>
              <br></br>
            </div>
          </div>
        </div>

        <div className="membershiparea">
          <img src={CAFE} className="imgmemb" />
          <img src={Dig} className="imgmemb" />
          <img src={ISHA} className="imgmemb" />
          <img src={NCHCA} className="imgmemb" />
        </div>
        <div className="membershiparea">
          <img src={OCA} className="imgmemb" />
          <img src={OSWCA} className="imgmemb" />
          <img src={OTA} className="imgmemb" />
          <img src={WSIB} className="imgmemb" />
        </div>


      </section>

    </>

  );
}

export default About;



