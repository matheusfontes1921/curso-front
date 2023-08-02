import { useAppSelector } from "../../hooks";
import { ProductType } from "../../../shared/types/ProductType";
import {setProductsAction, setUsersAction} from "./index";
import {UserType} from "../../../shared/types/UserType";

export const useUserReducer = () => {
  const { users } = useAppSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const setUsers = (users: UserType[]) => {
    dispatch(setUsersAction(users));
  };
  return {
    users,
    setUsers,
  };
};
