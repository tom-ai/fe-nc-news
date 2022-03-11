import axios from "axios";
import PostComment from "../components/PostComment";

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

export function getComments(articleId) {
  return api.get(`articles/${articleId}/comments`).then((res) => {
    return res.data.comments;
  });
}

export function getUsers() {
  return api.get("/users").then((res) => {
    return res.data.users;
  });
}

export function postComment(articleId, comment) {
  return api.post(`/articles/${articleId}/comments`, comment).then((res) => {
    return res.data.postedComment;
  });
}
