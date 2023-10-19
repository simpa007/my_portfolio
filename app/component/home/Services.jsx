import React from "react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import web from "../../images/4.jpg";
import seo from "../../images/1.jpg";
import app from "../../images/5.jpg";

export default function Services() {
	return (
		<div className="">
			<div className="container mx-auto py-24">
				<div className="border px-6 mx-auto md:flex md:justify-between md:items-center md:px-0">
					<div>
						<p className="text-2xl font-extrabold mb-6">
							<span className="text-[#6ff4a5]">/</span> SERVICES
						</p>
						<h1 className="text-xl font-bold md:text-2xl md:font-bold lg:text-5xl lg:font-bold mb-4">
							Helping clients build
							<br />
							their dream project
						</h1>
					</div>

					<div className="mt-6">
						<button className="underline underline-offset-8 text-lg font-bold">
							Explore Services
							<BsArrowUpRight
								size={24}
								className="inline-flex items-baseline"
							/>
						</button>
					</div>
				</div>

				<div className=" mt-12 mx-auto py-6 grid grid-cols-3 gap-4">
					<div className="bg-[#2a313b] items-center max-w-lg mx-12 lg:mx-0">
						<Image src={web} alt="web development" className="" />

						<div className="p-6">
							<h1>Web Development</h1>
							<p className="mt-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua ut.
							</p>
							<button className="my-6 md:mt-8 underline underline-offset-8 text-lg font-bold">
								View Details
								<BsArrowUpRight
									size={24}
									className="inline-flex items-baseline"
								/>
							</button>
						</div>
					</div>
					<div className="bg-[#2a313b] items-center max-w-lg mx-12 lg:mx-0">
						<Image src={seo} alt="seo" className="" />

						<div className="p-6">
							<h1>SEO</h1>
							<p className="mt-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua ut.
							</p>
							<button className="my-6 md:mt-8 underline underline-offset-8 text-lg font-bold">
								View Details
								<BsArrowUpRight
									size={24}
									className="inline-flex items-baseline"
								/>
							</button>
						</div>
					</div>
					<div className="bg-[#2a313b] items-center max-w-lg mx-12 lg:mx-0">
						<Image src={app} alt="mobile development" className="" />

						<div className="p-6">
							<h1>App Development</h1>
							<p className="mt-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua ut.
							</p>
							<button className="my-6 md:mt-8 underline underline-offset-8 text-lg font-bold">
								View Details
								<BsArrowUpRight
									size={24}
									className="inline-flex items-baseline"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
