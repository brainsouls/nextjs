import React from "react";
import "../Components/Account.css";
import '../Components/PPC.css'
import bannersvg from "../Images/Group 1000008731.png";
import bannerimg1 from "../Images/Group 1000008743.png";
import accountamazonim from "../Images/Rectangle 40247.png";
import ppcpointsimg1 from "../Images/Group 1000008742.png";
import ppcpointsimg2 from "../Images/Group 1000008429.png";
import ppcpointsimg3 from "../Images/Group 1000008431.png";
import ppcpointsimg4 from "../Images/Group 1000008468.png";
import ppcpointsimg5 from "../Images/Group 1000008430.png";

import ppcpointsimg6 from "../Images/Group 1000008432.png";

import ppcpointsimg7 from "../Images/Group 1000008469.png";

import ppcpointsimg8 from "../Images/Group 1000008436.png";

import ppcpointsimg9 from "../Images/Group 1000008732.png";
import ppcpointsimg10 from "../Images/Group 1000008470.png";


import JacktoMedia from '../Components/JacktoMedia'

import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link";


function PPC() {
    return (
        <div>
            <div className="container-fluid ppc-banner-div1">
                {/* <Image src={bannersvg} className="account-banner-svg1" alt="" /> */}
                <div className="container h-100">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div>

                                <h1 className="account-banner-text1">Amazon PPC </h1>
                                <h1 className="account-banner-text2">Management </h1>
                                <p className="account-banner-text3">
                                    Elevating Your Amazon Presence — Precision in Performance.

                                </p>
                                <div className='account-banner-btn1-formobile'>
                                    <a href="">
                                        <div className="account-banner-btn1">
                                            Book a Discovery Call{" "}
                                            <svg
                                                className="ml-3"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                            >
                                                <path
                                                    d="M17.5 2C17.5 1.17157 16.8284 0.5 16 0.500001L2.5 0.5C1.67157 0.5 1 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5H14.5V15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM3.06066 17.0607L17.0607 3.06066L14.9393 0.93934L0.93934 14.9393L3.06066 17.0607Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6 position-relative h-100 d-flex align-items-center">
                            <div >
                                <Image
                                    src={bannerimg1}
                                    className="img-fluid ppc-banner-img1"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid account-amazon-div1">
                <div className="container">
                    <div>
                        <h1 className="account-amazon-text1">
                            Do These Amazon PPC Pitfalls Sound Familiar?
                        </h1>
                        <ul className="account-amazon-ul1">
                            <li>You’re overwhelmed with your Amazon PPC Campaigns, especially when it comes to optimization tactics.</li>
                            <li>
                                You’ve created lots of sponsored campaigns but have had no consistent success but rather low ROI.
                            </li>
                            <li>
                                Poor product listing optimization resulting in low viewability
                                and conversion rate
                            </li>
                            <li>You don’t have an Amazon ads strategy (or you do, but it’s not getting the results you want)</li>
                            <li>You have low visibility and low targeted traffic on your sponsored product ads</li>
                            <li> You don’t know how to adjust your PPC campaigns to make them perform better</li>
                        </ul>
                        <p className="account-amazon-text2">
                            If you answered “Yes!” to one or more of these, you need our unified Amazon PPC strategy.
                        </p>
                    </div>
                    <div>
                        <Image
                            src={accountamazonim}
                            className="img-fluid account-amazon-img1"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="container-fluid account-points-div1">
                <div className="container">
                    <div>

                        {/* // Amazon Point ###### No ####1 */}

                        <div className="row">
                            <div className="col-lg-2 col-12">
                                <div className="account-points-img-div1">
                                    <Image src={ppcpointsimg1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 account-points-textdiv1">
                                <div>
                                    <h1 className="account-points-text1">
                                        Fix Existing Ad Campaigns
                                    </h1>
                                    <p className="account-points-text2">
                                        The effectiveness of your sponsored product listings is pivotal for driving sales. If they are not delivering results, they lose their purpose. We ensure complete optimization of your listings before directing traffic to them.

                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12 d-flex align-items-center justify-content-center">
                                <div className='plus-sign-div1-for-mobile'>
                                    <svg
                                        width="40"
                                        height="39"
                                        viewBox="0 0 40 39"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.8125 19.5L39.8125 19.5"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                        <path
                                            d="M20.3125 0L20.3125 39"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>


                        <div className="account-point-line-svg1"></div>

                        {/* // Amazon Point ###### No ####2 */}


                        <div className="row">
                            <div className="col-lg-2 col-12">
                                <div className="account-points-img-div1">
                                    <Image src={ppcpointsimg2} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 account-points-textdiv1">
                                <div>
                                    <h1 className="account-points-text1">
                                        Build Customized PPC Strategies
                                    </h1>
                                    <p className="account-points-text2">
                                        Recognizing the uniqueness of each business, we tailor individual sponsored ad campaigns to meet the specific needs of your brand.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12 d-flex align-items-center justify-content-center">
                                <div className='plus-sign-div1-for-mobile'>
                                    <svg
                                        width="40"
                                        height="39"
                                        viewBox="0 0 40 39"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.8125 19.5L39.8125 19.5"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                        <path
                                            d="M20.3125 0L20.3125 39"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>



                        <div className="account-point-line-svg1"></div>

                        {/* // Amazon Point ###### No ####3 */}


                        <div className="row">
                            <div className="col-lg-2 col-12">
                                <div className="account-points-img-div1">
                                    <Image src={ppcpointsimg3} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 account-points-textdiv1">
                                <div>
                                    <h1 className="account-points-text1">
                                        Maximize ROAS
                                    </h1>
                                    <p className="account-points-text2">
                                        We fine-tune your sponsored ad campaigns to enhance your return on ad spend and decrease overall costs.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12 d-flex align-items-center justify-content-center">
                                <div className='plus-sign-div1-for-mobile'>
                                    <svg
                                        width="40"
                                        height="39"
                                        viewBox="0 0 40 39"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.8125 19.5L39.8125 19.5"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                        <path
                                            d="M20.3125 0L20.3125 39"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>





                        <div className="account-point-line-svg1"></div>

                        {/* // Amazon Point ###### No #### 4 */}


                        <div className="row">
                            <div className="col-lg-2 col-12">
                                <div className="account-points-img-div1">
                                    <Image src={ppcpointsimg4} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 account-points-textdiv1">
                                <div>
                                    <h1 className="account-points-text1">
                                        Improve Organic Ranking
                                    </h1>
                                    <p className="account-points-text2">
                                        We conduct thorough research to identify profitable keywords, strategically incorporating them into your product listings and sponsored ad campaigns to elevate your organic search rankings.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12 d-flex align-items-center justify-content-center">
                                <div className='plus-sign-div1-for-mobile'>
                                    <svg
                                        width="40"
                                        height="39"
                                        viewBox="0 0 40 39"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.8125 19.5L39.8125 19.5"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                        <path
                                            d="M20.3125 0L20.3125 39"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>




                        <div className="account-point-line-svg1"></div>

                        {/* // Amazon Point ###### No #### 5 */}


                        <div className="row">
                            <div className="col-lg-2 col-12">
                                <div className="account-points-img-div1">
                                    <Image src={ppcpointsimg5} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 account-points-textdiv1">
                                <div>
                                    <h1 className="account-points-text1">
                                        Analyze and Monitor Campaigns
                                    </h1>
                                    <p className="account-points-text2">
                                        Results take time. We consistently monitor, adjust, measure, and optimize your PPC campaigns to lower your Advertising Cost of Sales (ACOS).
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12 d-flex align-items-center justify-content-center">
                                <div className='plus-sign-div1-for-mobile'>
                                    <svg
                                        width="40"
                                        height="39"
                                        viewBox="0 0 40 39"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.8125 19.5L39.8125 19.5"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                        <path
                                            d="M20.3125 0L20.3125 39"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>






                        <div className="account-point-line-svg1"></div>

                        {/* // Amazon Point ###### No #### 6 */}


                        <div className="row">
                            <div className="col-lg-2 col-12">
                                <div className="account-points-img-div1">
                                    <Image src={ppcpointsimg6} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 account-points-textdiv1">
                                <div>
                                    <h1 className="account-points-text1">
                                        Manage All Amazon Sponsored Ads
                                    </h1>
                                    <p className="account-points-text2">
                                        We manage the complete PPC campaign process from initiation to completion, assisting you in crafting high-converting sponsored product ads.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12 d-flex align-items-center justify-content-center">
                                <div className='plus-sign-div1-for-mobile'>
                                    <svg
                                        width="40"
                                        height="39"
                                        viewBox="0 0 40 39"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.8125 19.5L39.8125 19.5"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                        <path
                                            d="M20.3125 0L20.3125 39"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>








                        <div className="account-point-line-svg1"></div>

                        {/* // Amazon Point ###### No #### 7 */}


                        <div className="row">
                            <div className="col-lg-2 col-12">
                                <div className="account-points-img-div1">
                                    <Image src={ppcpointsimg7} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 account-points-textdiv1">
                                <div>
                                    <h1 className="account-points-text1">
                                        Identify Incremental Sales Opportunities
                                    </h1>
                                    <p className="account-points-text2">
                                        We delve into your data, identifying key components that can be optimized to boost sales.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12 d-flex align-items-center justify-content-center">
                                <div className='plus-sign-div1-for-mobile'>
                                    <svg
                                        width="40"
                                        height="39"
                                        viewBox="0 0 40 39"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.8125 19.5L39.8125 19.5"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                        <path
                                            d="M20.3125 0L20.3125 39"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>






                        <div className="account-point-line-svg1"></div>

                        {/* // Amazon Point ###### No #### 8 */}


                        <div className="row">
                            <div className="col-lg-2 col-12">
                                <div className="account-points-img-div1">
                                    <Image src={ppcpointsimg8} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 account-points-textdiv1">
                                <div>
                                    <h1 className="account-points-text1">
                                        Reduce ACOS, Improve ROI
                                    </h1>
                                    <p className="account-points-text2">
                                        We conduct a thorough health check on your current PPC campaigns to gain insights into whats effective and what needs improvement before initiating new campaigns.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12 d-flex align-items-center justify-content-center">
                                <div className='plus-sign-div1-for-mobile'>
                                    <svg
                                        width="40"
                                        height="39"
                                        viewBox="0 0 40 39"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.8125 19.5L39.8125 19.5"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                        <path
                                            d="M20.3125 0L20.3125 39"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>





                        <div className="account-point-line-svg1"></div>

                        {/* // Amazon Point ###### No #### 9 */}


                        <div className="row">
                            <div className="col-lg-2 col-12">
                                <div className="account-points-img-div1">
                                    <Image src={ppcpointsimg9} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 account-points-textdiv1">
                                <div>
                                    <h1 className="account-points-text1">
                                        Building a Sustainable Brand
                                    </h1>
                                    <p className="account-points-text2">
                                        Sustainability begins by optimizing your product listings and pinpointing relevant, profitable traffic to channel into your sponsored product campaigns.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12 d-flex align-items-center justify-content-center">
                                <div className='plus-sign-div1-for-mobile'>
                                    <svg
                                        width="40"
                                        height="39"
                                        viewBox="0 0 40 39"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.8125 19.5L39.8125 19.5"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                        <path
                                            d="M20.3125 0L20.3125 39"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>





                        <div className="account-point-line-svg1"></div>

                        {/* // Amazon Point ###### No #### 10 */}


                        <div className="row">
                            <div className="col-lg-2 col-12">
                                <div className="account-points-img-div1">
                                    <Image src={ppcpointsimg10} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 account-points-textdiv1">
                                <div>
                                    <h1 className="account-points-text1">
                                        Increase Sales & Scalability
                                    </h1>
                                    <p className="account-points-text2">
                                        We understand what makes sponsored product listings convert. Not only do we ensure your PPC campaigns are reaching the right people, we optimize every aspect for maximum impact.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12 d-flex align-items-center justify-content-center">
                                <div className='plus-sign-div1-for-mobile'>
                                    <svg
                                        width="40"
                                        height="39"
                                        viewBox="0 0 40 39"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.8125 19.5L39.8125 19.5"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                        <path
                                            d="M20.3125 0L20.3125 39"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>









                    </div>
                </div>
            </div>



            <JacktoMedia></JacktoMedia>
        </div>
    );
}

export default PPC;
