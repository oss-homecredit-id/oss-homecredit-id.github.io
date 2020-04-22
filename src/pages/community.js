import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Home = () => {
  const context = useDocusaurusContext();
  const {
    siteConfig = {
      usePrism: ["jsx"],
    },
  } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <h1>Mantap</h1>
      </main>
    </Layout>
  );
};

export default Home;
