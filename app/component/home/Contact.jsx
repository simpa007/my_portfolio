"use client";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function Contact() {
	const initialState = {
		name: "",
		email: "",
		message: "",
	};
	const [form, setForm] = useState(initialState);

	const { name, email, message } = form;
	const handleSubmit = async (e) => {
		e.preventDefault();
		const submitData = { name, email, message };

		try {
			const res = await fetch("https://portfilio-server.onrender.com", {
				method: "POST",
				body: JSON.stringify(submitData),
				headers: {
					"content-type": "application/json",
				},
			});
			console.log(res);
			if (res.ok) {
				console.log("Yeai!");
			} else {
				console.log("Oops! Something is wrong.");
			}
		} catch (error) {
			console.log(error);
		}
		setForm(initialState);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	return (
		<div className="bg-[#22282F]">
			<div className="container px-6 py-24 mx-auto md:flex md:justify-between md:items-center ">
				<div className="">
					<hr class="h-1 my-2 w-20 md:w-32 lg:w-48  bg-white border-0 rounded" />
					<h1 className="text-xl font-bold mt-12 space-x-2 md:text-2xl md:font-bold lg:text-4xl lg:font-extrabold">
						Interested in working together?
						<br />
						Let’s talk
						<AiOutlineArrowRight
							size={45}
							className="inline-flex items-baseline text-[#6ff4a5]"
						/>
					</h1>
				</div>
				<div className="w-full mt-6 md:w-[50%] md:px-8">
					<form onSubmit={handleSubmit}>
						<div class="relative z-0 w-full mb-12 group">
							<input
								type="text"
								name="name"
								id="floating_name"
								class="block py-5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#4bf4a5] focus:outline-none focus:ring-0 focus:border-[#4bf4a5] peer"
								value={name}
								onChange={handleChange}
								required
							/>
							<label
								for="floating_name"
								class="peer-focus:font-medium absolute md:text-2xl lg:text-3xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4bf4a5] peer-focus:dark:text-[#4bf4a5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Enter your name
							</label>
						</div>
						<div class="relative z-0 w-full mb-12 group">
							<input
								type="email"
								name="email"
								id="floating_email"
								class="block py-5  mb-3 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#4bf4a5] focus:outline-none focus:ring-0 focus:border-[#4bf4a5] peer"
								value={email}
								onChange={handleChange}
								required
							/>
							<label
								for="floating_email"
								class="peer-focus:font-medium absolute md:text-2xl lg:text-3xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4bf4a5] peer-focus:dark:text-[#4bf4a5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Your email address
							</label>
						</div>

						<div class="relative z-0 w-full mb-12 group">
							<textarea
								type="text"
								name="message"
								id="floating_text"
								class="block py-5 mb-3 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#4bf4a5] focus:outline-none focus:ring-0 focus:border-[#4bf4a5] peer"
								value={message}
								onChange={handleChange}
								required
							></textarea>

							<label
								for="floating_text"
								class="peer-focus:font-medium absolute md:text-2xl lg:text-3xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#4bf4a5] peer-focus:dark:text-[#4bf4a5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
