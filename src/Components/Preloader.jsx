import React, { useEffect } from 'react'
import { preLoaderAnim } from "../Assets/index";
const Preloader = () => {
    useEffect(() => {
        preLoaderAnim()
    }, [])
    return (
        <div className="h-screen w-full bg-[#000] text-[#fff] fixed bottom-0 left-0 right-0 z-[999] flex justify-center items-center overflow-hidden preloader ">
            <div className="h-[2rem] w-[16rem] overflow-hidden flex items-center justify-between text-lg font-medium texts-container">
                <span>Developer,</span>
                <span>Learner,</span>
                <span>Student.</span>
            </div>
        </div>
    )
}

export default Preloader