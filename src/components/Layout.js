import React from "react";
import layoutStyles from "./Layout.module.css";

const PageLayout = (props) => {
  const { pageTitle, stack } = props;
  return <div className={layoutStyles.page}>{pageTitle}}</div>;
};

export { PageLayout };
