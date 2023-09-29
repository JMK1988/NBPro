import { useState } from "react";
import { Card } from "./Card";
import { ModalProvider } from "./ModalProvider";

export const Principal = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ModalProvider>
      <div className="flex items-center justify-center min-h-screen container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card nombre="zurich"  isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Card nombre="allianz" isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Card nombre="noble" isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Card nombre="premiar" isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
      </div>
    </ModalProvider>
  );
};

