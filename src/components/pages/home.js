/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import IMAGE from "../images/image";
import ContactUs from "../properties/contactUs";
import Aos from "aos";
import "aos/dist/aos.css";
// import { BasisCurve } from "react-svg-curve"
// import { Button, Carousel } from "@material-tailwind/react"
// import Switch from 'react-switch'
// import { useEffect, useRef, useState } from "react"
// import { TypewriterClass } from "typewriter-effect"
// import { TypewriterClass } from "typewriter-effect"
// import ImageMapper from 'react-img-mapper'
import OurTech from "../properties/ourTech";
import CarouselComp from "../properties/carousel";
import Typewriter from "typewriter-effect";
import "../../index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR-q21rg0Dslwes8drRZXXi6Uwx85bT0A",
  authDomain: "bestlabz.firebaseapp.com",
  projectId: "bestlabz",
  storageBucket: "bestlabz.appspot.com",
  messagingSenderId: "992206467262",
  appId: "1:992206467262:web:8eda0af980397371cb6eef",
  measurementId: "G-WQ9MF0XYX9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Aos.init();

function homePage() {
  useEffect(() => {
    logEvent(analytics, "text user");
  }, []);

  return (
    <div id="Home" className="bg-white overflow-hidden dark:bg-black">
      <div
        className="flex justify-between h-screen w-full px-5 md:px-8"
        style={{
          background: `url(${IMAGE.BackgroundLines})`,
          backgroundPosition: "center",
        }}
      >
        <div className="self-center w-8/12 z-10 bg-red-10 dark:bg-yellow-30">
          {/* <div className=""> */}
          <div className="font-bold  font-poppins text-black dark:text-white  mt-12 breake-words leading-tight text-5xl md:text-5xl  text-wrap z-30">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    'Revolution your business with cutting edge <span style="color: #765DFF; font-family:trap  ">Software Solutions</span>'
                  )
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  // .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
            {/* Revolution your business with cutting edge{" "}
            <span className="text-[#765DFF]">Software Solutions</span> */}
            {/* </div>  */}
          </div>
        </div>
        <div className="self-center absolute right-10 z-0 bg-red-30">
          <div className=" relative">
            <img className="w-52" src={IMAGE.ITsolution} alt="" />
            <img
              className="absolute w-24 blur animate-[spin_20s_linear_infinite] -top-10 -left-72"
              src={IMAGE.cube}
              alt=""
            />
            <img
              className="absolute w-16 blur animate-[spin_30s_linear_infinite] -left-20"
              src={IMAGE.cube}
              alt=""
            />
            <img className="absolute blur-[2px] w-5 " src={IMAGE.star} alt="" />
            <img
              className="absolute blur-sm w-8 -top-10 right-0"
              src={IMAGE.star}
              alt=""
            />
            <img
              className="absolute blur-sm w-12 -left-52 top-52 "
              src={IMAGE.star}
              alt=""
            />
            <img
              className="absolute blur-[2px] w-12 -left-[40rem] inline-flex "
              src={IMAGE.star}
              alt=""
            />
            <img
              className="absolute blur-sm w-12 animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite] -left-[40rem] inline-flex"
              src={IMAGE.star}
              alt=""
            />
            <img
              className="absolute blur-sm w-18 -left-[48rem] -top-[2rem]"
              src={IMAGE.star}
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="Services" className="px-5 pt-20">
        <div className="relative z-0">
          <div className="absolute z-0 -top-52 -left-48">
            <img className="w-72 z-0" src={IMAGE?.circle} alt="" />
          </div>
          <div className="absolute z-0 -top-5 -right-20">
            <img className="z-0" src={IMAGE?.grilTop} alt="" />
          </div>
        </div>
        <div className="md:flex justify-center z-10">
          <div className="font-semibold z-10 text-5xl whitespace-pre-line mb-5">
            <p className="text-center z-10 font-trap text-black dark:text-white">
              Our Saas Services
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="border-2 bg-white hover:bg-gradient-to-b from-[#CF69FF] to-[#fff] border-[#CF69FF] z-10  rounded-xl *:py-2 px-2 overflow-hidden dark:bg-black"
          >
            <div className="text-black dark:text-white font-bold text-3xl text-center">
              Inventory Management
            </div>
            <div className="flex justify-center">
              <img src={IMAGE?.InvManagement} alt="" />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="border-2 bg-white hover:bg-gradient-to-b from-[#CF69FF] to-[#fff] border-[#CF69FF] z-10 border-[#CF69FF] rounded-xl *:py-2 px-2 overflow-hidden dark:bg-black"
          >
            <div className="text-black dark:text-white font-bold text-3xl text-center">
              ERP & CRM
            </div>
            <div className="flex justify-center">
              <img src={IMAGE?.erp} alt="" />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="border-2  bg-white hover:bg-gradient-to-b from-[#CF69FF] to-[#fff] border-[#CF69FF] z-10 border-[#CF69FF] rounded-xl *:py-2 px-2 overflow-hidden dark:bg-black"
          >
            <div className="text-black dark:text-white font-bold text-3xl text-center">
              Point of Sale
            </div>
            <div className="flex justify-center">
              <img src={IMAGE?.sale} alt="" />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="border-2 bg-white hover:bg-gradient-to-b from-[#CF69FF] to-[#fff] border-[#CF69FF] z-10 border-[#CF69FF] rounded-xl *:py-2 px-2 overflow-hidden dark:bg-black"
          >
            <div className="text-black dark:text-white font-bold text-3xl text-center">
              E-commerce & Online bookings
            </div>
            <div className="flex justify-center">
              <img src={IMAGE?.E_Commerse} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-0">
        <div className="absolute z-0 -top-52 -left-20">
          <img className="z-0" src={IMAGE?.grilBottom} alt="" />
        </div>
        <div className="absolute z-0 w-28 blur -bottom-36 left-2/4">
          <img
            className="w-72 z-0 animate-[spin_30s_linear_infinite]"
            src={IMAGE?.cube}
            alt=""
          />
        </div>
        <div className="absolute z-0 -top-10 -right-40">
          <img className="w-72 z-0" src={IMAGE?.circle} alt="" />
          {/* <img src={IMAGE?.grilBottom} alt=""/> */}
        </div>
      </div>
      <div className="z-10 mt-52">
        <div className="z-10 w-full flex flex-col md:flex-row  justify-between px-5 md:px-14">
          <div className="z-10 w-full mb-12 md:w-5/12 self-center">
            <img className="z-10" src={IMAGE?.ourProcess} alt="" />
            {/* <ImageMapper src={IMAGE?.ourProcess} map={MAP}/> */}
          </div>
          <div
            data-aos="fade-right"
            className="w-full  md:w-2/4 self-center text-2xl text-black dark:text-white *:pb-5"
          >
            <div className="font-bold text-center text-3xl">
              Requirement Analysis
            </div>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="font-stretch:expanded; margin-top: 500px; line-height:150%">Develop software by translating project requirements into functional code. Focus on designing, coding, testing, and iterating to create a reliable, user-friendly, and maintainable solution.</span>'
                  )
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  // .pauseFor(2500)
                  // .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
            {/* <p className="font-semibold text-xl">Requirement Analysis</p>
                        <p className="leading-loose">Develop software by translating project requirements into functional code. Focus on designing, coding, testing, and iterating to create a reliable, user-friendly, and maintainable solution.</p> */}
          </div>
        </div>
      </div>
      <div className="relative z-0">
        <div className="absolute z-0 -top-10 -left-48">
          <img className="w-72 z-0" src={IMAGE?.circle} alt="" />
        </div>
      </div>
      <div className="mb-20">
        <div id="AboutUs" className="my-10">
          <div className="text-5xl font-trap text-black pt-20 font-semibold text-center dark:text-white">
            We are expertised
          </div>
          <div className="flex items-center justify-center">
            <div className=" w-3/4 gap-5 py-10 ">
              <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-10">
                <div
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  className="self-end *:py-2"
                >
                  <div className="flex justify-center">
                    <svg
                      className="stroke-black dark:stroke-white"
                      width="155"
                      height="155"
                      viewBox="0 0 155 155"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M45.2083 135.625H109.792M40.0417 109.792H114.958C122.192 109.792 125.81 109.792 128.573 108.384C131.003 107.146 132.979 105.169 134.217 102.739C135.625 99.9763 135.625 96.359 135.625 89.125V40.0417C135.625 32.8077 135.625 29.1906 134.217 26.4276C132.979 23.9972 131.003 22.0212 128.573 20.7829C125.81 19.375 122.192 19.375 114.958 19.375H40.0417C32.8077 19.375 29.1906 19.375 26.4276 20.7829C23.9972 22.0212 22.0212 23.9972 20.7829 26.4276C19.375 29.1906 19.375 32.8076 19.375 40.0417V89.125C19.375 96.359 19.375 99.9763 20.7829 102.739C22.0212 105.169 23.9972 107.146 26.4276 108.384C29.1906 109.792 32.8076 109.792 40.0417 109.792Z"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <p className="text-3xl text-center font-semibold text-black dark:text-white">
                      Web
                    </p>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  // data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  // data-aos-easing="ease-in-out"
                  // data-aos-mirror="true"
                  // data-aos-once="false"
                  // data-aos-anchor-placement="top-center"
                  className="self-end *:py-2"
                >
                  <div className="flex justify-center">
                    <svg
                      className="stroke-black dark:stroke-white"
                      width="132"
                      height="131"
                      viewBox="0 0 132 131"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M55 109.167C34.2582 109.167 23.8873 109.167 17.4436 102.772C11 96.3779 11 86.0851 11 65.5007C11 44.916 11 34.6237 17.4436 28.2288C23.8873 21.834 34.2582 21.834 55 21.834H77C97.7416 21.834 108.113 21.834 114.556 28.2288C121 34.6237 121 44.916 121 65.5007C121 86.0851 121 96.3779 114.556 102.772C108.113 109.167 97.7416 109.167 77 109.167H55Z"
                        strokeWidth="5"
                      />
                      <path
                        d="M82.5 92.791H49.5"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <p className="text-3xl text-center font-semibold text-black dark:text-white">
                      Tab
                    </p>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  className="self-end *:py-2"
                >
                  <div className="flex justify-center">
                    <svg
                      className="stroke-black dark:stroke-white"
                      width="121"
                      height="121"
                      fill="none"
                      viewBox="0 0 121 121"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M55.4583 90.75H65.5417M46.3833 105.875H74.6167C80.2638 105.875 83.0877 105.875 85.2445 104.776C87.1417 103.809 88.6844 102.267 89.6509 100.37C90.75 98.2127 90.75 95.3888 90.75 89.7417V31.2583C90.75 25.6112 90.75 22.7875 89.6509 20.6306C88.6844 18.7333 87.1417 17.1907 85.2445 16.224C83.0877 15.125 80.2638 15.125 74.6167 15.125H46.3833C40.7362 15.125 37.9125 15.125 35.7556 16.224C33.8583 17.1907 32.3157 18.7333 31.349 20.6306C30.25 22.7875 30.25 25.6111 30.25 31.2583V89.7417C30.25 95.3888 30.25 98.2127 31.349 100.37C32.3157 102.267 33.8583 103.809 35.7556 104.776C37.9125 105.875 40.7361 105.875 46.3833 105.875Z"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <p className="text-3xl text-center font-semibold text-black dark:text-white">
                      Mobile
                    </p>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  className="self-end *:py-2"
                >
                  <div className="flex justify-center">
                    <svg
                      className="stroke-black dark:stroke-white"
                      width="125"
                      height="125"
                      viewBox="0 0 125 125"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.0417 62.4993C26.0417 47.8696 26.0417 40.5546 29.5528 35.3C31.0728 33.0252 33.0259 31.0721 35.3007 29.5521C40.5553 26.041 47.8703 26.041 62.5001 26.041C77.1298 26.041 84.4449 26.041 89.6996 29.5521C91.974 31.0721 93.9272 33.0252 95.4475 35.3C98.9584 40.5546 98.9584 47.8696 98.9584 62.4993C98.9584 77.129 98.9584 84.4441 95.4475 89.6988C93.9272 91.9733 91.974 93.9264 89.6996 95.4467C84.4449 98.9577 77.1298 98.9577 62.5001 98.9577C47.8703 98.9577 40.5553 98.9577 35.3007 95.4467C33.0259 93.9264 31.0728 91.9733 29.5528 89.6988C26.0417 84.4441 26.0417 77.129 26.0417 62.4993Z"
                        strokeWidth="5"
                      />
                      <path
                        d="M66.964 46.875L52.0833 62.5H72.9166L58.0359 78.125"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36.4583 10.416H88.5416"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M36.4583 114.584H88.5416"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <p className="text-3xl text-center font-semibold text-black dark:text-white">
                      Wearables
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <OurTech />
      </div>
      <div className="relative z-0">
        <div className="absolute z-0 -top-52 -left-0">
          {/* <img className="z-0" src={IMAGE?.grilBottom} alt="" /> */}
        </div>
        <div className="absolute z-0 w-28 blur -bottom-36 left-2/4">
          {/* <img className="w-72 z-0 animate-[spin_30s_linear_infinite]" src={IMAGE?.cube} alt="" /> */}
        </div>
        <div className="absolute z-0 -top-10 -right-40">
          <img className="w-72 z-0" src={IMAGE?.circle} alt="" />
        </div>
      </div>

      {/* <div className="w-3/4 flex justify-center">
                <div className="relative size-96 flex items-center justify-center ml-20">
                    Outer Circle
                    <div className="absolute size-[25rem] border-[1px] border-[#CF69FF] rounded-full"></div>
                    
                    Inner Circle
                    <div className="text-black dark:text-white font-trap font-bold text-3xl">Our Process</div>
                    <div className="size-28 absolute -top-14 bg-[#0D0D0D] border-[7px] border-[#6C3A84] rounded-full"></div>
                    <div className="size-28 absolute top-16 -left-10 bg-[#0D0D0D] border-[7px] border-[#6C3A84] hover:border-red-500 rounded-full"></div>
                    <div className="size-28 absolute top-16 -right-10 bg-[#0D0D0D] border-[7px] border-[#6C3A84] rounded-full"></div>
                    <div className="size-28 absolute bottom-3 -left-0 bg-[#0D0D0D] border-[7px] border-[#6C3A84] rounded-full"></div>
                    <div className="size-28 absolute bottom-3 -right-0 bg-[#0D0D0D] border-[7px] border-[#6C3A84] rounded-full"></div>
                </div>
            </div> */}

      <div className=" flex items-center justify-center mt-32">
        <div className=" flex items-center justify-center">
          <CarouselComp />
        </div>
      </div>

      <div className="z-10 px-">
        <div className="text-red-700">
          <div className="App">
            {/* <TypewriterClass
                start
            /> */}
          </div>
        </div>

        <div className="t-10">
          <div>
            <div
              id="ContactUs"
              className="bg-[url('/public/contactUsBG.svg')] bg-left-bottom bg-no-repeat bg-auto flex items-center justify-center w-full z-10"
            >
              <ContactUs />
            </div>
            <div className="z-0">
              <div className="self-center z-0 bg-red-300">
                <div className=" relative">
                  <img
                    className="absolute w-14 blur-sm animate-[spin_20s_linear_infinite] bottom-8 right-96 z-0"
                    src={IMAGE.cube}
                    alt=""
                  />
                  <img
                    className="absolute w-12 blur-sm animate-[spin_20s_linear_infinite] bottom-72 right-1/4"
                    src={IMAGE.cube}
                    alt=""
                  />
                  <img
                    className="absolute blur-[1px] animate-ping w-5 inline-flex bottom-52 right-12"
                    src={IMAGE.star}
                    alt=""
                  />
                  <img
                    className="absolute blur-[2px] w-5 inline-flex bottom-52 right-12"
                    src={IMAGE.star}
                    alt=""
                  />
                  <img
                    className="absolute blur-sm w-8 bottom-96 right-72 inline-flex"
                    src={IMAGE.star}
                    alt=""
                  />
                  <img
                    className="absolute blur-sm w-12 bottom-32 right-52 "
                    src={IMAGE.star}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homePage;
