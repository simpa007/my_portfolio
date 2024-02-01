"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import rental from "../../assets/images/rental.png";
import movie from "../../assets/images/movie.png";

function Portfolio() {
	return (
		<div id="portfolio">
			<div className="container px-6 mt-24 md:flex md:justify-center md:space-x-8  md:py-20 md:mx-auto md:mt-28">
				<div className="">
					<div>
						<p className="text-2xl font-extrabold mb-6">
							<span className="text-[#6ff4a5]">/</span> MY PORTFOLIO
						</p>
						<h1 className="text-xl font-bold md:text-2xl md:font-bold lg:text-5xl lg:font-bold lg:mb-8">
							Take a look at the latest <br />
							projects I’ve done
						</h1>
						<button className="my-6 md:mt-8 underline underline-offset-8 text-lg font-bold">
							Browse all Projects
							<BsArrowUpRight
								size={24}
								className="inline-flex items-baseline"
							/>
						</button>
					</div>

					{/* card 1 */}
					<div class="max-w-md py-12 mb-9  bg-[#2a313b] border border-[#2a313b] rounded-2xl shadow dark:bg-[#2a313b] dark:border-[#2a313b]">
						<div className="flex px-6 justify-end space-x-3 text-white">
							<span className="border border-[#505d71] bg-[#505d71] p-2 rounded-md">
								React JS
							</span>
							<Link
								href="https://myfilmflare.netlify.app/"
								className="border border-[#505d71] bg-[#505d71] p-2 rounded-md"
							>
								View Site
							</Link>
						</div>
						<div className="mt-20">
							<h1 className="px-6">Movie Application</h1>
							<Image
								src={movie}
								alt="A movie page"
								className="mt-5"
								width={500}
								height={500}
							/>
						</div>
					</div>
				</div>

				<div>
					<div class="max-w-md py-12 mb-9  bg-[#2a313b] border border-[#2a313b] rounded-2xl shadow dark:bg-[#2a313b] dark:border-[#2a313b]">
						<div className="flex px-6 justify-end space-x-3 text-white">
							<span className="border border-[#505d71] bg-[#505d71] p-2 rounded-md">
								Webflow
							</span>
							<Link
								href="https://rental-services.webflow.io/"
								className="border border-[#505d71] bg-[#505d71] p-2 rounded-md"
							>
								View Site
							</Link>
						</div>
						<div className="mt-20">
							<h1 className="px-6">Landing Page</h1>

							<Image
								src={rental}
								alt="A rental page"
								className=" mt-5"
								width={500}
								height={500}
							/>
						</div>
					</div>
					<div class="max-w-md py-12 mb-9  bg-[#2a313b] border border-[#2a313b] rounded-2xl shadow dark:bg-[#2a313b] dark:border-[#2a313b]">
						<div className="flex px-6 justify-end space-x-3 text-white">
							<span className="border border-[#505d71] bg-[#505d71] p-2 rounded-md">
								React JS
							</span>
							<span className="border border-[#505d71] bg-[#505d71] p-2 rounded-md">
								Web Development
							</span>
						</div>
						<div className="mt-20">
							<h1 className="px-6">Agency Website Development for Dev X</h1>
							<Image />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
