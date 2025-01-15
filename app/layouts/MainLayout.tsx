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
    <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="bg-gray-700 text-white w-full md:w-64 p-4 hidden md:block overflow-y-auto">
        {sidebar}
      </aside>

      {/* Task List and Task Details */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Task List */}
        <main className="flex-1 bg-gray-100 overflow-y-auto p-4">{taskList}</main>

        {/* Task Details */}
        <aside className="bg-white border-t md:border-t-0 md:border-l border-gray-200 w-full md:w-80 p-4 overflow-y-auto">
          {taskDetails}
        </aside>
      </div>
    </div>
  </div>
  );
};

export default MainLayout;
