import Head from "next/head";

interface LayoutProps {
	children: React.ReactNode;
	pageTitle?: string;
}
export default function Layout({ children, pageTitle }: LayoutProps) {
	return (
		<>
			<Head>
				<title>{pageTitle ? `${pageTitle} | ` : ""}Land Taxes Calculator</title>
			</Head>
			<main className="min-h-[100vh] p-4 flex flex-col w-full">{children}</main>
		</>
	);
}
