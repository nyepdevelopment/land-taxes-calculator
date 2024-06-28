import Container from "../components/Container";
import "../app/globals.css";

export default function Home() {
	return (
		<Container>
			<h1 className="text-[1.6rem] font-[700] text-center">LAND TAXES CALCULATOR</h1>
			<nav className="mt-4 flex flex-col items-center">
				<a className="px-4 py-2 border border-black hover:bg-black duration-300 hover:text-white" href="/register-deed-taxes">Register Deed Taxes</a>
			</nav>
		</Container>
	);
}
