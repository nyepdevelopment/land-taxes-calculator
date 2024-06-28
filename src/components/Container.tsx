export default function Container({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="min-h-[100vh] p-4 flex flex-col w-full">{children}</main>;
}
