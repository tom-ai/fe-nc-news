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

export function getArticleById(articleId) {
  return api.get(`/articles/${articleId}`).then((res) => {
    return res.data.article;
  });
}

export function updateArticleVoteCount(articleId) {
  return api.patch(`/articles/${articleId}`, { inc_votes: 1 }).then((res) => {
    console.log("back from api;", res.data.updatedArticle);
    return res.data.updatedArticle;
  });
}
