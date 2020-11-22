import Layout from "../components/Layout/template";
import { bannerOne, bannerTwo } from "../components/data";
import Banner from "../components/banner";
import Pricing from "../components/pricing";
import Footer from "../components/Layout/Footer";
export default function App() {
  return (
    <>
      <Layout />

      <Banner {...bannerOne} />
      <Banner {...bannerTwo} />
      <Pricing color="#bfb5d7" />
      <Footer />
    </>
  );
}
