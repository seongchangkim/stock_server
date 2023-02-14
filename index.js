const express = require("express");
// const { User, Auth, Port, Ratio } = require("./models");
const db = require("./models/index");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8080;
const cookieParser = require("cookie-parser");
const userRouter = require("./router/user_router");
const adminRouter = require("./router/admin_router");
const stockRouter = require("./router/stock_router");
const path = require("path");
const history = require('connect-history-api-fallback');

const app = express();

app.use(
  cors({ origin: "http://127.0.0.1:8080/", credentials: true, origin: true })
);

app.use(cookieParser("x_auth"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/");

app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/stock', stockRouter);

app.use(history());

db.sequelize
  // 각각 Model 파일이 변경이 감지되면 DB에서 반영되게끔 설정함.
  .sync({ alter: true })
  .then(() => {
    console.log("데이터베이스 연결 성공");
    app.listen(port, () => console.log(`stock-server listening to port : ${port}`));
  })
  .catch((err) => {
    console.error(err);
  });



