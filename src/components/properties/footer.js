import React from "react"
import { Link } from "react-router-dom"
import IMAGE from "../images/image"
// import ima from '../../assets/svgFiles/rightSmallArrow.svg'
// import { Button } from "@material-tailwind/react"

const footer = () => {
    return(
        <>
            <div className='bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 p-5 text-white'>
                <div className="">
                    <div className="mb-5">
                        <div className="flex gap-3 mb-3">
                            <img src={IMAGE.logo} alt=""/>
                            <p className="self-center text-2xl font-redriver">BEST LABZ</p>
                        </div>
                        <div>
                            <p className="text-sm font-q font-light leading-loose">
                                We strive to deliver exceptional value and support, 
                                ensuring your success in a rapidly evolving digital landscape.
                            </p>
                        </div>
                    </div>
                    {/* <div>
                        <ul className="flex gap-3">
                            <li>
                                <button href='https://fonts.google.com/specimen/Red+Rose' className="border border-gray-500 hover:border-white rounded-full p-2">
                                    <img className="size-5" src={IMAGE.Insta} alt=""/>
                                </button>
                            </li>
                            <li>
                                <button className="border border-gray-500 hover:border-white rounded-full p-2">
                                    <img className="size-5" src={IMAGE.WebIcon} alt=""/>
                                </button>
                            </li>
                            <li>
                                <button className="border border-gray-500 hover:border-white rounded-full p-2">
                                    <img className="size-5" src={IMAGE.Twitter} alt=""/>
                                </button>
                            </li>
                            <li>
                                <button className="border border-gray-500 hover:border-white rounded-full p-2">
                                    <img className="size-5" src={IMAGE.Youtube} alt=""/>
                                </button>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className="pl-5">
                    <div className="inline-block mb-3">
                        <div>
                            <p className="text-[#939393] font-semibold">QUICK LINKS</p>
                        </div>
                        <div className="flex">
                            <div className="h-[2px] w-1/2 bg-[#939393] self-center"></div>
                            <div className="size-3 bg-[#939393] rounded-full self-center"></div>
                        </div>
                    </div>
                    <ul className={`*:mb-3`}>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE.SmallArrow} alt=""/>Home</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE.SmallArrow} alt=""/>About Us</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE.SmallArrow} alt=""/>Meet Our Team</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE.SmallArrow} alt=""/>Help & FAQs</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE.SmallArrow} alt=""/>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="pl-5">
                    <div className="inline-block mb-3">
                        <div>
                            <p className="text-[#939393] font-semibold">CATEGORY</p>
                        </div>
                        <div className="flex">
                            <div className="h-[2px] w-1/2 bg-[#939393] self-center"></div>
                            <div className="size-3 bg-[#939393] rounded-full self-center"></div>
                        </div>
                    </div>
                    <ul className={`*:mb-3`}>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE.SmallArrow} alt=""/>Commited To Quality</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE.SmallArrow} alt=""/>Why Us</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE.SmallArrow} alt=""/>Offer</Link></li>
                    </ul>
                </div>
                <div className="pl-5">
                    <div className="inline-block mb-3">
                        <div>
                            <p className="text-[#939393] font-semibold">SUPPORT</p>
                        </div>
                        <div className="flex">
                            <div className="h-[2px] w-1/2 bg-[#939393] self-center"></div>
                            <div className="size-3 bg-[#939393] rounded-full self-center"></div>
                        </div>
                    </div>
                    <ul className={`*:mb-3`}>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE.SmallArrow} alt=""/>Support Center</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE.SmallArrow} alt=""/>Contact Us</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE.SmallArrow} alt=""/>Feed Back</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE.SmallArrow} alt=""/>Account</Link></li>
                        </ul>
                </div>
                <div className="pl-5">
                    <div className="inline-block mb-3">
                        <div className="flex gap-3">
                            {/* <img src={IMAGE?.pv} alt=""/> */}
                            <p className=" text-xl font-bold">Let's keep in Touch</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="mb-5 text-sm">
                            Enter your email to keep in the know with the
                            latest updates from Transparent. 
                            </p>
                            <div className="">
                                <input className="bg-transparent  border border-gray-700 rounded-lg w-full px-3 py-2 " placeholder="your@email.com"/>
                                <button type="submit" className="bg-gradient-to-b from-[#CF69FF] to-[#6356EF] font-medium font-poppins capitalize rounded-lg w-full text-white py-3 mt-5">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white flex flex-col items-center justify-center">
                <div className="w-full ">
                    <div className="w-full h-[1px] bg-gray-400"></div>
                    <div className="flex flex-col md:flex-row flex-col-reverse justify-between px-5">
                        <div className="self-center flex flex-col md:flex-row gap-5">
                            <a href="/" className="text-xs hover:text-gray-500">Privacy Policy</a>
                            <a href="/" className="text-xs hover:text-gray-500">Terms of Service</a>
                            <a href="/" className="text-xs self-center hover:text-gray-500 text-gray-700 mb-5 md:mb-0 ">Best labz License © 2024  Transparent Contributors</a>
                        </div>
                        <div>
                            <ul className="flex justify-center py-3 gap-3">
                                <li>
                                    <button className="border size-10 border-gray-700 hover:border-white rounded-full p-2">
                                        <img className="" src={IMAGE?.Insta} alt=""/>
                                    </button>
                                </li>
                                <li>
                                    <button className="border size-10 border-gray-700 hover:border-white rounded-full p-2">
                                        <img className="" src={IMAGE?.WebIcon} alt=""/>
                                    </button>
                                </li>
                                <li>
                                    <button className="border size-10 border-gray-700 hover:border-white rounded-full p-2">
                                        <img className="" src={IMAGE?.Twitter} alt=""/>
                                    </button>
                                </li>
                                <li>
                                    <button className="border size-10 border-gray-700 hover:border-white rounded-full p-2">
                                        <img className="" src={IMAGE?.Youtube} alt=""/>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default footer