import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "./useGlobalContext";
import { connectionAPIPost } from "../functions/connection/connectionAPI";
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
  const postRequest = async (url: string, body: unknown) => {
    setLoading(true);
    const returnData = await connectionAPIPost(url, body)
      .then((result) => {
        setNotification(`Login realizado pelo usuário`, "success");
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, "error");
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
