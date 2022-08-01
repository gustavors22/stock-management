import Content from "./Content";
import SidebarMenu from "./SidebarMenu";
import Topbar from "./Topbar";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
            flex
            h-screen
            w-screen
        `}
    >
      <SidebarMenu />
      <div
        className={`
                flex
                flex-col
                p-7
                w-full
                bg-gray-300
                dark:bg-gray-800
            `}
      >
        <Topbar title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}
