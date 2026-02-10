import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

export const GameCard = ({ game }) => {
    return (
        <Card className="bg-surface-secondary rounded-lg border border-zinc-700 h-full flex flex-col">
            <CardHeader className="p-1.5">
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                        alt={game.name}
                        className="object-cover w-full h-full rounded-sm"
                        src={game.background_image || "https://heroui.com/images/hero-card-complete.jpeg"}
                    />
                </div>
            </CardHeader>
            <CardBody className="flex-1 py-3 px-4 flex flex-col gap-2">
                <p className="text-sm font-bold line-clamp-2 min-h-[2.5rem]">{game.name}</p>
                <small className="text-default-500 text-xs">Rating: {game.rating}/5</small>
                <small className="text-default-400 text-xs">{game.released}</small>
            </CardBody>
        </Card>
    );
}