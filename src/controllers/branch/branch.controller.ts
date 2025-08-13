import type { Request, Response } from "express";
import { prisma } from "../../database/pgConfig";

export const createBranch = async (req: Request, res: Response) => {
  try {
    const { name, address } = req.body;
    const branch = await prisma.branch.create({
      data: {
        name,
        address,
      },
    });
    res.status(201).json({ message: "Branch created successfully", branch });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getBranches = async (req: Request, res: Response) => {
  try {
    const branches = await prisma.branch.findMany();
    res
      .status(200)
      .json({ message: "Branches retrieved successfully", branches });
  } catch (error) {
    console.error("Error getting branches", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getBranchById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const branch = await prisma.branch.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!branch) {
      return res.status(404).json({ error: "Branch not found" });
    }
    res.status(200).json({ message: "Branch retrieved successfully", branch });
  } catch (error) {
    console.error("Error getting branch", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateBranch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, address } = req.body;
  try {
    const data: any = {};

    if (name) data.name = name;
    if (address) data.address = address;

    const branch = await prisma.branch.update({
      where: {
        id: Number(id),
      },
      data,
    });
    res.status(200).json({ message: "Branch updated successfully", branch });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteBranch = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const branch = await prisma.branch.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ message: "Branch deleted successfully", branch });
  } catch (error) {
    console.error("Error deleting branch", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
