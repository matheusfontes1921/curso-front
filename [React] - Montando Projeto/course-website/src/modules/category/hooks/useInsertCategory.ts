import {useEffect, useState} from "react";
import {useRequests} from "../../../shared/hooks/useRequests";
import {URL_CATEGORIES} from "../../../shared/constants/urls";
import {MethodsEnum} from "../../../shared/enums/methods.enum";
import {useDataContext} from "../../../shared/hooks/useDataContext";
import {useNavigate} from "react-router-dom";
import {CategoryRoutesEnum} from "../routes";
import {useCategoryReducer} from "../../../store/reducers/categoryReducer/useCategoryReducer";

export const useInsertCategory = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const { request } = useRequests();
  const { setCategories } = useCategoryReducer();
  const navigate = useNavigate();
  const insertCategory = async () => {
    setLoading(true);
    await request(URL_CATEGORIES, MethodsEnum.POST, undefined, { name });
    await request(URL_CATEGORIES, MethodsEnum.GET, setCategories);
    setLoading(false);
    navigate(CategoryRoutesEnum.CATEGORY);
  };
  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  useEffect(() => {
        if (!name) {
            setDisabledButton(true);
        } else {
            setDisabledButton(false);
        }
  }, [name])
  return {
    name,
    disabledButton,
    handleOnChangeName,
    insertCategory,
    loading,
  };
};
