const mysql = require("mysql");
const { database } = require("./keys"); // importar solo el objeto database

const pool = mysql.createPool(database); //createConnection utilizando hilos

pool.getConnection(); //iniciar la coneccion
