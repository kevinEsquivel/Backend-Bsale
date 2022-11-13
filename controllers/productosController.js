const { request } = require('express');
const { pool } = require('../database/config');


//*function that show all the products
const getProductos = async(req, res) =>{
    
    pool.query(`select * from product`, (err, results, fields) => {
        if (err) throw err;
        res.json({results})
      });  
}
//*function that  show products that match with the string
const getProducto = async(req = request, res) =>{
    const {nombre} = req.params

    const {categoria = '0'} = req.query;
    console.log(nombre,categoria);
      if(categoria !== '0'){
        pool.query(`select * from product where name like '${nombre}%' and category = ${categoria}`, (err, results, fields) => {
          if (err) throw err;
          if(results.length == 0 )return res.json({errors:"El elemento no se encuentra2"})
          
          res.json({results})
        }); 
      }else{
        pool.query(`select * from product where name like '${nombre}%'`, (err, results, fields) => {
          if (err) throw err;
          if(results.length == 0 )return res.json({errors:"El elemento no se encuentra"})
          res.json({results})
        }); 
      }
      
    
}
//*function that  show one the product for category
const getProductsForCategory = async(req = request, res) =>{
    const id_category = req.params.id
    pool.query(`select * from product where category =${id_category}`, (err, results, fields) => {
        if (err) throw err;
        if(results == 0 )res.json({msg:"No hay elementos de esa categoria3"})
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

    pool.query(`insert into product(name,url_image,price,discount,category) values ('${nombre}','${uploadPath}',${precio},${descuento},${categoria})`, (err, results, fields) => {
        if (err) throw err;
        res.json({msg:"Elemento insertado"})
      });
}



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