import './globals.css'
import { IBM_Plex_Sans } from 'next/font/google'
import NavBar from './NavBar'
import clsx from 'clsx'
import Script from 'next/script'


const ibmPlex = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['100', '400', '500', '600', '700']
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
			<body className={clsx(ibmPlex.className, 'bg-gray-950', 'text-gray-300', 'font-normal', 'overflow-x-hidden')}>
				<NavBar />
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}
