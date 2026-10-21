
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomPage from "./pages/home/HomePage.jsx";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./components/layout/AppLayout.jsx";
import AboutUs from "./pages/about/AboutUs.jsx";
import Blog from "./pages/blog/Blog.jsx";
import BookInfo from "./components/info/BookInfo";
import WriterInfo from "./components/info/WriterInfo.jsx";
import {BookProvider} from "./context/BookContext.jsx";
import BlogPost from "./pages/blog/BlogPost.jsx";
import MyLibrary from "./pages/lib/MyLibrary.jsx";



 
function App() {


  return (
    <BookProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          <Route path="aboutus" element={<AboutUs />} />
          <Route path="my-library" element={<MyLibrary />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="app" />} />
            <Route path="app" element={<BookInfo />} />
            <Route path="writer" element={<WriterInfo />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </BookProvider>
  );
}

export default App;
