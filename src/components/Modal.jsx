/* eslint-disable no-unused-vars */
import { useState ,useEffect } from "react"

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5 ">
          <div>
          <iframe width="700" height="500" src="https://www.youtube.com/embed/vChkQjv62uA" title="Conoce NB Pro"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
        
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