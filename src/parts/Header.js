import React from 'react';
import propTypes from 'prop-types';

import { useRouter } from 'next/router';

import Link from 'next/link';

import Logo from 'public/images/logo-2.svg';

export default function Header({ onLight }) {
	const linkColor = onLight ? 'text-white' : 'text-white';

	const router = useRouter();

	const linkCTA =
		router.pathname.indexOf('/login') > -1
			? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
			: `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;

	const textCTA = router.pathname.indexOf('/login') > -1 ? 'Register' : 'Join Us';

	return (
		<header className='flex justify-between items-center'>
			<div style={{ height: 54, zIndex: 50 }}>
				<Logo className='on-dark'></Logo>
			</div>
			<ul className='flex'>
				<li>
					<Link href='/'>
						<a
							className={[
								linkColor,
								'text-white hover:text-gray-400 transition-all duration-250 text-lg px-6 py-3 font-medium',
							].join(' ')}>
							Home
						</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a
							className={[
								linkColor,
								'text-white hover:text-gray-400 transition-all duration-250 text-lg px-6 py-3 font-medium',
							].join(' ')}>
							Regulation
						</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a
							className={[
								linkColor,
								'text-white hover:text-gray-400 transition-all duration-250 text-lg px-6 py-3 font-medium',
							].join(' ')}>
							About Team
						</a>
					</Link>
				</li>
				<li>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href={linkCTA}
						className='bg-blue-500 hover:bg-blue-400 transition-all duration-200 text-white hover:text-gray-500 text-lg px-6 py-3 font-medium ml-6'>
						{textCTA}
					</a>
				</li>
			</ul>
		</header>
	);
}

Header.propTypes = {
	onLight: propTypes.bool,
};
