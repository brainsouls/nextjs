"use client"

import React, { useState } from 'react'
import '../Components/DesignServices.css'
import '../Components/Audit.css'
import '../Components/Plans.css'
import reviewclientpic1 from '../Images/Mosab Hourani Video Testimonial (2).png'
import reviewclientpic2 from '../Images/20231109_Thumbnail_HMG_EL_01 (2).png'
import reviewclientpic3 from '../Images/Falah Al-Sharari Video Testimonial (2).png'
import playbtn from '../Images/Group 1873.png'
import cropic1 from '../Images/Group 1000008746 (1).png'
import cropic2 from '../Images/Group 1000008746 (2).png'
import cropic4 from '../Images/Group 1000008747.png'
import cropic5 from '../Images/Group 1000008470 (1).png'
import cropic3 from '../Images/Group 1000008430 (1).png'
import cropic6 from '../Images/Group 1000008437 (2).png'
import personpic from '../Images/Group 1000008748.png'
import mappic from '../Images/Group 1000008749.png'
import mappic1 from '../Images/Group 1000008750.png'
import mappic2 from '../Images/Group 1000008751.png'
import { questions } from "../Components/Question.js";
import FAQs from "../Components/FAQs.js";
import tryfreeauditpic from "../Images/image 2671 (2).png";
import Marquee from "react-fast-marquee";
import slidepic1 from '../Images/5 → Omega_Watches____Oddit_Essential_750x.png.png'
import slidepic2 from '../Images/5 → Perfy____Oddit_Essential_750x.png.png'
import slidepic3 from '../Images/5 → Tosi____Oddit_Custom_750x.png.png'


import slidepic5 from '../Images/image 2667.png'
import slidepic6 from '../Images/image 2668.png'


import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link";






