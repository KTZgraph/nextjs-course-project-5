import "../styles/globals.css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* teraz poniższy komponent bedzie użyty jako child w komponencie Layout */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
