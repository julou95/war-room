// @ts-nocheck
import db from '../../../utils/db';

export default async (req, res) => {
  try {
    const { slug } = req.body;
    const games = await db.collection('games').get();
    const gamesData = games.docs.map(game => game.data());

    if (gamesData.some(game => game.slug === slug)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection('games').add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
}