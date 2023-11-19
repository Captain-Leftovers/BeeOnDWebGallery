import DynamicBorderCircle from './components/dynamic-border-circle/dynamic-border-circle'

type pageProps = {}
export default function page({}: pageProps) {
	return (
		<main className="relative grow bg-blue-400">
			<div className="absolute inset-1 bg-lime-100 flex items-center justify-center">
				<div className='bg-slate-300 w-96 h-96'>
					<DynamicBorderCircle />
				</div>
			</div>
		</main>
	)
}
