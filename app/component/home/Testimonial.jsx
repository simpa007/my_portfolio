"use client";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import picture from "../../images/5.jpg";

function Testimonial() {
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
						<button className="underline underline-offset-8 text-lg font-bold">
							Get in touch
							<BsArrowUpRight
								size={24}
								className="inline-flex items-baseline"
							/>
						</button>
					</div>
				</div>

				{/* <div className="mt-12 mx-auto py-6 grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2"> */}
				{/* <div className="flex flex-col items-center mx-12 lg:mx-0">
						<div className="relative text-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								fill="currentColor"
								className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
							>
								<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
								<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
							</svg>
							<p className="px-6 py-1 text-lg italic">
								Accusantium illum cupiditate harum asperiores iusto quos quasi
								quis quae! Fugit doloribus, voluptatum quidem magnam velit
								excepturi nobis, reprehenderit ducimus incidunt quisquam quae
								veritatis, quos iure harum.
							</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								fill="currentColor"
								className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
							>
								<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
								<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
							</svg>
						</div>
						<span className="w-12 h-1 my-2 rounded-lg bg-red-400"></span>
						<p>Leroy Jenkins</p>
					</div> */}
				{/* <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
						<div className="relative text-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
							>
								<path
									fill="currentColor"
									d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
								></path>
								<path
									fill="currentColor"
									d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
								></path>
							</svg>
							<p className="px-6 py-1 text-lg italic">
								Accusantium illum cupiditate harum asperiores iusto quos quasi
								quis quae! Fugit doloribus, voluptatum quidem magnam velit
								excepturi nobis, reprehenderit ducimus incidunt quisquam quae
								veritatis, quos iure harum.
							</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
							>
								<path
									fill="currentColor"
									d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
								></path>
								<path
									fill="currentColor"
									d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
								></path>
							</svg>
						</div>
						<span className="w-12 h-1 my-2 rounded-lg bg-blue-400"></span>
						<p>Leroy Jenkins</p>
					</div> */}
				<div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
					<figure class="max-w-screen-md mx-auto">
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
							<p class="text-2xl font-medium">
								"Flowbite is just awesome. It contains tons of predesigned
								components and pages starting from login screen to complex
								dashboard. Perfect choice for your next SaaS application."
							</p>
						</blockquote>
						<figcaption class="flex items-center justify-center mt-6 space-x-3">
							<Image
								class="w-6 h-6 rounded-full"
								src={picture}
								alt="profile picture"
							/>
							<div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
								<div class="pr-3 font-medium text-gray-200 dark:text-white">
									Micheal Gough
								</div>
								<div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
									Caninvest Properties
								</div>
							</div>
						</figcaption>
					</figure>
				</div>
				{/* </div> */}
			</div>
		</div>
	);
}

export default Testimonial;
