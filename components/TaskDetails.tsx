import { useAppStore } from '@/store/appStore';


export default function TaskDetails() {
    const { focusedTask } = useAppStore();
    return <div>
        {focusedTask?.name}
    </div>;
}