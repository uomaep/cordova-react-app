import Head from "next/head";

const Main = ({ children, router }) => {
  return (
    <div className="box-content">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Daewon Lim - Homepage</title>
      </Head>

      <div className="container max-w-full pt-14">{children}</div>
    </div>
  );
};

export default Main;
