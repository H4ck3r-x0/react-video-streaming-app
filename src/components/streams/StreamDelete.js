import React from "react";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../../Modal";

class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}
	render() {
		if (!this.props.stream) {
			return <div>There is an error. Please try again later!</div>;
		}
		return (
			<Modal
				contnet={this.props.stream.title}
				action={() =>
					this.props.deleteStream(this.props.match.params.id)
				}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
	StreamDelete
);
