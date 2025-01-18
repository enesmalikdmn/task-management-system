'use client';

import TaskListHeader from "./TaskListHeader";
import TaskFilterArea from "./TaskFilterArea";
import TaskListArea from "./TaskListArea";

export default function TaskList() {
    return <div className="flex flex-col gap-6">
        <TaskListHeader />
        <TaskFilterArea />
        <TaskListArea />
    </div>;
}