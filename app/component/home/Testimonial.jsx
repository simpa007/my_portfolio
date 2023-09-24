"use client";

import { BsArrowUpRight } from "react-icons/bs";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import React from "react";

function Testimonial() {
	return (
		<div className="container mx-auto  mt-28 p-12 py-24">
			<div className="flex justify-between">
				<div>
					<p className="text-xl font-bold mb-4">TESTIMONIALS</p>
					<h1 className="text-2xl font-extrabold mb-4">
						What the clients say about my work
					</h1>
				</div>

				<div>
					<button className="underline underline-offset-8 text-lg font-bold">
						Get in touch
						<BsArrowUpRight size={24} className="inline-flex items-baseline" />
					</button>
				</div>
			</div>
			<div className="container flex justify-between items-center mx-auto mt-8">
				<div className="w-[40%]">
					{/* <Image src={photo} alt="photo" width="100" /> */}
					<div class="max-w-sm p-6 py-24 mt-9  bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
						<svg
							class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
						</svg>
						<a href="#">
							<h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
								Need a help in Claim?
							</h5>
						</a>
						<p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
							Go to this step by step guideline process on how to certify for
							your weekly benefits:
						</p>
						<a
							href="#"
							class="inline-flex items-center text-blue-600 hover:underline"
						>
							See our guideline
							<svg
								class="w-3 h-3 ml-2.5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 18 18"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
								/>
							</svg>
						</a>
					</div>
				</div>
				<div className="w-[40%]">
					<p className="mt-8">Google</p>
					<h1 className="my-6">
						“John did an amazing work with our web-app, everything he did to
						optimize our software help us to reduce our loading speed by 56%”
					</h1>
					<div className="flex justify-between items-center">
						<div className="flex flex-col space-y-2">
							<p>ANDY SMITH</p>
							<p>VP OF DEVOPS AT GOOGLE</p>
						</div>
						<div className="flex space-x-5">
							<button>
								<BsArrowLeftCircle size={52} />
							</button>
							<button>
								<BsArrowRightCircle size={52} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
