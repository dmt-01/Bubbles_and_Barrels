import { Request, Response } from "express";
import { getAllUsers } from "../Models/Users";

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}