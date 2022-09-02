import React from "react";
import Card from "../../components/UI/Card";
import NavBar from "../../components/NavBar";
import { DUMMY_DATA } from "../../utils/constants";
import styled from "styled-components";

const TitleArea = styled.div`
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 20rem;
`;

function PromotionPage() {
  return  (
    <>
    <TitleArea>
      <h2>
        프로모션
      </h2>
    </TitleArea>

    <div>
      {DUMMY_DATA.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </div>
    <NavBar />
    </>
    )
}

export default PromotionPage;
