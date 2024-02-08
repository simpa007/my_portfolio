import "./globals.css";
import Head from "next/head";
import { Space_Grotesk } from "next/font/google";
import Header from "./header/Header";
import Footer from "./footer/Footer";

//Spacegrotesk
const Spacegrotesk = Space_Grotesk({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});
export const metadata = {
	title: "Simpa - Portfolio",
	description: "Web Developer Portfolio",
	icons: {
		icon: "/icon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body className={Spacegrotesk.className}>
				<Header />
				{children}
				<Footer />
				{/* <script src="./node_modules/preline/dist/preline.js"></script> */}
			</body>
		</html>
	);
}
