import TaskListHeader from "./TaskListHeader";
import TaskFilterArea from "./TaskFilterArea";

export default function TaskList() {
    return <div className="flex flex-col gap-6">
        <TaskListHeader />
        <TaskFilterArea />
    </div>;
}