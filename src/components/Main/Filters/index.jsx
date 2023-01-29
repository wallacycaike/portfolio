import { useState } from "react";
import { FiltersContent } from "../FiltersContent";
import { FiltersSections } from "../FiltersSections";

import "./styles.scss";

export const Filters = () => {
  const [tabActive, setTabActive] = useState("projects");

  const clickOnFilter = (tabActive) => {
    setTabActive(tabActive);
  };

  return (
    <section className="filters container">
      <FiltersContent clickOnFilter={clickOnFilter} tabActive={tabActive} />
      <FiltersSections tabActive={tabActive} />
    </section>
  );
};
