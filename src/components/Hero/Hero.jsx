import React from "react";
import Slider from "react-slick";
import Imagen1 from "../../assets/categoria/headphone.png";
import Imagen2 from "../../assets/categoria/note.png";
import Imagen3 from "../../assets/categoria/celu.png";
import Button from "../Shared/button";



const HeroData = [
    {
        id: 1,
        img: Imagen1,
        subtitulo: "Beats Solo",
        titulo: "Wireless",
        titulo2: "Headphone",
    },
    {
        id: 2,
        img: Imagen2,
        subtitulo: "Portátil",
        titulo: "Laptop",
        titulo2: "Notebook",
    },
    {
        id: 3,
        img: Imagen3,
        subtitulo: "Tech Gadget",
        titulo: "Iphone",
        titulo2: "Smarthphone",
    },
]


const Hero = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1500,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
        cssEase: "easy-in-out",
        pauseOnHover: false,
        pauseonFocus: true,
    }

    return (
        <div className="container w-[350px] sm:w-full md:w-full mt-4">
            <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px hero-bg-color flex justify-center items-center">
                <div className="container pb-8 sm:pb-0 ">
                <Slider {...settings}>
                    {
                        HeroData.map((data) => (
                            <div key={data.id}>
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                        <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold">{data.subtitulo}</h1>
                                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.titulo}</h2>
                                        <h2 className="text-4xl py-8 uppercase text-white dark:text-white/5 sm:text-[50px] md:text-[60px] xl:text-[120px] font-bold">{data.titulo2}</h2>
                                        <div>
                                            <Button
                                            text="Compra ahora"
                                            bgColor="bg-primary"
                                            textColor="text-white"
                                            />
                                        </div>
                                    </div>
                                    <div className="order-1 sm:order-2">
                                        <div className="">
                                            <img src={data.img} alt="" 
                                            className="w-[300px] sm:w-[400px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 "/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                </div>
            </div>
        </div>
    )
}

export default Hero