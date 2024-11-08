import { useAppSelector } from "@/app/redux";
import { useGetTasksQuery } from "@/state/api";
import React, { useMemo, useState } from "react";
import { DisplayOption, ViewMode } from "gantt-task-react";

type TimelineProps = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

type TaskTypeItems = "task" | "milestone" | "project";
const Timeline = ({ id, setIsModalNewTaskOpen }: TimelineProps) => {
    const isDarkmMode = useAppSelector((state) => state.global.isDarkMode);
    const { data: tasks, error, isLoading } = useGetTasksQuery({ projectId: +id });
    const [displayOptions, setDisplayOptions] = useState<DisplayOption>({
        viewMode: ViewMode.Month,
        locale: "en-US",
    });

    const ganttTasks = useMemo(() => {
        return (
            tasks?.map((task) => ({
                start: new Date(task.startDate as string),
                end: new Date(task.dueDate as string),
                name: task.title,
                id: `Task-${task.id}`,
                type: "task" as "TaskType",
                process: task.points ? (task.points / 10) * 100 : 0,
                isDisable: false,
            })) || []
        );
    }, [tasks]);

    const handleViewModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDisplayOptions((prev) => ({
            ...prev,
            viewMode: event.target.value as ViewMode,
        }));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>An Error occurred while fetch task</div>;
    }

    return (
        <div className="px-4 xl:px-6">
            <div className="flex flex-wrap items-center justify-between gap-2 py-5">
                <h1 className="me-2 text-lg font-bold dark:text-white">Project Tasks Timeline</h1>
                <div className="relative inline-block w-64">
                    <select className="block w-full appearance-none focus:shadow"></select>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
