import React, { useState } from "react";
import "./Post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";

const Post = ({ post }) => {
	const [commentOpen, setCommentOpen] = useState(false);

	//Temporary
	const liked = false;

	return (
		<div className="post">
			<div className="container">
				<div className="user">
					<div className="userInfo">
						<img src={post.profilePic} alt="" />
						<div className="details">
							<Link
								to={`/profile/${post.uderId}`}
								style={{ textDecoration: "none", color: "inherit" }}>
								<span className="name">{post.name}</span>
							</Link>
							<span className="date">1 min ago</span>
						</div>
					</div>
					<div className="userInfo"></div>
					<MoreHorizOutlinedIcon />
				</div>
				<div className="content">
					<p>{post.desc}</p>
					<img src={post.img} alt="" />
				</div>
				<div className="info">
					<div className="item">
						{liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
						12 <span>Likes</span>
					</div>

					<div className="item" onClick={() => setCommentOpen(!commentOpen)}>
						<TextsmsOutlinedIcon />2 <span>Comments</span>
					</div>

					<div className="item">
						<ShareOutlinedIcon />
						<span>Share</span>
					</div>
				</div>
				{commentOpen && <Comments />}
			</div>
		</div>
	);
};

export default Post;
