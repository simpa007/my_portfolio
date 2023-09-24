"use client";
import { FiTwitter, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function Footer() {
	return (
		<>
			<hr />
			<div className="container flex justify-between items-center mx-auto mt-8 border py-24 border-pink-300">
				<div>
					<h1 className="text-xl font-extrabold mb-3">Simpa Emmanuel</h1>
					<p className="text-3xl font-bold mb-3">
						build something great today!
					</p>
					<div className="flex space-x-7">
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
					<h1 className="mb-3 font-extrabold text-2xl">
						Get in touch
						<AiOutlineArrowRight
							size={30}
							className="inline-flex items-baseline"
						/>
					</h1>
					<div className="flex justify-between">
						<div>
							<p>EMAIL ME</p>
							<button>simpaimmey@gmail.com</button>
						</div>
						<div>
							<p>CALL ME</p>
							<button>[123] 66-44-3321</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
