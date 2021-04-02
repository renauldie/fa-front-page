import Head from 'next/head';
import Link from 'next/link';

import axios from 'src/configs/axios';

import Header from 'src/parts/Header';
import Hero from 'src/parts/Hero';
import Activity from 'src/parts/Activities';
import ListBenefit from 'src/parts/ListBenefit';
import Footer from 'src/parts/Footer'

function Home({ data }) {
	console.log(data);
	return (
		<>
			<Head>
				<title>Forum Asisten | Universitas Amikom Yogyakarta</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<section className='header-clipping pt-10 md:min-h-0'>
					<div className='container mx-auto px-4'>
						<Header onLight></Header>
						<Hero></Hero>
					</div>
				</section>
			</main>
			<section className='container px-4 mx-auto pt-36 xl:pt-48'>
				<Activity data={data}></Activity>
			</section>
			<section className='container px-4 mx-auto pt-12'>
				<ListBenefit data={data}></ListBenefit>
			</section>
			<section className="bg-blue-1000 py-12 mt-24">
				<Footer></Footer>
			</section>
		</>
	);
}

Home.getInitialProps = async () => {
	try {
		const data = await axios.get(`/events`);
		return { data: data.data };
	} catch (error) {
		return error;
	}
};

export default Home;
