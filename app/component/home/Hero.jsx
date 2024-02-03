"use client";
import Image from "next/image";
import Link from "next/link";
import background from "../../assets/images/bg.png";
import { FiTwitter, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";

function Hero() {
	return (
		<div id="home" className="relative">
			<div className="container mx-auto flex flex-col mt-20 px-6  md:flex md:flex-row md:mx-auto md:z-0 md:mt-10  lg:flex justify-between items-center lg:mx-auto lg:mt-10 lg:py-10  lg:z-0">
				<div className="w-full md:w-[45%]">
					<hr class="w-20 h-2 bg-white border-0 rounded md:w-32 md:h-2 lg:w-48 lg:h-2 lg:my-2 " />
					<h1 className="text-4xl mt-12 font-extrabold mb-4 md:text-5xl md:font-extrabold lg:text-7xl lg:font-extrabold lg:mb-2">
						I’m <span className="text-[#6ff4a5]">Simpa</span>, a <br />
						Web Developer
					</h1>
					<div className="mt-8">
						<Link
							href="https://wa.me/08073696557"
							className="underline underline-offset-8 text-lg"
						>
							GET IN TOUCH{" "}
							<BsArrowUpRight
								size={24}
								className="inline-flex items-baseline"
							/>
						</Link>
					</div>

					{/* <p className=" text-lg text-[offwhite] mt-4">CALL TO ACTION BUTTON</p> */}
				</div>
				<div className="md:w-[45%] lg:w-[30%]">
					<div className="my-8">
						<h1 className="text-2xl font-extrabold mb-4 text-[#6ff4a5]">
							ABOUT ME
						</h1>
						<p className="mb-4 text-lg font-normal">
							I design and code beautifully simple things. and I love what I do.
						</p>
						<Link
							href="#about"
							className="underline underline-offset-8 text-lg"
						>
							LEARN MORE{" "}
							<BsArrowUpRight
								size={24}
								className="inline-flex items-baseline"
							/>
						</Link>
					</div>
					<hr className="my-12 border-[#c3cad5]" />
					<div className="">
						<h1 className="text-2xl font-extrabold mb-4 text-[#6ff4a5]">
							MY WORK
						</h1>
						<p className="mb-4 text-lg font-normal">
							I offer comprehensive services covering the entire app development
							lifecycle, from conceptualization to deployment and ongoing
							support
						</p>
						<Link
							href="#portfolio"
							className="underline underline-offset-8 text-lg"
						>
							BROWSE PORTFOLIO{" "}
							<BsArrowUpRight
								size={24}
								className="inline-flex items-baseline"
							/>
						</Link>
					</div>
					<hr className="my-12 border-[#c3cad5]" />
					<div className="">
						<h1 className="text-2xl font-extrabold mb-6 text-[#6ff4a5]">
							FOLLOW ME
						</h1>
						<div className="flex space-x-8">
							<Link href="https://twitter.com/Simpa_sol">
								<FiTwitter size={36} className="hover:text-[#4bf4a5]" />
							</Link>
							<Link href="https://www.instagram.com/simpa_sol/">
								<FiInstagram size={36} className="hover:text-[#4bf4a5]" />
							</Link>
							<Link href="https://www.linkedin.com/in/simpa-emmanuel-67a5981a1/">
								<FiLinkedin size={36} className="hover:text-[#4bf4a5]" />
							</Link>
							<Link href="https://github.com/simpa007">
								<FiGithub size={36} className="hover:text-[#4bf4a5]" />
							</Link>
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
