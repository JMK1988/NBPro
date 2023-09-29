/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { DescargaFormularios } from "./DescargaFormularios";

export const Card = ({ nombre, isOpen, setIsOpen }) => {
  

  return (
    <>
      {
        isOpen && (
          <DescargaFormularios nombre={nombre} isOpen={isOpen} setIsOpen={setIsOpen} ></DescargaFormularios>
                 )
      }
      <div className="card">
        <div className="p-5 flex flex-col h-80 items-center">
          <div className="rounded-xl overflow-hidden flex-grow ">
            <img src={`/${nombre}.png`} alt={nombre} className="w-full" />
          </div>
          <h5 className="text-2xl md:text-3xl font-medium my-4 uppercase ">{nombre}</h5>
          <div className="flex justify-between flex-col w-full items-center">
            <button className="text-center bg-blue-400 text-blue-700 py-2 rounded-lg font font-semibold hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out w-full" onClick={() => setIsOpen(true)}>Formulario</button>
          </div>
        </div>
      </div>
    </>
  );
};
