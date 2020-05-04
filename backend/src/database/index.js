const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Horario = require("../models/Horario");
const Servico = require("../models/Servico");

const connection = new Sequelize(dbConfig);

User.init(connection);
Horario.init(connection);
Servico.init(connection);

module.exports = connection;