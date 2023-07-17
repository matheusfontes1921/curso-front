import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "./useGlobalContext";
import ConnectionAPI, {connectionAPIPost, MethodType} from "../functions/connection/connectionAPI";
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
  const request = async <T>(url: string, method: MethodType, saveGlobal?: (object: T) => void, body?: unknown): Promise<T | undefined> => {
    setLoading(true);
    const returnObject: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((result) => {
          if (saveGlobal) {
              saveGlobal(result);
          }
        return result;
      })
      .catch((error: Error) => {
          setNotification(error.message, 'error');
        return undefined;
      });
    setLoading(false);
    return returnObject;
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
    request,
    postRequest,
    authRequest,
  };
};

export default useRequests;
