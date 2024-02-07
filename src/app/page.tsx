"use client"

import React from "react";
import "./Components/Home.css";
import bannerimg1 from "./Images/image 2159.png";
import bannerplaybtn1 from "./Images/Group 1000008656.png";
import homepointersvg2 from "./Images/Group 1000008729.svg";
import homepointersvg1 from "./Images/Group 1000008730.svg";
import sellingimg1 from "./Images/Group 1000008913.png";
import sellingimg2 from "./Images/Vector.svg";

import sellingcardimg1 from "./Images/Page-1.png";
import sellingcardimg2 from "./Images/Page-1 (1).png";
import sellingcardimg3 from "./Images/Page-1 (2).png";
import listsvg from "./Images/Group 1000008594 (1).svg";
import listsvg2 from "./Images/Group 1000008605.svg";


import listingimg1 from './Images/Group 1000008515 (1).png'
import listingimg2 from './Images/Group 48095688 (1).png'
import listingimg3 from './Images/Group 1000008516 (1).png'
import listingimg4 from './Images/Group 1000003003 (1).png'
import listingimg5 from './Images/Group 1000008517 (1).png'
import JacktoMedia from "./Components/JacktoMedia";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link";

  



function Home() {
  return (
   <div>
      <div className="conatiner-fluid home-banner-div1">
        <div className="home-banner-color-svg1"></div>
        <div className="home-banner-color-svg2"></div>

        <div className="container position-relative ">
          <Image src={homepointersvg1} className="home-pointer-svg1 d-md-block d-none" alt="" />
          <Image src={homepointersvg2} className="home-pointer-svg2 d-md-block d-none " alt="" />

          <div>
            <h1 className="home-banner-text1 ">
              We Grow <span>Brands</span>
            </h1>
            <p className="home-banner-text2">
              Unleash your digital potential through data and high <br className="d-md-block d-none"></br>{" "}
              performance digital marketing. Get a free, no obligation quote.
            </p>
            <div className="d-flex justify-content-center">
              <a href="">
                <div className="home-banner-btn1">
                  Book Meeting{" "}
                  <svg
                    className="home-banner-btn-svg1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                    fill="none"
                  >
                    <circle cx="31" cy="31" r="31" fill="#030F17" />
                    <path
                      d="M41.5896 22C41.5896 21.122 40.8779 20.4102 39.9999 20.4102L25.6922 20.4098C24.8142 20.4098 24.1024 21.1215 24.1024 21.9995C24.1024 22.8775 24.8141 23.5893 25.6921 23.5893L38.41 23.5896L38.4097 36.3076C38.4097 37.1856 39.1214 37.8973 39.9994 37.8974C40.8774 37.8974 41.5892 37.1857 41.5892 36.3077L41.5896 22ZM23.1231 41.1239L41.1239 23.1241L38.8757 20.8758L20.8749 38.8756L23.1231 41.1239Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div className="  position-relative d-flex justify-content-center">
            <div className=" d-flex align-items-center justify-content-center  banner-img-div11 ">
              <Image src={bannerimg1} className="banner-img1 img-fluid" alt="" />
              <Image src={bannerplaybtn1} className="banner-play-btn1" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* // secttion ##### no #### 2 */}

      <div className="container-fluid home-section2-div1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex justify-content-center home-section2-div2">
              <div className="d-flex position-relative justify-content-center">
                <Image src={sellingimg1} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex align-items-center home-section2-div3">
              <div>
                <h1 className="home-selling-text1">
                  Selling on the World’s Largest Marketplace
                </h1>
                <p className="home-selling-text2">
                  Amazon is one of the most popular e-commerce platforms in the
                  world with over 300 million active users. With a best in class
                  Amazon marketing strategy, we can help you turn Amazon into
                  your most profitable channel.
                </p>
                <div className='home-selling-btn1-for-mobile'>
                  <a href="">
                    <div className="home-selling-btn1">
                      {" "}
                      Book Meeting{" "}
                      <svg
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

          </div>

          <div className="row home-section2-carddiv1">
            <div className="col-lg-4 col-12 home-section2-carddiv2">
              <div>
                <div className="home-section2-cardimg1">
                  <Image src={sellingcardimg1} alt="" />
                </div>
                <h1 className="home-section2-cardtext1">
                  Accelerate Sales Growth
                </h1>
                <p className="home-section2-cardtext2">
                  We drive growth on Amazon by using our proprietary
                  “Marketplace Flywheel®” methodology.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-12 home-section2-carddiv2">
              <div>
                <div className="home-section2-cardimg1">
                  <Image src={sellingcardimg2} alt="" />
                </div>
                <h1 className="home-section2-cardtext1">Optimize Operations</h1>
                <p className="home-section2-cardtext2">
                  Amazon’s marketplace is intricate, ever-changing, and
                  frustrating. We help you get through the layers of complexity.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-12 home-section2-carddiv2">
              <div>
                <div className="home-section2-cardimg1">
                  <Image src={sellingcardimg3} alt="" />
                </div>
                <h1 className="home-section2-cardtext1">
                  Maximize Profitability
                </h1>
                <p className="home-section2-cardtext2">
                  Many brands count on us as a strategic and execution partner
                  to increase their profits when selling on the world’s largest
                  marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>







      {/* // secttion ##### no #### 3 */}

      <div className="container-fluid home-listing-div1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex  align-items-center home-listing-textdiv2">
              <div>
                <h1 className="home-listing-text1">Listing & Optimization</h1>
                <p className="home-listing-text2">
                  Amazon is the world’s largest marketplace, and we help you
                  succeed on their platform by maximizing your advertising ROI.
                </p>
                <div className="home-listing-text4 d-md-block d-none">
                  <p >
                    <Image src={listsvg} alt='' />
                    Product Research
                  </p>
                  <p >
                    <Image src={listsvg} alt=''/>
                    Competitors Analysis
                  </p>
                  <p >
                    <Image src={listsvg} alt='' />
                    Key word research and implementation (SEO)
                  </p>
                  <p >
                    <Image src={listsvg} alt='' />
                    Optimisation
                  </p>
                  <p >
                    <Image src={listsvg} alt='' />
                    Backend Optimisation
                  </p>
                  <p >
                    <Image src={listsvg} alt='' />
                    SEO
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="home-listing-imges12">
                <Image src={listingimg1} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* // secttion ########## no ########## 4 */}

      <div className="container-fluid home-listing22-div1">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 d-md-flex d-none align-items-center">
              <div className="home-listing22-imges12">
                <Image src={listingimg2} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center home-listing22-textdiv2">
              <div>
                <h1 className="home-listing22-text1">Amazon PPC</h1>
                <p className="home-listing22-text2">
                  Our Amazon SEO specialists use a data-driven approach to optimize your keywords and increase your Amazon search ranking.
                </p>
                <div>
                  <a href="">
                    <div className="home-listing22-btn1">Explore Amazon SEO</div>
                  </a>
                </div>
                <div className="home-listing22-text4 d-md-block d-none">
                  <p >
                    <Image src={listsvg2} alt='' />
                    Fix Existing Ad Campaigns
                  </p>
                  <p >
                    <Image src={listsvg2} alt='' />
                    Build Customized PPC Strategies
                  </p>
                  <p >
                    <Image src={listsvg2} alt='' />
                    Maximize ROAS
                  </p>
                  <p >
                    <Image src={listsvg2} alt='' />
                   Improve Organic Ranking
                  </p>
                  <p >
                    <Image src={listsvg2} alt='' />
                    Analyze and Monitor Campaigns
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="col-lg-6 d-flex d-md-none align-items-center">
          <div className="home-listing22-imges12">
            <Image src={listingimg2} className="img-fluid" alt="" />
          </div>
        </div>
      </div>








      {/* // secttion ##### no #### 5 */}

      <div className="container-fluid home-listing-div1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center home-listing-textdiv2">
              <div>
                <h1 className="home-listing-text1">EBC / A+ Store Creation</h1>
                <p className="home-listing-text2">
                  Enhance your Amazon storefront with our EBC/A+ Store Creation service. Elevate your brand, captivate customers, and drive sales with visually compelling content. Stand out in the crowded marketplace with our expert touch
                </p>
                <div>
                  <a href="">
                    <div className="home-listing33-btn1">Explore Amazon Advertising</div>
                  </a>
                </div>
                <div className="home-listing-text4 d-md-block d-none">
                  <p >
                    <Image src={listsvg} alt='' />
                    Multimedia Integration
                  </p>
                  <p >
                    <Image src={listsvg} alt='' />
                    Content Strategy
                  </p>
                  <p >
                    <Image src={listsvg} alt=''/>
                    Performance Analytics
                  </p>
                  <p >
                    <Image src={listsvg} alt=''/>
                    Mobile Device
                  </p>
                  <p >
                    <Image src={listsvg} alt=''/>
                    Promotional Strategies
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="home-listing33-imges12">
                <Image src={listingimg3} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>










      {/* // secttion ########## no ########## 6 */}

      <div className="container-fluid home-listing22-div1">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 d-md-flex d-none align-items-center">
              <div className="home-listing22-imges12">
                <Image src={listingimg4} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center home-listing22-textdiv2">
              <div>
                <h1 className="home-listing22-text1">Issue Management</h1>
                <p className="home-listing22-text2">
                  Effortlessly handle challenges with our Issue Management service. Our team overcoming Seller Supports notorious canned responses
                </p>
                <div>
                  <a href="">
                    <div className="home-listing22-btn1">Explore Amazon Advertising</div>
                  </a>
                </div>
                <div className="home-listing22-text4 d-md-block d-none">
                  <p >
                    <Image src={listsvg2} alt=''/>
                    Client Consultation
                  </p>
                  <p >
                    <Image src={listsvg2} alt=''/>
                    Root Cause Analysis
                  </p>
                  <p >
                    <Image src={listsvg2} alt=''/>
                    Roadmap Development
                  </p>
                  <p >
                    <Image src={listsvg2} alt=''/>
                    Problem Identification and Assessment
                  </p>
                  <p >
                    <Image src={listsvg2} alt=''/>
                    Communication Strategy Development
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="col-lg-6 d-flex d-md-none align-items-center">
          <div className="home-listing22-imges12">
            <Image src={listingimg4} className="img-fluid" alt="" />
          </div>
        </div>
      </div>








      {/* // secttion ##### no #### 5 */}

      <div className="container-fluid home-listing-div1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center home-listing-textdiv2">
              <div>
                <h1 className="home-listing-text1">Account Management</h1>
                <p className="home-listing-text2">
                  Fuel your success with our Account Management service. We handle the details, ensuring smooth operations and fostering client relationships, so you can focus on achieving your business goals effortlessly
                </p>
                <div>
                  <a href="">
                    <div className="home-listing33-btn1">Explore Amazon Advertising</div>
                  </a>
                </div>
                <div className="home-listing-text4 d-md-block d-none">
                  <p >
                    <Image src={listsvg} alt='' />
                    Brand Supply Chain Management
                  </p>
                  <p >
                    <Image src={listsvg} alt='' />
                    Amazon Brand PPC
                  </p>
                  <p >
                    <Image src={listsvg} alt='' />
                    To Do with Amazon Listing optimization
                  </p>
                  <p >
                    <Image src={listsvg} alt='' />
                    End to end Amazon Account Management Service
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="home-listing33-imges12">
                <Image src={listingimg5} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>







{/* section ################ no ############# 8 */}
<JacktoMedia></JacktoMedia>



    </div>
  );
}

export default Home;
