import NextHead from "next/head"

const Index = ({title}) =>
    <NextHead>
      <title>{title}</title>

      <link rel="alternate" type="application/rss+xml" href="/feed.xml"/>

      <meta name="description" content="Artificial intelligence, programming, and other musings."/>
      <meta property="og:image" content=""/>
      <meta name="robots" content="noindex"/>

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/gif" sizes="32x32" href="/favicon/rocket.gif"/>
      <link rel="icon" type="image/gif" sizes="16x16" href="/favicon/rocket.gif"/>
      <link rel="manifest" href="/favicon/site.webmanifest"/>
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000"/>
      <link rel="shortcut icon" href="/favicon/favicon.ico"/>

      <meta name="msapplication-TileColor" content="#000000"/>
      <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
      <meta name="theme-color" content="#000"/>
    </NextHead>

export default Index
