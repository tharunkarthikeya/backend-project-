import { Router } from "express";

const authRouter = Router();

authRouter.post('/signup', (req, res) => {res.send('User signed up');});
authRouter.post('/signin', (req, res) => {res.send('User signed up');});
authRouter.post('/signout', (req, res) => {res.send('User signed up');});

export default authRouter;

