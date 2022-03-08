import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topics from "./components/Topics";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="mw6-m mw7-ns center">
        <Header />
        <Topics />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/topics/:topic_id" element={<ArticleList />} />
          {
            //route for article/:article_id
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
