import React from "react";
import HeroImage from "../assets/heroImage.png";
import { RxDoubleArrowRight } from 'react-icons/rx'

const Home = () => {
    return (
        
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white via-black px-4">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-3 md:flex-row">

                <div className="flex flex-col justify-center h-full text-center md:text-start md:ms-16">

                    <h2 className="text-4xl sm:text-7xl font-bold text-white md:ps-20 ps-0 pt-5 md:pt-0">
                        I'm a Front-end Developer
                    </h2>

                    <p className="text-gray-500 py-4 max-w-md mx-auto md:text-start md:mx-0 md:ps-20 ps-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut enim quisquam dolorem fugit saepe, nisi quae iure consequuntur consectetur, rem, mollitia tempore dolorum illo. Corrupti quam haru m nihil illum quod?
                    </p>

                    <div className="mx-auto md:ms-0 pb-5 md:ps-20 ps-0">
                        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                            Repository
                            <span className="group-hover:ms-3 duration-200 ps-1">
                                <RxDoubleArrowRight size={15}/>
                            </span>
                        </button>
                    </div>

                </div>

                <div className="md:me-16">
                    <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
                </div>

            </div>

        </div>
    );
};

export default Home;