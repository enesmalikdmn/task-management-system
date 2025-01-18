import { useDraggable, useDroppable } from '@dnd-kit/core';
import TaskRepresentation from './TaskRepresentation';

export default function DraggableDroppableTask({
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
      {...listeners}
      {...attributes}
    >
      <TaskRepresentation task={task} />
    </div>
  );
}
