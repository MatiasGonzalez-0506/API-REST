const { pool } = require("../db/connectionDb");

validateCategory = async (categoria) => {
    const SQLquery = {
      text: `SELECT COUNT(*) AS num FROM inventario WHERE categoria=$1 group by categoria`,
      values: [categoria],
    }
    const { rows } = await pool.query(SQLquery)
    if (rows.length == 0) {
      return "error"
    } else {
      return "ok"
    }
  }

validateMetal = async (metal) => {
  const SQLquery = {
    text: `SELECT COUNT(*) AS num FROM inventario WHERE metal=$1 group by metal`,
    values: [metal],
  }
  const { rows } = await pool.query(SQLquery)
  if (rows.length == 0) {
    return "error"
  } else {
    return "ok"
  }
}

  module.exports = {validateCategory, validateMetal};