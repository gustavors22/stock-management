import { HomeIcon, SettingsIcon, ShoppingCartIcon } from "../icons";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

export default function SidebarMenu(){
    return (
        <aside>
            <Logo />
            <SidebarItem url="/products" text="Produtos" icon={ShoppingCartIcon} />
            <SidebarItem url="/" text="Configurações" icon={SettingsIcon} />
        </aside>
    )
}