import React from "react";

import MovieFilters from "../../Containers/SideBar/FiltersList";
import SomeBlock from "./SomeBlock";



import "./SideBar.css";

const Sidebar = () => {
    return (
        <div className="page__sidebar">
          <MovieFilters />
          <SomeBlock />
        </div>
    )
}

export default Sidebar;