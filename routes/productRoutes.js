const { Router } = require("express");

const router = Router();

router.get('/',  (req, res) =>{
    console.log("HOLA MUNDO");
});

module.exports = router;