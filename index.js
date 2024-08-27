require("dotenv").config({ path: "./.env" });
require("./src/models/index.model");

const express = require("express");
const cors = require("cors");
const app = express();
const { sequelize } = require("./config/sequelize.config");

(async () => {
    try {
        await sequelize.sync({ alter: true });
    } catch (error) {
        console.log(error);
    }
})();

app.use(cors());

app.use(express.json());

const rutaPrincipal = express.Router();
const rutaPreregistro = require("./src/routes/registro/preregistro.router");
const rutaDetallePreregistro = require("./src/routes/registro/detalle-preregistro.model");

app.get("/", function (req, res, next) {
    res.send("Hola mundo!");
});

rutaPrincipal.use(rutaPreregistro.indice, rutaPreregistro.ruta);
rutaPrincipal.use(rutaDetallePreregistro.indice, rutaDetallePreregistro.ruta);

app.use("/api", rutaPrincipal);

app.listen(9001, () => {
    console.log('Servidor corriendo en el puerto 9001');
});