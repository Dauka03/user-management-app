import React, { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

const initialState = {
  data: [],
  searchResults: [],
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "UPDATE_SEARCH_RESULTS":
      return { ...state, searchResults: action.payload };
    case "DELETE_USER":
      return {
        ...state,
        data: state.data.filter((user) => user.email !== action.payload.email),
      };

    case "UPDATE_PERMISSIONS":
      return {
        ...state,
        data: state.data.map((user) =>
          user.email === action.payload.email
            ? { ...user, permissions: action.payload.permissions }
            : user
        ),
      };

    case "ADD_USER":
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export { DataProvider, useData };
