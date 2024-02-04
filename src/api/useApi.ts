import React from "react";

export const useApi = (apiFunc) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const request = async (...args) => {
    setLoading(true);
    try {
      console.log("requets is", apiFunc, ...args);
      const result = await apiFunc(...args);

      console.log("request was", result?.config?.data);

      setData(result.data);
      return result;
    } catch (error: any) {
      // console.log("Error is", error);
      setError(error.message || "Unexpeted Error!!");
      return error.message;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    data,
    error,
    request,
  };
};
