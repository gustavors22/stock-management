import { ArchiveIcon, ForwardIcon, ShoppingCartIcon } from "../icons";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

export default function SidebarMenu() {
  return (
    <aside
      className={`
            flex flex-col
        `}
    >
      <div
        className={`
                  flex flex-col items-center justify-center
                  h-20 w-full
                  bg-gradient-to-r from-indigo-500 to-purple-800
            `}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <SidebarItem url="/" text="Produtos" icon={ShoppingCartIcon} />
        <SidebarItem url="/productStocks" text="Estoque" icon={ArchiveIcon} />
        <SidebarItem
          url="/stockMovements"
          text="Movimentações"
          icon={ForwardIcon}
        />
      </ul>
    </aside>
  );
}
