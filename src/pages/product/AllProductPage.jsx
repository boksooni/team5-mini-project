import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//components
import Card from "../../components/UI/Card";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import styled from "styled-components";

//store-function
import { getAllProduct } from "../../store/slices/all-product-slice";
import { getSearchedProduct } from "../../store/slices/searched-product-slice";

import { DUMMY_DATA } from "../../utils/constants";

import { GoSearch } from "react-icons/go";
import { FaFilter } from "react-icons/fa";

import theme from "../../styles/theme";

const mainColor = theme.palette.purple;

//styled-components
const SearchForm = styled.form`
  ${(props) => props.theme.common.flexCenter}
  width: 20rem;
  margin: 1rem auto;
  margin-bottom: 2rem;
`;

const SearchBar = styled.input`
  width: 85%;
  padding: 0.7rem;
  font-size: 18px;
  margin-right: 0.7rem;
  border: solid 2px ${mainColor};
  border-radius: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const TitleArea = styled.div`
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 20rem;
  font-size: 18px;
`;

const FilterArea = styled.form`
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 20rem;
`;

const SelectBox = styled.select`
  border-radius: 4px;
  border: 1.8px solid ${mainColor};
  height: 1.5rem;
  margin: 0.2rem;
  font-size: 13px;
`;

const SelectOption = styled.option`
  background: ${mainColor};
`;

const Button = styled.button`
  background: ${mainColor};
  height: 1.6rem;
  border-radius: 4px;
  margin: 0.2rem;
  font-size: 13px;
  color: white;
  padding: 0.23rem 0.5rem;
`;

//main
function AllProductPage() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(null);
  const [isSearched, setIsSearched] = useState(false);
  const [products, setProducts] = useState([]);
  const [amountFilter, setAmountFilter] = useState(false);
  const [interestRateFilter, setInterestRateFilter] = useState(false);

  const allProducts = useSelector((state) => {
    return state.allProduct.data;
  });

  const searchedProducts = useSelector((state) => {
    return state.searchedProduct.data;
  });

  useEffect(() => {
    dispatch(getAllProduct());
    setProducts(DUMMY_DATA);
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    setIsSearched(true);
    dispatch(getSearchedProduct(inputValue));
    setProducts(searchedProducts);
  };

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const jobFilterChangeHandler = (e) => {
    if (isSearched) {
      setProducts(
        searchedProducts.filter((product) => e.target.value === product.job)
      );
    } else {
      if (e.target.value === "all") {
        setProducts(DUMMY_DATA);
      } else {
        setProducts(
          DUMMY_DATA.filter((product) => e.target.value === product.job)
        );
      }
    }
  };

  const amountFilterChangeHandler = (e) => {
    e.preventDefault();
    setAmountFilter(!amountFilter);
    amountFilter
      ? setProducts(products.sort((a, b) => b.amount - a.amount))
      : setProducts(products.sort((a, b) => a.amount - b.amount));
  };

  const interestRateFilterChangeHandler = (e) => {
    e.preventDefault();
    setInterestRateFilter(!interestRateFilter);
    interestRateFilter
      ? setProducts(products.sort((a, b) => b.interestRate - a.interestRate))
      : setProducts(products.sort((a, b) => a.interestRate - b.interestRate));
  };

  return (
    <div>
      <Header />
      <TitleArea>
        <h2>상품검색</h2>
      </TitleArea>
      <SearchForm onSubmit={searchHandler}>
        <SearchBar
          type="text"
          name="searchValue"
          placeholder="원하시는 상품을 검색하세요"
          onChange={inputValueHandler}
        />
        <button style={{ border: "none" }}>
          <GoSearch size="2rem" color="#6b23e0" cursor="pointer" />
        </button>
      </SearchForm>

      <div>
        <TitleArea>
          {isSearched ? <h2>검색상품</h2> : <h2>전체상품</h2>}
        </TitleArea>
        <FilterArea>
          <FaFilter size=".9rem" />
          <span style={{ margin: "2px" }}>필터</span>

          <SelectBox
            id="job"
            onChange={(e) => {
              jobFilterChangeHandler(e);
            }}
          >
            <SelectOption value="all">직업</SelectOption>
            <SelectOption value="직장인">직장인</SelectOption>
            <SelectOption value="학생">학생</SelectOption>
            <SelectOption value="프리랜서">프리랜서</SelectOption>
            <SelectOption value="무직">무직</SelectOption>
          </SelectBox>

          <Button onClick={amountFilterChangeHandler}>
            {amountFilter ? "금액 높은순" : "금액 낮은순"}
          </Button>
          <Button onClick={interestRateFilterChangeHandler}>
            {interestRateFilter ? "금리 높은순" : "금리 낮은순"}
          </Button>
        </FilterArea>
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>

      <NavBar />
    </div>
  );
}

export default AllProductPage;
