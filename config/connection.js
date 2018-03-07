var mysql = require("mysql");
var connection;

if(process.env.JASWDB_URL){

	connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: "CMMAnum_1",
		database: "users_db",
		dialect: "mysql"
	});
};

connection.connect();
module.exports = connection;