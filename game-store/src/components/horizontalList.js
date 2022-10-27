import StoreCard from "./storeCard";

const HorizontalList = () => {
  return (
    <div className="flex flex-nowrap overflow-auto gap-4">
      <StoreCard/>
      <StoreCard/>
      <StoreCard/>
      <StoreCard/>
      <StoreCard/>
    </div>
  );
};

export default HorizontalList;