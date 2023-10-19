"use client";

import { BsArrowUpRight } from "react-icons/bs";

function About() {
	return (
		<div className="bg-[#22282F]">
			<div className="container py-24 px-6 mx-auto md:mx-auto md:py-24 lg:flex  lg:justify-between lg:items-center lg:mx-auto  lg:mt-28 lg:py-24">
				<div className="md:w-[100%]   lg:w-[45%]">
					<p className="text-2xl font-extrabold mb-6">
						<span className="text-[#6ff4a5]">/</span> ABOUT ME
					</p>
					<h1 className="text-xl font-bold mb-6 md:text-2xl md:font-bold lg:text-5xl lg:font-bold lg:mb-4">
						I’ve been developing websites since 2020
					</h1>
					<p className="mb-6">
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat.
					</p>
					<button className="underline underline-offset-8 text-xl font-bold mt-6">
						More about me
						<BsArrowUpRight size={24} className="inline-flex items-baseline" />
					</button>
				</div>
				<div className="mt-6 md:w-full lg:w-[45%]">
					<div className=" font-extrabold md:flex md:space-x-12 md:text-xl lg:justify-between lg:text-2xl">
						<div className="mt-3 flex space-x-2 items-center md:mt-0">
							<span className="text-3xl font-semibold md:text-5xl md:font-[700px] lg:text-7xl lg:font-[700px]">
								12
							</span>
							<span className="inline md:inline-block">
								Years of experience
							</span>
						</div>
						<div className="mt-3 flex space-x-2 items-center md:mt-0">
							<span className="text-3xl font-semibold md:text-5xl md:font-[700px] lg:text-7xl lg:font-[700px]">
								150
							</span>
							<span className="inline md:inline-block">
								Successful projects
							</span>
						</div>
					</div>
					<p className="mt-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
						ad minim veniam, quis nostrud exercitation.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
