var express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const ENV = require("dotenv").config().parsed;
const app = express();

const controllers = require("./controllers");

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

// SupaBase init
const SupaBase = require("@supabase/supabase-js");
const supabaseUrl = ENV.SUPABASE_URL;
const supabaseKey = ENV.SUPABASE_KEY;
const supabase = SupaBase.createClient(supabaseUrl, supabaseKey);

app.get("/", (req, res) => res.send("working"));

app.post("/getAllItems", (req, res) =>
  controllers.getAllItems(req, res, supabase)
);
app.post("/addRegular", (req, res) => controllers.addRegular(req, res, pool));
app.post("/updateCheckoutID", (req, res) =>
  controllers.updateCheckoutID(req, res, pool)
);
app.post("/addCustomer", (req, res) => controllers.addCustomer(req, res, pool));
app.post("/addSnoozed", (req, res) => controllers.addSnoozed(req, res, pool));
app.post("/fetchRegulars", (req, res) =>
  controllers.fetchRegulars(req, res, pool)
);
app.post("/removeRunningOut", (req, res) =>
  controllers.removeRunningOut(req, res, pool)
);

app.listen(4000, () => console.log("APP RUNNING ON PORT:4000"));
