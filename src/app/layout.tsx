import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/navigation/footer'
import Navbar from '@/components/navigation/navbar'
import { Separator } from '@/components/ui/separator'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'BeeOnDWeb Gallery',
	description: 'Page For Developing and Storing Components And Animations',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} min-h-screen flex flex-col text-black bg-white`}
			>
				<Navbar title="BeeOnDWeb Gallery" />
				<Separator className="mx-auto w-[90%]" />
				{children}
				<Footer />
			</body>
		</html>
	)
}
