/* eslint-disable no-undef */
import React, { useState } from "react";
import { Form } from "react-router-dom"
import IMAGE from "../images/image"
// import { EmailJSResponseStatus } from "emailjs-com";
import emailjs from '@emailjs/browser';
// import { Button, Input } from "@material-tailwind/react";
// import { Rea,useState } from "react";



const   ContactUs = () => {    

    // eslint-disable-next-line no-undef
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [pNumber,setPnumber] = useState('')
    const [yourMsg,setYourMsg] = useState('')
    const [subject,setSubject] = useState('')

    const templateparam = {
        name : name,
        subject : subject,
        email : email,
        phoneNumber : pNumber,
        message : yourMsg
    }

    const flatted = require('flatted');
    console.log(flatted.stringify(templateparam));


    const handleSubmit = () =>{
        if(name.length !== 0 && email.length !==0 && pNumber.length !== 0) {
            emailjs.send('service_62h1hbd','template_7939j1s', templateparam, 'Zii2KzpCAk8vk40pr')
                .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setEmail('')
                setName('')
                setSubject('')
                setPnumber('')
                setYourMsg('')
                alert('Message was sended Successfully 😊')
            }, (err) => {
                console.log('FAILED...', err);
            });
        }
    }



    return(
        <>
            <div className="w-full  md:w-5/12 px-5  my-14 z-10">
                <div className="">
                    <div className="text-black font-bold text-center text-5xl mb-1 font-trap dark:text-white mb-5 pt-8">Contact Us</div>
                    {/* <div className="text-5xl mb-6">Have any questions?</div>
                    <div className="text-gray-400">Seamlessly integrate innovative IT solutions to streamline your operations. Enhance efficiency and drive growth with tailored technology that meets your business needs.</div> */}
                </div>
                <div className="border border-gray-400 font-poppinsNormel  px-5 py-8 backdrop-blur-lg rounded-2xl dark:border-gray-600">
                    <div>
                        <form className="py-5 " onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                <div className="flex">
                                    <input className="pl-3 pr-12 py-2  rounded-lg w-full focus:outline-none"  name="" value={name} type="type" placeholder="Your Name" required onChange={(e)=>{setName(e.target.value)}}/>
                                    {/* <Input variant="outlined" label="Your Name" color="blue-gray" icon={<img className="w-5" src={IMAGE.nameIcon} alt=""/>} className=""/> */}
                                    <div className="self-center -ml-8 md:-ml-10 z-10">
                                        <img className="w-5" src={IMAGE.nameIcon} alt=""/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <input className="pl-3 pr-12 py-2 rounded-lg w-full focus:outline-none"  name="" value={email} type="email" placeholder="Mail Address" required onChange={(e)=>{setEmail(e.target.value)}}/>
                                    <div className="self-center -ml-10">
                                        <img className="w-8" src={IMAGE.mailIcon} alt=""/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <input className="pl-3 pr-12 py-2 rounded-lg w-full focus:outline-none" type="type" name="" value={subject} placeholder="Subject" onChange={(e)=>{setSubject(e.target.value)}}/>
                                    <div className="self-center -ml-8 md:-ml-10">
                                        <img className="w-5" src={IMAGE.downArrowIcon} alt=""/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <input className="pl-3 pr-12 py-2 rounded-lg w-full focus:outline-none"  name="" value={pNumber} type="tel" placeholder="Phone Number" required onChange={(e)=>{setPnumber(e.target.value)}}/>
                                    <div className="self-center -ml-10">
                                        <img className="w-7" src={IMAGE.phoneIcon} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mb-5">
                                <textarea rows={3} name="" className="pl-3 pr-12 py-2 resize-none rounded-lg w-full focus:outline-none" type="type" value={yourMsg} placeholder="Your Message" onChange={(e)=>{setYourMsg(e.target.value)}}/>
                                <div className=" mt-2 -ml-10">
                                    <img className="w-7" src={IMAGE.mesageIcon} alt=""/>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button onClick={()=>handleSubmit()} className="text-white font-poppins tracking-wide rounded-md font-medium capitalize bg-gradient-to-b from-[#CF69FF] to-[#6356EF] px-5 py-2 flex" type="submit" placeholder="Your Message">
                                    <div className="self-center">
                                        Send Message
                                    </div>
                                    <div className="self-center">
                                        <img className="w-7 ml-3" src={IMAGE.RightLongArrow} alt=""/>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactUs 