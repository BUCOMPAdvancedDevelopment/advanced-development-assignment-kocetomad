var Pool = require("pg-pool");

var pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ad",
  password: "123456",
  port: 5432, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
});

const getDate = async () => {
  var client = await pool.connect();
  try {
    var result = await client.query("select CURRENT_DATE;");
    console.log("hello from", result.rows[0]);
  } finally {
    return result;
  }
};

const getAllItems = (req, res, supabase) => {
  (async function () {
    return ({ data: store_items, error } = await supabase
      .from("store_items")
      .select("*"));
  })().then((value) => res.json(value));
};

const test = (res) => {
  (async function () {
    var client = await pool.connect();
    try {
      var result = await client.query(
        "INSERT INTO items (id, item_name, item_description, item_tags, item_price, item_featured) values (1, 'test','test','test','test','test')"
      );
      console.log("hello from", result.rows[0]);
      res.send(result.rows[0]);
    } finally {
      console.log("final");
      client.release();
    }
  })().catch((e) => console.error(e.message, e.stack));
};

// ALTER TABLE items ADD COLUMN item_name varchar;
// INSERT INTO items (id, item_name, item_description, item_price, item_featured)
// VALUES (1, "value2", "desc", 60, "yes");

// const updateCheckoutID = (req, res, pool) => {
//   HTTP.evaluateUserRequest(graphql.evaluateUser, { token: req.body.token })
//     .then((response) => {
//       if (response.data.customer) {
//         pool.getConnection((err, connection) => {
//           if (err) {
//             console.log(err);
//             res.send(err);
//           }
//           connection.query(
//             queries.updateCheckoutID(
//               response.data.customer.id,
//               response.data.email,
//               req.body.checkoutID
//             ),
//             (err, rows) => {
//               connection.release();
//               if (err) throw err;
//               else
//                 res.json({
//                   success: true,
//                   msg: "CheckoutID Succesfuly updated",
//                 });
//             }
//           );
//         });
//       }
//     })
//     .catch((err) => res.json(err));
// };
// const fetchRegulars = (req, res, pool) => {
//   HTTP.evaluateUserRequest(graphql.evaluateUser, { token: req.body.token })
//     .then((response) => {
//       if (response.data.customer) {
//         pool.getConnection((err, connection) => {
//           if (err) {
//             res.send(err);
//           }
//           connection.query(
//             queries.fetchRegulars(response.data.customer.id),
//             (err, rows) => {
//               connection.release();
//               if (err) throw err;
//               else res.json(rows);
//             }
//           );
//         });
//       }
//     })
//     .catch((err) => res.json(err));
// };
// const addRegular = (req, res, pool) => {
//   HTTP.evaluateUserRequest(graphql.evaluateUser, { token: req.body.token })
//     .then((response) => {
//       if (response.data.customer) {
//         var insertValues = "";
//         if (req.body.regularsObj == "[]") {
//           insertValues =
//             "(now(),now(),'" + response.data.customer.id + "','[]')";
//         } else {
//           for (var i = 0; i < JSON.parse(req.body.regularsObj).length; i++) {
//             insertValues +=
//               "(now(),now(),'" +
//               response.data.customer.id +
//               "','" +
//               JSON.stringify(JSON.parse(req.body.regularsObj)[i]) +
//               "'),";
//           }
//           insertValues = insertValues.substring(0, insertValues.length - 1);
//         }
//         pool.getConnection((err, connection) => {
//           if (err) throw err;
//           connection.query(
//             queries.clearOldRegulars(response.data.customer.id),
//             (err, rows) => {
//               //connection.release()
//               if (err) throw err;
//               else {
//                 connection.query(
//                   queries.addRegular(insertValues),
//                   (err, rows) => {
//                     connection.release();
//                     if (err) throw err;
//                     else
//                       res.json({
//                         success: true,
//                         msg: "Regular product successfuly added",
//                       });
//                   }
//                 );
//               }
//             }
//           );
//         });
//       }
//     })
//     .catch((err) => res.json(err));
// };
// const addCustomer = (req, res, pool) => {
//   const { token, family } = req.body;
//   HTTP.evaluateUserRequest(graphql.evaluateUser, { token })
//     .then((response) => {
//       const { id, email } = response.data.customer;
//       if (response.data.customer) {
//         pool.getConnection((err, connection) => {
//           if (err) {
//             console.log(err);
//             res.send(err);
//           }
//           connection.query(
//             queries.addCustomer(id, email, family),
//             (err, rows) => {
//               connection.release();
//               if (err) throw err;
//               else
//                 res.json({
//                   success: true,
//                   msg: "Customer added/updated succesfully",
//                 });
//             }
//           );
//         });
//       }
//     })
//     .catch((err) => res.json(err));
// };
// const addSnoozed = (req, res, pool) => {
//   HTTP.evaluateUserRequest(graphql.evaluateUser, { token: req.body.token })
//     .then((response) => {
//       if (response.data.customer) {
//         let insertValues = "";
//         for (let i = 0; i < JSON.parse(req.body.snoozedObj).length; i++) {
//           let snoozTime = JSON.parse(req.body.snoozedObj)[i].snoozed;
//           insertValues +=
//             "('" +
//             response.data.customer.id +
//             "',now(),'" +
//             JSON.stringify(JSON.parse(req.body.snoozedObj)[i]) +
//             "'," +
//             snoozTime +
//             "),";
//         }
//         insertValues = insertValues.substring(0, insertValues.length - 1);
//         pool.getConnection((err, connection) => {
//           if (err) {
//             console.log(err);
//             res.send(err);
//           }
//           connection.query(queries.addSnoozed(insertValues), (err, rows) => {
//             connection.release();
//             if (err) throw err;
//             else res.json(rows);
//           });
//         });
//       }
//     })
//     .catch((err) => res.json(err));
// };
// const removeRunningOut = (req, res, pool) => {
//   HTTP.evaluateUserRequest(graphql.evaluateUser, { token: req.body.token })
//     .then((response) => {
//       if (response.data.customer) {
//         pool.getConnection((err, connection) => {
//           if (err) {
//             console.log(err);
//             res.send(err);
//           }
//           connection.query(
//             queries.removeRunningOut(
//               response.data.customer.id,
//               req.body.productObj
//             ),
//             (err, rows) => {
//               connection.release();
//               if (err) throw err;
//               else res.json(rows);
//             }
//           );
//         });
//       }
//     })
//     .catch((err) => res.json(err));
// };
module.exports = {
  getAllItems,
  test,
};
