"use client";
import Hero from "./component/home/Hero";
import About from "./component/home/About";
import Contact from "./component/home/Contact";
import Blog from "./component/home/Blog";
import Skills from "./component/home/Skills";
import Testimonial from "./component/home/Testimonial";
import Portfolio from "./component/home/Portfolio";
import Services from "./component/home/Services";

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
