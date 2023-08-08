import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import "./home.scss";

const Home = () => {
	return (
		<div className="homePage">
			<Stories />
			<Posts />
		</div>
	);
};

export default Home;
