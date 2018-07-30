//requires
var connection = require('./connection');

//orm functions
var orm = {
  selectAll: function (cb) {
    connection.query('SELECT * FROM burgers', function (err, res) {
      if (err) console.error(err);
      cb(res);
    })
  },

  insertOne: function (name, cb) {
    var sql = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)';
    connection.query(sql, [name, false], function (err, res) {
      if (err) console.error(err);
      cb(res);
    })
  },

  updateOne: function (id, cb) {
    var sql = `UPDATE burgers SET devoured = '1' WHERE id = ${String(id)}`;
    connection.query(sql, function (err, res) {
      if (err) console.error(err);
      cb(res);
    })
  },

  deleteOne: function (id, cb) {
    var sql = `DELETE FROM burgers WHERE id=${String(id)}`;
    connection.query(sql, function (err, res) {
      if (err) console.error(err);
      cb(res);
    })
  },
}

//export
module.exports = orm;