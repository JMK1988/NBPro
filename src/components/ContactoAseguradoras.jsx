/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
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

    const handleContact = (type, value) => {
        switch (type) {
            case 'WhatsApp':
                window.open(`https://wa.me/${value}`, '_blank');
                break;
            case 'telefono':
                window.open(`tel:${value}`, '_blank');
                break;
            case 'email':
                window.open(`mailto:${value}`, '_blank');
                break;
            case 'web':
                window.open(value, '_blank');
                break;
            case 'remolque':
            case 'alarma':
            case 'telefono_fijo':
            case 'denuncia_de_siniestros_automotores':
            case 'desde_exterior':
                if (value.match(/\d+/g)) {
                    window.open(`tel:${value}`, '_blank');
                } else {
                    console.log('Valor no válido para realizar llamada');
                }
                break;
                case 'sms':
                    if (value) {
                        window.alert(`Mensaje: ${value}`);
                    } else {
                        console.log('No hay mensaje disponible para mostrar');
                    }
                    break;
            default:
                console.log('Tipo de contacto no compatible');
        }
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10 max-h-screen" style={{ overflowY: "scroll" }}>
                    <div className="bg-white p-5 rounded-xl flex flex-col justify-center items-center gap-3 tarjeta">
                        {selectedContact && (
                            <>
                                {Object.entries(selectedContact.contactos).map(([contactType, contactValue], index) => (
                                    <button
                                        key={index}
                                        className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-semibold hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                                        onClick={() => handleContact(contactType, contactValue)}
                                    >
                                        {contactType}
                                    </button>
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

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {datosContactos.companias.map((compania, index) => (
                    <div
                        key={index}
                        className="bg-white p-5 rounded-xl shadow-lg h-72 flex flex-col justify-between items-center gap-3 tarjeta"
                        onClick={() => openModal(compania)}
                    >
                        <div className="flex justify-center rounded-xl overflow-hidden flex-grow">
                            <img src={`/${compania.nombre}.png`} alt={compania.nombre} className="object-contain no-select" />
                        </div>
                        <div className="flex justify-between flex-col w-full items-center">
                            <button
                                className="text-center bg-gray-600 text-white py-1 px-6 rounded-lg font font-semibold hover:bg-gray-300 focus:scale-95 transition-all duration-200 ease-out w-full"
                            >
                                Contacto
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ContactoAseguradoras;

