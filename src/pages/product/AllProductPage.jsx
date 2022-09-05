import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../components/UI/Card";
import SearchInput from "../../components/UI/SearchInput";
import Filter from "../../components/UI/Filter";
import Loading from "../../components/UI/Loading";

import { getAllProduct } from "../../store/slices/all-product-slice";

import { DUMMY_DATA } from "../../utils/constants";
import { shownProductActions } from "../../store/slices/shown-product-slice";

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

  const allProductIsLoading = useSelector((state) => {
    return state.allProduct.isLoding;
  });

  const searchedProductIsLoading = useSelector((state) => {
    return state.searchedProduct.isLoading;
  });

  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(shownProductActions.updateShownAllProduct(allProducts));
  }, [dispatch]);

  return (
    <div>
      <div>
        <SearchInput />

        {isSearched ? <h2>검색상품</h2> : <h2>전체상품</h2>}

        <Filter />
        {isSearched ? (
          searchedProductIsLoading ? (
            <Loading />
          ) : (
            shownSearchedProduct.map((item) => (
              <Card key={item.id} product={item} />
            ))
          )
        ) : allProductIsLoading ? (
          <Loading />
        ) : shownAllProduct.length === 0 ? (
          "직업을 선택해주세요"
        ) : (
          shownAllProduct.map((item) => <Card key={item.id} product={item} />)
        )}
      </div>
    </div>
  );
}

export default AllProductPage;
