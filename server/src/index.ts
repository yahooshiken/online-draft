import express from "express";

const PORT = process.env.PORT || 1844;

const app: express.Express = express();
const router: express.Router = express.Router();

router.get("*", (req: express.Request, res: express.Response) => {
  res.send("Get");
});

app.use(router);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});
