// import { Link, Router } from "react-Router-dom"
import { Link, Router } from "react-router-dom"
import IMAGE from "../images/image"
import { useState } from "react"
import React from "react"
import { IoMoon, IoSunny } from "react-icons/io5"
// import { Button } from "@material-tailwind/react"

const HeaderNav = () => {

    const [showMenu,setShowMenu] = useState(false)

        const [dark,setDark] = React.useState(false)

        const darkModeHandler = () => {
            setDark(!dark)
            setShowMenu(!showMenu)
            document.body.classList.toggle('dark')
        }


    return(
        <>
            <div className="fixed w-screen top-0 z-50">
                <div className="bg-white flex justify-between h-16 px-8 py-2 dark:bg-black">
                    <div className="flex gap-3">
                        {/* <img src={IMAGE.logo} alt="logo"/> */}
                        <p className="self-center text-nowrap text-4xl font-redriver text-black dark:text-white">BEST LABZ</p>
                    </div>
                    <nav className="self-center hidden md:inline-flex">
                        <ul className="flex gap-5 text-[#765DFF]">
                            <li className="hover:text-orange-700">
                                <a href="#Home" className="" to="/">Home</a>
                            </li>
                            <li className="hover:text-orange-700">
                                <a href="#Services" to="/aboutUs">Services</a>
                            </li>
                            <li className="hover:text-orange-700">
                                <a href="#AboutUs" to="/aboutUs">About Us</a>
                            </li>
                            <li className="hover:text-orange-700">
                                <a href="#ContactUs" to="/contact">Contact Us</a>
                            </li>
                            {/* <button className="ease-in duration-500 " onClick={()=>darkModeHandler()}>
                            {
                                dark && <IoSunny className="text-yellow-400 ease-in duration-300"/>
                            }
                            {
                                !dark && <IoMoon className=""/>
                            }
                            </button> */}
                        </ul>
                    </nav>
                    {/* <div className="self-center hidden md:inline-flex">
                        <button className="bg-orange-400 px-5 py-2 font-semibold text-white rounded-md">
                            Contact Us
                        </button>
                    </div> */}
                    <div className="md:hidden">
                        <div className="flex md:hidden">
                            <div className="relative w-10 h-10 cursor-pointer" onClick={()=>setShowMenu(!showMenu)} >
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span
                                    className={`block w-7 h-1 bg-[#6966cf] rounded-full transition-all duration-300 ${
                                    showMenu ? 'rotate-45 translate-y-2' : ''
                                    }`}
                                ></span>
                                <span
                                    className={`block w-7 h-1 bg-[#37c4ee] mt-1 rounded-full transition-all duration-300 ${
                                    showMenu ? 'opacity-0' : ''
                                    }`}
                                ></span>
                                <span
                                    className={`block w-7 h-1 bg-[#6966cf] mt-1 rounded-full transition-all duration-300 ${
                                    showMenu ? '-rotate-45 -translate-y-2' : ''
                                    }`}
                                ></span>
                                </div>
                            </div>
                        </div> 
                        <div className="inline-block">
                            <div className={`fixed flex flex-col justify-between pb-20 top-16 right-48 md:hidden z-40 text-black dark:text-white h-full pt-3 overflow-y-auto transition-transform translate-x-full  dark:bg-transparent backdrop-blur-md w-48 ${showMenu === true ? null : 'hidden'}`}>
                                <ul className="*:bg-re *:my-1 *:p-2 *:text-center *:flex *:items-center *:justify-end ">
                                    <a  onClick={()=>setShowMenu(!showMenu)} href={'#Home'} className="hover:bg-gray-100 hover:text-black group hover:font-semibold *:mx-2" style={{fontWeight : Router.pathname === '/' ? 'bold': null,background:Router.pathname==='/'?'#f3f4f6':null,}}>
                                        <p className="">Home</p>  
                                        <svg className="group-hover:fill-black fill-gray-500	" style={{fill:Router.pathname==='/'? 'black':null}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M180-120q-25 0-42.5-17.5T120-180v-76l160-142v278H180Zm140 0v-160h320v160H320Zm360 0v-328L509-600l121-107 190 169q10 9 15 20.5t5 24.5v313q0 25-17.5 42.5T780-120H680ZM120-310v-183q0-13 5-25t15-20l300-266q8-8 18.5-11.5T480-819q11 0 21.5 3.5T520-804l80 71-480 423Z"/></svg>
                                    </a>
                                    <a onClick={()=>setShowMenu(!showMenu)} href={'#Services'} className="hover:bg-gray-100 hover:text-black group hover:font-bold *:mx-2" style={{fontWeight : Router.pathname === '/ourServices' ? 'bold': null,background:Router.pathname==='/ourServices'?'#f3f4f6':null,}}>
                                        <p className="">Our Services</p>
                                        <svg className="group-hover:fill-black fill-gray-500" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z"/></svg>                                
                                    </a>
                                    <a onClick={()=>setShowMenu(!showMenu)} href={'#AboutUs'} className="hover:bg-gray-100 hover:text-black group hover:font-bold *:mx-2" style={{fontWeight : Router.pathname === '/about' ? 'bold': null,background:Router.pathname==='/about'?'#f3f4f6':null,}}>
                                        <p className="">About Us</p>
                                        <svg className="group-hover:fill-black fill-gray-500	" style={{fill:Router.pathname==='/about'? 'black':null}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>
                                    </a>
                                    {/* <Link onClick={()=>setShowMenu(!showMenu)} href={'/gallery'} className="hover:bg-gray-100 group hover:font-bold *:mx-2" style={{fontWeight : Router.pathname === '/gallery' ? 'bold': null,background:Router.pathname==='/gallery'?'#f3f4f6':null,}}>
                                        <p className="">Gallery</p>
                                        <svg className="group-hover:fill-black fill-gray-500	" style={{fill:Router.pathname==='/gallery'? 'black':null}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-400h400L622-580l-92 120-62-80-108 140Zm-40 160q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>
                                    </Link> */}
                                    <a onClick={()=>setShowMenu(!showMenu)} href={'#ContactUs'} className="hover:bg-gray-100 hover:text-black group hover:font-bold *:mx-2" style={{fontWeight : Router.pathname === '/locate' ? 'bold': null,background:Router.pathname==='/locate'?'#f3f4f6':null,}}>
                                        <p className="">Contact Us</p>
                                        <svg className="group-hover:fill-black fill-gray-500	" style={{fill:Router.pathname==='/locate'? 'black':null}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
                                    </a>
                                    <div className="flex items-center justify-center bg-red-30">

                                    {/* <button
                                        onClick={()=>{ darkModeHandler() }} 
                                        className="hover:bg-gray-100 flex items-center justify-center bg-gradient-to-b from-[#CF69FF] to-[#6356EF] border-[#CF69FF] group" 
                                        style={{fontWeight : Router.pathname === '/locate' ? 'bold': null,background:Router.pathname==='/locate'?'#f3f4f6':null,}}>
                                            {
                                                dark && 
                                                <div className="flex self-center ">
                                                    <p className="self-center"></p>
                                                    <div className="self-center">
                                                        <IoSunny className="text-yellow-400 size-5 ease-in duration-300"/>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                !dark &&
                                                <div className="flex self-center ">
                                                    <p className="self-center"></p>
                                                    <div className="self-center">
                                                        <IoMoon className="text-[#FFF]"/>
                                                    </div>
                                                </div> 
                                            }
                                    </button> */}
                                    </div>
                                </ul>
                                <div className="self-center">
                                    <span className="text-sm text-gray-500 sm:text-center">© 2020 <a href="https://www.bestlabzglobal.com/" className="hover:underline">BEST LABZ™</a> <br/>All Rights Reserved.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderNav