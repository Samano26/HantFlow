import express from 'express';
import bcrypt from 'bcrypt';
import { Admin } from '../../../db/models';

const authRouter = express.Router();

authRouter.post('/reg', async (req, res) => {
  const { email, password, name } = req.body;
  const hashpass = await bcrypt.hash(password, 10);
  const [admin, created] = await Admin.findOrCreate({
    where: { emailAdmin: email },
    defaults: { password: hashpass, nameAdmin: name },
  });
  if (created) {
    req.session.admin = { ...admin.get(), password: undefined };
    return res.sendStatus(200);
  }
  return res.status(400).json({ message: 'Email already exists' });
});

authRouter.post('/log', async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ where: { emailAdmin: email } });
  if (!admin) {
    return res.status(400).json({ message: 'Email not found' });
  }
  const isCorrect = await bcrypt.compare(password, admin.password);
  if (!isCorrect) {
    return res.status(400).json({ message: 'Incorrect password' });
  }

  req.session.admin = { ...admin.get(), password: undefined };
  res.sendStatus(200);
});

authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('admin_sid');
  res.sendStatus(200);
});

export default authRouter;
