'use client'

import React from "react";
import AdbIcon from '@mui/icons-material/Adb';
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 shadow-md">
      {/* Left: Icon and Logo */}
      <div className="flex items-center gap-4">
        <AdbIcon />
        <span className="text-lg font-bold">EMD</span>
      </div>

      {/* Center: Navigation */}
      <nav className="hidden md:flex gap-8">
        <span className="font-semibold hover:text-blue-400 cursor-pointer">Project</span>
        <span className="font-semibold hover:text-blue-400 cursor-pointer">Teams</span>
      </nav>

      {/* Right: Icons and Avatar */}
      <div className="flex items-center gap-4">
        <NotificationsIcon className="cursor-pointer" />
        <SettingsIcon className="cursor-pointer" />
        <Avatar
          alt="Enes Malik Duman"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 32, height: 32 }}
        />
      </div>
    </header>
  );
}
