
import { FaCartPlus } from 'react-icons/fa';

const StoreCard = () => {
  return (
    <div className="flex-none card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="flex gap-2">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <p className="flex text text-left">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="flex">
          <p className="font-bold text-4xl text-accent text-left">60£</p>
          <div className="btn-group">
            <button className="btn btn-active">Button</button>
            <button className="btn"><FaCartPlus size={20}/></button>
          </div>
        </div>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default StoreCard;
