const ejecutarQuery = require("../../../config/data-base.config");

const queryObtenerReservaPorDocumento = async (documento = "") => {
    const query = `
        SELECT r.transporte 
        FROM reservas AS r
        INNER JOIN preregistros AS p ON r.preregistro_id = p.id
        INNER JOIN habitaciones AS h ON r.habitacion_id = h.id
        INNER JOIN clientes AS c ON p.cliente_id = c.id
        INNER JOIN espacios AS e ON p.espacio_id = e.id
        WHERE c.documento = ?
    `;
    const parametros = [documento];
    const response = await ejecutarQuery(query, parametros);
    return response;
};

module.exports = { queryObtenerReservaPorDocumento };