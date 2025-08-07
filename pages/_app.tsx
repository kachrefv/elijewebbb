import type { AppProps } from 'next/app';
import { Inter, Roboto_Mono } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${robotoMono.variable} font-sans scroll-smooth`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;