import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
	return (
		<div className="register">
			<div className="card">
				<div className="signup-banner">
					<h1>Create Your Account</h1>
					<form>
						<input type="text" placeholder="Your Name" />
						<input type="text" placeholder="Username" />
						<input type="password" placeholder="Password" />
						<input type="email" placeholder="Email ID" />
						<button>Register</button>
					</form>
				</div>
				<div className="login-banner">
					<h1>My Boddy</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
						eligendi, aspernatur quae totam quaerat quos perferendis maiores
						sint cupiditate non?
					</p>
					<span>Do you have an Account ?</span>
					<Link to="/login">
						<button>Login</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
