"use Client";
import { BsArrowUpRight } from "react-icons/bs";

function Blog() {
	return (
		<div className="container px-6 mx-auto  my-24 md:flex md:justify-between md:items-center md:my-16 lg:flex lg:justify-between lg:items-start ">
			<div className="">
				<h1 className="text-2xl font-extrabold mb-4">BLOG & ARTICLES</h1>
				<p className="text-xl font-bold md:text-2xl md:font-bold lg:text-5xl lg:font-extrabold mb-4">
					Check out my latest <br />
					articles and tutorials
				</p>
				<button className="my-6 underline underline-offset-8 text-lg ">
					Browse all articles
					<BsArrowUpRight size={24} className="inline-flex items-baseline" />
				</button>
			</div>
			<div className="w-full mt-8 md:w-[45%]">
				<div className="md:mb-36">
					<h1 className="text-2xl mb-4 font-extrabold text-[#c3cad5]">
						March 18, 2022 / Articules
					</h1>
					<p className="">
						The Best IDE’s and Code Editors for Developers in 2022
					</p>
				</div>
				<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
				<div className="md:mb-36">
					<h1 className="text-2xl font-extrabold mb-4 text-[#c3cad5]">
						March 18, 2022 / Articules
					</h1>
					<p className="">
						The Best IDE’s and Code Editors for Developers in 2022
					</p>
				</div>
				<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

				<div className="md:mb-36">
					<h1 className="text-2xl  mb-4 font-extrabold text-[#c3cad5]">
						March 18, 2022 / Articules
					</h1>
					<p className="">
						The Best IDE’s and Code Editors for Developers in 2022
					</p>
				</div>
			</div>
		</div>
	);
}

export default Blog;
