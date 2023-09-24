"use Client";
import { BsArrowUpRight } from "react-icons/bs";

function Blog() {
	return (
		<div className="container flex justify-between mx-auto my-24 border">
			<div className="mt-16">
				<h1 className="text-2xl font-extrabold mb-4">BLOG & ARTICLES</h1>
				<p className="mb-4">Check out my latest articles and tutorials</p>
				<button className="underline underline-offset-8 text-lg">
					Browse all articles
					<BsArrowUpRight size={24} className="inline-flex items-baseline" />
				</button>
			</div>
			<div>
				<div className="my-8">
					<h1 className="text-2xl font-extrabold mb-4">
						March 18, 2022 / Articules
					</h1>
					<p className="mb-4">
						The Best IDE’s and Code Editors for Developers in 2022
					</p>
				</div>
				<hr className="mb-8" />
				<div className="mb-8">
					<h1 className="text-2xl font-extrabold mb-4">
						March 18, 2022 / Articules
					</h1>
					<p className="mb-4">
						The Best IDE’s and Code Editors for Developers in 2022
					</p>
				</div>
				<hr className="mb-8" />
				<div className="mb-8">
					<h1 className="text-2xl font-extrabold mb-4">
						March 18, 2022 / Articules
					</h1>
					<p className="mb-4">
						The Best IDE’s and Code Editors for Developers in 2022
					</p>
				</div>
			</div>
		</div>
	);
}

export default Blog;
