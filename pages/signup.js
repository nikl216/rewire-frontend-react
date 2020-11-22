import Banner from "../components/banner";
import { bannerOne, bannerTwo } from "../components/data";
import Layout from "../components/Layout/template";

export default function SingUp() {
  return (
    <>
      <Layout />
      <Banner {...bannerOne} />
      <Banner {...bannerOne} />
    </>
  );
}
