import Head from 'next/head';

const Header = props => {
  let title = "";
  if (props.title)
    title = props.title + " - ";
  title += "Ayaan Siddiqui";


  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/custom.css" />
      <link rel="stylesheet" href="/icons/flaticon.css" />

      { props.children}

      <script src="/js/jquery-3.5.1.slim.min.js"></script>
      <script src="/js/popper.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>
    </Head>
  );
};
export default Header;