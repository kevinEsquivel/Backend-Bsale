const { Router } = require("express");
const { getProductos, getProducto, postProducto, getProductsForCategory } = require("../controllers/productosController");

const router = Router();

//Optener todos los productos
router.get('/', getProductos);
//*obtener un producto
router.get('/:id', getProducto);
//obtener productos de una categoria
router.get('/categoria/:id', getProductsForCategory);
//insert products
router.post('/',postProducto)


module.exports = router;