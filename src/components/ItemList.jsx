const CDN_URL2 =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between"
          >
            <div>
              <span className=" flex flex-wrap text-lg">
                {item?.card?.info?.name}
              </span>
              <span className="py-4 text-lg">
                Rs
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
              <p className="flex flex-wrap py-5">
                {item?.card?.info?.description}
              </p>
            </div>
            <img
              className="pl-5 w-52"
              src={`${CDN_URL2}${item?.card?.info?.imageId}`}
            ></img>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
