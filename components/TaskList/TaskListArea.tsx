'use client';

import { useAppStore } from '@/store/appStore';

export default function TaskListArea() {
    const { tasks: taskList } = useAppStore();
    return <div>
        test
    </div>;
}