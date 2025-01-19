'use client';

import Avatar from '@mui/material/Avatar';
import { TextField, Menu } from '@mui/material';
import { useState } from 'react';

export default function TaskRepresentation({
  task,
}: {
  task: {
    id: string;
    name: string;
    workflowStatus: string;
    storyPoint: number;
    assignedTo: string;
    startDate: string;
    endDate: string;
  };
}) {
  const [taskName, setTaskName] = useState(task.name);
  const [isEditing, setIsEditing] = useState(false);
  const [anchorElStatus, setAnchorElStatus] = useState<HTMLElement | null>(null);
  const [ statusList, setStatusList ] = useState(['open', 'in progress', 'in review', 'done']);
  const [isEditingStoryPoint, setIsEditingStoryPoint] = useState(false);
  const [taskStoryPoint, setTaskStoryPoint] = useState(task.storyPoint);

  const handleTaskName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
    task.name = event.target.value;
  };

  const handleTaskStoryPoint = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskStoryPoint(Number(event.target.value));
    task.storyPoint = Number(event.target.value);
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleOpenStatusMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElStatus(event.currentTarget);
  };


  return (
    <div className="flex flex-col pl-8 sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-300 rounded-lg bg-white overflow-hidden shadow-lg">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        <div className="font-bold text-gray-700 shrink-0">{task.id}</div>
        {isEditing ? (
        <TextField
          value={taskName}
          onChange={handleTaskName}
          onBlur={handleBlur}
          size="small"
          variant="standard"
          autoComplete="off"
          sx={{
            width: '100%',
            '& .MuiInput-underline:before': {
              borderBottom: 'none',
            },
            '& .MuiInput-underline:after': {
              borderBottom: 'none',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottom: 'none',
            },
          }}
        />
      ) : (
        <div
          className="text-gray-600 text-sm truncate w-full sm:w-auto"
          onClick={handleClick}
        >
          {taskName}
        </div>
      )}
      </div>
      <div className="flex gap-4 mt-2 sm:mt-0 items-center w-full sm:w-auto">
        <div onClick={(event) => handleOpenStatusMenu(event)} className="w-24 flex justify-center px-2 py-1 rounded text-sm font-bold bg-[#e9f2ff] text-[#0052cc] shrink-0">
          {task.workflowStatus}
        </div>
        <Menu
          anchorEl={anchorElStatus}
          open={Boolean(anchorElStatus)}
          onClose={() => setAnchorElStatus(null)}
        > <div className="flex flex-col items-center gap-2 w-[8rem]">
          {
          statusList.map((status, index) => (
            <div
              key={index}
              className="w-24 cursor-pointer flex justify-center px-2 py-1 rounded text-sm font-bold bg-[#e9f2ff] text-[#0052cc] shrink-0"
              onClick={() => {
                task.workflowStatus = status;
                setAnchorElStatus(null);
              }}
            >
              {status}
            </div>
          ))
        }
        </div>

        </Menu>
        {isEditingStoryPoint ? (
          <TextField
            value={taskStoryPoint}
            onChange={handleTaskStoryPoint}
            onBlur={() => setIsEditingStoryPoint(false)}
            size="small"
            variant="standard"
            autoComplete="off"
            autoFocus
            sx={{
              width: '3rem',
              '& .MuiInput-underline:before': {
                borderBottom: 'none',
              },
              '& .MuiInput-underline:after': {
                borderBottom: 'none',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottom: 'none',
              },
            }}
          />
        ): (
          <div
            className="w-6 h-6 flex items-center justify-center px-2 py-1 rounded-full text-sm font-bold bg-green-100 text-green-800 shrink-0"
            onClick={() => setIsEditingStoryPoint(true)}
          >
            {task.storyPoint}
          </div>
        )}
        <Avatar
          className="!w-8 !h-8 shrink-0"
          alt={task.assignedTo}
          src={task.assignedTo}
        />
      </div>
    </div>
  );
}
