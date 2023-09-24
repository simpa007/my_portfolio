"use client";

import { BsArrowUpRight } from "react-icons/bs";

function About() {
	return (
		<div className="container flex justify-between items-center mx-auto  mt-28 p-12">
			<div className="w-[45%]">
				<p className="text-xl font-bold mb-4">ABOUT ME</p>
				<h1 className="text-2xl font-extrabold mb-4">
					I’ve been developing websites since 2010
				</h1>
				<p className="mb-4">
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
					officia deserunt mollit anim id est laborum aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat.
				</p>
				<button className="underline underline-offset-8 text-lg font-bold">
					More about me
					<BsArrowUpRight size={24} className="inline-flex items-baseline" />
				</button>
			</div>
			<div className="w-[45%]">
				<div className="flex justify-between text-2xl font-extrabold mb-4 space-x-4">
					<div className="flex space-x-2">
						<span className="text-7xl font-[700px]">12</span>
						<span>
							Years of <br />
							experience
						</span>
					</div>
					<div className="flex space-x-2">
						<span className="text-7xl font-[700px]">150</span>
						<p>Successful projects</p>
					</div>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad
					minim veniam, quis nostrud exercitation.
				</p>
			</div>
		</div>
	);
}

export default About;
