import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "./useGlobalContext";
import { connectionAPIPost } from "../functions/connection/connectionAPI";
import { URL_AUTH } from "../constants/urls";
import {ERROR_INVALID_PASSWORD} from "../constants/errorStatus";
import {useNavigate} from "react-router-dom";
import {ProductRoutesEnum} from "../../modules/product/routes";
import {setAuthorizationToken} from "../functions/connection/auth";
import {AuthType} from "../../modules/login/types/AuthType";
const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setNotification, setUser } = useGlobalContext();
  const getRequest = async (url: string) => {
    setLoading(true);
    return await axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        setNotification("Senha inválida", "error");
      });
  };
  const postRequest = async <T>(url: string, body: unknown): Promise<T | undefined> => {
    setLoading(true);
    const returnData = await connectionAPIPost<T>(url, body)
      .then((result) => {
        setNotification(`Login realizado pelo usuário`, "success");
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, "error");
        return undefined;
      });
    setLoading(false);
    return returnData;
  };
  const authRequest = async (body: unknown): Promise<void> => {
    setLoading(true);
await connectionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setUser(result.user);
        setNotification(`Entrando`, "success");
        setAuthorizationToken(result.accessToken)
        navigate(ProductRoutesEnum.PRODUCT);
      })
      .catch(() => {
        setNotification(ERROR_INVALID_PASSWORD, 'error');
      });
    setLoading(false);
  };
  return {
    loading,
    getRequest,
    postRequest,
    authRequest,
  };
};

export default useRequests;
