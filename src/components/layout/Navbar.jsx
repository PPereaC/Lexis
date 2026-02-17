import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { Gamepad2, ChevronDown } from "lucide-react";
import { useGenres } from "../../hooks/useGenres";

export const SearchIcon = ({ size = 24, strokeWidth = 1.5, width, height, ...props }) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={height || size}
            role="presentation"
            viewBox="0 0 24 24"
            width={width || size}
            {...props}
        >
            <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
            />
            <path
                d="M22 22L20 20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
            />
        </svg>
    );
};

export const NavbarApp = () => {
    const { genres, loading } = useGenres();
    const [isGenresOpen, setIsGenresOpen] = useState(false);

    return (
        <Navbar isBordered className="w-full bg-surface-darkest border-b border-primary h-13" maxWidth="xl">
            <NavbarContent justify="start" className="flex-1 items-center">
                <NavbarBrand className="ml-8 mr-6">
                    <Gamepad2 size={31} className="mr-2 text-primary mt-1" />
                    <p className="font-primary font-bold text-primary text-2xl">LEXIS</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex flex-1 justify-center gap-8 text-text-title">
                <NavbarItem>
                    <Link className="text-text-title hover:text-primary font-medium" href="/">
                        Tendencias
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-text-title hover:text-primary font-medium" aria-current="page" href="/ultimos-lanzamientos">
                        Novedades
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-text-title hover:text-primary font-medium" href="#">
                        Próximamente
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-text-title hover:text-primary font-medium" href="#">
                        Eternos
                    </Link>
                </NavbarItem>
                
                {/* Mega Menú de Géneros */}
                <NavbarItem 
                    onMouseEnter={() => setIsGenresOpen(true)} 
                    onMouseLeave={() => setIsGenresOpen(false)}
                >
                    <Popover 
                        isOpen={isGenresOpen} 
                        onOpenChange={setIsGenresOpen}
                        placement="bottom"
                        offset={20}
                        triggerScaleOnOpen={false}
                        classNames={{
                            content: "w-[800px] p-6 bg-[#1a1a1a] border border-white/10 shadow-2xl rounded-xl backdrop-blur-xl"
                        }}
                    >
                        <PopoverTrigger>
                            <Link 
                                className="text-text-title hover:text-primary cursor-pointer gap-1 font-medium items-center"
                                onPress={(e) => e.preventDefault()}
                            >
                                Géneros
                            </Link>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="grid grid-cols-4 gap-6 w-full">
                                <div className="col-span-1 space-y-4 border-r border-white/10 pr-4">
                                    <h4 className="text-lg font-bold text-primary mb-2">Destacados</h4>
                                    <Link href="#" className="block text-gray-300 hover:text-white text-sm">RPG</Link>
                                    <Link href="#" className="block text-gray-300 hover:text-white text-sm">Acción</Link>
                                    <Link href="#" className="block text-gray-300 hover:text-white text-sm">Aventura</Link>
                                    <Link href="#" className="block text-gray-300 hover:text-white text-sm">Shooter</Link>
                                    <Link href="#" className="block text-primary hover:text-primary-hover text-sm font-semibold mt-4">Ver todos los géneros</Link>
                                </div>
                                <div className="col-span-3">
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Todos los géneros</h4>
                                    {loading ? (
                                        <div className="text-gray-500 text-sm">Cargando géneros...</div>
                                    ) : (
                                        <div className="grid grid-cols-3 gap-y-3 gap-x-8">
                                            {genres?.slice(0, 15).map((genre) => (
                                                <Link 
                                                    key={genre.id} 
                                                    href={`/genre/${genre.slug}`}
                                                    className="flex items-center gap-3 group"
                                                >
                                                    <div className="w-8 h-8 rounded-lg overflow-hidden relative bg-zinc-800 flex-shrink-0 group-hover:ring-1 ring-primary transition-all">
                                                        <img 
                                                            src={genre.image_background} 
                                                            alt={genre.name}
                                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                                        />
                                                    </div>
                                                    <span className="text-gray-300 group-hover:text-primary text-sm transition-colors line-clamp-1">
                                                        {genre.name}
                                                    </span>
                                                </Link>
                                            ))}
                                            {genres?.length > 15 && (
                                                <Link href="/genres" className="text-primary text-sm hover:underline col-span-1 flex items-center">
                                                    Ver más...
                                                </Link>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end" className="items-center justify-end flex-1 gap-3 pr-4">
                <Dropdown placement="bottom-end" className="bg-surface-darkest">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="settings" className="text-white">Mi biblioteca</DropdownItem>
                        <DropdownItem key="settings" className="text-white">Ajustes</DropdownItem>
                        <DropdownItem key="logout" className="text-red-500">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}

export default NavbarApp;