import "dotenv/config";
import mysql from 'mysql';
// Connection 객체 생성
const connection = mysql.createConnection({
  host:'localhost',
  port: 3306,
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'pwa_crud'
});
// Connect
connection.connect(function(err){
  if(err) {
    console.error('mysql connection error');
    console.error(err);
    throw err;
  }
});

export default connection;