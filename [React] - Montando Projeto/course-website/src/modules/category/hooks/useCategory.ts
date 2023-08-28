import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useEffect, useState } from "react";
import { useRequests } from "../../../shared/hooks/useRequests";
import {URL_CATEGORIES, URL_CATEGORIES_ID} from "../../../shared/constants/urls";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import {useCategoryReducer} from "../../../store/reducers/categoryReducer/useCategoryReducer";
import {CategoryRoutesEnum} from "../routes";
import {useNavigate} from "react-router-dom";

export const useCategory = () => {
  const { categories, setCategories } = useCategoryReducer();
  const [categoryIdDelete setCategoryIdDelete] = useState<number | undefined>()
  const [categoriesFilter, setCategoriesFilter] = useState(categories);
  const { request } = useRequests();
  const navigate = useNavigate();
  const handleOnChangeSearch = (value: string) => {
    if (!value) {
      setCategoriesFilter([...categories]);
    } else {
      setCategoriesFilter([
        ...categoriesFilter.filter((category) => category.name.toUpperCase().includes(value.toUpperCase())),
      ]);
    }
  };
  const handleOnClickCategory = () => {
    navigate(CategoryRoutesEnum.CATEGORY_INSERT);
  };
  useEffect(() => {
    if (!categories || categories.length === 0) {
      request(URL_CATEGORIES, MethodsEnum.GET, setCategories);
    }
  }, []);
  useEffect(() => {
    setCategoriesFilter(categories);
  }, [categories]);
  const handleOpenModalDelete = (categoryId: number) => {
    setCategoryIdDelete(categoryId);
  }
  const handleCloseModalDelete = () => {
    setCategoryIdDelete(undefined)
  }
  const handleConfirmDeleteCategory = async () => {
    await request(URL_CATEGORIES_ID.replace("{categoryId}",`${categoryIdDelete}`),MethodsEnum.DELETE, undefined, undefined, "Categoria deletada com sucesso!");
    request(URL_CATEGORIES, MethodsEnum.GET, setCategories);]
    setCategoryIdDelete(undefined);
  }
  return {
    categories: categoriesFilter,
    handleOnChangeSearch,
    handleOnClickCategory,
    openModalDelete: !!categoryIdDelete,
    handleCloseModalDelete,
    handleOpenModalDelete,
    handleConfirmDeleteCategory,
  };
};
