import { useAppSelector } from "../../hooks";
import { CategoryType } from "../../../shared/types/CategoryType";
import { setCategoriesAction, setCategoryAction } from "./index";

export const useCategoryReducer = () => {
  const dispatch = useDispatch();
  const { categories, category } = useAppSelector((state) => state.categoryReducer);
  const setCategories = (currentCategories: CategoryType[]) => {
    dispatch(setCategoriesAction(currentCategories));
  };
  const setCategory = (currentCategory: CategoryType) => {
    dispatch(setCategoryAction(currentCategory));
  };
  return {
    categories,
    setCategories,
    category,
    setCategory,
  };
};
