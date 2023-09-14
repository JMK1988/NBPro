import { Card } from "./Card";
import { ModalProvider } from "./ModalProvider";

export const Principal = () => {
  return (
    <ModalProvider>
      <div className="flex items-center justify-center min-h-screen container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card nombre="zurich" />
          <Card nombre="allianz" />
          <Card nombre="noble" />
          <Card nombre="premiar" />
        </div>
      </div>
    </ModalProvider>
  );
};

