"use client"

import React, { useState } from "react";
import logopic from "../Images/Group 1000001396.svg";
import mobilelogopic from "../Images/Group 1000001396.png";

import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link";
import "./Navbar.css";

function Navbar() {
  const [toggle, settoggle] = useState(true);
  const [open, setopen] = useState(true);
  const [navopen , setnavopen] = useState(false)

  return (
    <div>
      <div className="container-fluid d-lg-block d-none">
        <nav class="navbar navbar-div  navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="col-5 navbar-div2 ">
              <ul class="navbar-nav">

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle navbar-text1" onClick={() => setnavopen(!navopen)}  role="button" data-toggle="dropdown" aria-expanded="false">
                    Services
                  </a>
                  <div  class={`${navopen
                    ? "nav-dropdown-div1 show"
                    : "nav-dropdown-div1"
                    } `}>
                    <Link class="dropdown-item" onClick={() => setnavopen(false)} href='/account-management'>Account Management</Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item" href='/ebc' onClick={() => setnavopen(false)}>EBC / A+</Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item" href='/ppc' onClick={() => setnavopen(false)}>PPC</Link>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item" href='/listing' onClick={() => setnavopen(false)}>Listing</Link>
                  </div>
                </li>
                <li class="nav-item">
                  <Link class="nav-link navbar-text1" href="/about">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-2  navbar-img">
              <Link class="navbar-brand" href="/">
                <Image className="" src={logopic} alt="" />
              </Link>
            </div>

            <div className="col-5 navbar-div3">
              <ul class="navbar-nav ">
                <li class="nav-item ">
                  <Link class="nav-link navbar-text1" href="#">
                    Career
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link navbar-text1 " href="#">
                    Book Meting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>



















      <div>
        <nav class="navbar mobile-navbar-div1 d-flex d-lg-none  ">
<button
            class="navbar-toggler mobile-nav-toogler"
            type="button"
            // data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {settoggle(!toggle); setnavopen(false)}}
          >
            <svg
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H26.0344"
                stroke="#5A6874"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M2.06592 11.3569H21.398"
                stroke="#5A6874"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M2.06592 20.7959H15.1281"
                stroke="#5A6874"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </button>

          <Link class="navbar-brand" href="/" onClick={() =>{ settoggle(true); setnavopen(false)}}>
            <Image src={mobilelogopic} className="" width="90" />
          </Link>
          
          <div 
            class={`${toggle
              ? "mobile-navbar-div2"
              : "mobile-navbar-div2 show"
              } `}
            id="navbarSupportedContent"
          >

            <ul class="navbar-nav mx-auto">
              <li className="nav-item mobile-nav-item home1">
                <Link
                  class="nav-link"
                  href="/about"
                  onClick={() => {
                    settoggle(!toggle);
                    setnavopen(false)
                  }}
                >
                  About Us
                </Link>
              </li>


              <li class="nav-item dropdown mobile-nav-item home1">
                <a class="nav-link dropdown-toggle navbar-text1"  onClick={() => setnavopen(!navopen)} role="button" data-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <div  class={`${navopen
                  ? "nav-dropdown-div1 show"
                  : "nav-dropdown-div1"
                  } `}>
                  <Link class="dropdown-item" href='/account-management' onClick={() => {
                    settoggle(false); setnavopen(false)
                  }}>Account Management</Link>

                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item" href='/ebc' onClick={() => {
                    settoggle(true); setnavopen(false)
                  }}>EBC / A+</Link>

                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item" href='/ppc' onClick={() => {
                    settoggle(true); setnavopen(false)
                  }} >PPC</Link>

                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item" href='/listing' onClick={() => {
                    settoggle(false); setnavopen(false)
                  }}>Listing</Link>
                </div>
              </li>

              <li className="nav-item mobile-nav-item home1">
                <Link
                  class="nav-link"
                  href="#"
                  onClick={() => {
                    settoggle(!toggle);
                    setnavopen(false)
                  }}
                >
                  Career
                </Link>
              </li>

              <li className="nav-item mobile-nav-item home1">
                <Link
                  class="nav-link"
                  href="#"
                  onClick={() => {
                    settoggle(!toggle);
                    setnavopen(false)
                  }}
                >
                  Book Meeting
                </Link>
              </li>
            </ul>
          </div>

          <div className='d-flex align-items-center'>
            <a>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19.6638" cy="19.6638" r="19.6638" fill="#030F17"/>
<path d="M26.224 13.9574C26.224 13.4865 25.8423 13.1047 25.3713 13.1047L17.697 13.1045C17.226 13.1045 16.8442 13.4863 16.8442 13.9572C16.8442 14.4281 17.226 14.8099 17.6969 14.8099L24.5186 14.8101L24.5184 21.6318C24.5184 22.1027 24.9001 22.4845 25.3711 22.4845C25.842 22.4845 26.2238 22.1028 26.2238 21.6318L26.224 13.9574ZM14.5561 25.978L25.9743 14.5604L24.7684 13.3545L13.3502 24.772L14.5561 25.978Z" fill="white"/>
</svg>
</a>

          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
