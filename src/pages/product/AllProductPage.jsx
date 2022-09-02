import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../components/UI/Card";
import styled from "styled-components";
import SearchInput from "../../components/SearchInput";
import Filter from "../../components/Filter";

import { getAllProduct } from "../../store/slices/all-product-slice";

import { DUMMY_DATA } from "../../utils/constants";
import { shownProductActions } from "../../store/slices/shown-product-slice";

const TitleArea = styled.div`
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 20rem;
  font-size: 18px;
`;

function AllProductPage() {
  const dispatch = useDispatch();

  const isSearched = useSelector((state) => {
    return state.shownProduct.isSearched;
  });

  const allProducts = useSelector((state) => {
    return state.allProduct.data;
  });

  const shownAllProduct = useSelector((state) => {
    return state.shownProduct.allData;
  });

  const shownSearchedProduct = useSelector((state) => {
    return state.shownProduct.searchedData;
  });

  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(shownProductActions.updateShownAllProduct(DUMMY_DATA));
  }, []);

  return (
    <div>
      <div>
        <SearchInput />
        <TitleArea>
          {isSearched ? <h2>검색상품</h2> : <h2>전체상품</h2>}
        </TitleArea>
        <Filter />
        {isSearched
          ? shownSearchedProduct.map((item) => (
              <Card key={item.id} product={item} />
            ))
          : shownAllProduct.map((item) => (
              <Card key={item.id} product={item} />
            ))}
      </div>
    </div>
  );
}

export default AllProductPage;
