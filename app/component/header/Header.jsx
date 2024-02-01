"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/icons/Simpa Color.svg";

import menu from "../../assets/icons/menu-bar.png";
import close from "../../assets/icons/close-button.png";

const navLinks = [
	{
		id: "home",
		title: "Home",
	},
	{
		id: "about",
		title: "About",
	},
	{
		id: "portfolio",
		title: "Portfolio",
	},
	{
		id: "services",
		title: "Services",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

export default function Header() {
	const [active, setActive] = useState("Home");
	const [navbar, setNavbar] = useState(false);
	return (
		<div>
			<nav className="container mx-auto top-0 left-0 right-0 z-10">
				<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
					<div>
						<div className="flex items-center justify-between py-3 md:py-5 md:block">
							{/* LOGO */}
							<Link href="/">
								<Image
									src={logo}
									alt="logo"
									width={50}
									height={50}
									className="object-contain"
								/>
							</Link>
							{/* HAMBURGER BUTTON FOR MOBILE */}
							<div className="md:hidden">
								<button className="p-2" onClick={() => setNavbar(!navbar)}>
									{navbar ? (
										<Image src={close} width={30} height={30} alt="logo" />
									) : (
										<Image
											src={menu}
											width={30}
											height={30}
											alt="logo"
											className="focus:border-none active:border-none"
										/>
									)}
								</button>
							</div>
						</div>
					</div>
					<div>
						<div
							className={` flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
								navbar ? "p-12 md:p-0 block h-screen" : "hidden"
							}`}
						>
							<ul className="md:h-auto items-center justify-center md:flex ">
								<li className="pb-6 text-xl font-bold  py-8 md:px-6 text-center hover:text-blue-gray-400">
									<Link href="#about" onClick={() => setNavbar(!navbar)}>
										About
									</Link>
								</li>
								<li className="pb-6 text-xl font-bold py-8 px-6 text-center hover:text-blue-gray-400">
									<Link href="#portfolio" onClick={() => setNavbar(!navbar)}>
										Portfolio
									</Link>
								</li>
								<li className="pb-6 text-xl font-bold  py-8 px-6 text-center hover:text-blue-gray-400">
									<Link href="#services" onClick={() => setNavbar(!navbar)}>
										Services
									</Link>
								</li>
								<li className="pb-6 text-xl font-bold  py-8 px-6 text-center hover:text-blue-gray-400">
									<Link href="#contact" onClick={() => setNavbar(!navbar)}>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
