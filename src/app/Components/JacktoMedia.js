import React from 'react'
import './Jacktomedia.css'
import iconsimg3 from '../Images/Group 1000008452.svg'
import iconsimg2 from '../Images/Group 1000008453.svg'
import iconsimg5 from '../Images/Group 1000008454.svg'
import iconsimg4 from '../Images/Group 1000008732.svg'
import iconsimg6 from '../Images/Group 1000008432.svg'
import iconsimg1 from '../Images/Group 1000008731.svg'

import workimg1 from '../Images/image 2154.png'
import workimg2 from '../Images/image 2157.png'

import workimg3 from '../Images/image 2158.png'
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link";




function JacktoMedia() {
    return (
        <div>
            <div className="container-fluid jack-media-div1">
                <div className="container">
                    <div>
                        <h1 className='jack-media-text1'>Why Choose Jack2Media?</h1>
                        <p className='jack-media-text2'>We enjoy adapting our Amazon branding strategies to offer every client the best <br className='d-md-block d-none'></br> solutions that are at the forefront of the industry.</p>
                        <div className='row jack-media-div2'>

                            {/* //card #### no #### 1 */}

                            <div className='col-lg-4'>
                                <div className='jack-media-img1'>
                                    <Image src={iconsimg1} alt="" />
                                </div>
                                <h1 className='jack-media-text3'>Amazon Partner Agency</h1>
                                <p className='jack-media-text4'>Certified Full-Service Amazon Seller
                                    Management Agency</p>
                            </div>

                            {/* //card #### no #### 2 */}

                            <div className='col-lg-4'>
                                <div className='jack-media-img1'>
                                    <Image src={iconsimg2} alt="" />
                                </div>
                                <h1 className='jack-media-text3'>Results Driven</h1>
                                <p className='jack-media-text4'>Top 100 Fastest growing Amazon
                                    Partner Agency</p>
                            </div>

                            {/* //card #### no #### 3 */}

                            <div className='col-lg-4'>
                                <div className='jack-media-img1'>
                                    <Image src={iconsimg3} alt="" />
                                </div>
                                <h1 className='jack-media-text3'>1500+Success Stories</h1>
                                <p className='jack-media-text4'>Helped 1500+ brands to succeed
                                    on and off Amazon</p>
                            </div>

                            {/* //card #### no #### 4*/}

                            <div className='col-lg-4'>
                                <div className='jack-media-img1'>
                                    <Image src={iconsimg4} alt="" />
                                </div>
                                <h1 className='jack-media-text3'>Extensive Experience </h1>
                                <p className='jack-media-text4'>Having 7+ year’s experience in
                                    Amazon listing optimization services</p>
                            </div>

                            {/* //card #### no #### 5 */}

                            <div className='col-lg-4'>
                                <div className='jack-media-img1'>
                                    <Image src={iconsimg5} alt="" />
                                </div>
                                <h1 className='jack-media-text3'>Conversion Optimization</h1>
                                <p className='jack-media-text4'>Average 100% increase in conversion
                                    rate using our Amazon listing
                                    optimization Services</p>
                            </div>

                            {/* //card #### no #### 36*/}

                            <div className='col-lg-4'>
                                <div className='jack-media-img1'>
                                    <Image src={iconsimg6} alt="" />
                                </div>
                                <h1 className='jack-media-text3'>Global Workforce</h1>
                                <p className='jack-media-text4'>A close-knit team, proud of our quality work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className='container-fluid jack-work-div1'>
                <div className='container'>
                    <div>
                        <h1 className='jack-work-text1'>Work with people <br></br> that give a Sh*t</h1>
                        <p className='jack-work-text2'>Let’s Create our next success store together</p>
                    </div>
                    <div className='row jack-work-div2'>
                        <div className='col-lg-4'>
                            <div>
                                <div className='jack-work-carddiv1'>
                                    <h1 className='jack-work-cardtext1'>39%</h1>
                                    <p className='jack-work-cardtext2'>Increase in Amazon Sales</p>
                                    <Image src={workimg1} alt="" />
                                    <div>
                                        <a href="">
                                            <div className='jack-work-cardbtn2'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                <path d="M22 2C22 0.895431 21.1046 2.60579e-08 20 8.68995e-07L2 4.47526e-07C0.89543 4.47526e-07 -2.00261e-07 0.895431 -2.00261e-07 2C-2.00261e-07 3.10457 0.89543 4 2 4L18 4L18 20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20L22 2ZM5.41421 19.4142L21.4142 3.41421L18.5858 0.585787L2.58579 16.5858L5.41421 19.4142Z" fill="white" />
                                            </svg></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-4'>
                            <div>
                                <div className='jack-work-carddiv1'>
                                    <h1 className='jack-work-cardtext1'>90%</h1>
                                    <p className='jack-work-cardtext2'>Increase in Amazon Sales</p>
                                    <Image src={workimg2} alt="" />
                                    <div>
                                        <a href="">
                                            <div className='jack-work-cardbtn2'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                <path d="M22 2C22 0.895431 21.1046 2.60579e-08 20 8.68995e-07L2 4.47526e-07C0.89543 4.47526e-07 -2.00261e-07 0.895431 -2.00261e-07 2C-2.00261e-07 3.10457 0.89543 4 2 4L18 4L18 20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20L22 2ZM5.41421 19.4142L21.4142 3.41421L18.5858 0.585787L2.58579 16.5858L5.41421 19.4142Z" fill="white" />
                                            </svg></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-4'>
                            <div>
                                <div className='jack-work-carddiv1'>
                                    <h1 className='jack-work-cardtext1'>55%</h1>
                                    <p className='jack-work-cardtext2'>Increase in Amazon Sales</p>
                                    <Image src={workimg3} alt="" />
                                    <div>
                                        <a href="">
                                            <div className='jack-work-cardbtn2'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                <path d="M22 2C22 0.895431 21.1046 2.60579e-08 20 8.68995e-07L2 4.47526e-07C0.89543 4.47526e-07 -2.00261e-07 0.895431 -2.00261e-07 2C-2.00261e-07 3.10457 0.89543 4 2 4L18 4L18 20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20L22 2ZM5.41421 19.4142L21.4142 3.41421L18.5858 0.585787L2.58579 16.5858L5.41421 19.4142Z" fill="white" />
                                            </svg></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <a>
                            <div className='work-showcase-btn1'>Show More Case Studies</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JacktoMedia
