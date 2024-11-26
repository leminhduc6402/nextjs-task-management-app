import { Project } from "@/state/api";
import { format } from "date-fns";
import React from "react";

type Props = {
    project: Project;
};

const ProjectCard = ({ project }: Props) => {
    return (
        <div className="rounded border p-4 shadow">
            <h3>Name: {project.name}</h3>
            <p>Description: {project.description}</p>
            <p>
                Time: {format(new Date(project.startDate as string), "dd-MM-yyyy")} -{" "}
                {format(new Date(project.endDate as string), "dd-MM-yyyy")}{" "}
            </p>
        </div>
    );
};

export default ProjectCard;
