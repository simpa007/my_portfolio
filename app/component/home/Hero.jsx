"use client";

import { FiTwitter, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";

function Hero() {
	return (
		<div className="container flex  justify-around items-center mx-auto mt-10 py-28">
			<div>
				<hr className="w-[80px] mb-5" />
				<h1 className="text-2xl font-extrabold mb-2">
					I’m John, a Web Developer
				</h1>
				<p className="text-lg text-[offwhite]">
					Lorem ipsum dolor sit amet consectetur adipiscing
					<br /> elit leo quis ullamcorper quis id elementum convallis lacus
					gravida.
				</p>
			</div>
			<div className="w-[30%]">
				<div className="my-8">
					<h1 className="text-2xl font-extrabold mb-4">ABOUT ME</h1>
					<p className="mb-4">
						Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis
						ullamcorper quis id elementum convallis lacus gravida.
					</p>
					<button className="underline underline-offset-8 text-lg">
						LEARN MORE{" "}
						<BsArrowUpRight size={24} className="inline-flex items-baseline" />
					</button>
				</div>
				<hr className="mb-8" />
				<div className="mb-8">
					<h1 className="text-2xl font-extrabold mb-4">MY WORK</h1>
					<p className="mb-4">
						Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis
						ullamcorper quis id elementum convallis lacus gravida.
					</p>
					<button className="underline underline-offset-8 text-lg">
						BROWSE PORTFOLIO{" "}
						<BsArrowUpRight size={24} className="inline-flex items-baseline" />
					</button>
				</div>
				<hr className="mb-8" />
				<div className="mb-8">
					<h1 className="text-2xl font-extrabold mb-6">FOLLOW ME</h1>
					<div className="flex space-x-7">
						<button>
							<FiTwitter size={36} />
						</button>
						<button>
							<FiInstagram size={36} />
						</button>
						<button>
							<FiLinkedin size={36} />
						</button>
						<button>
							<FiGithub size={36} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
