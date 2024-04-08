const mongoose = require("../config/database");

const schemaProducto = new mongoose.Schema({
    referencia: {
        type: String,
        required: [true , "La referencia es obligatoria"]
    },
    nombre:{
        type: String,
        required: [true,"El nombre del producto es requerido"],
    },
    descrpcion:{
        type: String,
        required: [true,"La descripcion del producto es requerida"],
    },
    precio:{
        type: Number,
        required: [true,"El precio del producto es requerido"],
        min: [0, "El precio debe ser mayor a 0"],
    },
    stock:{
        type: Number,
        required: [true,"El stock del producto es requerido"],
        min: [0, "El stock minimo es 0"],
    },
    imagen:{
        type: String,
        required: [true,"La imagen del producto es requerida"],
    },
    habilitado:{
        type: Boolean,
        default: true,
    },
});

const producto = mongoose.model("producto", schemaProducto);
module.exports = producto;