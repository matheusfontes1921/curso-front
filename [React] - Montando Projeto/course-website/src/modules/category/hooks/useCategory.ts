import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useEffect, useState } from "react";
import { useRequests } from "../../../shared/hooks/useRequests";
import { URL_CATEGORIES } from "../../../shared/constants/urls";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import {useCategoryReducer} from "../../../store/reducers/categoryReducer/useCategoryReducer";

export const useCategory = () => {
  const { categories, setCategories } = useCategoryReducer();
  const [categoriesFilter, setCategoriesFilter] = useState(categories);
  const { request } = useRequests();
  const handleOnChangeSearch = (value: string) => {
    if (!value) {
      setCategoriesFilter([...categories]);
    } else {
      setCategoriesFilter([
        ...categoriesFilter.filter((category) => category.name.toUpperCase().includes(value.toUpperCase())),
      ]);
    }
  };
  useEffect(() => {
    if (!categories || categories.length === 0) {
      request(URL_CATEGORIES, MethodsEnum.GET, setCategories);
    }
  }, []);
  useEffect(() => {
    setCategoriesFilter(categories);
  }, [categories]);
  return {
    categories,
    handleOnChangeSearch,
  };
};
