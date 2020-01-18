import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import Loader from "react-loader-spinner";

class StreamShow extends React.Component {
	componentDidMount() {
		setTimeout(() => {
			this.props.fetchStream(this.props.match.params.id);
		}, 1000);
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

		return <div>{title}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
