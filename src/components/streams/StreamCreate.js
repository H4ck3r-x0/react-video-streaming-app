import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
	onSubmit = formValues => {
		this.props.createStream(formValues);
	};
	render() {
		return (
			<div className="flex container m-auto mt-6 justify-center animated bounceInLeft">
				<div className="w-2/3 flex flex-col">
					<div className="mb-6">
						<h1 className="text-gray-700 text-3xl font-semibold text-center">
							CREATE NEW STREAM
						</h1>
					</div>
					<StreamForm
						onSubmit={this.onSubmit}
						buttonText="START STREAMING"
					/>
				</div>
			</div>
		);
	}
}

export default connect(null, { createStream })(StreamCreate);
