import express from "express";
const app = express();
const port = 8000;
import routerUser from "./routes/user.js";

app.use(express.json());

app.use('/api', routerUser);

app.listen(port, () =>{
  console.log(`chay duoc treen port: ${port}`);
})