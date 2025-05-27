import type { AppProps } from 'next/app'
import { type ReactElement } from 'react'
import Script from 'next/script';
import Head from 'next/head';
import '../style.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps): ReactElement {

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />

        {/*游戏主题字体 - 优先加载核心字体，其余延迟加载 */}
        {/* 预加载 Logo 字体 */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/pressstart2p/v14/e3t4euO8T-267oIAQAu6jDQyK3nVivNm4I81.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* 设置内联字体CSS以避免FOIT */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Press Start 2P';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: local('Press Start 2P'), url(https://fonts.gstatic.com/s/pressstart2p/v14/e3t4euO8T-267oIAQAu6jDQyK3nVivNm4I81.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            
            .font-logo {
              font-family: 'Press Start 2P', monospace;
              font-display: swap;
            }
          `
        }} />

        {/* 分组加载其他字体 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Russo+One:wght@400;600;700&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />

        {/* Google Adsense */}
        <meta name="google-adsense-account" content="ca-pub-4907197973761221" />

        {/* clickadilla */}
        {/* <script async src="https://js.wpadmngr.com/static/adManager.js" data-admpid="314085"></script> */}

      </Head>

      {/* Google Adsense script */}
      <Script strategy='lazyOnload' async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4907197973761221" crossOrigin="anonymous"></Script>

      {/* monetag */}
      {/* <Script>
        {`
        (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('groleegni.net',9230773,document.createElement('script'))
        `}
      </Script>

      <Script>
        {`
        (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('gizokraijaw.net',9230778,document.createElement('script'))
        `}
      </Script> */}

      {/* adsterra banner */}
      <Script strategy='lazyOnload' type="text/javascript">
        {`
        atOptions = {
          'key' : 'b14ecaf7ba922d58c6328006b470fd04',
          'format' : 'iframe',
          'height' : 600,
          'width' : 160,
          'params' : { }
        };
      `}
      </Script>
      <Script strategy='lazyOnload' type="text/javascript" src="//www.highperformanceformat.com/b14ecaf7ba922d58c6328006b470fd04/invoke.js"></Script>

      {/* adsterra banner */}
      <Script strategy='lazyOnload' type="text/javascript">
        {`
        atOptions = {
          'key' : '5d8681ea81dce92641d324ff2850aa08',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `}
      </Script>
      <Script strategy='lazyOnload' type="text/javascript" src="//www.highperformanceformat.com/5d8681ea81dce92641d324ff2850aa08/invoke.js"></Script>

      {/* Google tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-L7QSKDQVJB"></Script>
      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-L7QSKDQVJB');
        `}
      </Script>

      <Component {...pageProps} />

      {/* adsterra */}
      <Script strategy='lazyOnload' type='text/javascript' src='//pl26416596.profitableratecpm.com/0d/2e/23/0d2e2375eb22c7adee4bcab7b29bb9c7.js'></Script>
    </>
  )
}
