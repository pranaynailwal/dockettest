const express = require('express');
const helmet = require('helmet');
const router = express.Router();
const response = require('/home/pranay/Desktop/node-project/create.js')
var app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(router);


router.get('/message', (req, res) => {
    response.success(req, res, `Lista de mensajes 1000`);
})

router.post('/message', (req, res) => {

    if (req.query.error == 'ok') {
        response.error(req, res, `Error simulado`, 401)
    } else {
        response.success(req, res, `Creado correctamente`, 200);
    }

})

router.delete('/message', (req, res) => {
    res.send(`Mensaje eliminado`);
})

app.listen(3000, () => {
    console.log(`La aplicacion se esta escuchando en puerto 3000`);
})