import { Card } from "./Card"
export const Principal = () => {
    return (
        <div className="flex items-center justify-center min-h-screen container mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card nombre="zurich"></Card>
                <Card nombre="allianz"></Card>


            </div>
        </div>
    )
}
