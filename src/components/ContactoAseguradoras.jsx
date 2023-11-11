/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from 'react';
import datosContactos from '../../Scripts/datosContactos.json';

const ContactoAseguradoras = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    const openModal = (contact) => {
        setSelectedContact(contact);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedContact(null);
        setShowModal(false);
    };

    return (
        <>
            <div className="container mx-auto flex items-center justify-center py-5 ">
                <img className="max-w-xs my-3" src="/Copia de NBP bordo.JPG"></img>
            </div>
            <div className="container mx-auto">
                <h1 className="text-center text-4xl mb-5 font-semibold">Contactos Aseguradoras</h1>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10 max-h-screen" style={{ overflowY: "scroll" }}>
                    <div className="bg-white p-5 rounded-xl flex flex-col justify-center items-center gap-3 tarjeta">
                        {selectedContact && (
                            <>
                                {Object.keys(selectedContact.contactos).map((contacto, index) => (
                                    <p key={index}>
                                        <b>{contacto}: </b>
                                        {selectedContact.contactos[contacto]}
                                    </p>
                                ))}
                            </>
                        )}
                        <button
                            className="bg-red-900 py-1 px-6 rounded-lg text-white font-medium mt-3 hover:bg-red-700 focus:scale-95 transition-all duration-200 ease-out"
                            onClick={closeModal}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            <div className='m-5'>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {datosContactos.companias.map((compania, index) => (

                        <div
                            key={index}
                            className="bg-white p-5 rounded-xl shadow-lg  h-72 flex flex-col justify-between items-center gap-3 tarjeta"
                            onClick={() => openModal(compania)}
                        >
                            <div className="flex justify-center  rounded-xl overflow-hidden flex-grow">
                                <img src={`/${compania.nombre}.png`} alt={compania.nombre} className="object-contain no-select" />

                            </div>
                            <div className="flex justify-between flex-col w-full items-center">
                                <button
                                    className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-semibold hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                                >
                                    Contacto
                                </button>
                            </div>
                            {/* Aquí podrías incluir cualquier otro detalle que desees mostrar */}
                        </div>
                    ))}
                </div>
            </div>



        </>
    );
}

export default ContactoAseguradoras;
