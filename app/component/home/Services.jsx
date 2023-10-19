import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Services() {
	return (
		<div className="border border-red-200">
			<div className="container mx-auto py-24">
				<div className="border px-6 mx-auto md:flex md:justify-between md:items-center  md:px-8 ">
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
					<div className="border flex flex-col items-center max-w-lg mx-12 lg:mx-0">
						<h1>hello world</h1>
					</div>
					<div className="border flex flex-col items-center max-w-lg mx-12 lg:mx-0">
						<h1>welcome back</h1>
					</div>
					<div className="border flex flex-col items-center max-w-lg mx-12 lg:mx-0">
						<h1>welcome back</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
