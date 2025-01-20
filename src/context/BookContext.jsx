import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  books:[],
  isLoding:false,
  selectedItem: null,
}

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoding: true,
      };
    case "books/loaded":
      return {
        ...state,
        isLoadig: false,
        books: action.paylod,
      };
    case "book/loaded":
      return {
        ...state,
        isLoadig: false,
        selectedItem: action.paylod,
      };
    case "rejected":
      return {
        initialState,
      };

    default:
      throw new Error("Unknown action type");
  }
}
const BookContext = createContext();
function BookProvider({ children }) {
      // const [books, setBooks] = useState([]);
      // const [isLoadig, setIsLoding] = useState(false);
  // const [selectedItem, setSelectedItem] = useState(null);
  
  const [{ books, isLoadig, selectedItem }, dispatch] = useReducer(reducer, initialState);

      useEffect(function () {
        async function fetchBooks() {
          dispatch({type : "loading"})
          try {
            const res = await fetch(`/api/books`);
            const data = await res.json();

            dispatch({type: "books/loaded" , paylod: data});
           
          } catch {
            console.log("data is not fetched");
          } 
        }
        fetchBooks();
      }, []);

      return (
        <BookContext.Provider
          value={{
            books,
            isLoadig,
            selectedItem,
            dispatch
          }}
        >
          {children}
        </BookContext.Provider>
      );
}

function useBooks() {
  const context = useContext(BookContext)
  return context
}


// eslint-disable-next-line react-refresh/only-export-components
export {BookProvider, useBooks}

