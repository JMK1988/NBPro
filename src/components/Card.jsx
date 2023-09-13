/* eslint-disable react/prop-types */

export const Card = ({ nombre }) => {
  return (
    <div className="card">
      <div className="p-5 flex flex-col h-full items-center">
        <div className="rounded-xl overflow-hidden flex-grow ">
          <img src={`../../src/assets/${nombre}.png`} alt="Zurich" className="w-full" />
        </div>
        <h5 className="text-2xl md:text-3xl font-medium my-4 uppercase ">{nombre}</h5>
        <div className="flex justify-between flex-col w-full items-center">
          <div className="flex-grow"></div>
          <a href="#" className="text-center bg-blue-400 text-blue-700 py-2 rounded-lg font font-semibold hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out w-full">Formularios</a>
        </div>
      </div>
    </div>
  );
};
