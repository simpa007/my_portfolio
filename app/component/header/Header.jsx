import Link from "next/link";
import Image from "next/image";
import hamburger from "../../images/hamburger.png";

function Header() {
	return (
		<>
			<div className="container mt-8 mx-auto border border-green-100">
				<div className="flex justify-between items-center">
					<div>Logo</div>
					<div className="flex space-x-6">
						<Link href="/">Home</Link>
						<Link href="/about">About</Link>
						<Link href="/blog">Blog</Link>
						<Link href="/portfolio">Portfolio</Link>
						{/* <Image
							src={hamburger}
							alt="hamburger"
							width={100}
							style={{ color: "#ffff" }}
						/> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
{
	/* <HOME></HOME>
<ABOUT></ABOUT>
<BLOG></BLOG>
<PORTFOLIO></PORTFOLIO> */
}
