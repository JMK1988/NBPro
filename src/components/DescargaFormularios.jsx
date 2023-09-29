/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react"

export const DescargaFormularios = ({nombre, isOpen, setIsOpen}) => {
    const [datosArchivos, setDatosArchivos] = useState({})
    useEffect(() => {
        // Cargar el archivo JSON generado
        fetch('/Scripts/datosArchivos.json') // Asegúrate de que esta ruta sea correcta
          .then((response) => response.json())
          .then((datos) => {
            setDatosArchivos(datos);
          })
          .catch((error) => console.error(error));
      }, []);
    
    return (
        <>
        {
            /*Object.keys(datosArchivos).map((nombreCarpeta) => (
        <div key={nombreCarpeta}>
          <h2>{nombreCarpeta}</h2>
          {datosArchivos[nombreCarpeta].map((nombreArchivo) => (
            <a
              key={nombreArchivo}
              className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold mt-5"
              href={`/public/${nombreCarpeta}/${nombreArchivo}`} // Reemplaza con la ruta adecuada
              download={nombreArchivo} // Nombre del archivo de descarga
            >
              Descargar {nombreArchivo}
            </a>
          ))}
        </div>
      ))*/
            
            
            
            
            
            isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10">
                <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5 ">
                    <a className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " href={`/zurich/DDJJProductoresAgentes.pdf`} download={`/zurich/DDJJProductoresAgentes.pdf`}>DDJJ Productores Agentes</a>
                    <a className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " href="/zurich/DocumentacionAPresentar.docx" download={"/zurich/DocumentacionAPresentar.docx"}>Documentacion A Presentar</a>
                    <a className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " href="/zurich/FormularioAlta.xlsm" download={"/zurich/FormularioAlta.xlsm"}>Formulario Alta</a>
                    <a className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " href="/zurich/FormularioCondComerciales.xlsm" download={"/zurich/FormularioCondComerciales.xlsm"}>Formulario Comerciales</a>
                    <a className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " href="/zurich/FormularioEvaluacionDeReclutamiento.docx" download={"/zurich/FormularioEvaluacionDeReclutamiento.docx"}>Formulario Evaluacion De Reclutamiento </a>
                    <a className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " href="/zurich/ProcesoABMAgentesPandemia.docx" download={"/zurich/ProcesoABMAgentesPandemia.docx"}>Proceso ABM Agentes Pandemia</a>
                    <a className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " href="/zurich/UIF.pdf" download={"/zurich/UIF.pdf"}>UIF</a>

                    <div>
                        <button className="bg-red-500 py-2 px-6 rounded-sm text-white font-bold mt-5 " onClick={() => setIsOpen(false)}>Cerrar</button>
                    </div>
                </div>
            </div>
            )
        }
            
        </>
    )
}
