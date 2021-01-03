import { Layout } from "../components/Layout";
import dynamic from "next/dynamic";
import Home from "../components/Home";

// kohost.io
// eleken.co

const IndexPage = () => {
  //make nextjs see `window`
  const Navbar = dynamic(
    () => {
      return import("../components/Navbar");
    },
    { ssr: false }
  );

  return (
    <Layout title="Home | Filip Litwora">
      <div className="min-h-screen text-text-secondary bg-color-1">
        <Navbar />
        <Home />
      </div>
    </Layout>
  );
};

export default IndexPage;
