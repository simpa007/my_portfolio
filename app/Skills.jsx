"use client";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import react from "./assets/icons/icons8-react-96.png";
import html from "./assets/icons/icons8-html-5-100.png";
import javascript from "./assets/icons/icons8-javascript-100.png";
import wordPress from "./assets/icons/icons8-wordpress-100.png";
import webFlow from "./assets/icons/icons8-webflow-96.png";
import nodejs from "./assets/icons/icons8-nodejs-96.png";

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
		<div id="skills" className="mt-8 px-6 md:mt-12 md:px-12 md:py-28 lg:mt-28 ">
			<div className=" container md:container md:flex md:justify-between md:mx-auto md:text-left lg:flex lg:justify-between lg:items-center lg:mx-auto lg:text-left">
				<div>
					<p className="text-2xl font-extrabold mb-6">
						<span className="text-[#6ff4a5]">/</span> MY SKILLS
					</p>
					<h1 className="text-xl font-bold md:text-2xl md:font-bold lg:text-5xl lg:font-bold lg:mb-4">
						My extensive list of skills
					</h1>
				</div>
				<div className="my-6 space-x-3 md:space-x-3">
					<button
						className="hover:text-[#6ff4a5]"
						aria-label="Previous slide"
						onClick={() => keenSlider.prev()}
					>
						<BsArrowLeftCircle size={64} />
					</button>
					<button
						className="hover:text-[#6ff4a5]"
						aria-label="Next slide"
						onClick={() => keenSlider.next()}
					>
						<BsArrowRightCircle size={64} />
					</button>
				</div>
			</div>
			<div className="md:-mx-12 md:ml-12  md:mt-6">
				<div id="keen-slider" className="keen-slider">
					{/* card 1 */}
					<div class="keen-slider__slide  max-w-sm px-10 py-24 bg-[#2a313b] border border-[#2a313b] rounded-3xl shadow dark:bg-[#2a313b] dark:border-[#2a313b]">
						<Image src={html} alt="react logo" className="mb-6" />
						<h1 className="mb-3">HTML & CSS</h1>
						<p class=" font-normal text-lg  text-[#c3cab8] dark:text-[#c3cab8] mb-10">
							All web browsers understand and interpret HTML and CSS, making it
							a universal language for web development.
						</p>
						<hr className="w-20 h-2 bg-white border-0 rounded" />
					</div>
					{/* card 1 */}
					<div class="keen-slider__slide  max-w-sm px-10 py-24 bg-[#2a313b] border border-[#2a313b] rounded-3xl shadow dark:bg-[#2a313b] dark:border-[#2a313b]">
						<Image src={javascript} alt="react logo" className="mb-6" />
						<h1 className="mb-3">Javascript</h1>
						<p class=" text-lg font-normal text-[#c3cab8] dark:text-[#c3cab8] mb-10">
							JavaScript is a versatile and widely used programming language
							that is primarily employed for building interactive and dynamic
							web pages
						</p>
						<hr className="w-20 h-2 bg-white border-0 rounded" />
					</div>
					{/* card 1 */}
					<div class="keen-slider__slide  max-w-sm px-10 py-24 bg-[#2a313b] border border-[#2a313b] rounded-3xl shadow dark:bg-[#2a313b] dark:border-[#2a313b]">
						<Image src={react} alt="react logo" className="mb-6" />
						<h1 className="mb-3">React JS</h1>
						<p class="text-lg font-normal text-[#c3cab8] dark:text-[#c3cab8] mb-10">
							React is a JavaScript library for building user interfaces,
							primarily for single-page applications where user interactions and
							updates occur without requiring a full page reload
						</p>
						<hr className="w-20 h-2 bg-white border-0 rounded" />
					</div>
					{/* card 1 */}
					<div class="keen-slider__slide  max-w-sm px-10 py-24 bg-[#2a313b] border border-[#2a313b] rounded-3xl shadow dark:bg-[#2a313b] dark:border-[#2a313b]">
						<Image src={nodejs} alt="react logo" className="mb-6" />
						<h1 className="mb-3">Node JS</h1>
						<p class="text-lg font-normal text-[#c3cab8] dark:text-[#c3cab8] mb-10">
							Node.js is a runtime environment that allows developers to run
							JavaScript code on the server side or backend.
						</p>
						<hr className="w-20 h-2 bg-white border-0 rounded" />
					</div>
					{/* card 1 */}
					<div class="keen-slider__slide  max-w-sm px-10 py-24 bg-[#2a313b] border border-[#2a313b] rounded-3xl shadow dark:bg-[#2a313b] dark:border-[#2a313b]">
						<Image src={webFlow} alt="react logo" className="mb-6" />
						<h1 className="mb-3">Webflow</h1>
						<p class="text-lg font-normal text-[#c3cab8] dark:text-[#c3cab8] mb-10">
							Webflow is a visual web development platform that allows users to
							design, build, and launch responsive websites without needing to
							write code manually.
						</p>
						<hr className="w-20 h-2 bg-white border-0 rounded" />
					</div>
					{/* card 1 */}
					<div class="keen-slider__slide  max-w-sm px-10 py-24 bg-[#2a313b] border border-[#2a313b] rounded-3xl shadow dark:bg-[#2a313b] dark:border-[#2a313b]">
						<Image src={wordPress} alt="react logo" className="mb-6" />
						<h1 className="mb-3">Wordpress</h1>
						<p class="text-lg font-normal text-[#c3cab8] dark:text-[#c3cab8] mb-10">
							WordPress is a popular content management system (CMS) that allows
							users to create and manage websites without extensive coding.
						</p>
						<hr className="w-20 h-2 bg-white border-0 rounded" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
