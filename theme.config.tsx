import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig, ThemeSwitch } from 'nextra-theme-docs'
import NextLink from 'next/link'
import { GitHubIcon, DiscordIcon, StackOverflowIcon, TwitterIcon, RedditIcon, YouTubeIcon } from '@components/icons'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { siteUrl } from './config'

const inter = Inter({ subsets: ['latin'] });

const logo = (
  <div className="flex justify-center items-center" title="AutoFormAI">
    <Image src="/favicon.ico" alt="lovgames logo" width={40} height={40} className='rounded-md' />
    <span className={`${inter.className} font-logo text-base lg:text-xl ml-2 font-black drop-shadow-[0_0_10px_#00FFFF]`}>
      <span className="text-pink-500">L</span>
      <span className="text-purple-500">o</span>
      <span className="text-blue-500">v</span>
      <span className="text-cyan-500">G</span>
      <span className="text-green-500">a</span>
      <span className="text-yellow-500">m</span>
      <span className="text-orange-500">e</span>
      <span className="text-red-500">s</span>
    </span>
  </div>
)

const classes = {
  link: "hover:underline decoration-from-font [text-underline-position:from-font]",
}

function List({
  title,
  url,
  items,
}: {
  title: string,
  url?: string,
  items: { title: string; url: string }[]
}) {
  return (
    <ul className="text-sm flex flex-col gap-4 max-lg:w-[46%]">
      <h3 className='text-lg font-light text-gray-400'>{url ? <NextLink href={url} className={classes.link}>{title}</NextLink> : title}</h3>
      {items.map(item => (
        <li key={item.title}>
          <NextLink href={item.url} className={classes.link}>
            {item.title}
          </NextLink>
        </li>
      ))}
    </ul>
  )
}

