import React, { ReactNode } from "react";
import { List, Divider } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import TimelineIcon from "@mui/icons-material/Timeline";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ListIcon from "@mui/icons-material/List";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from "@mui/icons-material/Security";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SidebarItem from "./SidebarItem";

export interface SidebarItemProps {
  label: string;
  icon: ReactNode;
}


const sidebarItems = [
  {
    section: "Planning",
    items: [
      { label: "Summary", icon: <LanguageIcon />, },
      { label: "Timeline", icon: <TimelineIcon /> },
      { label: "Backlog", icon: <AssignmentIcon />, },
      { label: "Board", icon: <ListIcon /> },
      { label: "Calendar", icon: <CalendarTodayIcon /> },
      { label: "List", icon: <ListIcon /> },
      { label: "Reports", icon: <BarChartIcon /> },
      { label: "Forms", icon: <DescriptionIcon /> },
      { label: "Goals", icon: <TrackChangesIcon /> },
      { label: "Issues", icon: <CheckCircleIcon /> },
    ],
  },
  {
    section: "Development",
    items: [
      { label: "Code", icon: <CodeIcon /> },
      { label: "Security", icon: <SecurityIcon /> },
      { label: "Releases", icon: <CloudUploadIcon /> },
    ],
  },
  {
    section: "Operations",
    items: [{ label: "Deployments", icon: <CloudUploadIcon /> }],
  },
];

const Sidebar: React.FC = () => {
  return (
    <div style={{ width: 250, padding: "1rem", height: "100vh" }}>
      {sidebarItems.map((section, index) => (
        <div key={index} className="flex flex-col gap-3">
          <h3 className="font-bold">{section.section}</h3>
          <List className="flex flex-col gap-3">
            {section.items.map((item, itemIndex) => (
              <SidebarItem
                key={itemIndex}
                item={item}
              ></SidebarItem>
            ))}
          </List>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
