"use client";
import Image from "next/image";
import background from "../../images/bg.png";
import { FiTwitter, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";

function Hero() {
	return (
		<div className="relative">
			<div className="container px-6 mx-auto flex flex-col mt-20  md:flex md:flex-row md:mx-auto md:z-0 md:mt-10  lg:flex justify-around items-center lg:mx-auto lg:mt-10 lg:py-10  lg:z-0">
				<div className="md:w-[45%]">
					<hr class="w-20 h-1 bg-white border-0 rounded md:w-32 md:h-1 lg:w-48 lg:h-1 lg:my-2 " />
					<h1 className="text-3xl font-extrabold mb-4 md:text-5xl md:font-extrabold lg:text-7xl lg:font-extrabold lg:mb-2">
						I’m Simpa, a <br />
						Web Developer
					</h1>
					<p className=" text-lg text-[offwhite]">
						Lorem ipsum dolor sit amet consectetur adipiscing
						<br /> elit leo quis ullamcorper quis id elementum convallis lacus
						gravida.
					</p>
				</div>
				<div className="md:w-[45%] lg:w-[30%]">
					<div className="my-8">
						<h1 className="text-2xl font-extrabold mb-4">ABOUT ME</h1>
						<p className="mb-4">
							Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis
							ullamcorper quis id elementum convallis lacus gravida.
						</p>
						<button className="underline underline-offset-8 text-lg">
							LEARN MORE{" "}
							<BsArrowUpRight
								size={24}
								className="inline-flex items-baseline"
							/>
						</button>
					</div>
					<hr className="mb-8 text-[#c3cad5]" />
					<div className="mb-8">
						<h1 className="text-2xl font-extrabold mb-4">MY WORK</h1>
						<p className="mb-4">
							Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis
							ullamcorper quis id elementum convallis lacus gravida.
						</p>
						<button className="underline underline-offset-8 text-lg">
							BROWSE PORTFOLIO{" "}
							<BsArrowUpRight
								size={24}
								className="inline-flex items-baseline"
							/>
						</button>
					</div>
					<hr className="mb-8 text-[#c3cad5]" />
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
			<Image
				src={background}
				alt="background image"
				style={{
					objectFit: "cover",
				}}
				quality={100}
				className="md:absolute md:bottom-[25%] md:left-[20%] md:-z-50 lg:absolute lg:bottom-[25%] lg:left-[32%] lg:-z-50"
			/>
		</div>
	);
}

export default Hero;
