import { DUMMY_DATA } from "../../utils/constants";
import Card from "../../components/UI/Card";

const SearchedProduct = () => {
  return (
    <div>
      <div>filtering area</div>
      {DUMMY_DATA.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </div>
  );
};

export default SearchedProduct;
