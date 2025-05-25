/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  books: [],
  isLoading: false,
  selectedItem: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "books/loaded":
      return {
        ...state,
        isLoading: false,
        books: action.payload,
      };
    case "book/loaded":
      return {
        ...state,
        selectedItem: action.payload,
      };
    case "rejected":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

const BookContext = createContext();

export function BookProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchBooks() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch("../../data/book.json");
        const data = await res.json();
        dispatch({ type: "books/loaded", payload: data.books });
      } catch {
        dispatch({ type: "rejected" });
      }
    }
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBooks must be used within a BookProvider");
  }
  return context;
}


