// "use client";
// import Image from "next/image";
// import "keen-slider/keen-slider.min.css";
// import KeenSlider from "keen-slider";
// import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
// import { BsArrowUpRight } from "react-icons/bs";
// import background from "../images/bg.png";
// import code from "../images/code1.jpg";
// import react from "../icons/icons8-react-96.png";
// import html from "../icons/icons8-html-5-100.png";
// import javascript from "../icons/icons8-javascript-100.png";
// import wordPress from "../icons/icons8-wordpress-100.png";
// import webFlow from "../icons/icons8-webflow-96.png";
// import nodejs from "../icons/icons8-nodejs-96.png";

// export default function page() {
// 	const keenSlider = new KeenSlider(
// 		"#keen-slider",
// 		{
// 			loop: true,
// 			slides: {
// 				origin: "center",
// 				perView: 1.25,
// 				spacing: 16,
// 			},
// 			breakpoints: {
// 				"(min-width: 1024px)": {
// 					slides: {
// 						origin: "auto",
// 						perView: 2.5,
// 						spacing: 32,
// 					},
// 				},
// 			},
// 		},
// 		[]
// 	);
// 	return (
// 		<>
// 			<div className="container mx-auto py-24 flex flex-col mt-20  md:flex md:flex-row md:mx-auto  md:mt-10  lg:flex lg:justify-between lg:items-center lg:mx-auto lg:mt-10">
// 				<div className="">
// 					<hr class="w-20 h-2 bg-white border-0 rounded md:w-32 md:h-2 lg:w-48 lg:h-2 lg:my-2 " />
// 					<h1 className="text-3xl mt-8 leading-8 font-extrabold mb-4 md:text-5xl md:font-extrabold lg:text-7xl lg:font-extrabold lg:mb-2">
// 						Nice to meet you, <br /> I’m Simpa.
// 					</h1>
// 					<p className=" text-lg text-[offwhite] my-8">
// 						Lorem ipsum dolor sit amet consectetur adipiscing
// 						<br /> elit leo quis ullamcorper quis id elementum convallis lacus
// 						gravida.
// 					</p>
// 					<hr className="mt-16 mb-6" />
// 					<div className="flex justify-between">
// 						<div className="flex space-x-2">
// 							<p className="text-3xl font-semibold md:text-5xl md:font-[700px] lg:text-7xl lg:font-[700px] m-0 p-0">
// 								4<span className="text-[#6ff4a5]">+</span>
// 							</p>
// 							<span className="inline md:inline-block text-3xl font-semibold">
// 								Years of <br />
// 								expreince
// 							</span>
// 						</div>
// 						<div className="flex space-x-2">
// 							<p className="text-3xl font-semibold md:text-5xl md:font-[700px] lg:text-7xl lg:font-[700px] m-0 p-0">
// 								15<span className="text-[#6ff4a5]">+</span>
// 							</p>
// 							<span className="inline md:inline-block text-3xl font-semibold">
// 								Successful <br />
// 								projects
// 							</span>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="">
// 					<div className="">
// 						<Image
// 							src={background}
// 							alt="background image"
// 							style={{
// 								objectFit: "cover",
// 							}}
// 							quality={100}
// 							className=""
// 						/>
// 					</div>
// 				</div>
// 			</div>

