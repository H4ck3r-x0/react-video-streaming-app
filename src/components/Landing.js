import React from "react";

class Landing extends React.Component {
	render() {
		return (
			<div className="bg-white texture p-4 border-b-2 border-gray-200 h-screen">
				<div className="container m-auto flex justify-center">
					<div className="mt-24">
						<h1 className="flex justify-center text-6xl tracking-wider text-gray-800 font-semibold">
							Twitch Live
						</h1>
						<div className="flex justify-center">
							<p className="w-1/2 text-center text-lg text-gray-600 leading-loose tracking-wide font-normal animated fadeInUp">
								Twitch is the world's leading live streaming
								platform for gamers and the things we love.
								Watch and chat now with millions of other fans
								from around the world.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
