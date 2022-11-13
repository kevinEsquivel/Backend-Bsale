
# Back-End Bsale Shop
 
Este proyecto es el reto de la empresa bsale, para desarrollar un buscador de una tienda online, que se pueda buscar por catalogo, y por el nombre de los productos, Este proyecto se desarrollo con nodejs, express, y mysq. se an documentado las funciones para mejor entendimiento de estas.




## API Reference

#### Obtener todos los productos
Ruta que permite obtener todos los productos registrados
```http
  GET /api/producto/
```
#### EXAMPLE
#### Request:
```
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://bsalehop.herokuapp.com/api/producto/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
#### Response:
Al realizar una petición HTTP, el servicio retornara un JSON con la siguiente estructura:
```
{
  "results": [
    {
      "id": 5,
      "name": "ENERGETICA MR BIG",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
      "price": 1490,
      "discount": 20,
      "category": 1
    }, 
    //Siguiente productos
  ]
}
```
#### Get productos por nombre y categoria
Ruta que obtiene los productos que concuerden con el dato introducido, este dato puede ser una palabra, o letras, ademas se agregar el parametro de categoria el cual debe ser con un id de categoria

```http
  GET /api/producto/${nombre}?categoria=${id_categoria}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nombre`  | `string` | **Requerido**. Nombre del producto a buscar|
|`id_categoria`|`int`|**Opcional** id de la categoria en la que se buscara|

#### EXAMPLE
#### Request:
```
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://bsalehop.herokuapp.com/api/producto/ron?categoria=3", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
#### Response:
Al realizar una petición HTTP, el servicio retornara un JSON con la siguiente estructura:
```
{
    "results": [
        {
            "id": 23,
            "name": "RON BACARDI AÑEJO",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardi9450.jpg",
            "price": 4990,
            "discount": 0,
            "category": 3
        },        
    ]
}
```

#### Get  productos por categoria
Ruta que devuelve todos los productos que tengan una categoría en común, de debe introducir el id de la categoría.

```http
  GET /api/producto/categoria/${id_categoria}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`id_categoria`|`int`|**Requerido** id de la categoria en la que se buscara|

#### EXAMPLE
#### Request:
```
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://bsalehop.herokuapp.com/api/producto/categoria/6", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
#### Response:
Al realizar una petición HTTP, el servicio retornara un JSON con la siguiente estructura:
```
{
    "results": [
        {
            "id": 98,
            "name": "Cerveza Escudo Normal LATA 350CC",
            "url_image": "",
            "price": 600,
            "discount": 0,
            "category": 6
        },
        {
            "id": 99,
            "name": "Cerveza Escudo Sin Filtrar LATA 350CC",
            "url_image": "",
            "price": 800,
            "discount": 0,
            "category": 6
        }
    ]
}
```


