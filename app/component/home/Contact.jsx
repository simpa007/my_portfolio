"use client";
import { AiOutlineArrowRight } from "react-icons/ai";

function Contact() {
	return (
		<div className="bg-[#22282F]">
			<div className="container flex justify-between items-center py-24 mt-8 mx-auto">
				<div className="">
					<hr class="w-48 h-1 my-2 bg-white border-0 rounded" />
					<h1 className="mt-2 text-4xl space-x-2 font-extrabold">
						Interested in working together?
						<br />
						Let’s talk
						<AiOutlineArrowRight
							size={30}
							className="inline-flex items-baseline"
						/>
					</h1>
				</div>
				<div className="w-[50%] px-8">
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
								class="peer-focus:font-medium absolute text-3xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
								class="peer-focus:font-medium absolute text-3xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
								class="peer-focus:font-medium absolute text-3xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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

{
	/* <textarea
id="message"
rows="6"
class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
placeholder="Leave a comment..."
></textarea> */
}
