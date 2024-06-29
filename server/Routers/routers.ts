import { Router } from "express";
import messageRouter from "./message"

const router = Router();

router.use('/message', messageRouter)

router.get('/', (req, res) => {
  res.send("DEFAULT");
})

export default router;