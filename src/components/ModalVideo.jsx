/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"

export const ModalVideo = () => {
  const [isOpen, setIsOpen] = useState(true)
  useEffect(() => {
    setIsOpen(true)
  }, [])
  return (
    <>

      {isOpen && (<div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5 ">
          <div >
            <iframe className="w-full aspect-video" width="700" height="500" src="https://www.youtube.com/embed/vChkQjv62uA" title="Conoce NB Pro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>

          <div>
            <button className="bg-red-900 py-1 px-6 rounded-lg text-white font-medium mt-5 hover:bg-red-700 focus:scale-95 transition-all duration-200 ease-out" onClick={() => setIsOpen(false)}>Cerrar</button>
          </div>
        </div>
      </div>)
      }

    </>
  )
}

