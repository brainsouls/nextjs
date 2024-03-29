import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <div className='container-fluid footer-div1 '>
        {/* <div className='footer-line-div2'></div> */}
        <div className='container '>
          <div className='row'>
            <div className='col-md-3 col-12 footer-div2 d-flex align-items-center'>
             
              <div>
                <h1 className='footer-text1'>Ready to discuss <br className='d-md-block d-none' />
                  your project?</h1>
              </div>
            </div>
            <div className='col-md-9 col-12 '>
              <div className='d-flex align-items-center justify-content-md-center justify-content-start' >
                <h1 className='footer-talk-text1'>Let’s talk <svg className='ml-5' xmlns="http://www.w3.org/2000/svg" width="93" height="86" viewBox="0 0 93 86" fill="none">
                  <path d="M57.1074 63.6999C45.3124 65.0636 33.9709 60.0636 27.1661 50.5181C20.8149 41.8817 19.4539 30.9727 23.0832 20.9727C23.9905 18.6999 24.8978 16.4272 26.2588 14.609L9.92712 0.972656C7.20517 5.06357 4.93689 9.15447 3.12226 14.1545C-2.77528 30.5181 -0.053341 49.1545 9.92712 63.2454C20.3612 77.7908 36.2392 85.9727 53.4782 85.9727C55.7465 85.9727 57.5611 85.9727 59.8294 85.5181C72.5318 84.1545 83.4196 78.6999 92.0391 70.0636L75.7074 56.4272C70.2635 60.0636 64.366 62.7908 57.1074 63.6999Z" fill="#FFAD40" />
                </svg></h1>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-line22-div3 d-md-block d-none'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-12 mt-md-0 mt-2'>
              <div className='d-md-block d-flex align-items-center justify-content-between'>
                <h1 className='footer-social-media-text1'>SOCIAL MEDIA</h1>
                <div className='footer-social-icons-div1'>
                  <a href="footer-social-icons-div1">
                    <div className='footer-social-icons'><svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5394 4.0998H8.2063C7.89575 4.09992 7.59795 4.22335 7.37835 4.44294C7.15876 4.66254 7.03533 4.96034 7.03521 5.27089V7.61405H10.5394L10.0262 11.1273H7.03521V17.5708H3.1817V11.1273H0V7.61453H3.14049L3.1817 4.27997L3.1702 3.08491C3.16634 2.68122 3.24251 2.28077 3.39431 1.90668C3.54612 1.5326 3.77054 1.19231 4.05462 0.905468C4.3387 0.618625 4.67681 0.390917 5.0494 0.235502C5.422 0.0800869 5.8217 4.48366e-05 6.22541 0H10.5394V4.0998Z" fill="#222222" />
                    </svg></div>
                  </a>

                  <a href="footer-social-icons-div1">
                    <div className='footer-social-icons'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M9.98494 5.73209C9.14381 5.73209 8.32156 5.98152 7.62219 6.44883C6.92281 6.91614 6.37771 7.58034 6.05582 8.35745C5.73394 9.13455 5.64972 9.98966 5.81381 10.8146C5.97791 11.6396 6.38295 12.3974 6.97772 12.9922C7.5725 13.5869 8.33028 13.992 9.15525 14.1561C9.98022 14.3202 10.8353 14.2359 11.6124 13.9141C12.3895 13.5922 13.0537 13.0471 13.5211 12.3477C13.9884 11.6483 14.2378 10.8261 14.2378 9.98494C14.2378 8.85701 13.7897 7.77529 12.9922 6.97772C12.1946 6.18016 11.1129 5.73209 9.98494 5.73209ZM9.98494 12.0189C9.58266 12.0189 9.18941 11.8996 8.85493 11.6761C8.52044 11.4526 8.25974 11.135 8.1058 10.7633C7.95185 10.3916 7.91157 9.98268 7.99005 9.58813C8.06853 9.19358 8.26225 8.83116 8.54671 8.54671C8.83116 8.26225 9.19358 8.06853 9.58813 7.99005C9.98268 7.91157 10.3916 7.95185 10.7633 8.1058C11.135 8.25974 11.4526 8.52044 11.6761 8.85493C11.8996 9.18941 12.0189 9.58266 12.0189 9.98494C12.0165 10.5236 11.8014 11.0396 11.4205 11.4205C11.0396 11.8014 10.5236 12.0165 9.98494 12.0189ZM14.4227 0H5.54719C4.07598 0 2.66503 0.584434 1.62473 1.62473C0.584434 2.66503 0 4.07598 0 5.54719V14.4227C0 15.8939 0.584434 17.3048 1.62473 18.3451C2.66503 19.3854 4.07598 19.9699 5.54719 19.9699H14.4227C15.8939 19.9699 17.3048 19.3854 18.3451 18.3451C19.3854 17.3048 19.9699 15.8939 19.9699 14.4227V5.54719C19.9699 4.07598 19.3854 2.66503 18.3451 1.62473C17.3048 0.584434 15.8939 0 14.4227 0ZM17.751 14.4227C17.751 15.3054 17.4003 16.152 16.7762 16.7762C16.152 17.4003 15.3054 17.751 14.4227 17.751H5.54719C4.66446 17.751 3.8179 17.4003 3.19372 16.7762C2.56954 16.152 2.21888 15.3054 2.21888 14.4227V5.54719C2.21888 4.66446 2.56954 3.8179 3.19372 3.19372C3.8179 2.56954 4.66446 2.21888 5.54719 2.21888H14.4227C15.3054 2.21888 16.152 2.56954 16.7762 3.19372C17.4003 3.8179 17.751 4.66446 17.751 5.54719V14.4227ZM16.2718 5.17738C16.2718 5.46994 16.185 5.75594 16.0225 5.9992C15.8599 6.24247 15.6289 6.43206 15.3586 6.54403C15.0883 6.65599 14.7909 6.68528 14.5039 6.6282C14.217 6.57113 13.9534 6.43024 13.7465 6.22336C13.5396 6.01649 13.3988 5.75291 13.3417 5.46596C13.2846 5.17902 13.3139 4.88159 13.4259 4.61129C13.5378 4.34099 13.7274 4.10997 13.9707 3.94742C14.2139 3.78488 14.4999 3.69813 14.7925 3.69813C15.1848 3.69813 15.5611 3.85398 15.8385 4.13139C16.1159 4.4088 16.2718 4.78505 16.2718 5.17738Z" fill="#222222" />
                    </svg></div>
                  </a>

                  <a href="footer-social-icons-div1">
                    <div className='footer-social-icons'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                      <path d="M8.58046 5.57621C9.50615 4.71258 10.7114 4.14759 12.1136 4.14759C13.5861 4.14759 14.9983 4.68167 16.0395 5.63235C17.0807 6.58302 17.6657 7.87241 17.6657 9.21687V16.1295H15.6467V9.21687C15.6467 8.36131 15.2745 7.54078 14.6119 6.93581C13.9493 6.33084 13.0506 5.99096 12.1136 5.99096C11.1766 5.99096 10.2779 6.33084 9.6153 6.93581C8.9527 7.54078 8.58046 8.36131 8.58046 9.21687V16.1295H6.56153V4.60843H8.58046V5.57621ZM1.5142 2.76506C1.11261 2.76506 0.727466 2.6194 0.443499 2.36013C0.159531 2.10085 0 1.7492 0 1.38253C0 1.01586 0.159531 0.664208 0.443499 0.404934C0.727466 0.145659 1.11261 0 1.5142 0C1.91579 0 2.30093 0.145659 2.5849 0.404934C2.86887 0.664208 3.0284 1.01586 3.0284 1.38253C3.0284 1.7492 2.86887 2.10085 2.5849 2.36013C2.30093 2.6194 1.91579 2.76506 1.5142 2.76506ZM0.504733 4.60843H2.52367V16.1295H0.504733V4.60843Z" fill="#222222" />
                    </svg></div>
                  </a>
                </div>
              </div>
            </div>

            <div className='footer-line22-div3 d-md-none d-block'></div>

            <div className='col-md-9 col-12'>
              <div className='d-flex footer-call-us-div1'>
                <div>
                  <h1 className='footer-call-text1'>CALL US</h1>
                  <h1 className='footer-call-text2'>+44 00 3333333</h1>
                </div>
                <div>
                  <h1 className='footer-call-text1'>DROP US A LINE</h1>
                  <h1 className='footer-call-text2'>hi@jack2media.com</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