function Footer() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-start mb-24 flex-wrap gap-10">
        <NextLink href="/" className="max-lg:w-full">
          {logo}
        </NextLink>
        {/* <List
          title="Blog"
          url="/blog"
          items={[
            { title: "blog1", url: "" },
            { title: "blog2", url: "" },
            { title: "blog3", url: "" },
            { title: "blog4", url: "" }
          ]}
        /> */}
        <List
          title="About"
          items={[
            { title: "Concat", url: "/concat" },
            // { title: "Privacy Policy", url: "https://autoformai.floxai.top/docs/privacy-policy/" },
          ]}
        />
      </div>
      <div className="flex justify-between flex-wrap gap-10">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} GameHome. All
          rights reserved.
          {/* <br />
          For web site terms of use, trademark policy and general project
          policies please see{" "}
          <a
            href="https://lfprojects.org"
            target="_blank"
            rel="noreferrer"
            className={`text-primary ${classes.link}`}
          >
            https://lfprojects.org
          </a> */}
        </p>
        <div className="flex flex-col gap-4 lg:items-end">
          <ul className="flex gap-5">
            {[
              { url: "https://x.com/crazy_cattle_3d", icon: TwitterIcon, title: "Twitter" },
              { url: "https://github.com/crazycattle3d-fun/crazycattle3d", icon: GitHubIcon, title: "GitHub" },
              { url: "https://www.youtube.com/@crazycattle3d-fun", icon: YouTubeIcon, title: "YouTube" },
              { url: "https://www.reddit.com/user/crazycattle3d/", icon: RedditIcon, title: "Reddit" },
              { url: "https://github.com/crazycattle3d-fun/cheese-chompers-3d", icon: GitHubIcon, title: "GitHub" },
              { url: "", icon: DiscordIcon },
              { url: "", icon: StackOverflowIcon },
            ].map(({ url, icon: Icon, title }) => (
              <li key={url}>
                <a
                  title={title}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors block"
                  aria-label={title}
                >
                  <Icon className="h-5 w-auto *:fill-current" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://nextra.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:text-primary transition-colors flex items-center gap-2"
            aria-label="Powered by Nextra"
          >
            Powered by{" "}
            <svg
              viewBox="0 0 361 70"
              fill="currentColor"
              className="shrink-0 h-3"
            >
              <path d="M114.913 33.2763v28.7642h-11.57V12.9496h11.059v8.3416h.575c1.129-2.7485 2.93-4.9325 5.401-6.5518 2.493-1.6193 5.572-2.429 9.237-2.429 3.388 0 6.339.7244 8.853 2.1733 2.535 1.4489 4.496 3.5476 5.88 6.2962 1.407 2.7486 2.099 6.0831 2.078 10.0035v31.2571h-11.57V32.5732c0-3.2813-.852-5.8487-2.557-7.7024-1.683-1.8537-4.016-2.7806-6.999-2.7806-2.024 0-3.824.4475-5.401 1.3424-1.556.8736-2.781 2.1413-3.676 3.8032-.873 1.662-1.31 3.6755-1.31 6.0405Zm61.407 29.723c-4.922 0-9.172-1.0227-12.752-3.0681-3.558-2.0668-6.296-4.9858-8.214-8.7572-1.917-3.7926-2.876-8.2563-2.876-13.3913 0-5.0497.959-9.4815 2.876-13.2954 1.939-3.8353 4.645-6.8182 8.118-8.9489 3.473-2.152 7.553-3.228 12.241-3.228 3.026 0 5.881.4901 8.565 1.4702 2.706.9588 5.093 2.4503 7.159 4.4744 2.088 2.0242 3.729 4.6023 4.922 7.7344 1.193 3.1108 1.79 6.8182 1.79 11.1221v3.5476h-40.238v-7.7983h29.148c-.021-2.2159-.501-4.1868-1.438-5.9126-.938-1.7472-2.248-3.1215-3.931-4.1229-1.662-1.0014-3.601-1.5021-5.817-1.5021-2.365 0-4.443.5753-6.232 1.7258-1.79 1.1293-3.186 2.6208-4.187 4.4745-.98 1.8324-1.481 3.8459-1.502 6.0405v6.8075c0 2.8551.522 5.3054 1.566 7.3508 1.044 2.0242 2.503 3.5796 4.378 4.6662 1.875 1.0654 4.07 1.598 6.584 1.598 1.683 0 3.207-.2343 4.57-.7031 1.364-.49 2.546-1.2038 3.548-2.1413 1.001-.9375 1.758-2.0987 2.269-3.4837l10.803 1.2145c-.682 2.8551-1.982 5.348-3.9 7.4787-1.896 2.1094-4.325 3.75-7.286 4.9219-2.962 1.1506-6.35 1.7258-10.164 1.7258Zm34.777-50.0497 9.908 18.1215 10.067-18.1215h12.241l-14.798 24.5455 15.054 24.5454h-12.177l-10.387-17.674-10.291 17.674h-12.273l14.957-24.5454-14.574-24.5455h12.273Zm63.878 0v8.9489h-28.221v-8.9489h28.221ZM253.722 1.18825h11.569V47.2749c0 1.5554.235 2.7486.704 3.5795.49.8097 1.129 1.3637 1.917 1.662s1.662.4474 2.621.4474c.724 0 1.385-.0532 1.981-.1598.618-.1065 1.087-.2024 1.407-.2876l1.949 9.0447c-.618.2131-1.502.4475-2.652.7031-1.13.2557-2.515.4049-4.155.4475-2.898.0852-5.508-.3516-7.831-1.3104-2.322-.9801-4.165-2.4929-5.529-4.5383-1.342-2.0455-2.003-4.6023-1.981-7.6705V1.18825Zm29.129 60.85225V12.9496h11.218v8.1818h.512c.895-2.8338 2.429-5.0177 4.602-6.5518 2.173-1.5554 4.677-2.3331 7.511-2.3331 1.321 0 2.535.1598 3.643.4794 1.108.3196 2.088.7564 2.94 1.3104l-3.579 9.588c-.618-.2983-1.3-.5433-2.046-.7351-.745-.1917-1.587-.2876-2.524-.2876-2.003 0-3.814.4474-5.434 1.3423-1.619.8949-2.908 2.1414-3.867 3.7394-.937 1.5767-1.406 3.4091-1.406 5.4971v28.8601h-11.57Zm51.222.863c-3.856 0-7.308-.9908-10.355-2.9723-3.047-1.9816-5.454-4.858-7.223-8.6293-1.768-3.7713-2.652-8.3523-2.652-13.7429 0-5.4546.894-10.0568 2.684-13.8068 1.811-3.7713 4.251-6.6158 7.319-8.5334 3.068-1.9389 6.488-2.9084 10.259-2.9084 2.877 0 5.242.4901 7.095 1.4702 1.854.9588 3.324 2.12 4.411 3.4836 1.087 1.3424 1.928 2.6101 2.525 3.8033h.479v-8.1179h11.602v49.0909h-11.378v-7.7343h-.703c-.597 1.1931-1.46 2.4609-2.589 3.8032-1.129 1.321-2.621 2.4503-4.474 3.3878-1.854.9375-4.187 1.4063-7 1.4063Zm3.228-9.4922c2.451 0 4.539-.6605 6.265-1.9816 1.725-1.3423 3.036-3.2066 3.931-5.593s1.342-5.1669 1.342-8.3416c0-3.1747-.447-5.934-1.342-8.2777-.874-2.3438-2.174-4.1655-3.9-5.4652-1.704-1.2997-3.803-1.9496-6.296-1.9496-2.578 0-4.73.6712-6.456 2.0135s-3.025 3.196-3.899 5.5611c-.873 2.365-1.31 5.071-1.31 8.1179 0 3.0682.437 5.8061 1.31 8.2138.895 2.3863 2.205 4.272 3.931 5.6569 1.747 1.3636 3.889 2.0455 6.424 2.0455Z" />
              <path
                d="m64.8833 1.81335-2.8464 2.84638C47.1274 19.5692 22.9543 19.5692 8.04485 4.65972L5.19848 1.81335c-.93479-.93478-2.45037-.93478-3.38515 0-.93479.93478-.93478 2.45037 0 3.38515L4.6597 8.04487c14.9095 14.90953 14.9095 39.08263 0 53.99213l-2.84637 2.8463c-.93479.9348-.93479 2.4504 0 3.3852.93478.9348 2.45037.9348 3.38515 0l2.84637-2.8464c14.90955-14.9095 39.08255-14.9095 53.99205 0l2.8464 2.8464c.9348.9348 2.4504.9348 3.3852 0 .9347-.9348.9347-2.4504 0-3.3852l-2.8464-2.8463c-14.9095-14.9095-14.9095-39.0826 0-53.99213l2.8464-2.84637c.9347-.93478.9347-2.45037 0-3.38515-.9348-.93478-2.4504-.93478-3.3852 0Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

const config: DocsThemeConfig = {
  darkMode: true,
  // banner: {
  //   key: '3.0-release',
  //   content: (
  //     <div className='before:content-["🎉_"]'>
  //       Nextra 3.0 is released.{' '}
  //       <Link
  //         href="https://the-guild.dev/blog/nextra-3"
  //         className='after:content-["_→"]'
  //       >
  //         Read more
  //       </Link>
  //     </div>
  //   )
  // },
  // project: {
  //   link: 'https://github.com/shuding/nextra'
  // },
  navbar: {
    extraContent: <ThemeSwitch lite className="[&_span]:hidden" />,
  },
  docsRepositoryBase: 'https://github.com/happydrew/youtubetomp3/tree/main/docs',
  logo,
  head: function useHead() {
    const { frontMatter, title: pageTitle } = useConfig()
    const { asPath } = useRouter()
    const path = asPath.indexOf("?") > 0 ? asPath.substring(0, asPath.indexOf("?")) : asPath

    //const title = `${pageTitle}${path === "/" ? "" : " | Crazy Cattle 3D"}`
    const title = `${pageTitle}`
    const { description, canonical, image, keywords } = frontMatter

    const game_name = title.split('|')[0].trim();

    return (
      <>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}

        {/* 设置og标签 */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}${path}`} />
        <meta property="og:image" content={`${siteUrl}${`${image || '/og-image.png'}`}`} />
        <meta property="og:site_name" content="Crazy Cattle 3D" />
        <meta property="og:type" content="website" />

        {/* 设置twitter标签 */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={`${siteUrl}${path}`} />
        <meta name="twitter:image" content={`${siteUrl}${`${image || '/og-image.png'}`}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@crazy_cattle_3d" />


        {canonical && <link rel="canonical" href={canonical} />}

        {/* 设置google结构化数据 */}
        {frontMatter.type === 'game' &&
          <script type="application/ld+json">
            {`
                {
                  "@context": "https://schema.org",
                  "@type": "SoftwareApplication",
                  "name": "${game_name}",
                  "applicationCategory": "GameApplication",
                  "operatingSystem": "WINDOWS,MAC,LINUX,IOS,ANDROID",
                  "description": "${description}",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://lovgames.com${image}",
                    "width": "800",
                    "height": "600"
                  },
                  "screenshot": [
                    {
                      "@type": "ImageObject",
                      "url": "https://lovgames.com/assets/images/games/crazy-cattle-3d/ireland-map.webp",
                      "width": "800",
                      "height": "600",
                      "caption": "Ireland Map"
                    },
                    {
                      "@type": "ImageObject",
                      "url": "https://lovgames.com/assets/images/games/crazy-cattle-3d/iceland-map.webp",
                      "width": "800",
                      "height": "600",
                      "caption": "Iceland Map"
                    },
                    {
                      "@type": "ImageObject",
                      "url": "https://lovgames.com/assets/images/games/crazy-cattle-3d/newzealand-map.webp",
                      "width": "800",
                      "height": "600",
                      "caption": "New Zealand Map"
                    }
                  ],
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "4328",
                    "bestRating": "5",
                    "worstRating": "3"
                  },
                  "author": {
                    "@type": "Organization",
                    "name": "Crazy Cattle 3D",
                    "url": "https://lovgames.com"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Crazy Cattle 3D",
                    "url": "https://lovgames.com"
                  },
                  "releaseNotes": "${description}",
                  "datePublished": "2025-04-17"
                }
            `}
          </script>
        }

        <script type="application/ld+json">
          {`
              {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Crazy Cattle 3D",
              "image": "https://lovgames.com/favicon.ico",
              "@id": "",
              "url": "https://lovgames.com",
              "telephone": "(907) 457-2631",
              "priceRange": "$",
              "address": {
              "@type": "PostalAddress",
              "streetAddress": "919 Stimple Ct",
              "addressLocality": "Fairbanks",
              "addressRegion": "AK",
              "postalCode": "99712",
              "addressCountry": "US"
              },
              "OpeningHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
              },
              "sameAs": []
              } 
            `}
        </script>

        <script type="application/ld+json">
          {`
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Crazy Cattle 3D",
                    "item": "https://lovgames.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Download",
                    "item": "https://lovgames.com/crazy-cattle-3d-download/"
                  }
                ]
              }
            `}
        </script>

        <script type="application/ld+json">
          {`
              {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Crazy Cattle 3D",
              "alternateName": "Crazy Cattle 3D, Crazy Cattle 3D Online, Crazy Cattle 3D Game, Crazy Cattle 3D Unblocked, Crazy Cattle 3D Free",
              "url": "https://lovgames.com",
              "potentialAction": {
              "@type": "SearchAction",
              "target": "https://lovgames.com",
              "query-input": "required name=search_term_string"
              }
              } 
            `}
        </script>

        < meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" /> */}
        <meta name="apple-mobile-web-app-title" content="GameHome" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  editLink: {
    content: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    content: Footer
  }
}

export default config
