import React from "react";

import Categories from "./Categories";
import RateChart from "./RateChart";
import SectionList from "./SectionList";
import ItemsLengthChoice from "./ItemsLengthChoice";

const Sidebar = () => {
    return (
        <div className="sidebar">
          <Categories />
          <RateChart />
          <SectionList />
          <SectionList />
          <SectionList />
          <ItemsLengthChoice />
        </div>
    )
}

export default Sidebar;