import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}
	renderList() {
		return this.props.streams.map(stream => {
			return (
				<div
					key={stream.id}
					className="flex flex-col w-full px-4 py-4 bg-white rounded shadow mr-3 border-t-2 border-gray-900 mb-4"
				>
					<div className="">
						<h1 className="text-2xl text-gray-800">
							{stream.title}
						</h1>
					</div>
					<p className="text-sm  mt-3 text-gray-600 leading-relaxed tracking-wide">
						{stream.description}
					</p>
					<div className="w-1/2 flex justify-start mt-4">
						<button
							type="button"
							className="uppercase px-4 py-1 bg-indigo-800 hover:bg-indigo-700 text-white text-sm rounded font-bold tracking-wide"
						>
							Watch Now
						</button>
						<span className="flex justify-end items-center  text-gray-700">
							<i className="fas fa-video ml-2 text-red-600 animated infinite flash duration delay-1s"></i>
						</span>
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
	return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
