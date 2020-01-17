import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
	renderGoLiveButton = () => {
		if (this.props.isSignedIn) {
			return (
				<Link
					to="/stream/new"
					className="mr-6 px-4 py-1 bg-purple-100 focus:outline-none hover:bg-gray-200 text-gray-800 rounded font-semibold animated bounceInDown"
				>
					<i className="fas fa-video mr-2"></i>
					Go Live
				</Link>
			);
		}
	};
	render() {
		return (
			<header className="flex bg-gray-900 text-white">
				<div className="flex items-center container m-auto h-16">
					<h1 className="flex text-lg font-semibold tracking-wider mr-6">
						<Link to="/" className="hover:text-gray-100">
							<i className="fab fa-twitch mr-3 text-3xl hover:text-gray-200 text-indigo-800 animated fadeIn"></i>
						</Link>
					</h1>
					<Link
						to="/"
						className="w-24 text-center text-white hover:text-gray-100 mr-6 font-semibold border-b-2 border-indigo-800"
					>
						Home
					</Link>
					<Link
						to="/discover"
						className="w-24 text-center text-white hover:text-gray-100 mr-6 font-semibold border-b-2 border-indigo-800"
					>
						Discover
					</Link>
					<Link
						to="/browse"
						className="w-24 text-white text-center hover:text-gray-100 font-semibold border-b-2 border-indigo-800"
					>
						Browse
					</Link>
					<div className="w-full flex justify-end items-center">
						{this.renderGoLiveButton()}
						<GoogleAuth />
					</div>
				</div>
			</header>
		);
	}
}

const mapStateToProps = state => {
	const { auth } = state;
	return {
		isSignedIn: auth.isSignedIn
	};
};

export default connect(mapStateToProps)(Header);
