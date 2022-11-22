import SmallCard from "./SmallCard";

const VerticalList = () => {
  return (
    <div className="flex flex-wrap overflow-auto gap-4 ">
      <SmallCard/>
      <SmallCard/>
      <SmallCard/>
      <SmallCard/>
      <SmallCard/>
    </div>
  );
};

export default VerticalList;