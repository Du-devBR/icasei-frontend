import axios from "axios";
import dotenv from 'dotenv';
import { Request, Response } from "express";

dotenv.config();
const apiKey = process.env.API_KEY_YOUTUBE
export async function searchVideos(req: Request, res: Response){
  const query = req.query.q as string;

  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${apiKey}`)
    res.json(response.data)
  } catch (error) {
    res.status(500).send(error)
  }
}
