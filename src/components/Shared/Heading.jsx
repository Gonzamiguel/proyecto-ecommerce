import React from "react";

const Heading = ({titulo,subtitulo}) => {
    return(
    <div className="text-center mt-10 mb-10 max-w-[600px] mx-auto space-y-2">
        <h2 className="text--3xl font-bold lg:text-4xl">{titulo}</h2>
        <p className="text-xs text-gray-400">{subtitulo}</p>
    </div>
    )
}

export default Heading; 