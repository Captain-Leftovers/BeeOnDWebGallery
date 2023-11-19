'use client'

import { RoutesType } from '@/lib/main.types'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
} from '@/components/ui/tooltip'
import { TooltipTrigger } from '@radix-ui/react-tooltip'

import { usePathname } from 'next/navigation'
import NavigationLink from './navigation-link'

type MainNavProps = {
	routerArr: RoutesType[]
}
export default function MainNav({ routerArr }: MainNavProps) {
	const path = usePathname().split('/')[1]

	return (
		<nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
			{routerArr.map((route) => (
				<NavigationLink
					key={route.href}
					href={route.href}
					targetSegment={route.targetSegment}
					className="relative group text-sm font-medium transition-colors hover:text-black"
				>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger> {route.label}</TooltipTrigger>
							{!!route.description && (
								<TooltipContent>
									{route.description}
								</TooltipContent>
							)}
						</Tooltip>
					</TooltipProvider>
				</NavigationLink>
			))}
		</nav>
	)
}
