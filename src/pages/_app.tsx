import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { App as KonastaApp } from 'konsta/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <KonastaApp theme="ios">
      <Component {...pageProps} />
    </KonastaApp>
  )
}
