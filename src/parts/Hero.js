import React from 'react';

export default function Hero() {
	function submit() {}
	return (
		<div className='flex justify-between items-center mt-10'>
			<div className='w-full md:w-1/2 mt-10 md:mt-0'>
				<h1 className='text-4xl text-white mb-5 font-semibold'>
					<span className='text-gray-300'>Forum Asisten</span>
					<br className='hidden md:block' />
				</h1>
				<h1 className='text-4xl text-white mb-5 font-semibold'>
					Universitas Amikom Yogyakarta
				</h1>

				<p className='text-white font-light text-lg mb-8 mt-10'>
					Tetap semangat, jaga jarak, dan tetap dirumah aja
					<br /> <span className='font-semibold'>#asistendirumahaja</span>
				</p>

				<form onSubmit={submit} className='flex mt-32'>
					<input
						type='text'
						onChange=''
            className="bg-white focus:outline-none border-0 px-4 md:px-6 py-3 w-full md:w-1/2"
						value=''
						placeholder='Your NPM'
					/>
					<button className='bg-blue-500 hover:bg-blue-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 md:px-6 py-3 whitespace-no-wrap'>
						<span class='absolute rounded-full h-3 w-3 bg-white -mt-4 ml-32'></span>
						<span class='animate-ping absolute h-3 w-3 rounded-full bg-white opacity-75 -mt-4 ml-32'></span>
						Choose Class!
					</button>
				</form>
			</div>

			<div className='hidden w-1/2 md:flex justify-end pt-24 pr-16'>
				<div className='relative' style={{ width: 369, height: 300 }}>
					<div className='absolute w-full h-full -mb-8 -ml-2 -mt-14'>
						<img
							src='/images/hero-img-1.png'
							alt='nanti nunggu maskot png aowkoawowok'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
