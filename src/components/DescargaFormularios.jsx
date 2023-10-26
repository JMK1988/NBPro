/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import datosArchivos from '../../Scripts/datosArchivos.json';

import { useEffect, useState } from "react"
const archivillo = datosArchivos;
const datosArchi = datosArchivos;

export const DescargaFormularios = ({ nombre, setIsOpen, isOpen }) => {
    const archivos = datosArchi[nombre]; // Obtener la lista de archivos según el nombre
    return (
        <>
            {isOpen && archivos ? ( // Verificar que existan archivos para el nombre dado
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10 max-h-screen">
                    <div className="bg-white p-5 rounded-xl flex flex-col justify-center items-center gap-5 ">
                        {archivos.map((archivo, index) => (
                            <a
                                key={index}
                                className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                                href={`/${nombre}/${archivo}`}
                                download={`/${nombre}/${archivo}`}
                            >
                                {archivo.slice(0, -4).toUpperCase()}
                            </a>
                        ))}
                        <div>
                            <button
                                className="bg-red-900 py-1 px-6 rounded-lg text-white font-medium mt-5 hover:bg-red-700 focus:scale-95 transition-all duration-200 ease-out"
                                onClick={() => setIsOpen(false)}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}


