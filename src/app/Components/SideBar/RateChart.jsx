import React, {useState} from "react";

const RateChart = ({type = "meta"}) => {

    const [rangeValue, setRangeValue ] = useState(""); 

    const [min, max] = type === "meta" ? [0, 100] : [0, 10];

    return (
        <div className={`sidebar__${type}-chart`}>
          <div className="sidebar__graph"></div>
          <div>
              <label htmlFor="rate-range"></label>
              <input 
                type="range"
                className="form-control sidebar__range-control"
                value={rangeValue}
                min={min}
                max={max}
                onChange={(e) => setRangeValue(e.target.value)}
              />
          </div>
        </div>
    )
}

export default RateChart;