import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import styled from "styled-components";
import axios from "axios";

const HomepageContainer = styled.div`
  width: 100%;
  position: relative;
`;
const HomepageLogo = styled.div`
  width: 230px;
  height: 260px;
  background-color: #8a9cf9;

  display: block;
  margin: 10% auto;
`;
const HomepageButton = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function HomePage() {
  const navigate = useNavigate();

  return (
    <HomepageContainer>
      <HomepageLogo></HomepageLogo>
      <HomepageButton>
        <Button onClick={() => navigate("/login")} />
      </HomepageButton>
      <HomepageButton>
        <Button onClick={() => navigate("/signup")} />
      </HomepageButton>
    </HomepageContainer>
  );
}

export default HomePage;
