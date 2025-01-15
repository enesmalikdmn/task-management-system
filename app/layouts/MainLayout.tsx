import React, { ReactNode } from "react";

interface MainLayoutProps {
  header: ReactNode;
  sidebar: ReactNode;
  taskList: ReactNode;
  taskDetails: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  header,
  sidebar,
  taskList,
  taskDetails,
}) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">{header}</header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="bg-gray-700 text-white w-64 p-4 hidden md:block overflow-y-auto">
          {sidebar}
        </aside>

        {/* Task List */}
        <main className="flex-1 bg-gray-100 overflow-y-auto p-4">{taskList}</main>

        {/* Task Details */}
        <aside className="bg-white border-l border-gray-200 w-full md:w-[400px] p-4 overflow-y-auto hidden lg:block">
          {taskDetails}
        </aside>
      </div>
    </div>
  );
};

export default MainLayout;