// 			{/* my story */}
// 			<div className="bg-[#22282f] my-40 p-0">
// 				<div className=" container mx-auto relative">
// 					{/* first */}
// 					<div className="flex justify-between items-center p-0">
// 						<div className="w-[45%] relative bottom-28">
// 							<Image
// 								src={code}
// 								alt="code"
// 								className="border border-black rounded-3xl"
// 								quality={100}
// 							/>
// 						</div>
// 						<div className="w-[45%]">
// 							<h1>
// 								<span className="text-[#6ff4a5]">/</span> MY STORY
// 							</h1>
// 							<p>How I started as a web developer</p>
// 							<p>
// 								Excepteur sint occaecat cupidatat non proident, sunt in culpa
// 								qui officia deserunt mollit anim id est laborum aute irure dolor
// 								in reprehenderit in voluptate velit esse cillum dolore eu
// 								fugiat.
// 							</p>
// 						</div>
// 					</div>
// 					{/* second */}
// 					<div className="flex justify-between items-center p-0">
// 						<div className="w-[45%]">
// 							<h1>
// 								<span className="text-[#6ff4a5]">/</span> MY STORY
// 							</h1>
// 							<p>How I started as a web developer</p>
// 							<p>
// 								Excepteur sint occaecat cupidatat non proident, sunt in culpa
// 								qui officia deserunt mollit anim id est laborum aute irure dolor
// 								in reprehenderit in voluptate velit esse cillum dolore eu
// 								fugiat.
// 							</p>
// 						</div>
// 						<div className="w-[45%] relative top-28">
// 							<Image
// 								src={code}
// 								alt="code"
// 								className="border border-black rounded-3xl"
// 								quality={100}
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			{/* Experience */}
// 			<div className="container md:mt-24 md:flex md:justify-between md:items-center md:mx-auto">
// 				<div>
// 					<p className="text-2xl font-extrabold mb-4"> / MY EXPERIENCE</p>
// 					<h1 className="text-xl font-bold md:text-2xl md:font-bold lg:text-5xl lg:font-bold lg:mb-4">
// 						Over 10 years of experience <br /> and 100+ projects
// 					</h1>
// 				</div>
// 				<div className="">
// 					<button className="underline underline-offset-8 text-lg font-bold">
// 						Get in touch
// 						<BsArrowUpRight size={24} className="inline-flex items-baseline" />
// 					</button>
// 				</div>
// 			</div>
// 			<hr className="container mx-auto h-px my-12 bg-gray-200 border-0" />
// 			{/* Sills */}
// 			<div className="container mx-auto flex justify-between">
// 				<div>
// 					<h1 className="mb-6">Skill SET</h1>
// 					<div className="flex justify-center space-x-20">
// 						<div className="leading-8">
// 							<p>HTML & CSS</p>
// 							<p>Javascript</p>
// 							<p>ReactJS</p>
// 							<p>NodeJS</p>
// 						</div>
// 						<div>
// 							<p>NextJS</p>
// 							<p>Typescript</p>
// 							<p>Python</p>
// 							<p>Webflow</p>
// 						</div>
// 					</div>
// 				</div>

// 				<div>
// 					<h1 className="mb-6">SERIVCES</h1>
// 					<div>
// 						<div>
// 							<p>Web Development</p>
// 							<p>App Development</p>
// 							<p>Web Design</p>
// 							<p>SEO</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* credentials */}
// 			<div>
// 				<div className="container md:mt-36 md:flex md:justify-between md:mx-auto md:items-center">
// 					<div className="w-[40%]">
// 						<p className="text-2xl font-extrabold mb-4"> / MY EXPERIENCE</p>
// 						<h1 className="text-xl font-bold md:text-2xl md:font-bold lg:text-5xl lg:font-bold lg:mb-4">
// 							Past education & credentials
// 						</h1>
// 					</div>
// 					<div className="w-[40%]">
// 						<p>
// 							Lorem ipsum dolor sit amet consectet adipiscing elit et et est
// 							eget tortor lacus aliquam pulvinar senectus ut sapien sed nun
// 						</p>
// 					</div>
// 				</div>
// 				<hr className="container mx-auto h-px my-12 bg-gray-200 border-0" />

// 				<div className="container my-24 flex justify-between items-center mx-auto">
// 					<div className="w-[40%]">
// 						<div className="mb-24">
// 							<p>STANFORD UNIVERSITY / JAN 2016</p>
// 							<h1>Frontend Web Developer Degree</h1>
// 							<p>
// 								Duis aute irure dolor in reprehenderit in voluptate velit esse
// 								cill dolore eu fugiat nulla pariatur sint occaecat dolor.
// 							</p>
// 						</div>
// 						<div>
// 							<p>STANFORD UNIVERSITY / JAN 2016</p>
// 							<h1>Frontend Web Developer Degree</h1>
// 							<p>
// 								Duis aute irure dolor in reprehenderit in voluptate velit esse
// 								cill dolore eu fugiat nulla pariatur sint occaecat dolor.
// 							</p>
// 						</div>
// 					</div>

