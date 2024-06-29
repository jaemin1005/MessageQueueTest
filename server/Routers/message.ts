import { Router } from "express";

const app = Router();

app.get('/', (req,res) => {
  res.send('Message');
})

export default app;