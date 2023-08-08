import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
	// console.log("At User Registration endpoint");
	//Check User If exists
	const q1 = "SELECT * FROM users WHERE username = ?";

	db.query(q1, [req.body.username], (err, data) => {
		if (err) {
			console.log(err);
			return res.status(500).json(err);
		}

		if (data.length) return res.status(409).json("User already exists");

		//If Not, Create a New User
		//Hash the Password
		const salt = bcrypt.genSaltSync(10);
		const hashedPassword = bcrypt.hashSync(req.body.password, salt);

		const q2 =
			"INSERT INTO users (`username`, `email`, `password`, `name`) value (?)";

		const values = [
			req.body.username,
			req.body.email,
			hashedPassword,
			req.body.name,
		];

		db.query(q2, [values], (err, data) => {
			if (err) {
				console.log(err);
				return res.status(500).json(err);
			}

			return res.status(200).json("User has been created");
		});
	});
};
export const login = (req, res) => {
	//Check weather USer exists
	const q1 = "SELECT * FROM users WHERE username = ?";

	db.query(q1, [req.body.username], (err, data) => {
		if (err) {
			console.log(err);
			return res.status(500).json(err);
		}

		if (data.length === 0) {
			res.status(404).json("USer not found");
		}

		const checkPassword = bcrypt.compareSync(
			req.body.password,
			data[0].password
		);

		if (!checkPassword) {
			return res.status(400).json("Invalid password or Username");
		}

		const webToken = jwt.sign({ id: data[0].id }, "SecretKey");

		const { password, ...others } = data[0];

		res
			.cookie("accessToken", webToken, {
				httpOnly: true,
			})
			.status(200)
			.json(others);
	});
};

//Logout Functionality
export const logout = (req, res) => {
	res
		.clearCookie("webToken", {
			secure: true,
			sameSite: "none",
		})
		.status(200)
		.json("User has been logged out");
};
