import express from 'express';

import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptRouter from './routes/subscrip.routes.js';


const app = express();

app.use('api/users', userRouter);
app.use('api/auth' , authRouter);
app.use('api/subscriptions', subscriptRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log("the app is running on the port http://localhost:"+PORT);
}); 

export default app;