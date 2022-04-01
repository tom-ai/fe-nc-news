import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-tomharris.herokuapp.com/api",
});

export function getTopics() {
  return api.get("/topics").then((res) => {
    return res.data.topics;
  });
}

export function getArticles(currentTopic, sort, order) {
  // if sort = title
  // const order = asc
  return api
    .get(`/articles`, {
      params: {
        topic: currentTopic,
        sort_by: sort,
        order: order,
      },
    })
    .then((res) => {
      return res.data.articles;
    });
}

export function getArticleById(articleId) {
  return api.get(`/articles/${articleId}`).then((res) => {
    return res.data.article;
  });
}

export function updateArticleVoteCount(articleId, incAmount) {
  return api
    .patch(`/articles/${articleId}`, { inc_votes: incAmount })
    .then((res) => {
      return res.data.updatedArticle;
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

export function deleteComment(commentId) {
  return api.delete(`/comments/${commentId}`).then((res) => {
    return res.status;
  });
}
