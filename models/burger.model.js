//requires
var orm = require('../config/orm');

//create burger object with orm functions
var burger = {
  all: function (cb) {
    orm.selectAll(function (res) {
      cb(res)
    });
  },

  new: function (name, cb) {
    orm.insertOne(name, function (res) {
      cb(res);
    });
  },

  eat: function (id, cb) {
    orm.updateOne(id, function (res) {
      cb(res);
    });
  },

  digest: function (id, cb) {
    orm.deleteOne(id, function (res) {
      cb(res);
    });
  }
}

//exports
module.exports = burger;