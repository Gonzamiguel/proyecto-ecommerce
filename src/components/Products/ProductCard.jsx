import React from "react";
import Button from "../Shared/button";


const ProductCard = ({data}) => {

    const shuffledData = [...data];

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const randomizedData = shuffleArray(shuffledData);

    const limitedData = randomizedData.slice(0, 8);

    return(
    <div className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
            {
                limitedData.map((data) => (
                    <div className="group" key={data.id}>
                        <div className="relative">
                            <img
                            className="h-[240px] w-[260px] object-cover rounded-md" 
                            src={data.img} alt="" />
                            <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
                                <Button 
                                text={"Agregar al carrito"}
                                bgColor={"bg-primary"}
                                textColor={"text-white"}
                                />
                            </div>
                        </div>
                        <div className="leading-7">
                            <h2 className="font-semibold">{data.titulo}</h2>
                            <p className="font-bold">${data.precio}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default ProductCard

