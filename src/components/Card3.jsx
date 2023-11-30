/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const Card3 = ({ nombre }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="card2 h-72">
            <div className="p-5 flex flex-col h-72 items-center">
                <div className="flex justify-center rounded-xl overflow-hidden flex-grow">
                    <img src={`/${nombre}.png`} alt={nombre} className="object-contain no-select" />
                </div>
                <div className="flex justify-between flex-col w-full items-center">
                    <button
                        className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                        onClick={openModal}
                    >
                    Designaciones
                    </button>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10 max-h-screen">
                    <div className="bg-white p-5 rounded-xl flex flex-col justify-center items-center gap-5">
                        <a
                            className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                            href="../../public/NBP Asegurado_ Carta de nombramiento designacion .docx"
                            download="../../public/NBP Asegurado_ Carta de nombramiento designacion .docx"
                        >NBP Asegurado_ Carta de nombramiento designacion</a><a
                            className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                            href="../../public/NBP Organizador Carta de nombramiento designacion .docx"
                            download="../../public/NBP Organizador Carta de nombramiento designacion .docx"
                        >NBP Organizador Carta de nombramiento designacion</a>
                        <button
                            className="bg-red-900 py-1 px-6 rounded-lg text-white font-medium mt-5 hover:bg-red-700 focus:scale-95 transition-all duration-200 ease-out"
                            onClick={closeModal}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card3;

