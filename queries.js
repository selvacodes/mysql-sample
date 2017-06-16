const { makeQuery } = require("./dbutils")

const QUERY_SAMPLE = makeQuery("SELECT 1")

const QUERY_POTLUCK_ALL = makeQuery("SELECT * FROM `potluck`")

const QUERY_POTLUCK_JOHN = makeQuery(
  "SELECT * FROM `potluck` WHERE `name`= ?",
  ["John"]
)

module.exports = {
  QUERY_SAMPLE,
  QUERY_POTLUCK_ALL,
  QUERY_POTLUCK_JOHN
}
