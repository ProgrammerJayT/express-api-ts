import { Request, Response } from "express";

export const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json("Yeah, your API works 😊");
  } catch (error) {}
};
