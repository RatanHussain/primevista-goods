/** @format */

function Footer() {
	return (
		<footer className='w-full bg-white bg-opacity-50 backdrop-blur-md text-gray-700 text-center py-4 shadow-inner'>
			<div className='space-y-2'>
				<p className='text-sm'>
					&copy; {new Date().getFullYear()} PrimeVista Goods. All rights
					reserved.
				</p>
				<div className='space-x-4 text-sm'>
					<a href='#' className='hover:text-pink-600'>
						Privacy
					</a>
					<a href='#' className='hover:text-pink-600'>
						Terms
					</a>
					<a href='/register' className='hover:text-pink-600'>
						Support
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
