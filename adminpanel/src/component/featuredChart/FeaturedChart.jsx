import React from "react";
import "./featuredChart.scss";

//icon imported from material UI
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// importing progress bar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const FeaturedChart = () => {
  const percentage = 66;
  return (
    <div className="featuredChart">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredBar">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={5}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transaction processing.Last payment may not included
        </p>

        <div className="summary">
          <div className="item ">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>

          <div className="item ">
            <div className="itemTitle ">Last week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>

          <div className="item ">
            <div className="itemTitle ">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedChart;
