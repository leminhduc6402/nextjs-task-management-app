import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving project: ${error.message}` });
  }
};

export const createProject = async (req: Request, res: Response) => {
  const { name, description, startDate, endDate } = req.body;
  try {
    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        startDate,
        endDate,
      },
    });
    res.status(201).json(newProject);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating project: ${error.message}` });
  }
};
