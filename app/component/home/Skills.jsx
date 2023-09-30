"use client";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

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
			<div className="md:-mx-12 md:ml-12  md:mt-6 md:py-18 md:space-x-10 md:no-scrollbar md:flex md:flex-nowrap md:overflow-x-auto md:snap-x md:snap-mandatory ">
				<div id="keen-slider" className="keen-slider">
					{/* card 1 */}
					<div class="keen-slider__slide flex-none  snap-center snap-always  max-w-sm p-6 py-24 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
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
					{/* card 1 */}
					<div class=" keen-slider__slide flex-none snap-center snap-always  max-w-sm p-6 py-24   bg-white border border-gray-200 rounded-2xl  shadow dark:bg-gray-800 dark:border-gray-700">
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
					{/* card 1 */}
					<div class="keen-slider__slide flex-none snap-center snap-always max-w-sm p-6 py-24  bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
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
					{/* card 1 */}
					<div class="keen-slider__slide flex-none snap-center snap-always max-w-sm p-6 py-24   bg-white border border-gray-200 rounded-2xl  shadow dark:bg-gray-800 dark:border-gray-700">
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
					{/* card 1 */}
					<div class="keen-slider__slide flex-none  snap-center snap-always  max-w-sm p-6 py-24   bg-white border border-gray-200 rounded-2xl  shadow dark:bg-gray-800 dark:border-gray-700">
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
			</div>
		</div>
	);
}

export default Skills;
