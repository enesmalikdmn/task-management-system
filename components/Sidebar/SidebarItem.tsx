import { ListItemIcon, ListItemText } from "@mui/material";
import { SidebarItemProps } from "../Sidebar"

export default function SidebarItem({item: item}: {item: SidebarItemProps}) {
    return (
        <div className="flex items-center cursor-pointer">
            <ListItemIcon className="sidebar-icons">{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
        </div>
    );
}