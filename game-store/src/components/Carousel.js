import React, { useEffect, useState } from "react";
import { auth, db, logout } from "./Firebase";
import { getAllItems } from "../db/supabase";

const Carousel = () => {
  const [carousel, loadCarousel] = useState(null);

  useEffect(() => {
    getAllItems().then((value) => loadCarousel(value));
  }, []);

  const MapHotItems = () => {
    //console.log("state ", state)
    console.log("carousel", carousel);
    if (carousel !== null) {
      return carousel.map((item, index) => (
        <div id={"item" + (index + 2)} className="carousel-item w-full">
          <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
              <img
                src="https://static.techspot.com/images2/news/bigimage/2022/04/2022-04-27-image-10.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div className="relative h-min">
                <h1 className="text-5xl font-bold position">
                  {item.item_name}
                </h1>
                <p className="mt-6 text-left">{item.item_description}</p>
                <p className="font-bold text-3xl text-accent text-left absolute bottom-0 left-0">
                  {item.item_price}£
                </p>
                <button className="btn btn-primary float-right ">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      ));
    } else {
      console.log("not loaded");
      return <div>Loading...</div>;
    }

    // return (
    //     <div id="" className="carousel-item w-full">
    //
    //     </div>
    //     )
  };

  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://placeimg.com/260/400/arch"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>

        <MapHotItems />
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Carousel;
