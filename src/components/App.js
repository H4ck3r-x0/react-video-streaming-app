import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import FadeIn from "react-fade-in";

import Header from "./Header";
import Landing from "./Landing";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { loading: true };
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ loading: false });
		}, 1500);
	}
	render() {
		if (this.state.loading) {
			return (
				<div className="flex h-screen">
					<div className="m-auto">
						<Loader
							type="MutatingDots"
							color="#5A67D8"
							height={100}
							width={100}
							timeout={3000}
						/>
					</div>
				</div>
			);
		}
		return (
			<div>
				<FadeIn>
					<Router history={history}>
						<Header />
						<Route path="/" exact>
							<Landing />
						</Route>
						<Route path="/browse">
							<StreamList />
						</Route>
						<Route path="/stream/new">
							<StreamCreate />
						</Route>
						<Route path="/stream/edit/:id">
							<StreamEdit history={history} />
						</Route>
					</Router>
				</FadeIn>
			</div>
		);
	}
}

export default App;
