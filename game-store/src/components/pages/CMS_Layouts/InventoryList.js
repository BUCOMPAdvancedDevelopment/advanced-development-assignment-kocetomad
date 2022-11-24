import { FaTrash, FaEdit, FaPlusSquare, FaKey } from "react-icons/fa";
import NewItemModal from "./AddNewLisingModal";
import { getAllItems } from "../../../db/supabase";
import React, { useEffect, useState } from "react";
import replaceAll from "../../Util";

const InventoryList = () => {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    getAllItems().then((value) => setProductList(value));
  }, []);

  const ItemsList = ({list}) => {
    //console.log("state ", state)
    if (list !== null) {
      return list.map((item, index) => <tr>
      <th>{index}</th>
      <td>{replaceAll(item.item_name,"_"," ")}</td>
      <td>Tax Accountant</td>
      <td>Red</td>
      <th>
        <button className="btn btn-square bg-error">
          <FaTrash color="white" />
        </button>
        <button className="btn btn-square bg-info">
          <FaEdit color="white" />
        </button>
      </th>
    </tr>);
    } else {
      console.log("not loaded");
      return <div>Loading...</div>;
    }
  };

  return (
    <div className="overflow-x-auto mx-8">
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <NewItemModal />

      <div className="btn-group btn-group-vertical lg:btn-group-horizontal flex ">
        <label for="my-modal-3" class="flex-1 btn btn-success">
          Add new listing <FaPlusSquare />
        </label>
        <label for="my-modal-3" class="flex-1 btn btn-secondary rounded-t-lg">
          Add new standalone key <FaKey />
        </label>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        <ItemsList list={productList}/>
        </tbody>
      </table>
    </div>
  );
};
export default InventoryList;
