import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { searchVideos } from './controllers/search-videos-controller';
import { getFavorites, getTotalFavorites, insertFavorite, removeFavorite } from './controllers/favorites-controller';

dotenv.config();
export const app = express();
app.use(cors())
app.use(express.json())

const port = process.env.PORT

app.get('/search', searchVideos)
app.get('/favorites', getFavorites)
app.get('/favorites/count', getTotalFavorites)
app.post('/favorites', insertFavorite)
app.delete('/favorites/:id', removeFavorite)

app.listen({port: port}, () => {
  console.log(`Server running port ${port}`);
})
