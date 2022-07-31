import Content from "./Content"
import SidebarMenu from "./SidebarMenu"
import Topbar from "./Topbar"

interface LayoutProps{
    title: string,
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps){
    return (
        <div>
            <SidebarMenu />
            <Topbar title={props.title} subtitle={props.subtitle}/>
            <Content> 
                {props.children}
            </Content>
        </div>
    )
}