"use Client";
import { BsArrowUpRight } from "react-icons/bs";

function Blog() {
	return (
		<div className="relative container flex justify-between mx-auto px-12 my-24">
			<div className="relative">
				<h1 className="text-2xl font-extrabold mb-4">BLOG & ARTICLES</h1>
				<p className="text-5xl font-extrabold mb-4">
					Check out my latest <br />
					articles and tutorials
				</p>
				<button className="underline underline-offset-8 text-lg ">
					Browse all articles
					<BsArrowUpRight size={24} className="inline-flex items-baseline" />
				</button>
			</div>
			<div className="">
				<div className="mb-36">
					<h1 className="text-2xl mb-4 font-extrabold text-[#c3cad5]">
						March 18, 2022 / Articules
					</h1>
					<p className="">
						The Best IDE’s and Code Editors for Developers in 2022
					</p>
				</div>
				<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
				<div className="mb-36">
					<h1 className="text-2xl font-extrabold mb-4 text-[#c3cad5]">
						March 18, 2022 / Articules
					</h1>
					<p className="">
						The Best IDE’s and Code Editors for Developers in 2022
					</p>
				</div>
				<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

				<div className="mb-36">
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
