/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useNavigate } from "react";
import { BrowserRouter } from "react-router-dom";

const ModalVideo = ({ videoId }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [videoRef, setVideoRef] = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Cargar el video de YouTube antes de que se renderice la página
    const player = new YT.Player(videoRef.current, {
      videoId,
      playerVars: {
        loop: true,
        muted: true,
      },
    });

    // Cerrar el modal y redireccionar a la página cuando se cierre el video
    player.on("ended", () => {
      setIsModalOpen(false);
      navigate("/");
    });
  }, [navigate, videoRef, videoId]);

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      style={{ top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="modal-content bg-white rounded-lg shadow-lg p-4">
          <video
            ref={videoRef}
            className="w-full h-full"
            loop
            muted
          />
        </div>
      </div>
      <button
        className="modal-close absolute top-0 right-0 m-4 text-black w-10 h-10 flex justify-center items-center rounded-full cursor-pointer"
        onClick={() => setIsModalOpen(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0 1a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
        </svg>
      </button>
    </div>
  );
};

export default () => (
  <BrowserRouter>
    <ModalVideo videoId="my-video-id" />
  </BrowserRouter>
);