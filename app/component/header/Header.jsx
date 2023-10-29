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
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<nav className="py-6 container mx-auto flex justify-between items-center navbar mt-4 md:py-0">
				{/* Logo */}
				<Link href="/">
					<Image src={logo} alt="logo" width="60" height="100" />
				</Link>

				{/* Desktop Navigation */}
				<ul className="list-none md:flex hidden justify-end items-center flex-1">
					{navLinks.map(({ id, title, index }) => (
						<li
							key={id}
							className={`text-xl font-semibold cursor-pointer ${
								active === title ? "text-[#6ff4a5]" : "text-dimWhite"
							} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
							onClick={() => setActive(title)}
						>
							<Link href={`#${id}`}>{title}</Link>
						</li>
					))}
				</ul>
				{/* Mobile Navigation */}
				<div className="md:hidden py-6 flex flex-1 justify-end items-center">
					<Image
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>
					{/* Sidebar */}
					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 bg-black bg-opacity-25 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col">
							{navLinks.map(({ id, title, index }) => (
								<li
									key={id}
									className={`text-lg font-semibold cursor-pointer ${
										active === title ? "text-[#6ff4a5]" : "text-dimWhite"
									} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
									onClick={() => setActive(title)}
								>
									<Link href={`#${id}`}>{title}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
