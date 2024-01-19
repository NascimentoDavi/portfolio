import React from "react"
import SocialLinks from '../components/SocialLinks'
import efiserviceWebPage from '../assets/portfolio/efiservice-webpage.png'
import blog from '../assets/portfolio/blog.png'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: efiserviceWebPage
        },
        {
            id: 2,
            src: blog
        },
        {
            id: 3,
            src: reactWeather
        }
    ]
    
    return <div>

        <div  name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-10>
            <div">

            <div className="flex flex-col justify-center gap-1 items-center mb-10">

                <p className="text-4xl font-bold border-b-2 border-blue-500 w-fit mx-auto mb-8">Portfolio</p>
                <p className="text-lg lg:text-2xl">Check out some of my work rigtt here</p>

            </div>

            <div className="x-index-element grid sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-1 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-10">

                {
                    portfolios.map(({id, src}) => (

                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt="efiservice web page" className="rounded-xl duration-200 hover:scale-105 h-5/6 w-full"/>
                            <div className="flex items-center justify-evenly py-4">
                                <button className="pb-6 sm:pb-0 duration-200 hover:scale-125">Demo</button>
                                <button className="pb-6 sm:pb-0 duration-200 hover:scale-125">Code</button>
                            </div>
                        </div>

                    ))
                }

            </div>


        </div>

    </div>
};

export default Portfolio;