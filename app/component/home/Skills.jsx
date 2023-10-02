"use client";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import react from "../../icons/icons8-react-96.png";
import html from "../../icons/icons8-html-5-100.png";
import javascript from "../../icons/icons8-javascript-100.png";
import wordPress from "../../icons/icons8-wordpress-100.png";
import webFlow from "../../icons/icons8-webflow-96.png";
import nodejs from "../../icons/icons8-nodejs-96.png";

function Skills() {
	const keenSlider = new KeenSlider(
		"#keen-slider",
		{
			loop: true,
			slides: {
				origin: "center",
				perView: 1.25,
				spacing: 16,
			},
			breakpoints: {
				"(min-width: 1024px)": {
					slides: {
						origin: "auto",
						perView: 2.5,
						spacing: 32,
					},
				},
			},
		},
		[]
	);

	return (
		<div className="mt-8 px-6 md:mt-12 md:px-12 md:py-28 lg:mt-28 ">
			<div className="md:container md:flex md:justify-between md:mx-auto md:text-left lg:flex lg:justify-between lg:items-center lg:mx-auto lg:text-left">
				<div>
					<p className="text-2xl font-extrabold mb-4"> MY SKILLS</p>
					<h1 className="text-xl font-bold md:text-2xl md:font-bold lg:text-5xl lg:font-bold lg:mb-4">
						My extensive list of skills
					</h1>
				</div>
				<div className="my-6 space-x-3 md:space-x-3">
					<button aria-label="Previous slide" onClick={() => keenSlider.prev()}>
						<BsArrowLeftCircle size={52} />
					</button>
					<button aria-label="Next slide" onClick={() => keenSlider.next()}>
						<BsArrowRightCircle size={52} />
					</button>
				</div>
			</div>
			<div className="md:-mx-12 md:ml-12  md:mt-6">
				<div id="keen-slider" className="keen-slider">
					{/* card 1 */}
					<div class="keen-slider__slide  max-w-sm p-6 py-24 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
						<Image src={html} alt="react logo" className="mb-6" />
						<h1 className="mb-3 text-black">HTML & CSS</h1>
						<p class=" font-normal text-gray-500 dark:text-gray-400 mb-10">
							Go to this step by step guideline process on how to certify for
							your weekly benefits:
						</p>
						<hr className="w-20 h-1 bg-black border-0 rounded" />
					</div>
					{/* card 1 */}
					<div class="keen-slider__slide  max-w-sm p-6 py-24 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
						<Image src={javascript} alt="react logo" className="mb-6" />
						<h1 className="mb-3 text-black">Javascript</h1>
						<p class=" font-normal text-gray-500 dark:text-gray-400 mb-10">
							Go to this step by step guideline process on how to certify for
							your weekly benefits:
						</p>
						<hr className="w-20 h-1 bg-black border-0 rounded" />
					</div>
					{/* card 1 */}
					<div class="keen-slider__slide  max-w-sm p-6 py-24 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
						<Image src={react} alt="react logo" className="mb-6" />
						<h1 className="mb-3 text-black">React JS</h1>
						<p class=" font-normal text-gray-500 dark:text-gray-400 mb-10">
							Go to this step by step guideline process on how to certify for
							your weekly benefits:
						</p>
						<hr className="w-20 h-1 bg-black border-0 rounded" />
					</div>
					{/* card 1 */}
					<div class="keen-slider__slide  max-w-sm p-6 py-24 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
						<Image src={nodejs} alt="react logo" className="mb-6" />
						<h1 className="mb-3 text-black">Node JS</h1>
						<p class=" font-normal text-gray-500 dark:text-gray-400 mb-10">
							Go to this step by step guideline process on how to certify for
							your weekly benefits:
						</p>
						<hr className="w-20 h-1 bg-black border-0 rounded" />
					</div>
					{/* card 1 */}
					<div class="keen-slider__slide  max-w-sm p-6 py-24 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
						<Image src={webFlow} alt="react logo" className="mb-6" />
						<h1 className="mb-3 text-black">Webflow</h1>
						<p class=" font-normal text-gray-500 dark:text-gray-400 mb-10">
							Go to this step by step guideline process on how to certify for
							your weekly benefits:
						</p>
						<hr className="w-20 h-1 bg-black border-0 rounded" />
					</div>
					{/* card 1 */}
					<div class="keen-slider__slide  max-w-sm p-6 py-24 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
						<Image src={wordPress} alt="react logo" className="mb-6" />
						<h1 className="mb-3 text-black">Wordpress</h1>
						<p class=" font-normal text-gray-500 dark:text-gray-400 mb-10">
							Go to this step by step guideline process on how to certify for
							your weekly benefits:
						</p>
						<hr className="w-20 h-1 bg-black border-0 rounded" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
