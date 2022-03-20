import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topics from "./components/Topics";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import ArticlePage from "./components/ArticlePage";
import { useState, useEffect } from "react";
import * as api from "./utils/api";


function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.getUsers().then((users) => {
      setUsers(users);
    });
  }, []);


  return (
    <BrowserRouter>
      <div className="mw6-m mw7-ns center">
        <Header />
        <Topics />
        <Routes>
          <Route path="/" element={<ArticleList />} />

          <Route path="/topics/:topic_id" element={<ArticleList />} />
          <Route
            path="/articles/:article_id"
            element={<ArticlePage users={users} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
