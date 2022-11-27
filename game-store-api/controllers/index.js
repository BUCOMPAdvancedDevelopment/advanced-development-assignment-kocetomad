var Pool = require('pg-pool')

var pool = new Pool({
  host:"34.105.214.12",
   database:"postgres",
   port:"5432",
   user:"postgres",
   password:"123456" // close (and replace) a connection after it has been used 7500 times (see below for discussion)
});

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
