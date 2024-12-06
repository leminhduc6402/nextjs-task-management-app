"use client";
import { useAppSelector } from "@/app/redux";
import Header from "@/components/Header";
import ModalNewTask from "@/components/ModalNewTask";
import { Priority, Task, useGetTasksByUserQuery } from "@/state/api";
import React, { useState } from "react";

type Props = {
    priority: Priority;
};

const ReuseablePriorityPage = ({ priority }: Props) => {
    const [view, setView] = useState("list");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

    const userId = 1;
    const {
        data: tasks,
        isLoading,
        isError: isTaskError,
    } = useGetTasksByUserQuery(userId || 0, { skip: userId === null });

    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
    const filteredTasks = tasks?.filter(
        (task: Task) => task.priority === priority,
    );

    if (isTaskError || !tasks) return <div>Error fetching Tasks</div>;

    return (
        <div className="m-5 p-4">
            <ModalNewTask
                isOpen={isModalNewTaskOpen}
                onClose={() => setIsModalNewTaskOpen(false)}
            />
            <Header
                name="Priority Page"
                buttonComponent={
                    <button
                        className="mr-3 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                        onClick={() => setIsModalNewTaskOpen(true)}
                    >
                        Add Task
                    </button>
                }
            />
            <div className="mb-4 flex justify-start">
                <button
                    className={`px-4 py-2 ${view === "list" ? "bg-gray-300" : "bg-white"}`}
                    onClick={() => setView("list")}
                >
                    List
                </button>
                <button
                    className={`px-4 py-2 ${view === "table" ? "bg-gray-300" : "bg-white"}`}
                    onClick={() => setView("table")}
                >
                    Table
                </button>
            </div>
        </div>
    );
};

export default ReuseablePriorityPage;
