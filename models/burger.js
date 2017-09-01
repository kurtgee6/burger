//var orm = require("../config/orm");
//
//var burger = {
//  all: function(cb) {
//    orm.all("burgers", function(res) {
//      cb(res);
//    });
//  },
//  create: function(name, cb) {
//    orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
//  },
//  update: function(id, cb) {
//    var condition = "id=" + id;
//    orm.update("burgers", {
//      devoured: true
//    }, condition, cb);
//  }
//};
//
//module.exports = burger;


//========START OF SEQUELIZE========//

module.exports = (sequelize, DataTypes) => {
    var Burger = sequelize.define('Burger', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        burger_name: {
            type: DataTypes.STRING
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        ingredients: {
            type: DataTypes.STRING
        },
        picUrl: {
            type: DataTypes.STRING
        }
    });
    return Burger;
}
