import React from 'react';

import Link from 'next/link';

export default function RenderItem({ item }) {
	return (
		<div className='w-3/6 md:w-1/6 px-4 h-100 mb-8 md:mb-0'>
			<div className='card relative transition-all duration-300'>
				{item.imageName}
				<div className='card-meta mt-10'>
					<h4 className='text-sm transition-all duration-200 w-1/2'>
						{item.name}
					</h4>
          <h5 className="text-sm transition-all mt-2 duration-500">
            {item.total}
          </h5>
					<Link href='/courses/[id]' as={`/courses/${item.id}`}>
						<a className='link-wrapped'></a>
					</Link>
				</div>
			</div>
		</div>
	);
}
