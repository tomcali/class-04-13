// mysql-try.js

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "music_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

connection.query('SELECT * FROM songs', function(err, res){
 if(err) throw err;
 console.log(res);
});

connection.query('SELECT title FROM songs', function(err, res){
 if(err) throw err;
 console.log(res);
});

connection.query('SELECT title FROM songs', function(err, res){
 if(err) throw err;
 for (var i = 0; i < res.length; i++) {
  console.log(res[i].title);
};
});

connection.query('SELECT * FROM songs', function(err, res){
 if(err) throw err;
 for (var i = 0; i < res.length; i++) {
  console.log(res[i].title, '|', res[i].artist);
};
});

connection.query('CREATE TABLE products (' +
                ' id INT(10) AUTO_INCREMENT NOT NULL,' +
                ' flavor TEXT NOT NULL,' +
                ' price DECIMAL(9,2),' +
                ' quantity INT(10),' +
                ' PRIMARY KEY(id))'), function(err, result){};

// creates a table and inserts values into it in one statement
connection.query('INSERT INTO products SET ?', 
	{flavor: 'Rocky Road', price: 3.00, quantity: 50}, 
	function(err, res) {});

connection.query('SELECT * FROM products', function(err, res){
 if(err) throw err;
 console.log(res);
});

