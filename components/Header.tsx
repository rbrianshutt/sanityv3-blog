import Link from 'next/link';
import Image from 'next/image';
import {UserIcon} from '@heroicons/react/24/solid'

function Header() {
	return (
		<header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
			<div className='flex items-center space-x-2'>
				<Link href='/'>
					<UserIcon className=' w-10 h-10' />
					{/* <Image
						className='rounded full'
						src='/../public/profile-pic.jpg'
						width={50}
						height={50}
						alt='logo'
					/> */}
					
				</Link>
				<h1>Brian Shutt</h1>
			</div>
			<div>
				<Link
					href='/'
					className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center'
				>
					Check out my portfolio page!
				</Link>
			</div>
		</header>
	);
}

export default Header;
