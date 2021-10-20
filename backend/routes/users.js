var express = require('express');
var router = express.Router();
import connection from '../database';

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM users', function(err, rows) {
    if (err) throw err;
    res.send(rows);
  })
});

module.exports = router;
