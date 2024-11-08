"use client";
import React, { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import BoardView from "../BoardView";
import ListView from "../ListView";
import Timeline from "../TimelineView";

type Props = {
    params: { id: string };
};

function Project({ params }: Props) {
    const { id } = params;
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

    return (
        <>
            <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "Board" && (
                <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === "List" && (
                <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === "Timeline" && (
                <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
        </>
    );
}

export default Project;
