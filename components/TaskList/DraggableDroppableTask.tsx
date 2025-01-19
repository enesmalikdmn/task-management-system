import { useDraggable, useDroppable } from '@dnd-kit/core';
import TaskRepresentation from './TaskRepresentation';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

export default function DraggableDroppableTask({
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
  const {
    setNodeRef: draggableRef,
    attributes,
    listeners,
  } = useDraggable({
    id: task.id,
  });

  const { setNodeRef: droppableRef } = useDroppable({
    id: task.id,
  });

  return (
    <div
      ref={(node) => {
        draggableRef(node);
        droppableRef(node);
      }}
      {...attributes}
      className='relative'
    >
      <div className='absolute flex items-center top-5 left-0' {...listeners}>
        <DragIndicatorIcon />
      </div>
      <TaskRepresentation task={task} />
    </div>
  );
}
