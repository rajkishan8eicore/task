import type { Request, Response } from 'express';
import { Router } from 'express';
const dateRoute = Router();

dateRoute.get('/', async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      date: new Date(),
    });
  } catch (error) {
    console.error('Error fetching date:', error);
    res.status(500).json({ error: 'Failed to fetch date' });
  }
});

export { dateRoute };