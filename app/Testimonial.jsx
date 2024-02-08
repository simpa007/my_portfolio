"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import picture from "./assets/images/5.jpg";

let info = [
	{
		id: 0,
		message:
			"I recently had the pleasure of working with Simpa for my web development needs, and I couldn't be more thrilled with the results. Their commitment to excellence and proficiency in web development truly set them apart.",
		name: "Mr Benjamin",
		company: "Caninvest Properties",
	},
	{
		id: 1,
		message:
			"Not only did Simpa excel in creating a beautiful design, but they also ensured the website was optimized for performance and user experience across all devices. The site loads quickly, navigates smoothly, and looks fantastic on both desktop and mobile.",
		name: "Mr Nyamja Stephen",
		company: "BBCN",
	},
];

function Testimonial() {
	const [activeCard, setActiveCard] = useState(0);
	const handleForward = () => {
		setActiveCard((activeCard + 1) % info.length);
	};
	const handleBackward = () => {
		setActiveCard(!activeCard ? info.length - 1 : activeCard - 1);
	};

	return (
		<div id="testimonials" className="bg-[#22282F]">
			<div className="container mx-auto mt-28 py-24">
				<div className="px-6 mx-auto md:flex md:justify-between md:items-center md:px-0">
					<div>
						<p className="text-2xl font-extrabold mb-6">
							<span className="text-[#6ff4a5]">/</span> TESTIMONIALS
						</p>
						<h1 className="text-xl font-bold md:text-2xl md:font-bold lg:text-5xl lg:font-bold mb-4">
							What the clients say
							<br /> about my work
						</h1>
					</div>

					<div className="mt-6">
						<Link
							href="https://wa.me/08073696557"
							className="underline underline-offset-8 text-lg font-bold"
						>
							Get in touch
							<BsArrowUpRight
								size={24}
								className="inline-flex items-baseline"
							/>
						</Link>
					</div>
				</div>

				{info.map(({ id, message, name, company }, index) => (
					<div
						key={id}
						class={`max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 ${
							activeCard === id ? "block" : "hidden"
						}`}
					>
						<figure class="max-w-screen-md mx-auto h-auto md:h-72">
							<svg
								class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
								viewBox="0 0 24 27"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
									fill="currentColor"
								/>
							</svg>
							<blockquote>
								<p class="text-2xl font-medium">{message}</p>
							</blockquote>
							<figcaption class="flex items-center justify-center mt-6 space-x-3">
								<Image
									class="w-6 h-6 rounded-full"
									src={picture}
									alt="profile picture"
								/>
								<div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
									<div class="pr-3 font-medium text-gray-200 dark:text-white">
										{name}
									</div>
									<div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
										{company}
									</div>
								</div>
							</figcaption>
						</figure>
					</div>
				))}
				<div className="container flex justify-center items-center space-x-8">
					<IoMdArrowBack
						size={35}
						className="hover:text-[#6ff4a5]"
						onClick={handleBackward}
					/>
					<IoMdArrowForward
						size={35}
						className="hover:text-[#6ff4a5]"
						onClick={handleForward}
					/>
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
