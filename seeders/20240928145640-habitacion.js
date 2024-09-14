'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('habitaciones', [
      {
        nombre_habitacion: "Estandar Simple",
        descripcion_habitacion: "Habitación ideal para una persona, con una cama individual y un ambiente acogedor.",
        numero_habitacion: 200,
        capacidad_habitacion: 1,
        precio_habitacion: "120000",
        tipo_habitacion: "Estandar",
        disponibilidad: "Disponible",
        piso: 2,
        espacio_id: 1,
        ventana: "Si"
      },
      {
        nombre_habitacion: "Estandar Doble",
        descripcion_habitacion: "Habitación cómoda con dos camas individuales, perfecta para dos personas.",
        numero_habitacion: 201,
        capacidad_habitacion: 2,
        precio_habitacion: "150000",
        tipo_habitacion: "Estandar",
        disponibilidad: "Disponible",
        piso: 2,
        espacio_id: 1,
        ventana: "Si"
      },
      {
        nombre_habitacion: "Estandar con Vista",
        descripcion_habitacion: "Habitación con una vista espectacular, equipada con una cama doble.",
        numero_habitacion: 202,
        capacidad_habitacion: 2,
        precio_habitacion: "170000",
        tipo_habitacion: "Estandar",
        disponibilidad: "Disponible",
        piso: 2,
        espacio_id: 1,
        ventana: "Si"
      },
      {
        nombre_habitacion: "Estandar Familiar",
        descripcion_habitacion: "Habitación amplia con una cama doble y una cama individual, ideal para pequeñas familias.",
        numero_habitacion: 203,
        capacidad_habitacion: 3,
        precio_habitacion: "200000",
        tipo_habitacion: "Estandar",
        disponibilidad: "Disponible",
        piso: 2,
        espacio_id: 1,
        ventana: "Si"
      },
      {
        nombre_habitacion: "Estandar Premium",
        descripcion_habitacion: "Habitación elegante con cama doble y una pequeña zona de estar.",
        numero_habitacion: 204,
        capacidad_habitacion: 2,
        precio_habitacion: "190000",
        tipo_habitacion: "Estandar",
        disponibilidad: "Disponible",
        piso: 2,
        espacio_id: 1,
        ventana: "Si"
      },
      // Habitaciones dobles
      {
        nombre_habitacion: "Doble Deluxe",
        descripcion_habitacion: "Habitación de lujo con una cama doble grande y decoraciones elegantes.",
        numero_habitacion: 300,
        capacidad_habitacion: 2,
        precio_habitacion: "250000",
        tipo_habitacion: "Doble",
        disponibilidad: "Disponible",
        piso: 2,
        espacio_id: 1,
        ventana: "Si"
      },
      {
        nombre_habitacion: "Doble Ejecutiva",
        descripcion_habitacion: "Habitación equipada para viajeros de negocios con una cama doble y un área de trabajo.",
        numero_habitacion: 301,
        capacidad_habitacion: 2,
        precio_habitacion: "220000",
        tipo_habitacion: "Doble",
        disponibilidad: "Disponible",
        piso: 2,
        espacio_id: 1,
        ventana: "Si"
      },
      {
        nombre_habitacion: "Doble con Balcón",
        descripcion_habitacion: "Habitación con una cama doble y un balcón privado para disfrutar de las vistas.",
        numero_habitacion: 302,
        capacidad_habitacion: 2,
        precio_habitacion: "210000",
        tipo_habitacion: "Doble",
        disponibilidad: "Disponible",
        piso: 2,
        espacio_id: 1,
        ventana: "No"
      },
      {
        nombre_habitacion: "Doble Familiar",
        descripcion_habitacion: "Habitación equipada con una cama doble y una cama individual adicional para familias.",
        numero_habitacion: 303,
        capacidad_habitacion: 3,
        precio_habitacion: "230000",
        tipo_habitacion: "Doble",
        disponibilidad: "Disponible",
        piso: 1,
        espacio_id: 2,
        ventana: "No"
      },
      {
        nombre_habitacion: "Doble Standard",
        descripcion_habitacion: "Habitación con cama doble, Nomple pero confortable para estancias cortas.",
        numero_habitacion: 304,
        capacidad_habitacion: 2,
        precio_habitacion: "180000",
        tipo_habitacion: "Doble",
        disponibilidad: "Disponible",
        piso: 1,
        espacio_id: 2,
        ventana: "No"
      },
      // Habitaciones triples
      {
        nombre_habitacion: "Triple Superior",
        descripcion_habitacion: "Habitación espaciosa con una cama doble y una cama individual, ideal para grupos pequeños.",
        numero_habitacion: 400,
        capacidad_habitacion: 3,
        precio_habitacion: "270000",
        tipo_habitacion: "Triple",
        disponibilidad: "Disponible",
        piso: 1,
        espacio_id: 2,
        ventana: "No"
      },
      {
        nombre_habitacion: "Triple Familiar",
        descripcion_habitacion: "Habitación triple con una cama doble y una cama sencilla o tres camas sencillas, ideal para familias o grupos de viajeros.",
        numero_habitacion: 401,
        capacidad_habitacion: 3,
        precio_habitacion: "230000",
        tipo_habitacion: "Triple",
        disponibilidad: "Disponible",
        piso: 1,
        espacio_id: 2,
        ventana: "No"
      },
      {
        nombre_habitacion: "Triple Ejecutiva",
        descripcion_habitacion: "Habitación equipada con tres camas individuales, perfecta para viajeros de negocios o grupos.",
        numero_habitacion: 402,
        capacidad_habitacion: 3,
        precio_habitacion: "250000",
        tipo_habitacion: "Triple",
        disponibilidad: "Disponible",
        piso: 1,
        espacio_id: 2,
        ventana: "No"
      },
      {
        nombre_habitacion: "Triple con Vista",
        descripcion_habitacion: "Habitación triple con una vista panorámica, equipada con una cama doble y una cama individual.",
        numero_habitacion: 403,
        capacidad_habitacion: 3,
        precio_habitacion: "240000",
        tipo_habitacion: "Triple",
        disponibilidad: "Disponible",
        piso: 1,
        espacio_id: 2,
        ventana: "No"
      },
      {
        nombre_habitacion: "Triple Premium",
        descripcion_habitacion: "Habitación triple de alta gama con camas individuales y un diseño moderno y elegante.",
        numero_habitacion: 404,
        capacidad_habitacion: 3,
        precio_habitacion: "260000",
        tipo_habitacion: "Triple",
        disponibilidad: "Disponible",
        piso: 1,
        espacio_id: 2,
        ventana: "No"
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
