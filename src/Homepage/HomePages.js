import React, { useEffect, useState } from "react";

import Homes from "../Components/homes/Homes";
import Latest from "../Components/Latest/Latest";
import Trending from "../Components/Trending/Trending";

import Upcoming from "../Components/Upcoming/Upcoming";
import { recommended, upcome } from "../dummyData";
import { latest } from "../dummyData";
import { trending } from "../dummyData";
const HomePages = () => {
  const [items, setitems] = useState(upcome);
  const [latestitems, setLatestitems] = useState(latest);
  const [trend, setTrend] = useState(trending);
  const [rec, setRec] = useState(recommended);
  return (
    <>
      <div className="HomePage">
        <Homes />
      </div>
      <Upcoming Title="Upcoming Movies" items={items} />

      <Latest title={"Latest:"} items={latestitems} />
      <Trending title={"Trending:"} items={trending} />
      <div style={{ marginTop: "-130px" }}>
        <Upcoming Title="Recommended Movies" items={rec} />
      </div>
    </>
  );
};

export default HomePages;
