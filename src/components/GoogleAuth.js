import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"91438174161-qvetj8su4iqssaeu5126hmmsbg0dsmj8.apps.googleusercontent.com",
					scope: "email"
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					setTimeout(() => {
						this.onAuthChange(this.auth.isSignedIn.get());
					}, 1000);
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return (
				<Loader
					type="ThreeDots"
					color="#F7FAFC"
					height={25}
					width={25}
					timeout={3000} //3 secs
				/>
			);
		} else if (this.props.isSignedIn) {
			return (
				<button
					onClick={this.onSignOutClick}
					type="button"
					className="px-4 py-1 bg-red-700 focus:outline-none hover:bg-red-800 text-white rounded font-semibold animated bounceInDown"
				>
					<i className="fas fa-sign-out-alt mr-2 text-white"></i>
					Sign out
				</button>
			);
		} else {
			return (
				<button
					onClick={this.onSignInClick}
					type="button"
					className="px-4 py-1 bg-gray-100 focus:outline-none hover:bg-gray-200 text-gray-800 rounded font-semibold animated bounceInDown"
				>
					<i className="fab fa-google mr-2 text-indigo-700"></i>
					Sign in with Google
				</button>
			);
		}
	}
	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
