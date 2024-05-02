import type { Metadata } from "next";
import { Chivo as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Pod request access landing page",
	icons: {
		icon: "/favicon-32x32.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("min-h-screen",fontSans.variable)}>{children}</body>
		</html>
	);
}
