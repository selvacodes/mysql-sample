const DBConnection = require("./DBConnection")
const { connectionPool } = require("./config")
const { executeQueryAndDisconnect } = require("./dbutils")
const {
  QUERY_SAMPLE,
  QUERY_POTLUCK_ALL,
  QUERY_POTLUCK_JOHN
} = require("./queries")

// Using pools
executeQueryAndDisconnect(connectionPool, QUERY_POTLUCK_JOHN).then(console.log)

// Using Connection
//const db = new DBConnection()

//db.executeQueryAndCloseConnection(QUERY_SAMPLE).then(console.log)
