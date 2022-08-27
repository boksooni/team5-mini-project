import React from "react";
import Card from "../../components/UI/Card";
import { DUMMY_DATA } from "../../utils/constants";

function AllProductPage() {
  return (
    <>
      {DUMMY_DATA.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </>
  );
}

export default AllProductPage;
