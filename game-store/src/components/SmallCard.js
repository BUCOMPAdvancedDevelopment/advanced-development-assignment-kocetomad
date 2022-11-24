import { FaCartPlus } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import replaceAll from "./Util";

const SmallCard = ({item}) => {
  const [Badge, setBadge] = useState(null)
  useEffect(() => {
    setBadge(item.item_tags)
  }, [])
  
  
  const Badges = () => {
    if (Badge !== null) {
      return Badge.map((item) => <div className="badge badge-outline">{item}</div>);
    } else {
      console.log("not loaded");
      return <div>Loading...</div>;
    }
  }

  return (
    <div className="flex card md:w-64 w-full bg-base-200 shadow-xl">
      <p className="bg-primary absolute top-40 mt-16 h-8 px-2 pt-1">
        <h2 className="card-title alig n-middle text-white">{item.item_price}£</h2>
      </p>
      <figure className="h-64 bg-white">
        <img
          src={'https://cmuvgvtjeycdnzjdufpa.supabase.co/storage/v1/object/public/item.imgs/' + item.item_name + "/thumbnails/1"}
          alt={'https://cmuvgvtjeycdnzjdufpa.supabase.co/storage/v1/object/public/item.imgs/' + item.item_name + "/thumbnails/1"}
          className="object-cover h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm ">
        {replaceAll(item.item_name,"_"," ")}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="flex gap-1">
          <Badges/>
        </div>
        <div className="flex bottom-5 justify-self-end mt-auto">
          <div className="btn-group mt-4">
            <button className="btn btn-active w-full">Button</button>
            <button className="btn ">
              <FaCartPlus size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
