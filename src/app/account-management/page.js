import React from "react";
import "../Components/Account.css";
import bannersvg from "../Images/Group 1000008731.png";
import bannerimg1 from "../Images/Group 1000008907.png";
import accountamazonim from "../Images/Rectangle 40247.png";
import amazonpointsimg1 from "../Images/Group 1000008435.png";
import amazonpointsimg2 from "../Images/Group 1000008464 (1).png";
import amazonpointsimg3 from "../Images/Group 1000008437.png";
import amazonpointsimg4 from "../Images/Group 1000008466.png";
import JacktoMedia from "../Components/JacktoMedia";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link";


function Account() {
    return (
        <div>
            <div className="container-fluid account-banner-div1">
                <Image src={bannersvg} className="account-banner-svg1" alt="" />
                <div className="container h-100">
                    <div className="row">
                        <div className="col-lg-6 my-auto ">
                            <h1 className="account-banner-text1 account-banner-text1-formobile">Amazon Account </h1>
                            <h1 className="account-banner-text2">Management </h1>
                            <p className="account-banner-text3">
                                Maximize Your Brands Potential with Jack2Media
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

                        <div className="col-lg-6 position-relative h-100">
                            <div>
                                <Image
                                    src={bannerimg1}
                                    className="img-fluid account-banner-img1"
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
                            Is your Amazon brand struggling with?
                        </h1>
                        <ul className="account-amazon-ul1">
                            <li>A comprehensive Amazon brand strategy</li>
                            <li>
                                Strong creative to communicate your brand story and unique
                                selling proposition
                            </li>
                            <li>
                                Poor product listing optimization resulting in low viewability
                                and conversion rate
                            </li>
                            <li>No product expansion and diversification</li>
                            <li>Reputation management & customer engagement</li>
                            <li> Brand Advocacy and Loyalty</li>
                            <li>Sponsored Product Campaigns or PPC</li>
                            <li>Return on Investment (ROI)</li>
                        </ul>
                        <p className="account-amazon-text2">
                            If your answer is “Yes!” to any of these, you are in right place
                            our Amazon Brand Management Services will help.
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
                                    <Image src={amazonpointsimg1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 account-points-textdiv1">
                                <div>
                                    <h1 className="account-points-text1">
                                        Amazon Listing optimization to Improve Ranking
                                    </h1>
                                    <p className="account-points-text2">
                                        Leveraging your brand identity, we craft compelling,
                                        genuine, and unified content that captivates customers,
                                        encouraging them to stay on your listings for an extended
                                        duration
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
                                    <Image src={amazonpointsimg2} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 account-points-textdiv1">
                                <div>
                                    <h1 className="account-points-text1">
                                        End to end Amazon Account Management Service
                                    </h1>
                                    <p className="account-points-text2">
                                        While maintaining the consistency of your brand narrative across your Amazon Product Listings, we safeguard your brand through comprehensive end-to-end compliance measures.
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
                                    <Image src={amazonpointsimg3} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 account-points-textdiv1">
                                <div>
                                    <h1 className="account-points-text1">
                                        Amazon Brand Advertising
                                    </h1>
                                    <p className="account-points-text2">
                                        We employ a blend of advertising strategies across various Amazon ad types to boost traffic to your listings and optimize your return on investment (ROI).
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
                                    <Image src={amazonpointsimg4} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 account-points-textdiv1">
                                <div>
                                    <h1 className="account-points-text1">
                                        Brand Supply Chain Management
                                    </h1>
                                    <p className="account-points-text2">
                                        As a retailer, we recognize the importance of efficient inventory management. Our goal is to enhance your performance while minimizing costs.</p>
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

export default Account;
