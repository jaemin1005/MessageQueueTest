import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("express : http://localhost:3000")
  console.log("서버 구동 완료");
})

export default app