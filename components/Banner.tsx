function Banner() {
	return (
		<div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
			<div>
				<h1 className='text-7xl'>Brian's Daily Blog </h1>
				<h2 className='mt-5 md:mt-2'>
					Welcome to the{' '}
					<span className='underline decoration-4 decoration-[#f7ab0a]'>
						Lifestyle and Tech
					</span>{' '}
					Blog for the aspiring
				</h2>
			</div>
			<p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
				Optimimal living | Life hacks | Technology
			</p>
		</div>
	);
}

export default Banner;
