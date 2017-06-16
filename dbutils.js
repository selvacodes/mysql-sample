const TIMEOUT_MAX = 30000

function connectToServer(connection) {
  connection.connect(() => console.log("connection established"))
  return connection
}

function releaseConnection(connection) {
  connection.release
    ? connection.release(() => console.log("connection released"))
    : connection.end(() => console.log("connection ended"))
  return connection
}

function executeQueryAndDisconnect(connection, query) {
  return new Promise((resolve, reject) => {
    connection.query(query, function(error, results, fields) {
      if (error) throw error
      releaseConnection(connection)
      resolve(results)
    })
  })
}

const makeQuery = (sql = "", values = [], timeout = TIMEOUT_MAX) => ({
  sql,
  values,
  timeout
})

module.exports = {
  connectToServer,
  executeQueryAndDisconnect,
  makeQuery,
  releaseConnection
}
