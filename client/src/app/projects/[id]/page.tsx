"use client";
import React, { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import BoardView from "../BoardView";

type Props = {
    params: { id: string };
};

function Project({ params }: Props) {
    const { id } = params;
    const [activeTab, setActiveTab] = useState("Board");
    const [idModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

    return (
        <>
            <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "Board" && (
                <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
        </>
    );
}

export default Project;
