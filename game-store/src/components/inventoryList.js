import { FaTrash,FaEdit,FaPlusSquare,FaKey } from 'react-icons/fa';

const InventoryList = () => {
  return (
    <div className="overflow-x-auto mx-8">
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal flex ">
  <button className="flex-1 btn btn-success">Add new listing <FaPlusSquare/></button>
  <button className="flex-1 btn btn-secondary">Add new standalone key <FaKey/></button>
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
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
            <th>
              <button className="btn btn-square bg-error">
                <FaTrash color="white"/>
              </button>
              <button className="btn btn-square bg-info">
                <FaEdit color="white"/>
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default InventoryList;
