import mysql from "mysql2";

export const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Jaga@123",
	database: "my_buddy",
});
