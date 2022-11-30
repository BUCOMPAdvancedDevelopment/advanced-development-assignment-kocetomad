var express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const ENV = require("dotenv").config().parsed;
const app = express();

const controllers = require("./controllers");

var Pool = require("pg-pool");

var pool = new Pool({
  host: "34.105.214.12",
  database: "postgres",
  port: "5432",
  user: "postgres",
  password: "123456", // close (and replace) a connection after it has been used 7500 times (see below for discussion)
});
// Middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));
app.set('trust proxy', true);

// SupaBase init
const SupaBase = require("@supabase/supabase-js");
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = SupaBase.createClient(supabaseUrl, supabaseKey);

app.get("/", (req, res) => res.send("working"));

app.post("/getAllItems", (req, res) =>
  controllers.getAllItems(req, res, supabase)
);

app.get("/test", (req, res) =>
  controllers.test(res,pool)
);


app.listen(8080, () => console.log("APP RUNNING ON PORT:4000"));
