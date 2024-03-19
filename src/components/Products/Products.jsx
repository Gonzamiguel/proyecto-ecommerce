import React from "react";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/categoria/headphone.png";
import ProductCard from "./ProductCard";

const ProductsData = [
    {
        id:1,
        img: Img1,
        titulo: "Buscar producto",
        precio: "180",
        aosDelay: "0",
    },
    {
        id:2,
        img: Img1,
        titulo: "Buscar producto2",
        precio: "180",
        aosDelay: "0",
    },
    {
        id:3,
        img: Img1,
        titulo: "Buscar producto3",
        precio: "180",
        aosDelay: "0",
    },
    {
        id:4,
        img: Img1,
        titulo: "Buscar producto4",
        precio: "180",
        aosDelay: "0",
    },
    {
        id:5,
        img: Img1,
        titulo: "Buscar producto5",
        precio: "180",
        aosDelay: "0",
    },
    {
        id:6,
        img: Img1,
        titulo: "Buscar producto6",
        precio: "180",
        aosDelay: "0",
    },
    {
        id:8,
        img: Img1,
        titulo: "Buscar producto7",
        precio: "180",
        aosDelay: "0",
    },
    {
        id:7,
        img: Img1,
        titulo: "Buscar producto8",
        precio: "180",
        aosDelay: "0",
    },
]



const Products = () => {
    return(
    <div>
        <div className="container">
            <Heading
            titulo={"Nuestros productos"}
            subtitulo={"Explora nuestros productos"}
            />
            <ProductCard 
            data={ProductsData}
            />
        </div>

    </div>
    )
}

export default Products