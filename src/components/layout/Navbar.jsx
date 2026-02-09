import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/navbar";
import { Link, Button } from "@heroui/react";
import { SearchInput } from "../SearchInput";
import UserInfo from "../UserInfo";

const NavbarApp = () => {
    return (
        <Navbar
            shouldHideOnScroll
            maxWidth="full"
            className="p-3 bg-surface-darkest w-full border-b-1 border-primary"
            classNames={{
                wrapper: "w-full max-w-none px-5",
                base: "w-full"
            }}
        >
            <div className="hidden sm:flex w-full items-center gap-4">
                <div className="flex-1" />
                <div className="flex-shrink-0">
                    <SearchInput />
                </div>
                <div className="flex-1 flex justify-end">
                    <UserInfo />
                </div>
            </div>
        </Navbar>
    );
}

export default NavbarApp;