// 					<div className="w-[40%]">
// 						<div className="mb-24">
// 							<p>STANFORD UNIVERSITY / JAN 2016</p>
// 							<h1>Frontend Web Developer Degree</h1>
// 							<p>
// 								Duis aute irure dolor in reprehenderit in voluptate velit esse
// 								cill dolore eu fugiat nulla pariatur sint occaecat dolor.
// 							</p>
// 						</div>
// 						<div>
// 							<p>STANFORD UNIVERSITY / JAN 2016</p>
// 							<h1>Frontend Web Developer Degree</h1>
// 							<p>
// 								Duis aute irure dolor in reprehenderit in voluptate velit esse
// 								cill dolore eu fugiat nulla pariatur sint occaecat dolor.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* tools */}
// 			<div className="mt-8 px-6 md:mt-12 md:px-12 md:py-28 lg:mt-28 ">
// 				<div className=" container md:container md:flex md:justify-between md:mx-auto md:text-left lg:flex lg:justify-between lg:items-center lg:mx-auto lg:text-left">
// 					<div>
// 						<p className="text-2xl font-extrabold mb-4"> MY SKILLS</p>
// 						<h1 className="text-xl font-bold md:text-2xl md:font-bold lg:text-5xl lg:font-bold lg:mb-4">
// 							My extensive list of skills
// 						</h1>
// 					</div>
// 					<div className="my-6 space-x-3 md:space-x-3">
// 						<button
// 							className="hover:text-[#6ff4a5]"
// 							aria-label="Previous slide"
// 							onClick={() => keenSlider.prev()}
// 						>
// 							<BsArrowLeftCircle size={64} />
// 						</button>
// 						<button
// 							className="hover:text-[#6ff4a5]"
// 							aria-label="Next slide"
// 							onClick={() => keenSlider.next()}
// 						>
// 							<BsArrowRightCircle size={64} />
// 						</button>
// 					</div>
// 				</div>
// 				<div className="md:-mx-12 md:ml-12  md:mt-6">
// 					<div id="keen-slider" className="keen-slider">
// 						{/* card 1 */}
// 						<div class="keen-slider__slide  max-w-sm p-6 py-24 bg-[#2a313b] border border-[#2a313b] rounded-3xl shadow dark:bg-[#2a313b] dark:border-[#2a313b]">
// 							<Image src={html} alt="react logo" className="mb-6" />
// 							<h1 className="mb-3">HTML & CSS</h1>
// 							<p class=" font-normal text-[#c3cab8] dark:text-[#c3cab8] mb-10">
// 								Go to this step by step guideline process on how to certify for
// 								your weekly benefits:
// 							</p>
// 							<hr className="w-20 h-2 bg-white border-0 rounded" />
// 						</div>
// 						{/* card 1 */}
// 						<div class="keen-slider__slide  max-w-sm p-6 py-24 bg-[#2a313b] border border-[#2a313b] rounded-3xl shadow dark:bg-[#2a313b] dark:border-[#2a313b]">
// 							<Image src={javascript} alt="react logo" className="mb-6" />
// 							<h1 className="mb-3">Javascript</h1>
// 							<p class=" font-normal text-[#c3cab8] dark:text-[#c3cab8] mb-10">
// 								Go to this step by step guideline process on how to certify for
// 								your weekly benefits:
// 							</p>
// 							<hr className="w-20 h-2 bg-white border-0 rounded" />
// 						</div>
// 						{/* card 1 */}
// 						<div class="keen-slider__slide  max-w-sm p-6 py-24 bg-[#2a313b] border border-[#2a313b] rounded-3xl shadow dark:bg-[#2a313b] dark:border-[#2a313b]">
// 							<Image src={react} alt="react logo" className="mb-6" />
// 							<h1 className="mb-3">React JS</h1>
// 							<p class=" font-normal text-[#c3cab8] dark:text-[#c3cab8] mb-10">
// 								Go to this step by step guideline process on how to certify for
// 								your weekly benefits:
// 							</p>
// 							<hr className="w-20 h-2 bg-white border-0 rounded" />
// 						</div>
// 						{/* card 1 */}
// 						<div class="keen-slider__slide  max-w-sm p-6 py-24 bg-[#2a313b] border border-[#2a313b] rounded-3xl shadow dark:bg-[#2a313b] dark:border-[#2a313b]">
// 							<Image src={nodejs} alt="react logo" className="mb-6" />
// 							<h1 className="mb-3">Node JS</h1>
// 							<p class=" font-normal text-[#c3cab8] dark:text-[#c3cab8] mb-10">
// 								Go to this step by step guideline process on how to certify for
// 								your weekly benefits:
// 							</p>
// 							<hr className="w-20 h-2 bg-white border-0 rounded" />
// 						</div>
// 						{/* card 1 */}
// 						<div class="keen-slider__slide  max-w-sm p-6 py-24 bg-[#2a313b] border border-[#2a313b] rounded-3xl shadow dark:bg-[#2a313b] dark:border-[#2a313b]">
// 							<Image src={webFlow} alt="react logo" className="mb-6" />
// 							<h1 className="mb-3">Webflow</h1>
// 							<p class=" font-normal text-[#c3cab8] dark:text-[#c3cab8] mb-10">
// 								Go to this step by step guideline process on how to certify for
// 								your weekly benefits:
// 							</p>
// 							<hr className="w-20 h-2 bg-white border-0 rounded" />
// 						</div>
// 						{/* card 1 */}
// 						<div class="keen-slider__slide  max-w-sm p-6 py-24 bg-[#2a313b] border border-[#2a313b] rounded-3xl shadow dark:bg-[#2a313b] dark:border-[#2a313b]">
// 							<Image src={wordPress} alt="react logo" className="mb-6" />
// 							<h1 className="mb-3">Wordpress</h1>
// 							<p class=" font-normal text-[#c3cab8] dark:text-[#c3cab8] mb-10">
// 								Go to this step by step guideline process on how to certify for
// 								your weekly benefits:
// 							</p>
// 							<hr className="w-20 h-2 bg-white border-0 rounded" />
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
