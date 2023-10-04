/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react"
const datosArchivos = {
    "Allianz": [
        "Alta de Agentes.pdf"
    ],
    "Asociart": [
        "Solicitud de adhesion.pdf",
        "solicitud de alta de productor.pdf"
    ],
    "ATM": [
        "Alta Persona Fisicas.pdf",
        "Alta Personas Fisicas.docx",
        "Alta Personas Juridicas.pdf",
        "INSTRUCTIVO Vigencia Inspeccion.pdf",
        "Pautas administrativas cobranzas facturacion.pdf",
        "Requisitos de Alta.doc",
        "SERVICIOS BRINDADOS A LOS ASOCIADOS.pdf"
    ],
    "Berkley": [
        "ALTA DE PRODUCTOR FORMULARIO.pdf",
        "CONDICIONES COMERCIALES NB PRODUCTORES.xls",
        "Documentacion Alta Codigo.doc"
    ],
    "Cauciones": [
        "Alta Cauciones.XLS",
        "Alta Productor.pdf"
    ],
    "Chubb": [
        "Formulario de alta de Broker.pdf",
        "Formulario de alta Productor.pdf",
        "PROGRAMA ULTU.doc"
    ],
    "Colon": [
        "Formulario Alta Organizador.pdf",
        "Formulario Alta Productor.pdf",
        "Formulario PEP.pdf",
        "Formulario sujeto obligado .pdf",
        "Grilla Comisiones CRESPO FERNANDO (NB Broker - Gaston Blousson) .pdf",
        "Grilla Comisiones NB NORDEN BROKER .pdf",
        "Grilla Comisiones NB PRODUCTORES . .pdf",
        "PLANILLA distribucion comisiones.xlsx"
    ],
    "Experta ART": [
        "Alta Productor.pdf",
        "Alta Proveedor.PDF",
        "PAS Formulario Convenio ART 2022.pdf",
        "PAS Formulario Convenio SEGUROS 2022.pdf",
        "SOLICITUD DE ACREDITACION DE CUENTA.doc"
    ],
    "Federación": [
        "0650 SV Admisioìn Productor 2017.pdf",
        "Alta PAS Nota a Produdctores por Res. 202 2015 UIF.pdf",
        "Alta PAS Plantilla para Digitalizar firma de los Productores de Seguros.pdf",
        "Alta PAS RC PAS.pdf",
        "CBU SV Adhesion Tarjetas.pdf",
        "Documentacion Apertura Código PAS.doc",
        "FORMULARIO SOLICITUD DE TRANSFERENCIA PRODUCTORES .pdf",
        "IMPORTANTE - Alta PAS REQUISITOS PARA ALTA DE PAS (OBLIGATORIO).pdf"
    ],
    "Galeno ART": [
        "CONVENIO ORGANIZADOR ART.DOC",
        "CONVENIO PRODUCTORES ART.DOC",
        "Documentación a adjuntar al ABM.doc",
        "NOTA FAX CBU productores Sistema Siete.doc",
        "PRODUCTORES ABM.DOC",
        "PRODUCTORES CBU.DOC",
        "Solicitud clave web PROBROK.PDF",
        "Solicitud Clave webprbr.pdf"
    ],
    "Hanseatica": [
        "Formulario.doc",
        "SOLICITUD DE INGRESO PRODUCTOR.doc"
    ],
    "HDI": [
        "Formulario de Alta.doc"
    ],
    "La Holando": [
        "SOLICITUD INGRESO HOLANDO NET.pdf",
        "SOLICITUD INSCRIPCION PRODUCTOR.pdf",
        "SOLICITUD PARA PAGO COMISIONES.pdf"
    ],
    "Libra": [
        "FORMULARIO ALTA.pdf"
    ],
    "Mapfre": [
        "Acuerdo bilateral de datos Productor.doc",
        "Solicitud Alta Tradicional.pdf",
        "Solicitud de adhesión cbu.pdf",
        "VINCULACION PAS ORG.DOC"
    ],
    "Mercantil": [
        "Datos Prod LMA(CBU)3 - PAS.pdf",
        "Ma requisitos de Alta PAS.pdf",
        "solicitud productor Mercantil.jpg"
    ],
    "Meridional": [
        "Acuerdo productor STD.doc",
        "Carta de Vinculación a Organizador.doc",
        "Formato Fichas productor.doc",
        "Formulario de alta de Productor - Organizador.xls",
        "Pago Comisiones.doc",
        "Requisitos de Alta.doc"
    ],
    "Noble": [
        "Formulario de alta.pdf"
    ],
    "Pacifico": [
        "Alta de Productor.pdf",
        "PAS - Transferencia Comisiones.pdf"
    ],
    "Plus": [
        "FORMULARIO ALTA.pdf"
    ],
    "QBE ART": [
        "FORMULARIO ALTA.pdf"
    ],
    "RIO URUGUAY": [
        "FORMULARIO ALTA.pdf",
        "RUS Altas requisitos de documentacion.docx"
    ],
    "Rivadavia": [
        "Solicitud de Alta de Código.xlsx"
    ],
    "Sancor": [
        "Antecedentes Personales y DDJJ.DOC",
        "Carta Oferta Seguros.doc",
        "CONTROL DOCUMENTACIÓN PARA PAS.XLS",
        "Convenio Cobranza y Rendic. de Ctas..doc",
        "Datos Personales y Manif Bienes.pdf",
        "FormularioTransf Bancaria de Fondos.pdf",
        "Relevamiento Confidencial.pdf",
        "Requisitos.pdf"
    ],
    "Prevencion": [
        "Antecedentes Personales y DDJJ.DOC",
        "Carta Oferta PREVENCION Salud.docx",
        "Carta oferta Prevencion.docx",
        "CONTROL DOCUMENTACIÓN PARA PAS.XLS",
        "Convenio Cobranza y Rendic. de Ctas..doc",
        "Datos Personales y Manif  Bienes.pdf",
        "Formulario Transf. Bancaria de Fondos.pdf",
        "Relevamiento Confidencial.pdf",
        "requisitos.pdf"
    ],
    "SMG": [
        "Correos electrónicos Productores y Brokers Final.pdf",
        "FORMULARIO Productores y Brokers.pdf",
        "SMG Seguros Formulario de alta NBP.xls"
    ],
    "SMG Life": [
        "Solicitud alta de productor.pdf"
    ],
    "Sura": [
        "FORMULARIO ALTA PAS.pdf"
    ],
    "Testimonio": [
        "FORMULARIO Alta.doc"
    ],
    "TPC": [
        "Formulario Alta de PAS TPC.pdf"
    ],
    "Victoria": [
        "CARTA ALTA PRODUCTOR.doc",
        "CBU vigente.doc",
        "Com Nvas Norden Brokers.xls",
        "Cond Gral Prod. Noveles-Chicos.xls",
        "FormULARIO Victoria Net.doc",
        "Grilla Ex CC3.xls"
    ],
    "Zurich": [
        "DDJJ ProductoresA gentes.pdf",
        "Documentacion A Presentar.docx",
        "Formulario Alta.xlsm",
        "Formulario Cond Comerciales.xlsm",
        "Formulario Evaluación de Reclutamiento.pdf",
        "Proceso ABM Agentes Pandemia.docx",
        "UIF.pdf"
    ]
}

export const DescargaFormularios = ({ nombre, setIsOpen, isOpen }) => {
    const archivos = datosArchivos[nombre]; // Obtener la lista de archivos según el nombre

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


