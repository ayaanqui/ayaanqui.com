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

      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5BJB4Z9');
          `,
        }}
      />
    </Head>
  );
};
export default Header;