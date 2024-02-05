import React from 'react'
import '../Components/PPC.css'
import '../Components/EBC.css'
import '../Components/Account.css'
import bannerimg1 from '../Images/Group 10000087439.png'
import creativeamazonicon2 from '../Images/Group 100000874500.png'
import creativeamazonicon1 from '../Images/Group 1000008446.png'
import creativeamazonicon3 from '../Images/Group 1000008746.png'
import ebclistingimg1 from '../Images/Group 10000087435.png'
import ebclistingimg2 from '../Images/Group 100000874490.png'
import ebclistingimg3 from '../Images/Group 100000874508.png'
import JacktoMedia from '../Components/JacktoMedia'


import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link";


function EBC() {
    return (
        <div>

            <div className="container-fluid ppc-banner-div1">
                <div className="container h-100">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div>

                                <h1 className="account-banner-text1">EBC / A+ </h1>
                                <h1 className="account-banner-text2">Store Creation </h1>
                                <p className="account-banner-text3">
                                    Increase amazon sales with better listing graphics
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

            <div className="container-fluid pl-0 pr-0">
                <div className="ebc-amazon-div2">
                    <div className="container ">

                        <h1 className="ebc-amazon-text1" id="wonder-text1">
                            Why is good Amazon Creative so Important
                        </h1>


                        <div className="ebc-image-sec-cardsdiv2">
                            <div className="row">
                                <div className="col-md-4 col-12">
                                    <div>
                                        <div className='ebc-image-listing-img1'>
                                            <Image src={creativeamazonicon1} alt="" />
                                        </div>
                                        <h1 className="ebc-images-listing-text1">Enhanced Visibility</h1>
                                        <p className="ebc-images-listing-text2">When it comes to online shopping - looks are important.</p>
                                    </div>
                                </div>

                                <div className="col-md-4 col-12">
                                    <div>
                                        <div className='ebc-image-listing-img1'>
                                            <Image src={creativeamazonicon2} alt="" />
                                        </div>
                                        <h1 className="ebc-images-listing-text1">Brand Impact</h1>
                                        <p className="ebc-images-listing-text2">Customers are visually stimulated, and so are we!</p>
                                    </div>
                                </div>


                                <div className="col-md-4 col-12">
                                    <div>
                                        <div className='ebc-image-listing-img1'>
                                            <Image src={creativeamazonicon3} alt="" />
                                        </div>
                                        <h1 className="ebc-images-listing-text1">Conversion Power</h1>
                                        <p className="ebc-images-listing-text2">Images account for around 75%
                                            of the purchase decision.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid ebc-amazon-home-secdiv3">
                <div className="container">

                    <div className='row'>
                        <div className="col-lg-6 col-12 d-flex align-items-center">
                            <div>
                                <h1 className='ebc-listing-img-text12'>Listing Image</h1>
                                <p className='ebc-listing-img-text22'>Product Images for Amazon  ensures your products always put their best foot forward, captivating shoppers and encouraging clicks.</p>
                                <ul className="ebc-images-ul-text1">
                                    <li>Infuse your listing with high-quality, professionally designed images and infographics.</li>
                                    <li>Seamless process from product photography to image editing, providing a polished and refined look for your listings.</li>
                                    <li>Enhance your Amazon success with high-quality images proven to increase customer engagement and conversions.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-md-end justify-content-center ebc-listing-img-div12-formobile">
                            <div>
                                <Image src={ebclistingimg1} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="container-fluid lightebc-amazon-home-secdiv3">
                <div className="container">

                    <div className='row'>

                        <div className='col-lg-6 col-12 d-md-flex d-none align-items-center justify-content-start'>
                            <div className="row justify-content-center ">
                                <Image src={ebclistingimg2} alt="" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 d-flex align-items-center ">
                            <div>
                                <h1 className='lightebc-listing-img-text12'>A+/EBC Content</h1>
                                <p className='lightebc-listing-img-text22'>A+ Content Design  will help you elevate your Amazon listings, making them visually engaging and information-rich. With our help, you can highlight the unique features of your product and tell your brand’s story in a compelling way</p>
                                <ul className="lightebc-images-ul-text1">
                                    <li>We craft standout designs that elevate your Amazon presence.</li>
                                    <li>Our engaging content enhances customer interest and increases sales.</li>
                                    <li>We handle the entire process, from design to upload, effortlessly.</li>
                                </ul>
                            </div>
                        </div>


                        <div className='col-lg-6 col-12 d-md-none d-flex align-items-center justify-content-center ebc-listing-img-div12-formobile'>
                            <div className="row justify-content-center ">
                                <Image src={ebclistingimg2} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className="container-fluid ebc-amazon-home-secdiv3">
                <div className="container">

                    <div className='row'>

                        <div className="col-lg-6 col-12 d-flex align-items-center">
                            <div>
                                <h1 className='ebc-listing-img-text12'>Store Front</h1>
                                <p className='ebc-listing-img-text22'>Storefront Design helps you create an engaging, consistent, and shopper-friendly experience that drives brand recognition and sales.</p>
                                <ul className="ebc-images-ul-text1">
                                    <li>Customized, professionally designed Amazon Storefront that truly reflects your brands identity.</li>
                                    <li>A seamless, easy-to-navigate storefront that enhances customer interaction and encourages more sales.</li>
                                    <li>Distinguish your brand in the crowded Amazon marketplace and attract more loyal customers.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-lg-6 col-12 d-flex align-items-center justify-content-center ebc-listing-img-div12-formobile'>
                            <div className=' row justify-content-center'>
                                <Image src={ebclistingimg3} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>




            <JacktoMedia></JacktoMedia>

        </div>
    )
}

export default EBC
