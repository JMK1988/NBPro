/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const Card4 = ({ nombre }) => {
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
                    <img src="/contactos.jpg" alt="contacto" className="object-contain no-select" />
                </div>
                <div className="flex justify-between flex-col w-full items-center">
                    <button
                        className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                        onClick={openModal}
                    >
                        Contacto
                    </button>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10 max-h-screen " style={{ overflowY: "scroll" }}>
                    <div className="bg-white p-5 rounded-xl flex flex-col justify-center items-center gap-3 tarjeta">
                        <p><b>Tecnico: </b>Cotizaciones de todos los Ramos</p>
                        <a
                            className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                            href="mailto:cotizaciones@nbpro.ar"
                        >cotizaciones@nbpro.ar</a>
                        <a
                            className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                            href="tel:+11 5256 2262"
                        >
                            <b>Verónica: </b>11 5256 2262</a>

                        <p><b>Comercial: </b>Campañas, incentivos y promociones</p>
                        <a
                            className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                            href="mailto:cotizaciones@nbpro.ar"
                        >cotizaciones@nbpro.ar</a>
                        <a
                            className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                            href="tel:+11 5256 2259"
                        ><b>Mariel: </b>11 5256 2259</a>

                        <p><b>Operaciones: </b>Emisiones, renovaciones, endosos</p>
                        <a
                            className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                            href="mailto:operaciones@nbpro.ar"
                        >operaciones@nbpro.ar</a>
                        <a
                            className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                            href="tel:+11 5256 2261"
                        ><b>Lucía: </b>11 5256 2261</a>

                        <p><b>Cobranzas: </b>Medios de pago, cuponeras, comisiones</p>
                        <a
                            className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                            href="mailto:cobranzas@nbpro.ar"
                        >cobranzas@nbpro.ar</a>
                        <a
                            className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                            href="tel:+11 5256 2260"
                        ><b>Francisco: </b>11 5256 2260</a>

                        <p><b>Siniestros: </b>Todas las Aseguradoras</p>
                        <a
                            className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                            href="mailto:siniestros@nbpro.ar"
                        >siniestros@nbpro.ar</a>
                        <a
                            className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                            href="tel:+11 5256 2260"
                        ><b>Luján/Francisco </b>11 5256 2260</a>

                        <p><b>Soporte: </b>Altas de Códigos, Claves y accesos Aseguradoras</p>
                        <a
                            className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                            href="mailto:soporte@nbpro.ar"
                        >soporte@nbpro.ar</a>
                        <button
                            className="bg-red-900 py-1 px-6 rounded-lg text-white font-medium mt-3 hover:bg-red-700 focus:scale-95 transition-all duration-200 ease-out"
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

export default Card4;

