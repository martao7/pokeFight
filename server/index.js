import express from "express";
import "./db/server.js";
import { errorHandler } from "./middleware/ErrorHandler.js";
import gameRouter from "./routes/gameRouter.js";
import session from "express-session";

const app = express();
const PORT = process.env.PORT || 8080;

const sess = {
  secret: "keyboard cat",
  cookie: {},
  resave: false, // Session wird nicht bei jedem Request erneut gespeichert, wenn keine Änderungen vorgenommen wurden
  // saveUninitialized: false, // Neue Sessions, die noch nicht geändert wurden, werden nicht gespeichert
  maxAge: Date.now() + 30 * 86400 * 1000,
};

app.use(session(sess));

app.use(express.json());

//main routing
//app.use('cities', citiesRoutes)
app.use("/", gameRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
