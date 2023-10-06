"use client";
import Link from "next/link";
import { FiTwitter, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Footer() {
	return (
		<>
			<hr />
			<div className=" container mt-8 px-6 mx-auto  md:flex md:justify-between md:items-center md:mx-auto md:py-16  lg:py-24">
				<div className="">
					<h1 className="text-xl font-extrabold mb-3">Simpa Emmanuel</h1>
					<p className="md:text-xl md:font-bold lg:text-3xl lg:font-bold mb-3">
						build something great today!
					</p>
					<div className="flex space-x-6 md:mt-4 md:space-x-4  lg:space-x-8">
						<Link href="https://twitter.com/Simpa_sol">
							<FiTwitter size={36} className="hover:text-[#4bf4a5]" />
						</Link>
						<Link href="https://www.instagram.com/simpa_sol/">
							<FiInstagram size={36} className="hover:text-[#4bf4a5]" />
						</Link>
						<Link href="https://www.linkedin.com/in/simpa-emmanuel-67a5981a1/">
							<FiLinkedin size={36} className="hover:text-[#4bf4a5]" />
						</Link>
						<Link href="https://github.com/simpa007">
							<FiGithub size={36} className="hover:text-[#4bf4a5]" />
						</Link>
					</div>
				</div>
				<div className="">
					<h1 className="text-xl font-bold mt-8 mb-2 md:mb-3 md:font-extrabold md:text-2xl">
						Get in touch
						<AiOutlineArrowRight
							size={30}
							className="inline-flex items-baseline"
						/>
					</h1>
					<div className="md:flex md:space-x-4 md:justify-between">
						<div className="mb-3">
							<p className="md:font-normal md:mb-0 lg:font-bold lg:mb-2">
								EMAIL ME
							</p>
							<button className="underline underline-offset-8  font-bold">
								simpaimmey@gmail.com
							</button>
						</div>
						<div className="mb-8">
							<p className="md:font-normal md:mb-0 lg:font-bold lg:mb-2">
								CALL ME
							</p>
							<button className="underline underline-offset-8  font-bold">
								[+234] 80-7369-6557
							</button>
						</div>
					</div>
				</div>
			</div>
			<hr className="container mx-auto " />
			<div className="container px-6 mx-auto my-10 text-center md:flex md:justify-between ">
				<div class="md:block" id="navbar-default ">
					<ul class="font-normal flex flex-row justify-between md:p-0 mt-4  md:flex-row md:space-x-4 md:mt-0 md:border-0">
						<Link href="/" class="block py-2 md:p-0 lg:pl-2 lg:pr-3 ">
							Home
						</Link>
						<Link href="/about" class="block py-2 md:p-0 lg:pl-2 lg:pr-3">
							About
						</Link>
						<Link href="/blog" class="block py-2 md:p-0 lg:pl-2 lg:pr-3 ">
							Blog
						</Link>
						<Link href="/portfolio" class="block py-2 md:p-0 lg:pl-2 lg:pr-3 ">
							Portfolio
						</Link>
						<Link href="/contact" class="block py-2 md:p-0 lg:pl-2 lg:pr-3 ">
							Contact
						</Link>
					</ul>
				</div>
				<div className="">
					<p>copyright &copy; Simpa 2023</p>
				</div>
			</div>
		</>
	);
}
