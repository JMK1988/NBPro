/* eslint-disable no-unused-vars */

import { Card } from "./Card";
import { ModalProvider } from "./ModalProvider";
import datosArchivos from '../../Scripts/datosArchivos.json';

export const Principal = () => {
  const datos = datosArchivos;
  return (
    <ModalProvider>
      <div className="flex items-center justify-center min-h-screen container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {Object.keys(datos).map((nombre, index) =>(
            <Card key={index} nombre={nombre} imagenes={datos[nombre]} />
          ))}
        </div>
      </div>
    </ModalProvider>
  );
};

