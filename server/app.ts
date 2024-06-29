import express from "express";
import router from "./Routers/routers";

const app = express();

app.use(express.json());
app.use('routers', router);

app.listen(3000, () => {
  console.log("express : http://localhost:3000")
  console.log("서버 구동 완료");
})

export default app