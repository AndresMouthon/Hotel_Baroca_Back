require("dotenv").config({ path: "./.env" });
require("./src/utils/functions.util").init();
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
const rutaDetallePreregistro = require("./src/routes/registro/detalle-preregistro.router");
const rutaHabitacion = require("./src/routes/habitacion/habitacion.router");
const rutaLogin = require("./src/routes/auth/login.router");
const rutaReserva = require("./src/routes/registro/reserva.router");
const rutaCliente = require("./src/routes/persona/cliente.router");
const rutaEspacio = require("./src/routes/espacio/espacio.router");

const { jwtVerifyTimeToken } = require("./src/utils/jwt.util");

app.get("/", function (req, res, next) {
    res.send("Hola mundo!");
});

rutaPrincipal.use(rutaPreregistro.indice, rutaPreregistro.ruta);
rutaPrincipal.use(rutaDetallePreregistro.indice, rutaDetallePreregistro.ruta);
rutaPrincipal.use(rutaHabitacion.indice, rutaHabitacion.ruta);
rutaPrincipal.use(rutaLogin.indice, rutaLogin.ruta);
rutaPrincipal.use(rutaReserva.indice, rutaReserva.ruta);
rutaPrincipal.use(rutaCliente.indice, rutaCliente.ruta);
rutaPrincipal.use(rutaEspacio.indice, rutaEspacio.ruta);

app.use(jwtVerifyTimeToken);
app.use("/api", rutaPrincipal);

app.listen(9001, () => {
    console.log('Servidor corriendo en el puerto 9001');
});