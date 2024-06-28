import { Request, Response } from "express";
import {v4 as uuidv4} from 'uuid'
import { Video } from "../types/video-types";

let favorites: Video[] = []

export function getFavorites(req: Request, res: Response) {
  res.json(favorites)
}

export function getTotalFavorites(req: Request, res: Response) {
  const countFavorites = favorites.length
  res.json(countFavorites)
}

export function insertFavorite(req: Request, res: Response) {
  const video = req.body as Video;
  video.id = uuidv4()

  if (favorites.some(fav => fav.videoId === video.videoId)) {
    return res.status(404).send("video já adicionado ao favoritos")
  }

  try {
    favorites.push(video);
    return res.status(201).send(video);
  } catch (error) {
    return res.status(500).send("Erro ao salvar");
  }
}

export function removeFavorite(req: Request, res: Response) {
  const id = req.params.id;

  if (favorites.findIndex(fav => fav.id === id) === -1) {
    return res.status(404).send("id nao encotrado!")
  }
  try {
    favorites = favorites.filter(video => video.id !== id)
    return res.status(200).send("removido com sucesso!");
  } catch (error) {
    return res.status(500).send("erro ao excluir")
  }
}
