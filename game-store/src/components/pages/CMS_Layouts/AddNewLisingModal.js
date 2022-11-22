import { FaPlusSquare } from "react-icons/fa";
import { useEffect, useState } from "react";

const TagList = ({size}) => {
  return [...Array(size)].map((e, i) => <input
  type="text"
  placeholder="Enter tag name"
  class="input input-bordered input-primary w-40 max-w-xs"
/>)
};

const NewItemModal = () => {
  const [tagsCount, setTagsCount] = useState(1);
  return (
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box justify-start">
        <div class="text-left">
          <h3 class="font-bold text-lg mb-2">Add new item:</h3>
          <p class="py-1">Item name:</p>
          <input
            type="text"
            placeholder="Enter item name"
            class="input input-bordered input-primary w-full max-w-xs"
          />
          <p class="py-1 pt-3">Item description:</p>
          <textarea
            class="textarea textarea-primary w-full max-w-xs"
            placeholder="Bio"
          ></textarea>
          <p class="py-1 pt-3">Item tags:</p>
          <div className="flex flex-nowrap overflow-auto gap-4">
          <TagList size={tagsCount}/>
          </div>
          <button
            class="btn gap-2 mt-2 btn-success"
            onClick={() => setTagsCount(tagsCount + 1)}
          >
            Add new tag
            <FaPlusSquare />
          </button>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewItemModal;
