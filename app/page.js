"use client";
import Hero from "./component/home/Hero";
import About from "./component/home/About";
import Contact from "./component/home/Contact";
import Blog from "./component/home/Blog";
import Skills from "./component/home/Skills";
import Testimonial from "./component/home/Testimonial";
import Portfolio from "./component/home/Portfolio";

export default function Home() {
	// const cardRef = useRef(null);
	// const [arrowDisable, setArrowDisable] = useState(true);

	// const handleHorizantalScroll = (element, speed, distance, step) => {
	// 	let scrollAmount = 0;
	// 	const slideTimer = setInterval(() => {
	// 		element.scrollLeft += step;
	// 		scrollAmount += Math.abs(step);
	// 		if (scrollAmount >= distance) {
	// 			clearInterval(slideTimer);
	// 		}
	// 		if (element.scrollLeft === 0) {
	// 			setArrowDisable(true);
	// 		} else {
	// 			setArrowDisable(false);
	// 		}
	// 	}, speed);
	// };

	return (
		<div>
			<Hero />
			<About />
			<Skills />
			<Portfolio />
			<Testimonial />
			<Blog />
			<Contact />
		</div>
	);
}
