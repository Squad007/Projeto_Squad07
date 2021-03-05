import React from 'react';

import "../Assets/css/erro.css";

export default function Erro404() {
    return (
        <>
        <div className="container my-5 res">
            <div className=" mt-4 rounded  animate__animated animate__flash"></div>
                <img className="erroImg rounded mx-auto d-block w-50 h-50" src="./img/404.svg" alt="Erro" />
            </div>
        </>
        
    )
}