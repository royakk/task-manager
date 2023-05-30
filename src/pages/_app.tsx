import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/store';
import ResponsiveDrawer from '../components/baseComponents/sidbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ResponsiveDrawer>
        <Component {...pageProps} />
      </ResponsiveDrawer>
    </Provider>
  );
}

 

