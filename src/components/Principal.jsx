/* eslint-disable no-unused-vars */

import { Card } from "./Card";
import { ModalProvider } from "./ModalProvider";
import datosArchivos from '../../Scripts/datosArchivos.json';

export const Principal = () => {
  console.log(datosArchivos)
  const datos = datosArchivos;
  return (
    <ModalProvider>
      <div className="flex items-center justify-center min-h-screen container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {Object.keys(datos).map((nombre, index) =>(
            <Card key={index} nombre={nombre} imagenes={datos[nombre]} />
          ))}


          {/* <Card nombre="Allianz" />
          <Card nombre="Asociart"/>
          <Card nombre="ATM"/>
          <Card nombre="Berkley"/>
          <Card nombre="Cauciones"/>
          <Card nombre="Chubb" />
          <Card nombre="Colon"/>
          <Card nombre="Experta ART"/>
          <Card nombre="Federación"/>
          <Card nombre="Galeno ART"/>
          <Card nombre="Hanseatica" />
          <Card nombre="HDI"/>
          <Card nombre="La Holando"/>
          <Card nombre="Libra"/>
          <Card nombre="Mapfre"/>
          <Card nombre="Mercantil" />
          <Card nombre="Meridional"/>
          <Card nombre="Noble"/>
          <Card nombre="Pacifico"/>
          <Card nombre="QBE ART" />
          <Card nombre="RIO URUGUAY"/>
          <Card nombre="Rivadavia"/>
          <Card nombre="Sancor"/>
          <Card nombre="Prevencion"/>
          <Card nombre="SMG"/>
          <Card nombre="SMG Life"/>
          <Card nombre="Sura" />
          <Card nombre="Testimonio"/>
          <Card nombre="TPC"/>
          <Card nombre="Victoria"/>
          <Card nombre="Zurich"/> */}
        </div>
      </div>
    </ModalProvider>
  );
};

