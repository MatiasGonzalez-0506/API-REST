const express = require("express");
const router = express.Router();

const {getAllJoyas, filterJoyas} = require("../controllers/joyasController");

router.get("/stock", getAllJoyas);
router.get("/stock/filters", filterJoyas);

router.get("*", (req, res) => {
  res.status(404).send("La ruta que tratas de consultar no Existe");
});

module.exports = router;