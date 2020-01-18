import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import Loader from "react-loader-spinner";
import flv from "flv.js";

class StreamShow extends React.Component {
	constructor(props) {
		super(props);

		this.videoRef = React.createRef();
	}
	componentDidMount() {
		setTimeout(() => {
			this.props.fetchStream(this.props.match.params.id);
			this.buildPlayer();
		}, 1000);
	}

	componentDidUpdate() {
		this.buildPlayer();
	}

	componentWillUnmount() {
		this.player.destroy();
	}

	buildPlayer() {
		if (this.player || !this.props.stream) {
			return;
		}

		this.player = flv.createPlayer({
			type: "flv",
			url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
		});
		this.player.attachMediaElement(this.videoRef.current);
		this.player.load();
	}
	renderLoading() {
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

	render() {
		if (!this.props.stream) {
			return this.renderLoading();
		}
		const { title, description } = this.props.stream;

		return (
			<div className="container m-auto w-full mt-4 mb-64">
				<div className="flex flex-col">
					<div className="">
						<video
							className="h-full w-full rounded focus:outline-none shadow-lg"
							ref={this.videoRef}
							controls
						/>
					</div>
					<div className="mt-3">
						<h1 className="text-3xl font-bold text-gray-800">
							{title}
						</h1>
						<p className="text-lg itilic text-gray-600">
							{description}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
