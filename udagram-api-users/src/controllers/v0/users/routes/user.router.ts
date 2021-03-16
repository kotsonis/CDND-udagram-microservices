import {Router, Request, Response} from 'express';

import {User} from '../models/User';
import {AuthRouter} from './auth.router';
const { v4: uuidv4 } = require('uuid');

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/');

router.get('/:id', async (req: Request, res: Response) => {
  let pid = uuidv4();
  const {id} = req.params;
  console.log(new Date().toLocaleString() + `: ${pid} - GET user ${id} requested`);
  const item = await User.findByPk(id);
  res.send(item);
  console.log(new Date().toLocaleString() + `: ${pid} - Finished processing GET userID ${id}`);
});

export const UserRouter: Router = router;
