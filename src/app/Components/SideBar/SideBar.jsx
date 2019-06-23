import React from "react";

import Categories from "../../Containers/CategoriesContainer";
import RateChart from "./RateChart";
import SectionList from "./SectionList";


const Sidebar = () => {
    return (
        <div className="sidebar">
          <Categories />
          <RateChart />
          <SectionList />
          <SectionList />
          <SectionList />
        </div>
    )
}

export default Sidebar;