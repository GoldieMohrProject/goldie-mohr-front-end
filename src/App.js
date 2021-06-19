import { HashRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About"
import React from 'react'
import Wrapper from './Components/Wrapper'
import Contact from "./Pages/Contact"
import Footer from './Components/Footer'
import Service from "./Pages/Services"
import Home from "./Pages/Home/index"
import Career from "./Pages/Career"
import Navbar from "./Components/Navbar"

import RoadConstruction from "./Pages/Road Construction"
import Transportation from "./Pages/Transportation"

import WinterMaintenance from "./Pages/Winter Maintenance"
import EquipmentRental from "./Pages/EquipmentRental"
import Product from "./Pages/Products/index"


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Navbar/>
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/About" component={About} />
          <Route exact path="/" component={Home} />
          <Route exact path="/Service" component={Service} />
          <Route exact path="/Road-Construction" component={RoadConstruction}/>
            <Route exact path="/Transportation" component={Transportation}/>
          <Route exact path="/Winter-Maintenance" component={WinterMaintenance}/>
          <Route exact path="/Equipment-Rental" component={EquipmentRental}/>

          <Route exact path="/Product" component={Product} />
          <Route exact path="/Career" component={Career} />



        </Wrapper>
        <Footer />
      </div>
    </Router>


  );
}

export default App;
