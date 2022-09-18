import React, { createContext, useContext, useState } from "react";

const dataTree = {
  fullname: "",
  email: "",
  subsidiary: "",
  department: "",
  location: "",
  program_title: "",
  start_date: null,
  end_date: null,
  objectives_defined: 0,
  facilitator_knwoledge: 0,
  encouraged_interaction: 0,
  organised_content: 0,
  objectives_met: 0,
  adequate_facility: 0,
  training_relevance: 0,
  areas_to_improve: "",
  program_overall_rating: 0,
  learning_application: "",
};


const errorTree = {
  fullname: false,
  email: false,
  subsidiary: false,
  department: false,
  location: false,
  program_title: false,
  start_date: false,
  end_date: false,
  objectives_defined: false,
  facilitator_knwoledge: false,
  encouraged_interaction: false,
  organised_content: false,
  objectives_met: false,
  adequate_facility: false,
  training_relevance: false,
  areas_to_improve: false,
  program_overall_rating: false,
  learning_application: false
};

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [partnerData, setPartnerData] = useState(dataTree);
  const [errors, setErrors] = useState(errorTree);
    const [page, setPage] = useState("")

  const value = { partnerData, setPartnerData, page, setPage, errors, setErrors};

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(appContext);
  return context;
};

export { AppContextProvider, useAppContext };
