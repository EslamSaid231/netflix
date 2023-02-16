import React, { useState } from "react";
import Home from "../homes/Home";
import { trending } from "../../dummyData";
import "./Trending.css";
import { Link } from "react-router-dom";
const Trending = ({ title }) => {
  const [items, setitems] = useState(trending);
  return (
    <>
      <section className="trending">
        <div className="Container">
          <div className="heading flexSB">
            <h1>{title}</h1>
            <Link to="/">View All</Link>
          </div>
          <div className="Trends">
            <Home items={items} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Trending;

/* <div className="trendingContainer">
        <div className="container">
          <div className="heading flexSB">
            <h1>{title}</h1>
            <Link to="/">View All</Link>
          </div>
          <div className="content">
            <Slider {...settings}>
              {items.map((item) => (
                <TCard key={item.id} item={item} />
              ))}
            </Slider>
            <div className="margin"></div>
          </div>
        </div>
      </div>*/
