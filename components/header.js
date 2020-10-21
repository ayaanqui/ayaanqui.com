import Head from 'next/head';

const Header = props => {
  let title = "";
  if (props.title)
    title = props.title + " - ";
  title += "Ayaan Siddiqui v2";


  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/custom.css" />

      { props.children}
    </Head>
  );
};
export default Header;