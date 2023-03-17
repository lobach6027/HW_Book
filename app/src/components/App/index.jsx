import { Route, Routes } from "react-router-dom";
import Header from "../Header";
import HomePage from "../../pages/HomePage/index";
import AuthorPage from "../../pages/AuthorPage/index";
import CompaniesPage from "../../pages/CompaniesPage/index";
import ArticlesPage from "../../pages/ArticlesPage/index";
import OrderTodayPage from "../../pages/OrderTodayPage/index";
import NotFoundPage from "../../pages/NotFoundPage";
import Footer from "../Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/order" element={<OrderTodayPage />} />
        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
