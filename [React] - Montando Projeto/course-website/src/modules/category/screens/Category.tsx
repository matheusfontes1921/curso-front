import Screen from "../../../shared/screen/Screen";
import { useCategory } from "../hooks/useCategory";

const Category = () => {
  const { categories } = useCategory();
  return (
    <Screen>
      <div>Categoria</div>
      {categories.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </Screen>
  );
};
export default Category;
