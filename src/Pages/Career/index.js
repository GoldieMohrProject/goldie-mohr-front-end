import React from 'react'
import Job from '../../Components/Job'
import './style.css'

import { Link } from "react-router-dom";


function Career() {
    return (
        <>
            <div id="careerImage">
                <h1 id="careerTitle">CAREERS</h1>
            </div>
            <div className="container">
                <div style={{ marginBottom: "40px", marginTop: "40px" }}>
                    {/* <div>
                        <p>To apply for available jobs <a id="indeedLink" href="https://ca.indeed.com/Goldie-Mohr-jobs-in-Ontario" target="_blank">click here</a></p>
                    </div> */}
                    <div className="row ">
                        <p style={{textAlign:'center'}}>
                            We are often hiring truck drivers, labourers, operators, administration. To apply, please send a
                            message through our <Link to="/Contact">Contact Us</Link> page.

                        </p>


                    </div>
                    <div className="row justify-content-center">
                        
                        <Job title="Winter Maintenance Operator" description="We are looking The Snow Removal Operators who are Responsible for the de-icing and clearing of snow from walks, roadways, and parking lots for various residential and commercial properties throughout West Ottawa in an efficient manner, promoting job worksite safety, providing excellent customer service, and exhibits pride and quality workmanship."
                            link="https://ca.indeed.com/Goldie-Mohr-jobs-in-Ontario" />
                        <Job title="AZ Truck Driver" description="We are looking to hire a reliable and hard-working AZ Driver to transport goods to customers in a timely manner. The AZ Driver's responsibilities include safely securing goods to prevent damage, identifying ways to minimize fuel consumption where possible, as well as supervising the safe loading and unloading of goods onto and off the company truck. You should also be able to maintain a record of all maintenance activities and repairs performed on the company truck."
                            link="https://ca.indeed.com/Goldie-Mohr-jobs-in-Ontario" />
                        <Job title="Administration/Accounting" description="We are looking for an Accounts Administrator to manage our company???s accounts payable and receivable.Accounts Administrator responsibilities include reviewing and reconciling accounts, processing payments to external partners and maintaining updated records of invoices and receipts. To be successful in this role, you should have a Finance or Accounting background and be familiar with bookkeeping."
                            link="https://ca.indeed.com/Goldie-Mohr-jobs-in-Ontario" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Career