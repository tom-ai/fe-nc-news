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
