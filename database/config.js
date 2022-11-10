const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost", //mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com
  database: "bsale_test",
  user: "bsale_test",
  password: "bsale_test",
});

const dbConection = async () => {
  try {
    conn.connect((err) => {
      if (err) {
        throw err;
      } else {
        console.log("coneccion exitosa");
      }
    });
  } catch (error) {
    console.log("error al inicir la bd", error);
  }
};





module.exports = {
  dbConection,
  conn
};
