import React from 'react';

import Link from 'next/link';

import RenderItem from './RenderItem';

export default function Activity({ data }) {
	return (
		<>
			<div className='flex justify-between items-center'>
				<div className='w-auto'>
					<h2 className='text-lg text-gray-600'>Our Activity</h2>
					<h1 className='text-xl text-gray-900'>
						Being Productive <span className='text-blue-500'>With Us</span>
					</h1>
				</div>
				<div className='justify-self-end'>
					<Link href='/activities'>
						<a className='text-gray-600 hover:underline text-sm'>
							View All Activities
						</a>
					</Link>
				</div>
			</div>
			<div className='flex flex-wrap justify-start items-center -mx-4 mt-6'>
				{data?.length > 0 ? (
					data.map((item, index) => {
						return <RenderItem item={item} key={index}></RenderItem>;
					})
				) : (
					<div className='w-full text-center-py-12'>No Item Found</div>
				)}
			</div>
		</>
	);
}
