import React, { useState } from "react";
import Products from "../Components/Products";
import { FilterBtn, ShopDiv } from "../Style/styles";

const Shop = () => {
  const [filter, setFilter] = useState(["Gold", "Silver", "Black"]);

const isActivated = (colors) => {
    if( JSON.stringify(filter) === JSON.stringify(colors)){
        return true;
    } else {
        return false;
    }
}
  return (
    <ShopDiv>
      <div className="filterBar">
        <FilterBtn activated={isActivated(["Gold", "Silver", "Black"])} onClick={() => setFilter(["Gold", "Silver", "Black"])}>All</FilterBtn>
        <FilterBtn activated={isActivated(["Gold"])} onClick={() => setFilter(["Gold"])}>Gold</FilterBtn>
        <FilterBtn activated={isActivated(["Silver"])} onClick={() => setFilter(["Silver"])}>Silver</FilterBtn>
        <FilterBtn activated={isActivated(["Black"])} onClick={() => setFilter(["Black"])}>Black</FilterBtn>
      </div>
      <Products filter={filter} />
    </ShopDiv>
  );
};

export default Shop;
