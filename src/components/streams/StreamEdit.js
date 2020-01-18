import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import Loader from "react-loader-spinner";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
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
	onSubmit = formValues => {
		this.props.editStream(this.props.match.params.id, formValues);
	};
	render() {
		if (!this.props.stream) {
			return this.renderLoading();
		}
		return (
			<div className="flex container m-auto mt-6 justify-center animated bounceInLeft">
				<div className="w-2/3 flex flex-col">
					<div className="mb-6">
						<h1 className="text-gray-700 text-3xl font-semibold text-center">
							EDIT YOUR STREAM
						</h1>
					</div>
					<StreamForm
						initialValues={_.pick(
							this.props.stream,
							"title",
							"description"
						)}
						onSubmit={this.onSubmit}
						buttonText="UPDATE STREAM"
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchStream, editStream })(
	StreamEdit
);
