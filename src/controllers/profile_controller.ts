import { Request, Response } from "express";
import ProfileService from "../services/profile_service.js";

export class ProfileController {
  async getProfileById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const profile = await ProfileService.getProfileById(Number(id));
      res.status(200).json(profile);
    } catch (error) {
      res.status(404).json({ error: error});
    }
  }

  async createProfile(req: Request, res: Response) {
    try {
      const { firstname, lastname, profession, balance, type } = req.body;

      const newProfile = await ProfileService.createProfile({
        firstname,
        lastname,
        profession,
        balance,
        type,
      });

      res.status(201).json(newProfile);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  async deposit(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { amount } = req.body;

      if (amount <= 0) {
        throw new Error("Amount must be greater than zero");
      }

      const result = await ProfileService.depositToProfile(Number(id), amount);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}

export default new ProfileController();
