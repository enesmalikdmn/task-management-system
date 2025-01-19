'use client';

import Avatar from '@mui/material/Avatar';
import { TextField } from '@mui/material';
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

  const handleTaskName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
    task.name = event.target.value;
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
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
        <div className="w-24 flex justify-center px-2 py-1 rounded text-sm font-bold bg-[#e9f2ff] text-[#0052cc] shrink-0">
          {task.workflowStatus}
        </div>
        <div className="w-6 h-6 flex items-center justify-center px-2 py-1 rounded-full text-sm font-bold bg-green-100 text-green-800 shrink-0">
          {task.storyPoint}
        </div>
        <Avatar
          className="!w-8 !h-8 shrink-0"
          alt={task.assignedTo}
          src={task.assignedTo}
        />
      </div>
    </div>
  );
}
