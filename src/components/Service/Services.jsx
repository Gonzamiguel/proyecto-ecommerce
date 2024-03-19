import React from "react";
import { FaCarSide, FaCheckCircle, FaHeadphonesAlt, FaWallet } from "react-icons/fa";

const ServiceData = [
    {
        id:1,
        icono: <FaCarSide className="text-4xl md:text-5xl text-primary"/>,
        titulo: "Envio gratis",
        descripcion: "Envio gratis en todos los pedidos"
    },
    {
        id:2,
        icono: <FaCheckCircle className="text-4xl md:text-5xl text-primary"/>,
        titulo: "Tu dinero esta seguro",
        descripcion: "30 dias de garantia"
    },
    {
        id:3,
        icono: <FaWallet className="text-4xl md:text-5xl text-primary"/>,
        titulo: "Pago seguro",
        descripcion: "Todos los pagos"
    },
    {
        id:4,
        icono: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary"/>,
        titulo: "Soporte online 24/7",
        descripcion: "Soporte tecnico las 24 horas"
    },
]


const Services = () => {
    return(
    <div>
        <div className="container my-14 md:my-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 m-5 md:m-0">
                {ServiceData.map((data) => (
                    <div className="flex flex-col items-start sm:flex-row gap-4">
                        {data.icono}
                        <div>
                            <h3 className="lg:text-xl font-bold">{data.titulo}</h3>
                            <p className="text-gray-400 text-sm">{data.descripcion}</p>
                        </div>
                    </div>
                ) )}
                
            </div>
        </div>
    </div>
    )
}

export default Services