import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderAdmin = stream => {
		if (stream.userId === this.props.curruntUserId) {
			return (
				<div>
					<Link
						to={`/stream/edit/${stream.id}`}
						className="mr-3 focus:outline-none"
					>
						<i className="fas fa-edit text-blue-300 hover:text-blue-400"></i>
					</Link>
					<Link
						to={`/stream/delete/${stream.id}`}
						className="focus:outline-none"
					>
						<i className="fas fa-trash-alt text-red-300 hover:text-red-400"></i>
					</Link>
				</div>
			);
		}
	};

	renderList() {
		return this.props.streams.map(stream => {
			return (
				<div key={stream.id} className="w-1/2">
					<div className="flex flex-col bg-white rounded shadow mr-3 border-t-2 border-gray-900 mb-4">
						<div className="py-3 pl-4">
							<h1 className="text-2xl text-gray-800">
								{stream.title}
							</h1>
						</div>
						<div className="pl-3">
							<p className="text-sm text-gray-600 leading-relaxed tracking-wide">
								{stream.description}
							</p>
						</div>
						<div className="flex items-center mt-3 p-3 bg-gray-800 rounded">
							<div className="w-1/2 flex justify-start">
								<Link
									to={`/stream/${stream.id}`}
									className="bg-white hover:bg-gray-100 px-4 py-1 text-gray-700 text-sm font-bold rounded"
								>
									WATCH NOW
									<i className="fas fa-arrow-circle-right ml-2"></i>
								</Link>
								<span className="flex justify-end items-center  text-gray-700">
									<i className="fas fa-video ml-2 text-red-300 animated infinite flash duration delay-1s"></i>
								</span>
							</div>
							<div className="w-full flex justify-end">
								{this.renderAdmin(stream)}
							</div>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="container m-auto mt-6 animated bounceInLeft">
				<div className="mb-6 w-32">
					<h1 className="text-gray-700 text-3xl font-semibold">
						Browse
					</h1>
				</div>
				<div className="flex flex-wrap">{this.renderList()}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		streams: Object.values(state.streams),
		curruntUserId: state.auth.userId
	};
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
