import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Produto = sequelize.define("Produto", {
    nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
    },
    preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    },
    categoria: {
    type: DataTypes.STRING(50),
    allowNull: false,
    },
}, {
    timestamps: false
});