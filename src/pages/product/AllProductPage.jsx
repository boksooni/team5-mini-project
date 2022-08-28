import React from "react";
import { useState } from "react";

import Card from "../../components/UI/Card";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import SearchedProduct from "./SearchedProduct";

import { DUMMY_DATA } from "../../utils/constants";

import { GoSearch } from "react-icons/go";

const SearchForm = styled.form`
  ${(props) => props.theme.common.flexCenter}
  width: 20rem;
  margin: 1rem auto;
  margin-bottom: 3rem;
`;

const SearchBar = styled.input`
  width: 85%;
  padding: 0.7rem;
  font-size: 18px;
  margin-right: 0.7rem;
  border: solid 2px #6b23e0;
  border-radius: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const TitleArea = styled.div`
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 20rem;
`;

function AllProductPage() {
  const [isSearched, setIsSearched] = useState(false);

  const searchHandler = (e) => {
    e.preventDefault();
    setIsSearched(true);
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
        />
        <button style={{ border: "none" }}>
          <GoSearch size="2rem" color="#6b23e0" cursor="pointer" />
        </button>
      </SearchForm>

      {isSearched ? (
        <div>
          <TitleArea>
            <h3>검색상품</h3>
          </TitleArea>
          <SearchedProduct />
        </div>
      ) : (
        <div>
          <TitleArea>
            <h3>전체상품</h3>
          </TitleArea>
          {DUMMY_DATA.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      )}

      <NavBar />
    </div>
  );
}

export default AllProductPage;
