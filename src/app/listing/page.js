import React from "react";
import "../Components/Account.css";
import '../Components/PPC.css'
import bannersvg from "../Images/Group 1000008731.png";
import bannerimg1 from "../Images/Group 1000008739.png";
import accountamazonim from "../Images/Rectangle 40949 (1).png";
import ppcpointsimg1 from "../Images/Vector (1).png";
import ppcpointsimg2 from "../Images/Vector (2).png";
import ppcpointsimg4 from "../Images/Layer 3.png";
import ppcpointsimg5 from "../Images/Group 1000008741.png";
import ppcpointsimg3 from "../Images/Group 1000008740.png";

import JacktoMedia from "../Components/JacktoMedia";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link";

function Listing() {
    return (
        <div>
            <div className="container-fluid ppc-banner-div1">
                {/* <Image src={bannersvg} className="account-banner-svg1" alt="" /> */}
                <div className="container h-100">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div>

                                <h1 className="account-banner-text1">Listing & </h1>
                                <h1 className="account-banner-text2">Optimization </h1>
                                <p className="account-banner-text3">
                                    Ecommerce Is Competitive, And Only The <br className='d-md-block d-none'></br>Best Listings Win The Sale.
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
                            <div>
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
                            Why is Amazon Product Listing Optimization Important?
                        </h1>
                        <ul className="account-amazon-ul1">
                            <li>It improves the ranking as well as increases traffic, ultimately leading to increased sales.</li>
                            <li>
                                Given that the Amazon algorithm is constantly changing, a set it and forget it strategy may not work today.
                            </li>
                            <li>
                                Old practices regarding images and keywords may not be effective in the current environment.
                            </li>
                            <li>The more accurate the listing, the better trust you build with your customers.</li>
                            <li>Consistency in product listings makes your brand seem more legitimate</li>
                            <li> Well-constructed listings increase the chances of conversions.</li>
                        </ul>

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
                                        Product Research
                                    </h1>
                                    <p className="account-points-text2">
                                        Fuel your success with strategic Product Research. We dive deep into market trends, competition, and customer preferences to guide your product strategy and boost your competitive edge on Amazon.
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
                                        Competitors Analysis
                                    </h1>
                                    <p className="account-points-text2">
                                        Gain a competitive edge with our thorough Competitor Analysis. We dissect market trends, study competitor strategies, and provide actionable insights to fortify your position and drive success on Amazon.
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
                                        Keywords Tracking
                                    </h1>
                                    <p className="account-points-text2">
                                        Stay ahead with precise Keywords Tracking. Our advanced tools monitor and analyze keyword performance, ensuring your Amazon strategy remains optimized for maximum visibility and success.
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
                                        Inforgraphic and Lifestyle
                                    </h1>
                                    <p className="account-points-text2">
                                        Elevate your product presentation with engaging Infographics and Lifestyle imagery. We create visually compelling content that captivates audiences and enhances your brand storytelling on Amazon.
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
                                        Backend Optimization
                                    </h1>
                                    <p className="account-points-text2">
                                        Boost performance with Backend Optimization. Our strategic enhancements behind the scenes ensure your product listings are fully optimized, driving visibility and maximizing results on Amazon.
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

export default Listing;
