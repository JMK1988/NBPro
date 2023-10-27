/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const Card2 = ({ nombre }) => {
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
        <div className="card2">
            <div className="p-5 flex flex-col h-80 items-center">
                <div className="flex justify-center rounded-xl overflow-hidden flex-grow">
                    <img src={`/${nombre}.png`} alt={nombre} className="object-contain no-select" />
                </div>
                <div className="flex justify-between flex-col w-full items-center">
                    <button
                        className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font-medium hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                        onClick={openModal}
                    >
                        Formulario
                    </button>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10 max-h-screen">
                    <div className="bg-white p-5 rounded-xl flex flex-col justify-center items-center gap-5">
                        <h2 className="text-lg font-semibold">Requisitos de Alta de Código</h2>
                        <ul className="text-left">
                            <li>-Formulario completo firmado y escaneado</li>
                            <li>-Fotocopia de la factura</li>
                            <li>-Copia de CIPAS Credencial SSN de frente y dorso</li>
                            <li>-Fotocopia de frente y dorso del Documento de Identidad</li>
                            <li>-Inscripción de Ingresos Brutos / Convenio Multilateral actualizado</li>
                            <li>-Constancia de Inscripción de la AFIP</li>
                            <li>-Copia Constancia de CBU Bancario (no Banco online)</li>
                            <li>-Constancia Boleta de pago de matrícula SSN actualizada</li>
                            <li>-Pago de Libros Rubricados de Cobranza y Operaciones actualizada</li>
                            <li>-Constancia inscripción UIF actualizada</li>
                            <li>-Último pago de Monotributo</li>
                        </ul>
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

export default Card2;

