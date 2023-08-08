import React, { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
	const { toggle, darkMode } = useContext(DarkModeContext);
	const { currentUser } = useContext(AuthContext);

	return (
		<div className="navbar">
			<div className="left">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span>My Buddy</span>
				</Link>
				<HomeOutlinedIcon />
				{darkMode ? (
					<WbSunnyOutlinedIcon onClick={toggle} />
				) : (
					<DarkModeOutlinedIcon onClick={toggle} />
				)}
				<ModeCommentOutlinedIcon />

				<div className="search">
					<SearchOutlinedIcon />
					<input type="text" placeholder="search for Buddies" />
				</div>
			</div>
			<div className="right">
				<PermIdentityOutlinedIcon />
				<NotificationsNoneOutlinedIcon />

				<div className="user">
					<img src={currentUser.profilePic} alt="" />
					<span>{currentUser.name}</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