function DesignServices() {
    const [faqs, setfaqs] = useState(questions);

    return (
        <div>
            <div className="container-fluid designs-banner-div1 pl-0 pr-0">
                <div className="audit-banner-svg1"></div>
                <div className="audit-banner-svg2"></div>
                <div className="container">
                    <div className="">
                        <div className="d-flex justify-content-center align-items-center audit-brand-div1 ">
                            <p className="audit-brand-text1 ">Hundreds of Brands Served</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="62"
                                height="12"
                                viewBox="0 0 62 12"
                                fill="none"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M56.2018 9.48233L53.089 11.3943C52.7145 11.625 52.4917 11.4701 52.5928 11.0443L53.4413 7.46532L50.6706 5.07777C50.3372 4.79098 50.4146 4.53027 50.8602 4.49313L54.496 4.20081L55.9008 0.803579C56.0667 0.400651 56.3353 0.399071 56.5028 0.803579L57.9091 4.20081L61.5449 4.49313C61.981 4.52948 62.0711 4.78545 61.7322 5.07777L58.9614 7.46374L59.8107 11.0443C59.9111 11.4677 59.6946 11.6289 59.3146 11.3951L56.2018 9.48154V9.48233ZM43.5609 9.48233L40.4481 11.3943C40.0736 11.625 39.8508 11.4701 39.9519 11.0443L40.8005 7.46532L38.0297 5.07777C37.6963 4.79098 37.7738 4.53027 38.2193 4.49313L41.8552 4.20081L43.2599 0.803579C43.4258 0.400651 43.6944 0.399071 43.8619 0.803579L45.2682 4.20081L48.904 4.49313C49.3402 4.52948 49.4302 4.78545 49.0913 5.07777L46.3206 7.46374L47.1699 11.0443C47.2702 11.4677 47.0537 11.6289 46.6737 11.3951L43.5609 9.48154V9.48233ZM31.0204 9.48233L27.9076 11.3943C27.5323 11.625 27.3103 11.4701 27.4098 11.0443L28.2599 7.46532L25.4884 5.07777C25.155 4.79098 25.2324 4.53027 25.678 4.49313L29.3139 4.20081L30.7186 0.803579C30.8845 0.400651 31.1531 0.399071 31.3206 0.803579L32.7253 4.20081L36.3619 4.49313C36.7996 4.52948 36.8889 4.78545 36.5515 5.07777L33.78 7.46374L34.6293 11.0443C34.7297 11.4677 34.5132 11.6289 34.1332 11.3951L31.0204 9.48154V9.48233ZM18.3424 9.48233L15.2295 11.3943C14.8543 11.625 14.6315 11.4701 14.7318 11.0443L15.5819 7.46532L12.8112 5.07777C12.4778 4.79098 12.5552 4.53027 12.9992 4.49313L16.6358 4.20081L18.0421 0.803579C18.2081 0.400651 18.4767 0.399071 18.6426 0.803579L20.0489 4.20081L23.6847 4.49313C24.1224 4.52948 24.2117 4.78545 23.8743 5.07777L21.1028 7.46374L21.9513 11.0443C22.0517 11.4677 21.836 11.6289 21.4552 11.3951L18.3424 9.48154V9.48233ZM5.73862 9.48233L2.62581 11.3943C2.25053 11.625 2.02853 11.4701 2.12807 11.0443L2.97817 7.46532L0.205871 5.07698C-0.127532 4.79019 -0.0501063 4.52948 0.395484 4.49234L4.03132 4.20002L5.43603 0.802789C5.60194 0.399861 5.87056 0.398281 6.03805 0.802789L7.44277 4.20002L11.0794 4.49234C11.5171 4.52869 11.6064 4.78466 11.269 5.07698L8.49749 7.46295L9.3468 11.0435C9.44714 11.4669 9.23066 11.6281 8.85065 11.3943L5.73783 9.48075L5.73862 9.48233Z"
                                    fill="white"
                                />
                            </svg>
                            <p className="audit-brand-text2 ">4.9</p>
                        </div>
                        <div>
                            <h1 className="audit-banner-text1 text-center for-mobile-responsive-audit-banner">
                                <span className="audit-span4">A Fresh 
                                </span>
                            
                                <span className="audit-span2"> Perspective </span>
                                <br className=""></br>
                                <span className="audit-span3">
                                    on Your<span className="audit-span1"> E-Commerce Store. </span>
                                </span>
                            </h1>
                            <p className="audit-banner-text2 text-center">
                                We provides robust, conversion-focused UX reports and the design to go with it.
                            </p>
                            <div className="d-md-flex  justify-content-center audit-banner-calldiv1">
                                <Link href="/">
                                    <div className="audit-banner-callbtn1">
                                        Book a Call{" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="62"
                                            height="62"
                                            viewBox="0 0 62 62"
                                            fill="none"
                                        >
                                            <circle cx="31" cy="31" r="31" fill="#030F17" />
                                            <path
                                                d="M41.5905 22.0002C41.5906 21.1222 40.8788 20.4105 40.0008 20.4104L25.6932 20.41C24.8152 20.41 24.1034 21.1218 24.1034 21.9997C24.1033 22.8777 24.8151 23.5895 25.6931 23.5895L38.411 23.5899L38.4107 36.3078C38.4106 37.1858 39.1224 37.8976 40.0004 37.8976C40.8784 37.8976 41.5901 37.1859 41.5902 36.3079L41.5905 22.0002ZM23.1241 41.1241L41.1249 23.1243L38.8767 20.876L20.8759 38.8759L23.1241 41.1241Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </Link>

                                <Link href="/">
                                    <div className="audit-banner-callbtn2">
                                        Try Free Audit{" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="62"
                                            height="62"
                                            viewBox="0 0 62 62"
                                            fill="none"
                                        >
                                            <circle cx="31" cy="31" r="31" fill="#F7A12B" />
                                            <path
                                                d="M41.5905 22.0002C41.5906 21.1222 40.8788 20.4105 40.0008 20.4104L25.6932 20.41C24.8152 20.41 24.1034 21.1218 24.1034 21.9997C24.1033 22.8777 24.8151 23.5895 25.6931 23.5895L38.411 23.5899L38.4107 36.3078C38.4106 37.1858 39.1224 37.8976 40.0004 37.8976C40.8784 37.8976 41.5901 37.1859 41.5902 36.3079L41.5905 22.0002ZM23.1241 41.1241L41.1249 23.1243L38.8767 20.876L20.8759 38.8759L23.1241 41.1241Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>

                <div className='design-slide-maindiv1'>
                    <div className=''>

                        <Marquee>
                            <div className="design-slide-pic-div1">
                                <Image src={slidepic1} alt="" />
                            </div>

                            <div className="design-slide-pic-div1">
                                <Image src={slidepic2} alt="" />
                            </div>

                            <div className="design-slide-pic-div1">
                                <Image src={slidepic3} alt="" />
                            </div>

                        </Marquee>

                    </div>
                </div>



                <div className='design-slide2-maindiv1'>
                    <div className=''>

                        <Marquee>
                            <div className="design-slide2-pic-div1">
                                <Image src={slidepic3} alt="" />
                            </div>

                            <div className="design-slide2-pic-div1">
                                <Image src={slidepic5} alt="" />
                            </div>

                            <div className="design-slide2-pic-div1">
                                <Image src={slidepic6} alt="" />
                            </div>

                        </Marquee>

                    </div>
                </div>

            </div>







            <div className='container-fluid video-reviews-div1'>
                <div className='container'>
                    <div className=''>
                        <h1 className='video-reviews-text1'>Video Testimonials</h1>
                        <p className='video-reviews-text2'>See what our customers have to say about us</p>
                        <div className='row video-review-card-maindiv'>
                            <div className='col-lg-4'>
                                <div className='video-review-card-div1'>
                                    <div>
                                        <div className='video-review-card-picdiv1'>
                                            <Image src={reviewclientpic1} className='img-fluid' alt="" />
                                            <Image src={playbtn} className='play-btn1' alt="" />
                                        </div>
                                        <p className='video-review-card-text1'>When it comes to specialty & innovation, Elevatus is coming up with their unique and professional solutions.</p>
                                        <div>
                                            <h1 className='video-review-card-divtext2'>Mosab Hourani</h1>
                                            <p className='video-review-card-divtext3'>Recruitment Manager</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>


                            <div className='col-lg-4'>
                                <div className='video-review-card-div1'>
                                    <div>
                                        <div className='video-review-card-picdiv1'>
                                            <Image src={reviewclientpic3} className='img-fluid' alt="" />
                                            <Image src={playbtn} className='play-btn1' alt="" />

                                        </div>
                                        <p className='video-review-card-text1'>When it comes to specialty & innovation, Elevatus is coming up with their unique and professional solutions.</p>
                                        <div>
                                            <h1 className='video-review-card-divtext2'>Falah Al-Sharari</h1>
                                            <p className='video-review-card-divtext3'>Human Resources Director</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='col-lg-4'>
                                <div className='video-review-card-div1'>
                                    <div>
                                        <div className='video-review-card-picdiv1'>
                                            
                                            <Image src={reviewclientpic2} className='img-fluid' alt="" />
                                            <Image src={playbtn} className='play-btn1' alt="" />

                                        </div>
                                        <p className='video-review-card-text1'>When it comes to specialty & innovation, Elevatus is coming up with their unique and professional solutions.</p>
                                        <div>
                                            <h1 className='video-review-card-divtext2'>Alex</h1>
                                            <p className='video-review-card-divtext3'>Recruiter at JKB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container-fluid home-cro-div1" id="cro">
                <div className="container">
                    <div>
                        <p className="home-cro-text1">Brand-First CRO™ REPORTS</p>
                        <h1 className="home-cro-text2">What’s in CRO Report?</h1>

                        <div className="row home-cro-carddiv1">
                            <div className="col-lg-4 col-12">
                                <div>
                                    <div className="home-cro-pic1">
                                        <Image src={cropic1} alt="" />
                                    </div>

                                    <h1 className="home-cro-cardtext1">
                                        Fully designed before & after mockups built for your brand.
                                    </h1>
                                </div>
                            </div>

                            <div className="col-lg-4 col-12">
                                <div>
                                    <div className="home-cro-pic1">
                                        <Image src={cropic2} alt="" />
                                    </div>
                                    <h1 className="home-cro-cardtext1">
                                        Section by section analysis for easy execution.
                                    </h1>
                                </div>
                            </div>

                            <div className="col-lg-4 col-12">
                                <div>
                                    <div className="home-cro-pic1">
                                        <Image src={cropic3} alt="" />
                                    </div>
                                    <h1 className="home-cro-cardtext1">
                                        Improved messaging, call-to- actions, and page flows.
                                    </h1>
                                </div>
                            </div>

                            <div className="col-lg-4 col-12">
                                <div>
                                    <div className="home-cro-pic1">
                                        <Image src={cropic4} alt="" />
                                    </div>
                                    <h1 className="home-cro-cardtext1">
                                        Access to working design files (Figma).
                                    </h1>
                                </div>
                            </div>

                            <div className="col-lg-4 col-12">
                                <div>
                                    <div className="home-cro-pic1">
                                        <Image src={cropic5} alt="" />
                                    </div>
                                    <h1 className="home-cro-cardtext1">
                                        Recommendations proven to increase your LTV, AOV, and CVR.
                                    </h1>
                                </div>
                            </div>

                            <div className="col-lg-4 col-12">
                                <div>
                                    <div className="home-cro-pic1">
                                        <Image src={cropic6} alt="" />
                                    </div>
                                    <h1 className="home-cro-cardtext1">
                                        Design of new sections needed on site to increase
                                        conversion.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>















            <div className="container-fluid home-pricing-div1" id="pricingplan">
                <div className="container">
                    <div>
                        <p className="home-pricing-text1">Pricing</p>
                        <h1 className="home-pricing-text2">
                            Choose <br className='d-md-none d-block' /> Your Plan
                        </h1>
                        <div className="row pricing-plan-carddiv11">

                            {/* card ###### 1 */}

                            <div className="col-lg-4">
                                <div className="home-pricing-carddiv1">
                                    <h1 className="home-pricing-cardtext1">Free</h1>
                                    <p className="home-pricing-cardtext2">
                                        Our team analyzes the submitted URL provides a redesign of 1 section from your site.
                                    </p>
                                    <div>
                                        <Link href="/">
                                            <div className="home-pricing-cardbtn1">Free</div>
                                        </Link>
                                    </div>
                                    <p className="home-pricing-cardtext3">
                                        <svg
                                            className="mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                fill="#000"
                                            />
                                            <path
                                                d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                stroke="#FFAB3E"
                                                stroke-width="1.67367"
                                            />
                                        </svg>{" "}
                                        Our team analyzes the submitted URL provides a redesign of 1
                                        section from your site, along with the rationale behind the
                                        change.
                                    </p>
                                    <p className="home-pricing-cardtext3">
                                        <svg
                                            className="mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                fill="#000"
                                            />
                                            <path
                                                d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                stroke="#FFAB3E"
                                                stroke-width="1.67367"
                                            />
                                        </svg>{" "}
                                        PDF showcasing the before and after design of your section
                                        and detailed recommendations
                                    </p>
                                    <p className="home-pricing-cardtext3">
                                        <svg
                                            className="mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                fill="#000"
                                            />
                                            <path
                                                d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                stroke="#FFAB3E"
                                                stroke-width="1.67367"
                                            />
                                        </svg>
                                        Yes, its completely free — No Credit Card required
                                    </p>
                                    <div className="home-pricing-cardbtndiv2">
                                        <Link href="/">
                                            <div className="home-pricing-cardbtn2">Book a Call</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            {/* card ###### 2 */}

                            <div className="col-lg-4">
                                <div className="home-pricing-carddiv112">
                                    <h1 className="home-pricing-cardtext112">$999</h1>
                                    <p className="home-pricing-cardtext212">
                                        We go through your site to identify and redesign 10 sections critical to conversion.
                                    </p>
                                    <div>
                                        <a href="">
                                            <div className="home-pricing-cardbtn1">10 Sections</div>
                                        </a>
                                    </div>
                                    <p className="home-pricing-cardtext312">
                                        <svg
                                            className="mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                fill="white"
                                            />
                                            <path
                                                d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                stroke="black"
                                                stroke-width="1.67367"
                                            />
                                        </svg>
                                        Full analysis and redesign of the 10 areas on your site most
                                        needed to increase conversion, LTV & AOV.
                                    </p>
                                    <p className="home-pricing-cardtext312">
                                        <svg
                                            className="mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                fill="white"
                                            />
                                            <path
                                                d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                stroke="black"
                                                stroke-width="1.67367"
                                            />
                                        </svg>
                                        New design recommendations for sections missing on existing
                                        site.
                                    </p>
                                    <p className="home-pricing-cardtext312">
                                        <svg
                                            className="mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                fill="white"
                                            />
                                            <path
                                                d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                stroke="black"
                                                stroke-width="1.67367"
                                            />
                                        </svg>
                                        Includes PDF Report with before/after design & rationale,
                                        and design file access (Figma)
                                    </p>
                                    <div className="home-pricing-cardbtndiv2">
                                        <Link href="/">
                                            <div className="home-pricing-cardbtn212">Book a Call</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>



                            {/* card ###### 3 */}

                            <div className="col-lg-4 ">
                                <div className="home-pricing-carddiv1">
                                    <h1 className="home-pricing-cardtext1">$1499</h1>
                                    <p className="home-pricing-cardtext2">
                                        We audit the entire customer journey from navigation to cart.
                                    </p>
                                    <div>
                                        <a href="">
                                            <div className="home-pricing-cardbtn1">Full Audit</div>
                                        </a>
                                    </div>
                                    <p className="home-pricing-cardtext3">
                                        <svg
                                            className="mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                fill="#000"
                                            />
                                            <path
                                                d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                stroke="#FFAB3E"
                                                stroke-width="1.67367"
                                            />
                                        </svg>{" "}
                                        Full-page analysis and redesign for conversion optimization,
                                        brand-trust, and a clearer customer journey.
                                    </p>
                                    <p className="home-pricing-cardtext3">
                                        <svg
                                            className="mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                fill="#000"
                                            />
                                            <path
                                                d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                stroke="#FFAB3E"
                                                stroke-width="1.67367"
                                            />
                                        </svg>{" "}
                                        PDF showcasing the before and after design of your section
                                        and detailed recommendations
                                    </p>
                                    <p className="home-pricing-cardtext3">
                                        <svg
                                            className="mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                fill="#000"
                                            />
                                            <path
                                                d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                stroke="#FFAB3E"
                                                stroke-width="1.67367"
                                            />
                                        </svg>
                                        Includes full redesign and analysis of navigation and cart
                                        experience
                                    </p>

                                    <p className="home-pricing-cardtext3">
                                        <svg
                                            className="mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M8.98886 0.276881C9.34862 -0.0922942 9.94193 -0.0922934 10.3017 0.276882L11.3753 1.37863C11.6097 1.61922 11.957 1.71226 12.2804 1.62113L13.761 1.2038C14.2571 1.06396 14.771 1.36063 14.8979 1.86022L15.2768 3.35116C15.3596 3.67674 15.6138 3.93096 15.9394 4.01371L17.4303 4.39261C17.9299 4.51957 18.2266 5.03341 18.0868 5.52955L17.6694 7.01019C17.5783 7.33353 17.6713 7.68081 17.9119 7.91525L19.0136 8.98886C19.3828 9.34862 19.3828 9.94193 19.0136 10.3017L17.9119 11.3753C17.6713 11.6097 17.5783 11.957 17.6694 12.2804L18.0868 13.761C18.2266 14.2571 17.9299 14.771 17.4303 14.8979L15.9394 15.2768C15.6138 15.3596 15.3596 15.6138 15.2768 15.9394L14.8979 17.4303C14.771 17.9299 14.2571 18.2266 13.761 18.0868L12.2804 17.6694C11.957 17.5783 11.6097 17.6713 11.3753 17.9119L10.3017 19.0136C9.94193 19.3828 9.34862 19.3828 8.98886 19.0136L7.91525 17.9119C7.68081 17.6713 7.33352 17.5783 7.01019 17.6694L5.52955 18.0868C5.03341 18.2266 4.51957 17.9299 4.39261 17.4303L4.01371 15.9394C3.93096 15.6138 3.67674 15.3596 3.35115 15.2768L1.86022 14.8979C1.36063 14.771 1.06396 14.2571 1.2038 13.761L1.62113 12.2804C1.71226 11.957 1.61922 11.6097 1.37863 11.3753L0.276881 10.3017C-0.0922942 9.94193 -0.0922934 9.34862 0.276882 8.98886L1.37863 7.91525C1.61922 7.68081 1.71226 7.33352 1.62113 7.01019L1.2038 5.52955C1.06396 5.03341 1.36063 4.51957 1.86022 4.39261L3.35116 4.01371C3.67674 3.93096 3.93096 3.67674 4.01371 3.35115L4.39261 1.86022C4.51957 1.36063 5.03341 1.06396 5.52955 1.2038L7.01019 1.62113C7.33353 1.71226 7.68081 1.61922 7.91525 1.37863L8.98886 0.276881Z"
                                                fill="#000"
                                            />
                                            <path
                                                d="M5.74219 9.28826L8.33037 11.8765L13.3514 6.85547"
                                                stroke="#FFAB3E"
                                                stroke-width="1.67367"
                                            />
                                        </svg>
                                        Includes PDF Report with before/after design & rationale,
                                        and design file access (Figma)
                                    </p>
                                    <div >
                                        <Link href="/">
                                            <div className="home-pricing-cardbtn2">Book a Call</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>






                        <div className="row add-web-div1">
                            <div className="col-lg-4">
                                <div className=" add-web-div2">
                                    <div>
                                        <p className="add-web-text1">Add on</p>
                                        <h1 className="add-web-text2"> Web Development</h1>
                                        <h1 className="add-web-text3">$1499/<span>m</span></h1>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-8 ">
                                <div className='add-web-div3'>
                                    <div>
                                        <div className='row align-items-center'>
                                            <div className="col-lg-8 col-7">
                                                <p className="add-web-text4">Find out more about Jack2Media <br className='d-md-block d-none' ></br> and how we can assist you.</p>
                                                <a href=""><h1 className="add-web-text5">Book a Call Now</h1></a>
                                            </div>
                                            <div className="col-lg-4 col-5 d-flex align-items-end  add-web-div-img212">
                                                <Image src={personpic} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>












            <div className='container-fluid audit-member-div1'>
                <div className='container'>
                    <div>
                        <h1 className="audit-member-text1">Report Process</h1>
                        <p className="audit-member-text2">How Does it Works?</p>
                        <div className='row audit-member-carddiv1'>
                            <div className="col-lg-6 ">
                                <div className="audit-member-carddiv2">
                                    <div>
                                        <div className="audit-member-cardtextnum1">
                                            <h1>1</h1>
                                        </div>
                                        <h1 className="audit-member-cardtext1">Build Your Report</h1>
                                        <p className="audit-member-cardtext2">Pick your pages or sections, and which
                                            breakpoints you’d like us to focus on.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-6 ">
                                <div className="audit-member-carddiv2">
                                    <div>
                                        <div className="audit-member-cardtextnum1">
                                            <h1>2</h1>
                                        </div>
                                        <h1 className="audit-member-cardtext1">Complete Onboarding</h1>
                                        <p className="audit-member-cardtext2">Enter your URLs & answer a few quick
                                            questions so that our team can get started.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-6 ">
                                <div className="audit-member-carddiv2">
                                    <div>
                                        <div className="audit-member-cardtextnum1">
                                            <h1>3</h1>
                                        </div>
                                        <h1 className="audit-member-cardtext1">Analysis & Redesign</h1>
                                        <p className="audit-member-cardtext2">We analyze your site, redesign each section, and add any elements that are missing.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 ">
                                <div className="audit-member-carddiv2">
                                    <div>
                                        <div className="audit-member-cardtextnum1">
                                            <h1>4</h1>
                                        </div>
                                        <h1 className="audit-member-cardtext1">Get Your Report</h1>
                                        <p className="audit-member-cardtext2">Our team sends over the report and full
                                            Figma design files for your review.</p>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>

                </div>
            </div>













            <div className="container-fluid home-user-div1">
                <div className="container">
                    <div className="row home-user-rowdiv1">
                        <div className="col-lg-6 col-12 d-flex align-items-center">
                            <div>
                                <div>
                                    <a href="">
                                        <div className="home-user-text1">User Experience</div>
                                    </a>
                                </div>
                                <h1 className="home-user-text2">
                                    Develop a better customer journey.
                                </h1>
                                <ul className="home-user-ultext">
                                    <li>Section by section analysis</li>
                                    <li>Recommendations categorized by test or execute</li>
                                    <li>Remove typical frustration points</li>
                                    <li>Properly guide users in a clear, natural way</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div>
                                <Image src={mappic} alt="" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 d-md-block d-none">
                            <div>
                                <Image src={mappic1} alt="" className="img-fluid " />
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 d-flex align-items-center home-users-for-mobile-reponsive-div1">
                            <div>
                                <div>
                                    <a href="">
                                        <div className="home-user-text1">Lasting Brand Loyalty</div>
                                    </a>
                                </div>
                                <h1 className="home-user-text2">Dial in the details.</h1>
                                <ul className="home-user-ultext">
                                    <li>Updated messaging, call-to-actions, and site flow</li>
                                    <li>Build a consistent brand experience across your site</li>
                                    <li>
                                        Proven tactics your team can carry forward when launching
                                        new pages and products
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 d-md-none d-block">
                            <div>
                                <Image src={mappic1} alt="" className="img-fluid " />
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 d-flex align-items-center home-users-for-mobile-reponsive-div1">
                            <div>
                                <div>
                                    <a href="">
                                        <div className="home-user-text1">
                                            CONVERSION OPTIMIZATION
                                        </div>
                                    </a>
                                </div>
                                <h1 className="home-user-text2">
                                    Get better results from traffic.
                                </h1>
                                <ul className="home-user-ultext">
                                    <li>
                                        Long-lasting, improved conversion rate optimization and
                                        brand loyalty
                                    </li>
                                    <li>Tactics and strategies to increase AOV and LTV</li>
                                    <li>
                                        Additional features and interactions to strengthen brand
                                        trust
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div>
                                <Image src={mappic2} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* section ###### 6*/}

            <div className="container-fluid home-faqs-div1">
                <div className="container">
                    <div>
                        <h1 className="home-faqs-text1">
                            Frequently
                            Asked Questions
                        </h1>
                        <div className="home-faq-div2">
                            <div>
                                {faqs.map((faq) => {
                                    return (
                                        <FAQs
                                            question={faq.question}
                                            answer={faq.answer}
                                            answer2={faq.answer2}
                                            key={faq.id}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>










                    <div className="container home-tryaudit-div1 position-relative d-md-block d-none">
                        <div className="row">
                            <div className="col-6 d-flex align-items-center home-tryaudit-textdiv2">
                                <div>
                                    <p className="home-tryaudit-text1">Free Trial</p>
                                    <h1 className="home-tryaudit-text2">
                                        Try Audit <span>Free</span>
                                    </h1>
                                </div>
                            </div>
                            <div className="col-6 position-relative d-flex justify-content-end p-0">
                                <div>
                                    <Image
                                        src={tryfreeauditpic}
                                        className="try-free-audit-pic1"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default DesignServices
