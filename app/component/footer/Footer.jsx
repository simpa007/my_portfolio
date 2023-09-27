"use client";
import Link from "next/link";
import { FiTwitter, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Footer() {
	return (
		<>
			<hr />
			<div className="container flex justify-between items-center mx-auto mt-8 py-24">
				<div>
					<h1 className="text-xl font-extrabold mb-5">Simpa Emmanuel</h1>
					<p className="text-3xl font-bold mb-5">
						build something great today!
					</p>
					<div className="flex space-x-7 mt-5">
						<button>
							<FiTwitter size={36} />
						</button>
						<button>
							<FiInstagram size={36} />
						</button>
						<button>
							<FiLinkedin size={36} />
						</button>
						<button>
							<FiGithub size={36} />
						</button>
					</div>
				</div>
				<div className="">
					<h1 className="mb-5 font-extrabold text-2xl">
						Get in touch
						<AiOutlineArrowRight
							size={30}
							className="inline-flex items-baseline"
						/>
					</h1>
					<div className="flex space-x-9 justify-between">
						<div>
							<p className="mb-2">EMAIL ME</p>
							<button className="underline underline-offset-8  font-bold">
								simpaimmey@gmail.com
							</button>
						</div>
						<div>
							<p className="mb-2">CALL ME</p>
							<button className="underline underline-offset-8  font-bold">
								[123] 66-44-3321
							</button>
						</div>
					</div>
				</div>
			</div>
			<hr className="container mx-auto " />
			<div className="container flex justify-between mx-auto items-center my-10">
				<div class="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul class="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0">
						<Link href="/" class="block py-2 pl-3 pr-4 ">
							Home
						</Link>
						<Link href="/about" class="block py-2 pl-3 pr-4">
							About
						</Link>
						<Link href="/blog" class="block py-2 pl-3 pr-4 ">
							Blog
						</Link>
						<Link href="/portfolio" class="block py-2 pl-3 pr-4 ">
							Portfolio
						</Link>
						<Link href="/contact" class="block py-2 pl-3 pr-4 ">
							Contact
						</Link>
					</ul>
				</div>
				<div>
					<p>copyright &copy; Simpa Emmanuel | Designed by Simpa</p>
				</div>
			</div>
		</>
	);
}
