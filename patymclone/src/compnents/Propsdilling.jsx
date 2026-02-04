import { createContext, useEffect } from "react";
import FetchDatas from "../hooks/CustomHooks";

const ContextApi = createContext();

export const DataProvider = ({ children }) => {
  const { data, loading, error, fetchData } = FetchDatas();
  
  useEffect(() => {
    fetchData("https://dummyjson.com/products");
  }, []);

  console.log(data);

  return (
    <ContextApi.Provider value={{ data, loading, error }}>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        {children}
      </div>
    </ContextApi.Provider>
  );
};

export default ContextApi;
