import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { v4 as uuidv4 } from "uuid";


export default function CreateTaskArea() {
    const { addTask, tasks } = useAppStore();
    const [isCreateTaskFieldOpen, setIsCreateTaskFieldOpen] = useState(false);
    const [taskName, setTaskName] = useState('');
    const openNewTaskField = () => {
        setIsCreateTaskFieldOpen(true);
    }

    const createNewTask = (taskName: string) => {
        setIsCreateTaskFieldOpen(false);
        setTaskName('');
        const nextTaskNumber = 101 + tasks.length;
        const newTask = {
            id: uuidv4(),
            name: taskName,
            description: 'You can add a description here',
            taskNumber: nextTaskNumber,
            storyPoint: 0,
            workflowStatus: 'open',
            assignedTo: '',
            startDate: Date.now().toString(),
            endDate: '',
        }
        if (taskName) {
            addTask(newTask);
        }
    }

    return <div>

        {isCreateTaskFieldOpen ? (
            <div className="flex flex-col gap-2">
                <TextField
                    value={taskName}
                    id="outlined-basic"
                    label="Task Name"
                    variant="outlined"
                    onChange={(event) => setTaskName(event.target.value)}
                    onKeyUp={(event) => {
                        if (event.key === 'Enter') {
                            createNewTask(taskName);
                        }
                    }}  
                />
            </div>
        ): (
        <div onClick={openNewTaskField} className="flex flex-col cursor-pointer gap-2">
            <div className="flex items-center gap-2">
                <AddIcon />
                <div className="text-bold">Create Task</div>
            </div>
        </div>
        )}
    </div>;
}