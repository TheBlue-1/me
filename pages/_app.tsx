import '../styles/globals.css';

import Head from 'next/head';

import type { AppProps } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div>
    <Head>
       <title>Maximilian Mayrhofer</title>
       <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/img/profile.jpg" />
    <meta property="og:image:secure_url" content="/img/profile.jpg" />
    <meta property="og:image:type" content="image/jpg" />
    <meta property="og:locale" content="de_AT" />
    <meta property="og:site_name" content="Maximilian Mayrhofer" />
    <meta name="abstract" content="Software Developer and great Eater" />
    <meta
      name="audience"
      lang="DE-AT"
      content="Software Developer, Maximilian, Mayrhofer, Website"
    />
    <meta name="copyright" content="Maximilian Mayrhofer 2020" />
    <meta
      property="og:title"
      content="Maximilian Mayrhofer - Software Developer"
    />
    <meta property="og:url" content="/" />
    <meta
      property="og:description"
      content="Hire me if you need a Developer! Invite me if you make a Party! Visit my site if you are curious!"
    />
    <meta
      name="keywords"
      content="Software Developer, Maximilian, Mayrhofer, Website"
    />
    <meta
      name="description"
      content="Hire me if you need a Developer! Invite me if you make a Party! Visit my site if you are curious!"
    />
     </Head>
  <Component {...pageProps} /></div>)
}

export default MyApp
