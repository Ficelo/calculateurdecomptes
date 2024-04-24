import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [csvData, setCsvData, comptesData, setCompteData] = useState([]);

  const setCsvDataHandler = (data) => {
    setCsvData(data);
  };

  const setComptesDataHandler = (data) => {
    setCompteData(data);
  };

  return (
    <AppContext.Provider
      value={{
        csvData,
        setCsvData: setCsvDataHandler,
        comptesData,
        setCompteData: setComptesDataHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
