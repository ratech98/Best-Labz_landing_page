// import { Carousel, IconButton } from "@material-tailwind/react"
import IMAGE from "../images/image"
import StarRating from "./starRating"
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import { Carousel } from "react-responsive-carousel"
// import {moion, useScroll,} from 'framer-motion'np



const CarouselComp = ()=>{
    // render(){
    return(
        <>
            <div className=" ">
                <div className="">
                    <div className="text-5xl font-trap text-black font-semibold text-center text-wrap whitespace-pre dark:text-white">
                        What our<span className="bg-clip-text text-transparent bg-gradient-to-b from-[#CF69FF] to-[#6356EF] font-helvetica"> Clients </span>tells about us
                    </div>
                    <div className="flex items-center justify-center py-10 gap-5">
                        <div className="flex items-center justify-center">
                            <div className="">
                                {/* <Carousel className="" autoPlay={true} emulateTouch={true} showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true} thumbWidth={20} useKeyboardArrows={true} swipeable={true} width={''} preventMovementUntilSwipeScrollTolerance={false} centerMode={true} centerSlidePercentage={30} dynamicHeight={false} interval={4000} selectedItem={2} stopOnHover={false}> */}
                                    <div className="max-w-[20rem]">
                                        <div className="">
                                            <div className="flex justify-center z-30 -mb-6">
                                                <StarRating/>
                                            </div>
                                            <div className=" border z-40 shadow bg-white py-10 overflow-hidden px-4 rounded-xl text-[#909090] text-sm">
                                                <p className="bg-white z-40 ">
                                                This is Balavishnu, CEO of Techno Tackle, Coimbatore. We have worked with Riyaz of Best Labz for last 2+ years and he has delivered more than 10 projects for us. We are happy with the quality of work they deliver and looking forward to more years of working with them.
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-center -mt-5">
                                                <div className="flex flex-col justify-center items-center">
                                                    <div className="flex size-16 items-center justify-center">
                                                        <img className="size-16 self-center border border-gray-400 mb-5 rounded-full bg-[#065742]" src={IMAGE?.TechNo} alt=""/>
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-center text-gray-400">Co-Founded</p>
                                                        <p className="text-center text-black font-semibold dark:text-white">Balavishnu</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                {/* </Carousel> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* motion */}

                    </div>
                </div>
            </div>
        </>
    )
// }
}

export default CarouselComp


// ReactDOM.render(<CarouselComp />, document.querySelector('.demo-carousel'));
