import { useAppStore } from '@/store/appStore';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


export default function TaskDetails() {
  const { focusedTask, updateTask } = useAppStore();
  const [isEditMode, setIsEditMode] = useState(false);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [taskName, setTaskName] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');

    const handleStartDate = (date: dayjs.Dayjs | null) => {
      if (date) {
        const formattedDate = date.format('DD.MM.YYYY');
        setStartDate(formattedDate);
      }   
    };
  
    const handleEndDate = (date: dayjs.Dayjs | null) => {
      if (date) {
        const formattedDate = date.format('DD.MM.YYYY');
        setEndDate(formattedDate);
      }
    };

    const handleSaveChanges = () => {
      if (focusedTask) {
        const updatedTask = {
          ...focusedTask,
          name: taskName || focusedTask.name,
          description: taskDescription || focusedTask.description,
          startDate: startDate || focusedTask.startDate,
          endDate: endDate || focusedTask.endDate
        };
        updateTask(focusedTask.id, updatedTask);
        setIsEditMode(false);
      }
    };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">
          Task Number: {focusedTask?.taskNumber}
        </div>
        <EditIcon
          fontSize="small"
          className="cursor-pointer"
          onClick={() => setIsEditMode(true)}
        />
      </div>
      {isEditMode ? (
        <div className="flex flex-col gap-4">
          <TextField
            id="outlined-basic"
            label="Task Name"
            variant="outlined"
            defaultValue={focusedTask?.name}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <Textarea
            id="outlined-basic"
            minRows={5}
            maxRows={10}
            variant="outlined"
            defaultValue={focusedTask?.description}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              format='DD.MM.YYYY'
              onChange={(newValue) => handleStartDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End Date"
              format='DD.MM.YYYY'
              onChange={(newValue) => handleEndDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {/* save changes */}
          <Button
            variant="contained"
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div>Start Date: {focusedTask?.startDate}</div>
            <div>End Date: {focusedTask?.endDate}</div>
          </div>
          <div className="text-2xl font-bold">{focusedTask?.name}</div>
          <p>{focusedTask?.description}</p>
        </div>
      )}
    </div>
  );
}
