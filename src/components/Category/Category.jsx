import React from "react";
import Imagen1 from "../../assets/categoria/headphone.png";
import Imagen2 from "../../assets/categoria/note.png";
import Imagen3 from "../../assets/categoria/celu.png";
import Button from "../Shared/button";

const Category = () => {
    return(
    <div className="py-8 m-5">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="py-10 pl-5 bg-gradient-to-r from-slate-500 to-slate-800 text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="">
                            <p className="mb-[2px] text-gray-400">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px] ">With</p>
                            <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Headphones</p>
                            <Button
                            text="Browse"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Imagen1} alt="" 
                    className="w-[270px] md:[300px] absolute top-0 right-0"/>
                </div>
                <div className="py-10 pl-5 bg-gradient-to-r from-stone-800 to-stone-600 text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="">
                            <p className="mb-[2px] text-gray-400">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px] ">With</p>
                            <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Notebooks</p>
                            <Button
                            text="Browse"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Imagen2} alt="" 
                    className="w-[250px] md:[300px] absolute top-10 right-0 md:top-auto md:right-0"/>
                </div>
                <div className="flex py-10 pl-5 bg-gradient-to-r from-teal-600 to-[#B7DCF5] text-white rounded-3xl relative h-[320px] md:col-span-2">
                    <div className="md:basis-1/2 md:flex md:justify-center">
                        <div className="pt-20 md:pt-10">
                            <p className="mb-[2px] text-gray-400">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px] ">With</p>
                            <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Smartphones</p>
                            <Button
                            text="Browse"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <div className="md:basis-1/2 md:flex md:justify-center">
                        <img src={Imagen3} alt="" 
                    className="w-[250px] md:[300px] absolute top-4 right-0 md:top-auto md:right-auto"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Category