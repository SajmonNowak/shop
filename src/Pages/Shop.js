import React, { useState } from "react";
import Products from "../Components/Products";
import { FilterBtn, ShopDiv } from "../Style/styles";

const Shop = (props) => {
  const giveFilter = () => {
    if (props.location.state !== undefined) {
      return [props.location.state.filter];
    } else {
      return ["Gold", "Silver", "Black"];
    }
  };

  const [filter, setFilter] = useState(giveFilter());

  const isActivated = (colors) => {
    if (JSON.stringify(filter) === JSON.stringify(colors)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <ShopDiv>
      <div>
        <h2 className="shopHeading">Explore our Chains</h2>
      </div>
      <div className="filterBar">
        <FilterBtn
          activated={isActivated(["Gold", "Silver", "Black"])}
          onClick={() => setFilter(["Gold", "Silver", "Black"])}
        >
          All
        </FilterBtn>
        <FilterBtn
          activated={isActivated(["Gold"])}
          onClick={() => setFilter(["Gold"])}
        >
          Gold
        </FilterBtn>
        <FilterBtn
          activated={isActivated(["Silver"])}
          onClick={() => setFilter(["Silver"])}
        >
          Silver
        </FilterBtn>
        <FilterBtn
          activated={isActivated(["Black"])}
          onClick={() => setFilter(["Black"])}
        >
          Black
        </FilterBtn>
      </div>
      <div className="productsContainer">
        <Products filter={filter} />
      </div>
    </ShopDiv>
  );
};

export default Shop;
