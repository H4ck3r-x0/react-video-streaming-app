import React from "react";
import ReactModal from "react-modal";
import history from "./history";

ReactModal.defaultStyles.overlay.backgroundColor = "#1A202C";

ReactModal.setAppElement("#modal");

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "40%",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)"
	}
};

class Modal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: false
		};
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	componentDidMount() {
		this.setState({ modalIsOpen: true });
	}
	openModal() {
		this.setState({ modalIsOpen: true });
	}

	afterOpenModal() {
		// references are now sync'd and can be accessed.
		// this.body.style.background = "#f00";
	}

	closeModal() {
		this.setState({ modalIsOpen: false });
		history.push("/browse");
	}
	render() {
		return (
			<ReactModal
				isOpen={this.state.modalIsOpen}
				onAfterOpen={this.afterOpenModal}
				onRequestClose={this.closeModal}
				style={customStyles}
			>
				<div className="flex flex-col">
					<div className="flex justify-between items-center border-b-2 border-gray-300">
						<h1 className="mb-3 text-2xl font-bold text-gray-800">
							DELETE STREAM
						</h1>
						<button onClick={this.closeModal}>
							<i className="fas fa-times-circle text-lg text-gray-500"></i>
						</button>
					</div>
					<div className="flex items-center mt-4">
						<div className="flex flex-col">
							<p className="text-lg font-bold text-gray-600 traking-wide">
								<i className="fas fa-exclamation-circle text-lg text-red-500 mr-3"></i>
								Are you sure you want to delete this stream ?
							</p>
							<span className="text-red-500 ml-8 mt-2 text-sm font-bold">
								{this.props.contnet}
							</span>
						</div>
					</div>
					<div className="flex justify-end mt-4">
						<div className="flex content-end">
							<button
								onClick={this.props.action}
								className="bg-red-600 hover:bg-red-700 font-bold text-sm px-3 py-1 text-white rounded"
							>
								DELETE
							</button>
							<button
								onClick={this.closeModal}
								className="bg-gray-600 ml-3 hover:bg-gray-700 font-bold text-sm px-3 py-1 text-white rounded"
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</ReactModal>
		);
	}
}

export default Modal;
