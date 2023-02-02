import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import BeachVid from "../../assets/BeachVideo.mp4"

const Hero = () =>{
    return (
        <div className="w-full h-screen relative">
            <video className="w-full h-full object-cover" src={BeachVid} autoPlay loop
            muted/>
            <div className="absolute w-full h-full top-0 left-0 bg-gray-900/50">
            </div>
            <div className=" absolute top-0 w-full h-full flex flex-col justify-center text-center text-white">
                <h1>First Class Travels</h1>
                <h2 className="my-1">Top 1% Locations worldwide</h2>
                <form className="flex justify-between items-center max-w-[700px] w-full border mx-auto p-1 rounded-md bg-gray-100/90">
                    <div>
                    <input className="bg-transparent w-[300px] text-black sm:w-[400px] focus:outline-none" type="text" placeholder="Search Destination"/>
                    </div>
                    <div>
                        <button><AiOutlineSearch size={20} className="icon" style={{color:"#ffffff"}}/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
