const { Router } = require("express");
const { getProductos, getProducto, postProducto, getProductsForCategory } = require("../controllers/productosController");

const router = Router();

//Optener todos los productos
router.get('/', getProductos);
//*obtener productos que se parescan
router.get('/:nombre', getProducto);
//obtener productos de una categoria
router.get('/categoria/:id', getProductsForCategory);
//insert products
router.post('/',postProducto)
// actualizar products



module.exports = router;