import React from 'react';

import RenderItem from './RenderItem';

import formatThousand from "src/helpers/formatThousand";

import ECertifiate from "public/images/img-graduation.svg";

export default function index() {
	const data = [
		{
			imageName: <ECertifiate />,
			name: 'Teach Experience',
			total: formatThousand(9874)
		},
		{
			imageName: <ECertifiate />,
			name: 'Accessable Certificate',
			total: formatThousand(4921)
		},
		{
			imageName: <ECertifiate />,
			name: 'New Environment',
			total: formatThousand(229)
		},
		{
			imageName: <ECertifiate />,
			name: 'Bonus Reward',
			total: formatThousand(16900)
		},
		{
			imageName: <ECertifiate />,
			name: 'Become Profesional',
			total: formatThousand(5421)
		},
		{
			imageName: <ECertifiate />,
			name: 'Self Organizing',
			total: 'Your Next'
		},
		
	];
	return (
		<>
			<div className='flex justify-between items-center'>
				<div className='w-auto'>
					<h2 className='text-lg text-gray-600'>Benefit</h2>
					<h1 className='text-xl text-gray-900'>
						What You Can <span className='text-blue-500'>Get</span>?
					</h1>
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
