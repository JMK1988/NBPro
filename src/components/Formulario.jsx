/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"

export const Formulario = ( {setIsOpen} ) => {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10">

                <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5 w-4/5">
                    <form>
                        <div className="mb-3">
                            {/*Datos Personales Inicio*/}
                            <div className="datosPersonales">
                                <label htmlFor="" className="form-label mx-3 uppercase">NOMBRE/RAZON SOCIAL</label>
                                <input type="text" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"></input>
                                <div>
                                    <label htmlFor="" className="form-label mr-3">persona fisica</label>
                                    <input type="checkbox" className="input-checkbox"></input>
                                    <label htmlFor="" className="form-label mx-3">persona juridica</label>
                                    <input type="checkbox" className="input-checkbox"></input>
                                </div>
                                {/*Particular inicio*/}
                                <div >
                                    <label htmlFor="" className="form-label uppercase">domicilio particular</label>
                                    <div>
                                    <label htmlFor="" className="form-label">calle:</label>
                                    <input type="text" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"></input>
                                    <label htmlFor="" className="form-label">N°:</label>
                                    <input type="number" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"></input>
                                    <label htmlFor="" className="form-label">piso:</label>
                                    <input type="number" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"></input>
                                    <label htmlFor="" className="form-label">Depto:</label>
                                    <input type="text" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"></input>
                                    <label htmlFor="" className="form-label">C.P:</label>
                                    <input type="number" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"></input>
                                    <label htmlFor="" className="form-label">localidad:</label>
                                    <input type="text" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"></input>
                                    <label htmlFor="" className="form-label">provincia:</label>
                                    <input type="text" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"></input>
                                    </div>
                                    
                                </div>
                                {/*Particular Final*/}
                                {/*Comercial inicio*/}
                                
                                {/*Comercial Final*/}
                                {/*Datos Personales Final*/}

                            </div>
                        </div>
                    </form>
                    <div>
                        <button className="bg-red-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " onClick={() => setIsOpen(false)}>Cerrar</button>
                    </div>
                </div>
            </div>



        </>
    )
}