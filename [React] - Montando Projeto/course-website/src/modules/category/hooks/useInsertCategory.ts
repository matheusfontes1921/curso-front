import { useEffect, useState } from "react";
import { useRequests } from "../../../shared/hooks/useRequests";
import {URL_CATEGORIES, URL_CATEGORIES_ID} from "../../../shared/constants/urls";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import {useNavigate, useParams} from "react-router-dom";
import { CategoryRoutesEnum } from "../routes";
import { useCategoryReducer } from "../../../store/reducers/categoryReducer/useCategoryReducer";

export const useInsertCategory = () => {
  const {categoryId} = useParams<{categoryId: string}>()
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const { request, loading } = useRequests();
  const { setCategories, category, setCategory } = useCategoryReducer();
  const navigate = useNavigate();
  const insertCategory = async () => {
    if (categoryId) {
      await request( URL_CATEGORIES_ID.replace("{categoryId}", `${categoryId}`), MethodsEnum.PUT, undefined, { name });
    } else {
      await request(URL_CATEGORIES, MethodsEnum.POST, undefined, { name });
    }
    await request(URL_CATEGORIES, MethodsEnum.GET, setCategories);
    setLoading(false);
    navigate(CategoryRoutesEnum.CATEGORY);
  };
  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  useEffect(() => {
    if (category) {
      setName(category.name);
    }
  },[category])
  useEffect(() => {
    if (!name) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [name]);
  useEffect(() => {
    if (categoryId) {
      request(
        URL_CATEGORIES_ID.replace("{categoryId}", `${categoryId}`),
        MethodsEnum.GET,
        setCategory,
      );
    } else {
      setName("");
    }
  },[categoryId])
  return {
    name,
    categoryId,
    disabledButton,
    handleOnChangeName,
    insertCategory,
    loading,
  };
};
