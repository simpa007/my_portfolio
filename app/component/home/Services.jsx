import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Services() {
	return (
		<div id="services" className="">
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

				<div className="px-6 py-6 md:mt-12 md:mx-auto">
					<div className="flex flex-col md:flex md:flex-row md:justify-between md:items-center">
						<div className="max-w-[100%] mb-8 md:max-w-[50%]">
							<span className="text-[#6ff4a5]">01</span>
							<h1 className="text-xl font-bold md:text-3xl md:font-extrabold">
								Web Design
							</h1>
						</div>
						<div className="max-w-[100%] md:max-w-[50%]">
							<div className="flex space-x-8 items-end">
								<p className="text-lg font-normal text-right">
									I focus is on crafting visually appealing, functional, and
									user-friendly websites tailored to meet the unique needs and
									goals of my clients.
								</p>
								<span>
									<BsArrowUpRight
										size={35}
										className="inline-flex items-baseline"
									/>
								</span>
							</div>
						</div>
					</div>
					<hr className="mt-4" />
					<div className="mt-32 flex flex-col md:flex md:flex-row md:justify-between md:items-center">
						<div className="max-w-[100%] mb-8 md:max-w-[50%]">
							<span className="text-[#6ff4a5]">02</span>
							<h1 className="text-xl font-bold md:text-3xl md:font-extrabold">
								Web Development
							</h1>
						</div>
						<div className="max-w-[100%] md:max-w-[50%]">
							<div className="flex space-x-8 items-end">
								<p className="text-lg font-normal text-right">
									My expertise lies in building robust and dynamic online
									solutions for clients. I specialize in the coding and
									technical implementation of websites, ensuring functionality,
									performance, and scalability.
								</p>
								<span>
									<BsArrowUpRight
										size={35}
										className="inline-flex items-baseline"
									/>
								</span>
							</div>
						</div>
					</div>
					<hr className="mt-4" />
					<div className="mt-32 flex flex-col md:flex md:flex-row md:justify-between md:items-center">
						<div className="max-w-[100%] mb-8 md:max-w-[50%]">
							<span className="text-[#6ff4a5]">03</span>
							<h1 className="text-xl font-bold md:text-3xl md:font-extrabold">
								Search Engine Optimization (SEO)
							</h1>
						</div>
						<div className="max-w-[100%] md:max-w-[50%]">
							<div className="flex space-x-8 items-end">
								<p className="text-lg font-normal text-right">
									My services focus on improving a website's organic search
									presence, driving targeted traffic, and increasing overall
									online visibility.
								</p>
								<span>
									<BsArrowUpRight
										size={35}
										className="inline-flex items-baseline"
									/>
								</span>
							</div>
						</div>
					</div>
					<hr className="mt-4" />
					<div className="mt-32 flex flex-col md:flex md:flex-row md:justify-between md:items-center">
						<div className="max-w-[100%] mb-8 md:max-w-[50%]">
							<span className="text-[#6ff4a5]">04</span>
							<h1 className="text-xl font-bold md:text-3xl md:font-extrabold">
								App Development
							</h1>
						</div>
						<div className="max-w-[100%] md:max-w-[50%]">
							<div className="flex space-x-8 items-end">
								<p className="text-lg font-normal text-right">
									As an app development service provider, my focus is on
									designing and building custom applications to meet the unique
									needs and objectives of clients.
								</p>
								<span>
									<BsArrowUpRight
										size={35}
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
