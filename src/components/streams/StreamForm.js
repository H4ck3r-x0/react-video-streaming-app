import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
	renderErrors({ error, touched }) {
		if (touched && error) {
			return error;
		}
	}
	renderInput = ({ input, label, placeholder, id, meta }) => {
		return (
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor={id}
				>
					{label}
				</label>
				<input
					{...input}
					className={`shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-none${
						this.renderErrors(meta) ? "border-1 border-red-300" : ""
					}`}
					id={id}
					type="text"
					placeholder={placeholder}
					autoComplete="off"
				/>
				<span className="text-sm italic text-red-500">
					{this.renderErrors(meta)}
				</span>
			</div>
		);
	};
	onSubmit = formValues => {
		this.props.onSubmit(formValues);
	};
	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<div className="w-full bg-white p-4 shadow rounded border-t-2 border-gray-900">
					<Field
						id="title"
						name="title"
						component={this.renderInput}
						label="STREAM TITLE"
						placeholder="Interesting title... 😍"
					/>
					<Field
						id="description"
						name="description"
						component={this.renderInput}
						label="STREAM DESCRIPTION"
						placeholder="Interesting description... 😍"
					/>
				</div>
				<div className="bg-gray-900 p-4 rounded">
					<button
						type="submit"
						className="bg-white hover:bg-gray-100 px-4 py-1 text-gray-700 text-sm font-bold rounded"
					>
						{this.props.buttonText}
						<i className="fas fa-arrow-circle-right ml-3"></i>
					</button>
				</div>
			</form>
		);
	}
}

const validate = formValues => {
	const errors = {};
	if (!formValues.title) {
		errors.title = "The title is required.";
	}
	if (!formValues.description) {
		errors.description = "The description is required.";
	}
	return errors;
};

export default reduxForm({
	form: "streamForm",
	validate
})(StreamForm);
