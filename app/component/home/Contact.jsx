"use client";
import { AiOutlineArrowRight } from "react-icons/ai";

function Contact() {
	return (
		<div className="bg-[#22282F]">
			<div className="container px-6 py-24 mt-8 mx-auto md:flex md:justify-between md:items-center ">
				<div className="">
					<hr class="h-1 my-2 w-20 md:w-32 lg:w-48  bg-white border-0 rounded" />
					<h1 className="text-xl font-bold mt-2 space-x-2 md:text-2xl md:font-bold lg:text-4xl lg:font-extrabold">
						Interested in working together?
						<br />
						Let’s talk
						<AiOutlineArrowRight
							size={30}
							className="inline-flex items-baseline"
						/>
					</h1>
				</div>
				<div className="w-full mt-6 md:w-[50%] md:px-8">
					<form>
						<div class="relative z-0 w-full mb-12 group">
							<input
								type="text"
								name="floating_name"
								id="floating_name"
								class="block py-5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								required
							/>
							<label
								for="floating_name"
								class="peer-focus:font-medium absolute md:text-2xl lg:text-3xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Enter your name
							</label>
						</div>
						<div class="relative z-0 w-full mb-12 group">
							<input
								type="email"
								name="floating_email"
								id="floating_email"
								class="block py-5  mb-3 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								required
							/>
							<label
								for="floating_email"
								class="peer-focus:font-medium absolute md:text-2xl lg:text-3xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Your email address
							</label>
						</div>

						<div class="relative z-0 w-full mb-12 group">
							<textarea
								type="text"
								name="floating_text"
								id="floating_text"
								class="block py-5 mb-3 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
								required
							></textarea>

							<label
								for="floating_text"
								class="peer-focus:font-medium absolute md:text-2xl lg:text-3xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Describe your project
							</label>
						</div>

						<button
							type="submit"
							className="underline underline-offset-8 text-3xl font-bold"
						>
							Contact me
							<AiOutlineArrowRight
								size={30}
								className="inline-flex items-baseline"
							/>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
