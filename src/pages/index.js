import Head from 'next/head';
import Link from 'next/link';

import axios from 'src/configs/axios';

import Header from 'src/parts/Header';
import Hero from 'src/parts/Hero'

function Home({ data }) {
	return (
		<>
			<Head>
				<title>Forum Asisten</title>
				{/* <link rel='icon' href='/favicon.ico' /> */}
			</Head>

			<main>
				<section className='header-clipping pt-10 min-h-screen md:min-h-0'>
					<div className='container mx-auto px-4'>
						<Header onLight></Header>
						<Hero></Hero>
					</div>
				</section>
			</main>
		</>
	);
}

Home.getInitialProps = async () => {
	try {
		const data = await axios.get(`/deans`);
		// return {data: data.data.data};
		return { data: data.data };
	} catch (error) {
		return error;
	}
};

export default Home;
