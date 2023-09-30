"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import hamburger from "../../images/svgrepo-com.svg";

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	//   const router = useRouter()
	return (
		<>
			<div className="container mx-auto flex items-center justify-between py-8">
				<div>
					<a href="/">
						<img src="https://designbygio.it/images/logo.png" alt="logo" />
					</a>
				</div>

				<nav>
					<section className="MOBILE-MENU flex lg:hidden">
						<button
							className="HAMBURGER-ICON space-y-2"
							onClick={() => setIsNavOpen((prev) => !prev)}
						>
							<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
							<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
							<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
						</button>

						<div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
							<button
								className="absolute top-0 right-0 px-8 py-8"
								onClick={() => setIsNavOpen(false)}
							>
								<svg
									className="h-8 w-8 text-gray-600"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							</button>
							<ul className="flex flex-col items-center justify-between font-extrabold text-5xl space-y-14">
								<Link
									href="/"
									class="block py-2 pl-2 pr-3 border-b border-gray-400 uppercase text-green-200 "
								>
									Home
								</Link>
								<Link
									href="/about"
									class="block py-2 pl-2 pr-3 border-b border-gray-400 uppercase text-green-200"
								>
									About
								</Link>
								<Link
									href="/blog"
									class="block py-2 pl-2 pr-3 border-b border-gray-400 uppercase text-green-200 "
								>
									Blog
								</Link>
								<Link
									href="/portfolio"
									class="block py-2 pl-2 pr-3 border-b border-gray-400 uppercase text-green-200 "
								>
									Portfolio
								</Link>
								<Link
									href="/contact"
									class="block py-2 pl-2 pr-3 border-b border-gray-400 uppercase text-green-200 "
								>
									Contact
								</Link>
							</ul>
						</div>
					</section>

					<ul className="DESKTOP-MENU hidden font-medium space-x-8 lg:flex">
						<Link href="/" class="block py-2 pl-2 pr-4 ">
							Home
						</Link>
						<Link href="/about" class="block py-2 pl-2 pr-3">
							About
						</Link>
						<Link href="/blog" class="block py-2 pl-2 pr-3 ">
							Blog
						</Link>
						<Link href="/portfolio" class="block py-2 pl-2 pr-3 ">
							Portfolio
						</Link>
						<Link href="/contact" class="block py-2 pl-2 pr-3 ">
							Contact
						</Link>
					</ul>
				</nav>
				<style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
			</div>
		</>
	);
}
