import { useEffect } from "react";

export default function ImageModal({ imageUrl, isOpen, onClose }) {
    useEffect(() => {
        if (!isOpen) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen || !imageUrl) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-4">
            <div className="relative inline-block">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-2 top-2 z-20 h-10 w-10 rounded-full border border-white/90 bg-black/75 text-white text-3xl leading-none hover:bg-black/95 transition-colors"
                    aria-label="Cerrar modal"
                >
                    &times;
                </button>
                <img
                    src={imageUrl}
                    alt="Captura del videojuego"
                    className="w-auto h-auto max-w-[95vw] max-h-[90vh] object-contain rounded-xl"
                />
            </div>
        </div>
    );
}
