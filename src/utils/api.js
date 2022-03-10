import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-tomharris.herokuapp.com/api",
});

export function getTopics() {
  return api.get("/topics").then((res) => {
    return res.data.topics;
  });
}

export function getArticles(topicSlug) {
  if (!topicSlug) {
    return api.get(`/articles`).then((res) => {
      return res.data.articles;
    });
  }
  return api.get(`/articles/?topic=${topicSlug}`).then((res) => {
    return res.data.articles;
  });
}
