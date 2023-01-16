const {getJoyas, getJoyasByFilters} = require("../models/joyasModel");

const prepararHATEOAS = (inventario) => {
  const results = inventario
    .map((m) => {
      return {name: m.nombre,category: m.categoria,metal: m.metal,precio: m.precio,stock: m.stock,href: `/inventario/filtros/${m.id}`,
      };
    })
    .slice(0, 6);
  const total = inventario.length;
  const HATEOAS = {
    total,
    results,
  };
  return HATEOAS;
};

const getAllJoyas = async (req, res) => {
  try {
    const queryParams = req.query;
    const joyas = await getJoyas(queryParams);
    if (joyas.length==0) {
      return res.status(404).json({mensaje:"no se encontraron joyas"})
    } else{
      const HATEOAS = prepararHATEOAS(joyas);
      res.json(HATEOAS);
    }
  } catch {
    res.status(500).json({ message: "Error al obtener los datos" });
    }};

const filterJoyas = async (req, res) => {
  try {
    const query = req.query;
    const inventario = await getJoyasByFilters(query);
    res.json(inventario);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {filterJoyas, getAllJoyas};