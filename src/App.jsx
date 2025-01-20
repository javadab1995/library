
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomPage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BookInfo from "./components/BookInfo";
import WriterInfo from "./components/WriterInfo";
import {BookProvider} from "./context/BookContext.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";


 
function App() {


  return (
      <BookProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomPage />} />
            <Route path="login" element={<Login />} />
            <Route path="blog" element={<Blog />}>
              <Route path="singleBlog" />
            </Route>
            <Route path="aboutus" element={<AboutUs />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="book" />} />
              <Route path="book" element={<BookInfo />} />
              <Route path="writer" element={<WriterInfo />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </BookProvider>
   
  );
}

export default App;
