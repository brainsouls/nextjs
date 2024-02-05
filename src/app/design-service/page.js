"use client"

import React, { useState } from "react";
import "../Components/Audit.css";
import '../Components/DesignServices.css'
import auditdesignicon1 from "../Images/Group 1000008446.png";
import auditdesignicon2 from "../Images/Group 1000008466.png";
import auditdesignicon3 from "../Images/Group 1000008746.png";
import Plans from "../Components/Plans";
import memberbenefitsicon1 from '../Images/unlimited tasks 1.png'
import memberbenefitsicon2 from '../Images/fast results 1.png'
import memberbenefitsicon3 from '../Images/fixed monthly subs 1.png'
import memberbenefitsicon4 from '../Images/excellent design quality 1.png'
import memberbenefitsicon5 from '../Images/flexible & scalable 1.png'
import memberbenefitsicon6 from '../Images/individual & 100% yours 1.png'
import { questions } from "../Components/Question.js";
import FAQs from "../Components/FAQs.js";

import slidepic1 from '../Images/image 2659 (1).png'
import slidepic2 from '../Images/image 2660 (1).png'
import slidepic3 from '../Images/fb8e4c5df95ec5b2c756cae2341b3446.png'
import slidepic4 from '../Images/image 2664.png'
import slidepic5 from '../Images/image 2665.png'
import slidepic6 from '../Images/image 2666.png'

import Marquee from "react-fast-marquee";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link";



