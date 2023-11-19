import Link from 'next/link'
import Container from '@/components/ui/container'
import MainNav from './main-nav'
import NavbarActions from './navbar-actions'
import { cn } from '@/lib/utils'
import { RoutesType } from '@/lib/main.types'

export const revalidate = 0




type NavbarProps = {
	routesArr: RoutesType[]
	title: string
	titleHref?: string
	className?: string
  }

export default async function Navbar({ routesArr,title, className }: NavbarProps) {
	

	return (
		<div className={cn('z-50  h-16', className)}>
			<Container className="py-2">
				<Link href="/motorcycle-shop" className=" mx-auto">
					<p className="font-bold text-xl text-center">
						{title}
					</p>
				</Link>
				<div className="relative px-4 sm:px-6 lg:px-8 flex items-center justify-around">
					<MainNav routerArr={routesArr} />
					<NavbarActions />
				</div>
			</Container>
		</div>
	)
}
