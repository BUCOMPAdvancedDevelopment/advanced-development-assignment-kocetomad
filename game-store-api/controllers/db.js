var Pool = require("pg-pool");

var pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ad',
  password: '123456',
  port: 5432, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
});

const getDate = async() => {
    var client = await pool.connect();
    try {
      var result = await client.query("select CURRENT_DATE;");
      console.log("hello from", result.rows[0]);
    } finally {
      return result;
    }
};

(async function () {
  var client = await pool.connect()
  try {
    var result = await client.query('select CURRENT_DATE;',)
    console.log('hello from', result.rows[0])
  } finally {
    console.log('final')
    client.release()
  }
})().catch(e => console.error(e.message, e.stack))

module.exports = {
  pool,
  getDate
}