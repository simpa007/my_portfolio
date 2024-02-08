"use client";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import Skills from "./Skills";
import Testimonial from "./Testimonial";
import Portfolio from "./Portfolio";
import Services from "./Services";

export default function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Skills />
			<Portfolio />
			<Testimonial />
			<Services />
			{/* <Blog /> */}
			<Contact />
		</div>
	);
}
