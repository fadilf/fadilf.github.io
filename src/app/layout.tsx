import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import clsx from 'clsx'
import Script from 'next/script'


const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {

	const GA_MEASUREMENT_ID = 'G-L536E2FBC2';

	return (
		<html lang="en" id="top">
			<head>
				<title>Fadil Eledath</title>
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){window.dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${GA_MEASUREMENT_ID}');
					`}
				</Script>
			</head>
			<body className={clsx(inter.className, 'bg-gradient-to-br', 'from-[#e8f4f8]', 'to-[#d4ecd0]', 'min-h-screen', 'text-apple-lightgray', 'font-normal', 'overflow-x-hidden', 'antialiased')}>
				<NavBar />
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}
