// DON'T USE THIS. USE dbutils.js FUNCTIONS

const mysql = require("mysql")
const { config } = require("./config")
const {
  connectToServer,
  releaseConnection,
  executeQueryAndDisconnect
} = require("./dbutils")

const connection = mysql.createConnection(config)

function DBConnection(dbConfig = config) {
  this.connection = mysql.createConnection(dbConfig)
}

DBConnection.prototype.connect = function() {
  this.connection.connect()
}

DBConnection.prototype.disconnect = function() {
  this.connection.end()
}

DBConnection.prototype.executeQueryAndCloseConnection = function(query) {
  return executeQueryAndDisconnect(this.connection, query)
}

module.exports = DBConnection
