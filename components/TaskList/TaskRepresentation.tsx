import Avatar from '@mui/material/Avatar';

export default function TaskRepresentation({
  task,
}: {
  task: {
    id: string;
    name: string;
    workflowStatus: string;
    storyPoint: number;
    assignedTo: string;
  };
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-300 rounded-lg bg-white overflow-hidden shadow-lg">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full">
        <div className="font-bold text-gray-700 shrink-0">{task.id}</div>
        <div className="text-gray-600 text-sm truncate w-full sm:w-auto">
          {task.name}
        </div>
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