function Audit() {
    const [faqs, setfaqs] = useState(questions);

    return (
        <div>
            <div className="container-fluid audit-banner-div1">
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
                            <h1 className="audit-banner-text1 text-center ">
                                <span className="audit-span1">Unlimited </span>
                                <span className="audit-span2">Design? </span>
                                <br className=""></br>
                                <span className="audit-span3">
                                    We have got<span className="audit-span4"> you covered</span>
                                </span>
                            </h1>
                            <p className="audit-banner-text2 text-center">
                                Design subscriptions for everyone. Pause or cancel anytime.
                            </p>
                            <div className="d-md-flex justify-content-center audit-banner-calldiv1">
                                <Link href="/">
                                    <div className="audit-banner-callbtn1">
                                        Book a Demo{" "}
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
                                        Our Portfolio{" "}
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

                            <div className="audit-banner-points-div1">
                                <p className="audit-banner-points-text1">
                                    <svg
                                        className="mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
                                        viewBox="0 0 19 19"
                                        fill="none"
                                    >
                                        <path
                                            d="M18.5897 2C18.5897 1.12201 17.878 0.410257 17 0.410256L2.69231 0.410257C1.81432 0.410257 1.10256 1.12201 1.10256 2C1.10256 2.87799 1.81432 3.58974 2.69231 3.58974H15.4103V16.3077C15.4103 17.1857 16.122 17.8974 17 17.8974C17.878 17.8974 18.5897 17.1857 18.5897 16.3077L18.5897 2ZM3.12412 18.1241L18.1241 3.12412L15.8759 0.875882L0.875882 15.8759L3.12412 18.1241Z"
                                            fill="#F69E26"
                                        />
                                    </svg>{" "}
                                    Unlimited tasks
                                </p>
                                <p className="audit-banner-points-text1">
                                    <svg
                                        className="mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
                                        viewBox="0 0 19 19"
                                        fill="none"
                                    >
                                        <path
                                            d="M18.5897 2C18.5897 1.12201 17.878 0.410257 17 0.410256L2.69231 0.410257C1.81432 0.410257 1.10256 1.12201 1.10256 2C1.10256 2.87799 1.81432 3.58974 2.69231 3.58974H15.4103V16.3077C15.4103 17.1857 16.122 17.8974 17 17.8974C17.878 17.8974 18.5897 17.1857 18.5897 16.3077L18.5897 2ZM3.12412 18.1241L18.1241 3.12412L15.8759 0.875882L0.875882 15.8759L3.12412 18.1241Z"
                                            fill="#F69E26"
                                        />
                                    </svg>
                                    Results in less than 48h
                                </p>
                                <p className="audit-banner-points-text1">
                                    <svg
                                        className="mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
                                        viewBox="0 0 19 19"
                                        fill="none"
                                    >
                                        <path
                                            d="M18.5897 2C18.5897 1.12201 17.878 0.410257 17 0.410256L2.69231 0.410257C1.81432 0.410257 1.10256 1.12201 1.10256 2C1.10256 2.87799 1.81432 3.58974 2.69231 3.58974H15.4103V16.3077C15.4103 17.1857 16.122 17.8974 17 17.8974C17.878 17.8974 18.5897 17.1857 18.5897 16.3077L18.5897 2ZM3.12412 18.1241L18.1241 3.12412L15.8759 0.875882L0.875882 15.8759L3.12412 18.1241Z"
                                            fill="#F69E26"
                                        />
                                    </svg>
                                    Cancel Anytime
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>










            <div className='container-fluid pl-0 pr-0 designaudit-slide-maindiv1'>
                <div className=''>

                    <Marquee>
                        <div className="design-slide-pic-div1">
                            <Image src={slidepic1} />
                        </div>

                        <div className="design-slide-pic-div1">
                            <Image src={slidepic2} />
                        </div>

                        <div className="design-slide-pic-div1">
                            <Image src={slidepic6} />
                        </div>

                        <div className="design-slide-pic-div1">
                            <Image src={slidepic5} />
                        </div>

                    </Marquee>

                </div>
            </div>



            <div className='container-fluid pl-0 pr-0 designaudit-slide2-maindiv1 '>
                <div className=''>

                    <Marquee>
                        <div className="design-slide2-pic-div1">
                            <Image src={slidepic4} />
                        </div>

                        <div className="design-slide2-pic-div1">
                            <Image src={slidepic2} />
                        </div>
                        <div className="design-slide2-pic-div1">
                            <Image src={slidepic5} />
                        </div>

                        <div className="design-slide2-pic-div1">
                            <Image src={slidepic6} />
                        </div>

                    </Marquee>

                </div>
            </div>







            <div className="container-fluid audit-design-div1">
                <div className="container">
                    <div>
                        <h1 className="audit-design-text1">
                            We did not invent anything new, just designed it in a different
                            way.
                        </h1>
                        <p className="audit-design-text2">
                            Say goodbye to traditional design. A fresh, <br className='d-md-block d-none'></br>
                            personalized approach is here.
                        </p>

                        <div className="row audit-design-icondiv11">
                            <div className="col-lg-4">
                                <div className="audit-design-icondiv3">
                                    <Image src={auditdesignicon1} alt="" />
                                </div>
                                <p className="audit-design-text3">
                                    Subscribe to a plan and make as many design requests as you
                                    want.
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <div className="audit-design-icondiv3">
                                    <Image src={auditdesignicon2} alt="" />
                                </div>
                                <p className="audit-design-text3">
                                    Typically receive your design within a few business days.
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <div className="audit-design-icondiv3">
                                    <Image src={auditdesignicon3} alt="" />
                                </div>
                                <p className="audit-design-text3">
                                    We’ll revise the designs until you are completely satisfied
                                    with them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container-fluid audit-apps-div1">
                <div className="audit-apps-svg1"></div>
                <div className="audit-apps-svg2"></div>
                <div className="container">
                    <div>
                        <h1 className="audit-apps-text1">Websites, Apps, Branding & more.</h1>
                        <p className="audit-apps-text2">We offer a wide range of design skills that <br className='d-md-block d-none'></br>
                            are perfect for your business.</p>

                        <div>
                            <div className="row audit-apps-points-maindiv1">
                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Websites</h1>
                                    </div>
                                </div>

                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Brochures</h1>
                                    </div>
                                </div>

                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Business cards</h1>
                                    </div>
                                </div>


                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Mobile app design</h1>
                                    </div>
                                </div>

                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Signage design</h1>
                                    </div>
                                </div>

                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Packaging</h1>
                                    </div>
                                </div>

                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Logo design</h1>
                                    </div>
                                </div>


                                <div className="col-md-4 col-6 d-md-block d-none">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Social media design</h1>
                                    </div>
                                </div>


                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Blog graphics</h1>
                                    </div>
                                </div>


                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Branding</h1>
                                    </div>
                                </div>


                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Billboards</h1>
                                    </div>
                                </div>


                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Digital ads</h1>
                                    </div>
                                </div>


                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Stationery</h1>
                                    </div>
                                </div>




                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Slide decks</h1>
                                    </div>
                                </div>


                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Icons</h1>
                                    </div>
                                </div>


                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Pitch decks</h1>
                                    </div>
                                </div>


                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Direct mail</h1>
                                    </div>
                                </div>



                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Resumes</h1>
                                    </div>
                                </div>


                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Infographics</h1>
                                    </div>
                                </div>


                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Banner</h1>
                                    </div>
                                </div>


                                <div className="col-md-4 col-6">
                                    <div className="audit-apps-points-div1">
                                        <h1 className="audit-apps-points-text1">Email graphics</h1>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <Plans></Plans>


            <div className='container-fluid audit-member-div1'>
                <div className='container'>
                    <div>
                        <h1 className="audit-member-text1">Membership benefits</h1>
                        <p className="audit-member-text2">Perks so good you will never need to go <br className='d-md-block d-none'></br> anywhere else for your design. Seriously.</p>
                        <div className='row audit-member-carddiv1'>
                            <div className="col-lg-6 ">
                                <div className="audit-member-carddiv2">
                                    <div>
                                        <div className="audit-member-cardimg1">
                                            <Image src={memberbenefitsicon1} alt="" />
                                        </div>
                                        <h1 className="audit-member-cardtext1">Unlimited Tasks</h1>
                                        <p className="audit-member-cardtext2">Make as many requests as you need. All tasks will be done one after the other and revisions are included!</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-6 ">
                                <div className="audit-member-carddiv2">
                                    <div>
                                        <div className="audit-member-cardimg1">
                                            <Image src={memberbenefitsicon2} alt="" />
                                        </div>
                                        <h1 className="audit-member-cardtext1">Fast Results</h1>
                                        <p className="audit-member-cardtext2">Receive your first design drafts within 48 hours. You can provide feedback or download them directly.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-6 ">
                                <div className="audit-member-carddiv2">
                                    <div>
                                        <div className="audit-member-cardimg1">
                                            <Image src={memberbenefitsicon3} alt="" />
                                        </div>
                                        <h1 className="audit-member-cardtext1">Fixed Monthly Subscription</h1>
                                        <p className="audit-member-cardtext2">No more surprises with high design fees. Instead, you only pay your fixed monthly price.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 ">
                                <div className="audit-member-carddiv2">
                                    <div>
                                        <div className="audit-member-cardimg1">
                                            <Image src={memberbenefitsicon4} alt="" />
                                        </div>
                                        <h1 className="audit-member-cardtext1">Excellent Design Quality</h1>
                                        <p className="audit-member-cardtext2">By hiring only the best designers, we make sure to always deliver stunning designs to wow your future clients.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 ">
                                <div className="audit-member-carddiv2">
                                    <div>
                                        <div className="audit-member-cardimg2">
                                            <Image src={memberbenefitsicon5} alt="" />
                                        </div>
                                        <h1 className="audit-member-cardtext1">Flexible & Scalable</h1>
                                        <p className="audit-member-cardtext2">Pause, cancel, or upgrade your subscription monthly as needed.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 ">
                                <div className="audit-member-carddiv2">
                                    <div>
                                        <div className="audit-member-cardimg2">
                                            <Image src={memberbenefitsicon4} alt="" />
                                        </div>
                                        <h1 className="audit-member-cardtext1">Individual & 100% Yours</h1>
                                        <p className="audit-member-cardtext2">Every design is created individually for you and you will receive all raw data files.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-md-5 pt-3">
                            <div className="d-md-flex justify-content-center audit-banner-calldiv1">
                                <Link href="/">
                                    <div className="audit-banner-callbtn1">
                                        Book a Demo{" "}
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
                                        Our Portfolio{" "}
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
            </div>





            {/* section ###### 6*/}

            <div className="container-fluid home-faqs-div1">
                <div className="container">
                    <div>
                        <h1 className="home-faqs-text1">
                            Frequently
                            <br className='d-md-none d-block' />
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
                </div>

            </div>
        </div>
    );
}

export default Audit;
