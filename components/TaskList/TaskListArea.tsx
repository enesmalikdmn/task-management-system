'use client';

import { useAppStore } from '@/store/appStore';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
} from '@dnd-kit/core';
import { useState } from 'react';
import DraggableDroppableTask from './DraggableDroppableTask';
import TaskRepresentation from './TaskRepresentation';
import CreateTaskArea from './CreateTaskArea';

export default function TaskListArea() {
  const { tasks: taskList, updateTaskOrder } = useAppStore();
  const [activeTask, setActiveTask] = useState<null | typeof taskList[0]>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      setActiveTask(null);
      return;
    }

    updateTaskOrder(active.id.toString(), over.id.toString());
    setActiveTask(null);
  };

  return (
    <div className="flex flex-col h-[42rem] overflow-y-auto gap-2">
    <DndContext
      onDragStart={({ active }) => {
        const task = taskList.find((task) => task.id === active.id);
        if (task) setActiveTask(task);
      }}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveTask(null)}
    >
      <div className="flex flex-col h-64 gap-2">
        {taskList.map((task) => (
          <DraggableDroppableTask key={`${task.id}-${task.startDate}`} task={task} />
        ))}
        <CreateTaskArea />
      </div>
      <DragOverlay>
        {activeTask ? <TaskRepresentation task={activeTask} /> : null}
      </DragOverlay>
    </DndContext>
    </div>
  );
}
