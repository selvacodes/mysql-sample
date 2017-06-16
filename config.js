const mysql = require("mysql")

const config = {
  host: "localhost",
  user: "root",
  password: "chewinggum",
  database: "sample"
}

const connectionPool = mysql.createPool(config)

module.exports = {
  config,
  connectionPool
}
