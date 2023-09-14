/* eslint-disable no-unused-vars */
import { useState } from "react";

export const DescargaFormularios = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10">
                <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5 ">
                    <a className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " href="/Zurich/DDJJProductoresAgentes.pdf" download={"/Zurich/DDJJProductoresAgentes.pdf"}>DDJJ Productores Agentes</a>
                    <a className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " href="/Zurich/DocumentacionAPresentar.docx" download={"/Zurich/DocumentacionAPresentar.docx"}>Documentacion A Presentar</a>
                    <a className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " href="/Zurich/FormularioAlta.xlsm" download={"/Zurich/FormularioAlta.xlsm"}>Formulario Alta</a>
                    <a className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " href="/Zurich/FormularioCondComerciales.xlsm" download={"/Zurich/FormularioCondComerciales.xlsm"}>Formulario Comerciales</a>
                    <a className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " href="/Zurich/FormularioEvaluacionDeReclutamiento.docx" download={"/Zurich/FormularioEvaluacionDeReclutamiento.docx"}>Formulario Evaluacion De Reclutamiento </a>
                    <a className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " href="/Zurich/ProcesoABMAgentesPandemia.docx" download={"/Zurich/ProcesoABMAgentesPandemia.docx"}>Proceso ABM Agentes Pandemia</a>
                    <a className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " href="/Zurich/UIF.pdf" download={"/Zurich/UIF.pdf"}>UIF</a>

                    <div>
                        <button className="bg-red-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " onClick={() => setIsOpen(false)}>Cerrar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
