import Head from 'next/head';
import Link from 'next/link';

function Random({ data }) {
	return (
		<>
			<Head>
				<title>Forum Asisten|Random Page</title>
				{/* <link rel='icon' href='/favicon.ico' /> */}
			</Head>

			<main className='container mt-12 mx-auto'>
				<h1 className='text-3xl'>Fetching random word</h1>
				<ul>
					{data.map((todo) => {
						return (
							<li className='border border-indigo-700 p-4'>
								{todo?.title ?? '-'}{' '}
								<Link href={`/random/${todo.id}`}>
									<a>launch</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</main>
		</>
	);
}

Random.getInitialProps = async () => {
	try {
		const data = await fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((json) => json);

		return { data };
	} catch (error) {}
};

export default Random;
