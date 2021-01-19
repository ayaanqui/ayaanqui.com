import Head from 'next/head';

const Header = props => {
  let title = "";
  if (props.title)
    title = props.title + " - ";
  title += "Ayaan Siddiqui";

  const gtag = process.env.NEXT_PUBLIC_GTAG;

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/images/favicon.ico" />
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/custom.css" />
      <link rel="stylesheet" href="/icons/flaticon.css" />

      <link
        rel="preload"
        href="/fonts/Inter/Inter.ttf"
        as="font"
        crossOrigin=""
      />

      { props.children}

      <script src="/js/jquery-3.5.1.slim.min.js"></script>
      <script src="/js/popper.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>

      {/* Global site tag (gtag.js) - Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag}');
          `,
        }}
      />
    </Head>
  );
};
export default Header;