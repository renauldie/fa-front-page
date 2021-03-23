import Router from 'next/router';
import { ToastContainer } from 'react-toastify';
import NProgres, { done } from 'nprogress';
import 'nprogress/nprogress.css';

import '../../tailwindcss/style.css';
import 'react-toastify/dist/ReactToastify.css';

NProgres.configure({}); //showSpiner: false
Router.events.on('routeChangeStart', () => NProgres.start());
Router.events.on('routeChangeStart', () => NProgres.done());
Router.events.on('routeChangeError', () => NProgres.done());

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<ToastContainer position='top-center'></ToastContainer>
		</>
	);
}

export default MyApp;
