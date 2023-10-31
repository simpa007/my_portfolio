import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
//Spacegrotesk
const Spacegrotesk = Space_Grotesk({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});
export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={Spacegrotesk.className}>
				<Header />
				{children}
				<Footer />
				<script src="./node_modules/preline/dist/preline.js"></script>
			</body>
		</html>
	);
}
