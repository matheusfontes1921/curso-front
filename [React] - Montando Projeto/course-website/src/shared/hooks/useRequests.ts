import { useState } from "react";
import axios from "axios";
import {useGlobalContext} from "./useGlobalContext";

const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();
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
  const postRequest = async (url: string, body: any) => {
    setLoading(true);
    const returnData = await axios({
      method: "post",
      url: url,
      data: body,
    })
      .then((result) => {
        setNotification(`Login realizado pelo usuário`, "success");
        return result.data;
      })
      .catch(() => {
        setNotification("Senha inválida", "error");
      });
    setLoading(false);
    return returnData;
  };
  return {
    loading,
    getRequest,
    postRequest,
  };
};
export default useRequests;
