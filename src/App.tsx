import { Navigate, Route, Routes } from "react-router-dom";
import { Article } from "./components/Article";
import { MainPage } from "./components/MainPage";
import { PageNotFound } from "./components/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path=":id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
