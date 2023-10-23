/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { DescargaFormularios } from "./DescargaFormularios";

export const Card = ({ nombre }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card">
      {isOpen && <DescargaFormularios nombre={nombre} setIsOpen={setIsOpen} isOpen={isOpen}/>}
      <div className="p-5 flex flex-col h-80 items-center">
        <div className="flex justify-center  rounded-xl overflow-hidden flex-grow">
          <img src={`/${nombre}.png`} alt={nombre} className="object-contain no-select" />
        </div>
        
        <div className="flex justify-between flex-col w-full items-center">
          <button
            className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-semibold hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
            onClick={toggleIsOpen}
          >
            Formulario
          </button>
        </div>
      </div>
    </div>
  );
};