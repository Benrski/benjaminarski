import Head from 'next/head';

import { Splash } from '@/components/Splash';

export default function Home() {
  return (
    <>
      <Head>
        <title>Benjamin Minarski</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Splash />
      </main>
    </>
  );
}
