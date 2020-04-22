import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Hybrid Applications</>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>We build application that enable business to do awesome things</>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by Open Source</>,
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F4e%2FOpen_Source_Initiative_keyhole.svg%2F1200px-Open_Source_Initiative_keyhole.svg.png&f=1&nofb=1",
    description: (
      <>
        Our applications are built with the help of open source platform and
        community.
      </>
    ),
  },
];

const Feature = ({ imageUrl, title, description }) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Home = () => {
  const context = useDocusaurusContext();
  const {
    siteConfig = {
      usePrism: ["jsx", "dart"],
    },
  } = context;
  console.log(siteConfig);
  return (
    <Layout
      title={`Hello from Home Credit Indonesia`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img src="img/hcid_logo_1.png" alt="Home Credit Logo" height="60" />
          <h4>Hybrid Applications Engineering</h4>
          <p>
            We build multi platform applications using latest and greatest
            technologies.
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(styles.heroButton)}
              to={useBaseUrl("docs/doc1")}
            >
              <div>Get Started</div>
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
};

export default Home;
