import { useState } from "react";
import axios from "axios";

const useRequests = () => {
  const [loading, setLoading] = useState(false);
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
        alert("Erro");
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
        alert(`Fez login ${result.data.accessToken}`);
        return result.data;
      })
      .catch(() => {
        alert("Usuário errado");
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
