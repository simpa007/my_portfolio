import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Services() {
	return (
		<div className="">
			<div className="container mx-auto py-24">
				<div className="px-6 mx-auto md:flex md:justify-between md:items-center md:px-0">
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

				<div className=" mt-12 mx-auto py-6">
					<div className="flex justify-between items-center">
						<div className="w-1/2">
							<span className="text-[#6ff4a5]">01</span>
							<h1 className="text-3xl font-extrabold">Web Development</h1>
						</div>
						<div className="w-2/5">
							<div className="flex space-x-8 items-end">
								<p className="text-right">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
									ut.
								</p>
								<span>
									<BsArrowUpRight
										size={45}
										className="inline-flex items-baseline"
									/>
								</span>
							</div>
						</div>
					</div>
					<hr className="mt-4" />
					<div className="mt-32 flex justify-between items-center">
						<div className="w-1/2">
							<span className="text-[#6ff4a5]">02</span>
							<h1 className="text-3xl font-extrabold">
								Search Engine Optimization (SEO)
							</h1>
						</div>
						<div className="w-2/5">
							<div className="flex space-x-8 items-end">
								<p className="text-right">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
									ut.
								</p>
								<span>
									<BsArrowUpRight
										size={45}
										className="inline-flex items-baseline"
									/>
								</span>
							</div>
						</div>
					</div>
					<hr className="mt-4" />
					<div className="mt-32 flex justify-between items-center">
						<div className="w-1/2">
							<span className="text-[#6ff4a5]">03</span>
							<h1 className="text-3xl font-extrabold">App Development</h1>
						</div>
						<div className="w-2/5">
							<div className="flex space-x-8 items-end">
								<p className="text-right">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
									ut.
								</p>
								<span>
									<BsArrowUpRight
										size={45}
										className="inline-flex items-baseline"
									/>
								</span>
							</div>
						</div>
					</div>
					<hr className="mt-4" />
				</div>
			</div>
		</div>
	);
}
