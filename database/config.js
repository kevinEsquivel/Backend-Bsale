const mysql = require("mysql");

//!
var pool  = mysql.createPool({
  connectionLimit : 10,
  host:     "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com", //mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com
  database: "bsale_test",
  user:     "bsale_test",
  password: "bsale_test",
});


module.exports = {
  pool
};
