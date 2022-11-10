const { request } = require('express');
const {conn} = require('../database/config');

//*function that show all the products
const getProductos = async(req, res) =>{
    
    conn.query(`select * from product`, (err, results, fields) => {
        if (err) throw err;
        res.json({results})
      });  
}
//*function that  show one the product
const getProducto = async(req = request, res) =>{
    const id = req.params.id
    conn.query(`select * from product where id =${id}`, (err, results, fields) => {
        if (err) throw err;
        if(results == 0 )res.json({msg:"El elemento no se encuentra"})
        res.json({results})
      });  
}
//*function that  show one the product for category
const getProductsForCategory = async(req = request, res) =>{
    const id_category = req.params.id
    conn.query(`select * from product where category =${id_category}`, (err, results, fields) => {
        if (err) throw err;
        if(results == 0 )res.json({msg:"No hay elementos de esa categoria"})
        res.json({results})
      });  
}

//*function that add one product
const postProducto = async(req = request, res) =>{
    
    
    /*//!  Este segmento es para subir las imagenes al servidor
    let archivo = req.files.file;
    let uploadPath = `${__dirname}/../img/${archivo.name}`;
    archivo.mv(uploadPath, (err) => {
        if (err) {
          return res.status(400).json({ err });
        }
      }); */

    const {nombre,uploadPath,precio, categoria,descuento} = req.body

    conn.query(`insert into product(name,url_image,price,discount,category) values ('${nombre}','${uploadPath}',${precio},${descuento},${categoria})`, (err, results, fields) => {
        if (err) throw err;
        res.json({msg:"Elemento insertado"})
      });
}

//* Me hubiera 

/* //*function to edit product 
const putProduct =async (req, res) =>{
    const {nombre,precio, categoria} = req.body;
    conn.query(`UPDATE product set name=${}`, (err, results, fields) => {})

} */

module.exports = {
    getProductos,
    getProducto,
    getProductsForCategory,
    postProducto,
}