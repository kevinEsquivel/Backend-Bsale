const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost", //mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com
  database: "bsale_test",
  user: "bsale_test",
  password: "bsale_test",
});

const dbConection = async () => {

    conn.connect((err) => {
      if (err) {
        console.log("error al conectar a la base de datos");
      } else {
        console.log("coneccion exitosa");
      }
    });
  
};





module.exports = {
  dbConection,
  conn
};
