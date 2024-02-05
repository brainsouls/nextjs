import React from 'react'
import '../Components/About.css'
import '../Components/Home.css'


import bannersvg from "../Images/Group 1000008731.png";
import aboutimg1 from "../Images/Rectangle 40949.png";
import mobileaboutimg1 from "../Images/Rectangle 40949.jpg";
import aboutimg2 from "../Images/Group 1000008737.png";
import mobileaboutimg2 from "../Images/Group 1000008902.png";
import JacktoMedia from "../Components/JacktoMedia.js";
import homepointersvg2 from "../Images/Group 1000008729.svg";
import homepointersvg1 from "../Images/Group 1000008730.svg";

import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'



function about() {
    return (
        <div>
            <div className="container-fluid about-banner-div1">
                <Image src={bannersvg} className="about-banner-svg1" alt="" />
                <div className="container position-relative">
                    <Image
                        src={homepointersvg1}
                        className="home-pointer-svg1 d-md-block d-none"
                        alt=""
                    />
                    <Image
                        src={homepointersvg2}
                        className="home-pointer-svg2 d-md-block d-none"
                        alt=""
                    />
                    <div>
                        <h1 className="about-banner-text1">The Digital</h1>
                        <h1 className="about-banner-text2">Performance Agency</h1>

                        <p className="about-banner-text3">
                            Transforming Visions into Digital Success — where your brands{" "}
                            <br className="d-md-block d-none"></br> performance meets the
                            power of innovation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid about-ethos-div1">
                <div className="container">
                    <h1 className="about-ethos-text1 d-md-none d-block">Our Ethos</h1>
                    <div className="d-md-block d-none">
                        <Image src={aboutimg1} alt="" className="img-fluid" />
                    </div>
                    <div className="d-md-none d-block">
                        <Image src={mobileaboutimg1} alt="" className="img-fluid" />
                    </div>

                    <h1 className="about-ethos-text1 d-md-block d-none">Our Ethos</h1>
                    <p className="about-ethos-text2">
                        At Jack2Media, were not just an agency – we have been successful
                        Amazon sellers too. We know the ins and outs of building a brand
                        on Amazon because we have been there. From researching the market
                        to finding the right products and getting your trademark, we have
                        got you covered.
                    </p>
                    <p className="about-ethos-text2">
                        {" "}
                        We offer a complete Amazon marketing package, taking care of
                        everything from managing your account to creating content and
                        running ads. Our goal is to make your brand shine on the
                        platform. With a team that knows the Amazon game inside out,
                        we arre here to help your brand stand out and succeed.
                    </p>
                    <div className="d-md-block d-none">
                        <Image
                            src={aboutimg2}
                            alt=""
                            className="img-fluid about-ethos-img2"
                        />
                    </div>
                    <div className="d-md-none d-block">
                        <Image
                            src={mobileaboutimg2}
                            alt=""
                            className="img-fluid about-ethos-img2"
                        />
                    </div>
                </div>
            </div>

            <JacktoMedia></JacktoMedia>
        </div>
    )
}

export default about
