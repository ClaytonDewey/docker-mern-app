import { Router } from 'express';
import {
  getSessionsHandler,
  deleteSessionsHandler,
} from '../controllers/session.controller';

const sessionRoutes = Router();

// prefix: /sessions
sessionRoutes.get('/', getSessionsHandler);
sessionRoutes.delete('/:id', deleteSessionsHandler);

export default sessionRoutes;
