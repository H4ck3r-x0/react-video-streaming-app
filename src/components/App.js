import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
	handleMouseOver(callback) {
		const node = document.querySelector("#animate");
		node.classList.add("animated", "headShake");

		function handleAnimationEnd() {
			node.classList.remove("animated", "headShake");
			node.removeEventListener("animationend", handleAnimationEnd);

			if (typeof callback === "function") callback();
		}

		node.addEventListener("animationend", handleAnimationEnd);
	}
	render() {
		return (
			<div>
				<header className="flex bg-gray-900 text-white">
					<div className="flex items-center container m-auto h-16">
						<h1 className="w-1/6 flex text-lg font-semibold tracking-wider mr-10">
							<i className="fab fa-twitch mr-3 text-3xl hover:text-gray-200 text-indigo-800 animated fadeIn"></i>

							<a href="#" className="hover:text-gray-100">
								Twitch Live
							</a>
						</h1>
						<a
							href="#"
							className="w-24 text-center text-white hover:text-gray-100 mr-6 font-semibold border-b-2 border-indigo-800"
						>
							Discover
						</a>
						<a
							href="#"
							className="w-24 text-white text-center hover:text-gray-100 font-semibold border-b-2 border-indigo-800"
						>
							Browse
						</a>
						<div className="w-full flex justify-end">
							<button
								type="button"
								className="px-4 mr-4 bg-white text-gray-800 rounded font-semibold"
							>
								Login
							</button>
							<button
								type="button"
								className="px-4 py-1 bg-indigo-800 hover:bg-indigo-700 text-white rounded font-semibold"
							>
								Sign Up
							</button>
						</div>
					</div>
				</header>
				<div className="bg-white p-4 border-b-2 border-gray-200 h-auto">
					<div className="container m-auto flex justify-center">
						<div className="">
							<h1 className="flex justify-center text-6xl tracking-wider text-gray-800 font-semibold">
								Twitch Live
							</h1>
							<div className="flex justify-center">
								<p className="w-1/2 text-center text-lg text-gray-600 leading-loose tracking-wide font-normal animated fadeInUp">
									Twitch is the world's leading live streaming
									platform for gamers and the things we love.
									Watch and chat now with millions of other
									fans from around the world.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Lists of the streamers. */}
				<div className="container m-auto mt-6 animated bounceInLeft">
					<div className="flex flex-row">
						<div
							onMouseOver={() => {
								this.handleMouseOver();
							}}
							id="animate"
							className="flex flex-col w-1/3 px-4 py-4 bg-white  rounded shadow mr-3 border-t-2 border-indigo-800"
						>
							<div className="text-center">
								<h1 className="text-2xl text-gray-800">
									Mohammed's Strame
								</h1>
							</div>
							<p className="text-sm text-center mt-3 text-gray-600 leading-relaxed tracking-wide">
								Twitch is the world's leading live streaming
								platform for gamers and the things we love.
								Watch and chat now with millions of other
							</p>
							<div className="flex justify-center mt-4">
								<button
									type="button"
									className="uppercase px-4 py-1 bg-indigo-800 hover:bg-indigo-700 text-white rounded font-semibold tracking-wide"
								>
									<i className="fab fa-twitch mr-1"></i>
									Watch Now
								</button>
							</div>
							<span className="flex justify-end items-center text-gray-700">
								<i class="fas fa-video ml-2 text-red-600 animated infinite flash duration delay-1s"></i>
							</span>
						</div>
						<div className="flex flex-col w-1/3 px-4 py-4 bg-white rounded shadow mr-3 border-t-2 border-indigo-800">
							<div className="text-center">
								<h1 className="text-2xl text-gray-800">
									Mohammed's Strame
								</h1>
							</div>
							<p className="text-sm text-center mt-3 text-gray-600 leading-relaxed tracking-wide">
								Twitch is the world's leading live streaming
								platform for gamers and the things we love.
								Watch and chat now with millions of other
							</p>
							<div className="flex justify-center mt-4">
								<button
									type="button"
									className="uppercase px-4 py-1 bg-indigo-800 hover:bg-indigo-700 text-white rounded font-semibold font-semibold tracking-wide"
								>
									<i className="fab fa-twitch mr-1"></i>
									Watch Now
								</button>
							</div>
							<span className="flex justify-end items-center text-gray-700">
								<i class="fas fa-video ml-2 text-red-600 animated infinite flash duration delay-1s"></i>
							</span>
						</div>
						<div className="flex flex-col w-1/3 px-4 py-4 bg-white rounded shadow border-t-2 border-indigo-800">
							<div className="text-center">
								<h1 className="text-2xl text-gray-800">
									Mohammed's Strame
								</h1>
							</div>
							<p className="text-sm text-center mt-3 text-gray-600 leading-relaxed tracking-wide">
								Twitch is the world's leading live streaming
								platform for gamers and the things we love.
								Watch and chat now with millions of other
							</p>
							<div className="flex justify-center mt-4">
								<button
									type="button"
									className="uppercase px-4 py-1 bg-indigo-800 hover:bg-indigo-700 text-white rounded font-semibold font-semibold tracking-wide"
								>
									<i className="fab fa-twitch mr-1"></i>
									Watch Now
								</button>
							</div>
							<span className="flex justify-end items-center text-gray-700">
								<i class="fas fa-video ml-2 text-red-600 animated infinite flash duration delay-1s"></i>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
