import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useEffect } from "react";
import { useRequests } from "../../../shared/hooks/useRequests";
import { URL_CATEGORIES } from "../../../shared/constants/urls";
import { MethodsEnum } from "../../../shared/enums/methods.enum";

export const useCategory = () => {
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();
  useEffect(() => {
    if (!categories || categories.length === 0) {
      request(URL_CATEGORIES, MethodsEnum.GET, setCategories);
    }
  }, []);
  return {
      categories,
  }
};
