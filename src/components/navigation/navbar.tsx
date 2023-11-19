import Link from 'next/link'
import Container from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { NavigationDropdownLinks } from './navigation-dropdown-links'

export const revalidate = 0

type NavbarProps = {
	title: string
	titleHref?: string
	className?: string
}

export default async function Navbar({ title,titleHref, className }: NavbarProps) {
	return (
		<div className={cn('z-50  h-20', className)}>
			<Container className="py-2">
				<Link href={titleHref || '#'} className=" mx-auto">
					<p className="font-bold text-xl text-center">{title}</p>
				</Link>
				<div className="relative px-4 sm:px-6 lg:px-8 flex items-center">
					<NavigationDropdownLinks />
				</div>
			</Container>
		</div>
	)
}
