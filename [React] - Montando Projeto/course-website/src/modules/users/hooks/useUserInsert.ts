import { useNavigate } from "react-router-dom";
import { UserRoutesEnum } from "../routes";
import {useEffect, useState} from "react";
import { InsertUser } from "../../../shared/dtos/InsertUser.dto";
import {useRequests} from "../../../shared/hooks/useRequests";
import {MethodsEnum} from "../../../shared/enums/methods.enum";
import {URL_USER} from "../../../shared/constants/urls";

export const useUserInsert = () => {
  const navigate = useNavigate();
  const {request, loading} = useRequests();
  const [disabledButton, setDisableButton] = useState(true);
  const [user, setUser] = useState<InsertUser>({
    name: " ",
    phone: "",
    email: "",
    cpf: "",
    password: "",
  });
  useEffect(() => {
    if(user.cpf && user.phone && user.email && user.password && user.name) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  },[user])
  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
      setUser((currentUser) => ({
        ...currentUser,
        [name]: event.target.value,
      }));
  };
  const handleCancelInsert = () => {
    navigate(UserRoutesEnum.USER_ALL);
  };
  const handleInsertAdmin = async () => {
    const result = await request(URL_USER, MethodsEnum.POST,undefined, user);
    if (result) {
      navigate(UserRoutesEnum.USER_ALL);
    }
  };
  return {
    user,
    handleCancelInsert,
    handleInsertAdmin,
    loading,
      handleOnChangeInput,
    disabledButton,
  };
};
