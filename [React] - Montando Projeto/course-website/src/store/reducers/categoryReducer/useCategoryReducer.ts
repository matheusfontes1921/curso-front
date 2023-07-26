import {useAppSelector} from "../../hooks";
import {CategoryType} from "../../../shared/types/CategoryType";
import {setCategoriesAction} from "./index";

export const useCategoryReducer = () => {
    const dispatch = useDispatch();
    const {categories} = useAppSelector((state) => state.categoryReducer)
    const setCategories = (currentCategories: CategoryType[]) => {
        dispatch(setCategoriesAction(currentCategories));
    }
    return {
        categories,
        setCategories,
    }
}