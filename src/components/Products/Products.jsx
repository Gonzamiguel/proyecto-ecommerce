import React from "react";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/categoria/nogaGonza.webp";
import Img2 from "../../assets/categoria/lenovo.webp";
import Img3 from "../../assets/categoria/noteAsus.webp";
import Img4 from "../../assets/categoria/Auris.webp";
import Img5 from "../../assets/categoria/headphone.png";
import Img6 from "../../assets/categoria/SamsungBook3.webp";
import Img7 from "../../assets/categoria/hp.webp";
import Img8 from "../../assets/categoria/lenovo2.webp";
import Img9 from "../../assets/categoria/iphone13.webp";
import Img10 from "../../assets/categoria/iphone13b.webp";
import Img11 from "../../assets/categoria/iphone14.webp";
import Img12 from "../../assets/categoria/iphoneSe.webp";
import ProductCard from "./ProductCard";


const ProductsData = [
    {
        id:1,
        img: Img1,
        titulo: "Wireless Noga Ng-a100bt",
        precio: "23.000",
        aosDelay: "1.549.999",
    },
    {
        id:2,
        img: Img2,
        titulo: "Lenovo 15,6” Ryzen 7 8gb IdeaPad",
        precio: "180",
        aosDelay: "0",
    },
    {
        id:3,
        img: Img3,
        titulo: "Asus Vivobook 15.6” Ryzen 5 8gb",
        precio: "1.199.999",
        aosDelay: "0",
    },
    {
        id:4,
        img: Img4,
        titulo: "Havit Hv H2575 Verde Militar",
        precio: "19.999",
        aosDelay: "0",
    },
    {
        id:5,
        img: Img5,
        titulo: "Buscar producto5",
        precio: "180",
        aosDelay: "0",
    },
    {
        id:6,
        img: Img6,
        titulo: "Samsung Book3 15,6” Intel i5 8gb",
        precio: "1.869.999",
        aosDelay: "0",
    },
    {
        id:7,
        img: Img7,
        titulo: "Hp 14” Intel Celeron 4gb 256gb",
        precio: "699.999",
        aosDelay: "0",
    },
    {
        id:8,
        img: Img8,
        titulo: "Lenovo 14” Core i3 8gb 256gb",
        precio: "1.199.999",
        aosDelay: "0",
    },
    {
        id:9,
        img: Img9,
        titulo: "iPhone 13 256GB Pink",
        precio: "2.419.900",
        aosDelay: "0",
    },
    {
        id:10,
        img: Img10,
        titulo: "iPhone 13 128GB Midnight",
        precio: "2.089.900",
        aosDelay: "0",
    },
    {
        id:11,
        img: Img11,
        titulo: "iPhone 14 128GB Blue",
        precio: "2.339.900",
        aosDelay: "0",
    },
    {
        id:12,
        img: Img12,
        titulo: "iPhone SE 64GB Black",
        precio: "1.045.415",
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